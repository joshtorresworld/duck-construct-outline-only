import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Calendar,
  Plug,
  ArrowLeft,
  CheckCircle2,
  Globe,
  MessageSquare,
  Circle,
  Loader2,
} from "lucide-react";

const SavingButton = ({ saving, children, ...props }: any) => (
  <Button {...props} disabled={props.disabled || saving}>
    {saving && <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />}
    {saving ? "Saving…" : children}
  </Button>
);

// Prevent closing the dialog while a save is in flight
const guardedClose = (saving: boolean, onOpenChange: (o: boolean) => void) => (o: boolean) => {
  if (saving && !o) return;
  onOpenChange(o);
};

type StepKey = "phone" | "calendar" | "crm" | "sources" | "script";

type Settings = {
  phone?: { number: string; provider: "twilio" };
  calendar?: { email: string; provider: "google" | "outlook" };
  crm?: { type: string; webhook_url?: string; api_key?: string };
  sources?: string[];
  script?: { greeting: string; booking_link?: string };
};

const SOURCE_OPTIONS = [
  "Web form",
  "Zillow",
  "Realtor.com",
  "Google LSA",
  "Facebook Lead Ads",
  "Yelp",
  "Phone calls",
];

const CRM_OPTIONS = [
  "Follow Up Boss",
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Zoho",
  "Other (webhook)",
];

const Setup = () => {
  const navigate = useNavigate();
  const { tenant, refreshTenant } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState<StepKey | null>(null);
  const [saving, setSaving] = useState(false);
  const [localSettings, setLocalSettings] = useState<Settings>({});
  const [liteOverride, setLiteOverride] = useState<boolean | null>(null);

  useEffect(() => {
    setLocalSettings((((tenant as any)?.settings as Settings | undefined) || {}));
    setLiteOverride(null);
  }, [tenant?.id, (tenant as any)?.settings]);

  if (!tenant) return null;

  const s: Settings = localSettings;

  const isDone = (k: StepKey) => {
    if (k === "phone") return !!s.phone?.number;
    if (k === "calendar") return !!s.calendar?.email;
    if (k === "crm") return !!s.crm?.type;
    if (k === "sources") return (s.sources?.length || 0) > 0;
    if (k === "script") return !!s.script?.greeting;
    return false;
  };

  const saveSettings = async (patch: Partial<Settings>) => {
    setSaving(true);
    const next = { ...s, ...patch };
    const { error } = await supabase
      .from("tenants")
      .update({ settings: next as any })
      .eq("id", tenant.id);
    setSaving(false);
    if (error) {
      toast({ title: "Couldn't save", description: error.message, variant: "destructive" });
      return false;
    }
    await refreshTenant();
    toast({ title: "Saved", description: "Setup updated." });
    setOpen(null);
    return true;
  };

  const liteMode = liteOverride !== null ? liteOverride : !!(s as any).lite_mode;
  const setLiteMode = async (on: boolean) => {
    // Optimistic UI — flip the switch immediately
    setLiteOverride(on);
    setSaving(true);
    const next = { ...s, lite_mode: on } as any;
    const { error } = await supabase.from("tenants").update({ settings: next }).eq("id", tenant.id);
    setSaving(false);
    if (error) {
      setLiteOverride(!on); // revert
      toast({ title: "Couldn't save", description: error.message, variant: "destructive" });
      return;
    }
    setLocalSettings(next);
    await refreshTenant();
    toast({ title: on ? "Lite Mode on" : "Lite Mode off", description: on ? "Skip integrations — go live with a hosted number." : "Full integration checklist restored." });
  };

  const FULL_STEPS: { key: StepKey; icon: typeof Phone; title: string; desc: string; cta: string; badge: string }[] = [
    { key: "phone", icon: Phone, title: "Connect phone & SMS", desc: "Add your business sending number for sub-60-second lead response.", cta: "Set phone number", badge: "Required" },
    { key: "calendar", icon: Calendar, title: "Connect calendar", desc: "Google or Outlook so the agent can auto-book appointments.", cta: "Connect calendar", badge: "Required" },
    { key: "crm", icon: Plug, title: "Connect CRM / PMS", desc: "Bidirectional sync with your existing system of record.", cta: "Choose CRM", badge: "Recommended" },
    { key: "sources", icon: Globe, title: "Add lead sources", desc: "Web form, Zillow, Realtor.com, Google LSA — pipe everything into one inbox.", cta: "Pick sources", badge: "Recommended" },
    { key: "script", icon: MessageSquare, title: "Review agent script", desc: "Approve the first message your AI sends new leads.", cta: "Edit script", badge: "Optional" },
  ];

  const LITE_STEPS: typeof FULL_STEPS = [
    { key: "phone", icon: Phone, title: "Get a hosted phone number", desc: "We provision a number on your behalf — no Twilio account needed. Just confirm area code preference.", cta: "Get my number", badge: "Step 1" },
    { key: "script", icon: MessageSquare, title: "Review AI script", desc: "Approve the first message your AI sends new leads. You're live the moment this is saved.", cta: "Review script", badge: "Step 2" },
  ];

  const STEPS = liteMode ? LITE_STEPS : FULL_STEPS;
  const completed = STEPS.filter((st) => isDone(st.key)).length;

  return (
    <div className="min-h-screen bg-surface-sunken">
      <header className="border-b border-border bg-background">
        <div className="container h-14 flex items-center justify-between">
          <Link to="/dashboard" className="text-sm font-semibold tracking-[0.2em] uppercase">
            Row of Ducks
          </Link>
          <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")} className="text-xs">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to dashboard
          </Button>
        </div>
      </header>

      <div className="container max-w-3xl py-10">
        <div className="mb-8">
          <Badge variant="outline" className="rounded-sm text-xs mb-3">
            Go-live checklist · {completed}/{STEPS.length} done
          </Badge>
          <h1 className="text-2xl font-semibold text-foreground mb-2">Finish setup to go live</h1>
          <p className="text-sm text-muted-foreground">
            Complete these steps to start capturing and responding to leads automatically. Most teams finish in under 20 minutes.
          </p>
        </div>

        <Card className="duck-card mb-4 border-primary/30 bg-primary/5">
          <CardContent className="p-4 flex items-start gap-3">
            <div className="rounded-sm bg-primary/15 p-2 text-primary shrink-0">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3 mb-1">
                <p className="text-sm font-semibold text-foreground">Lite Mode — go live in 2 steps</p>
                <Switch checked={liteMode} onCheckedChange={setLiteMode} disabled={saving} />
              </div>
              <p className="text-xs text-muted-foreground">
                No Twilio, CRM, or calendar accounts? Skip integrations. We'll provision a hosted phone number and run everything inside Row of Ducks. You can connect external tools later.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {STEPS.map((st) => {
            const done = isDone(st.key);
            return (
              <Card key={st.key} className="duck-card">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="rounded-sm bg-primary/10 p-2 text-primary shrink-0">
                    <st.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-foreground">{st.title}</p>
                      <Badge variant="outline" className="rounded-sm text-xs">{st.badge}</Badge>
                      {done && (
                        <Badge className="rounded-sm text-xs bg-success/15 text-success border-success/30 hover:bg-success/15">
                          Done
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{st.desc}</p>
                    <Button
                      size="sm"
                      variant={done ? "outline" : "default"}
                      className="rounded-sm h-7 text-xs"
                      onClick={() => setOpen(st.key)}
                    >
                      {done ? "Edit" : st.cta}
                    </Button>
                  </div>
                  {done ? (
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-1" strokeWidth={1.5} />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-1" strokeWidth={1.5} />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="duck-card mt-6 bg-primary/5 border-primary/20">
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-foreground mb-1">Want us to do it for you?</p>
            <p className="text-xs text-muted-foreground mb-3">
              White-glove setup is included with every plan. Book a 30-minute call and we'll wire everything up while you watch.
            </p>
            <Button size="sm" className="rounded-sm h-7 text-xs">Book setup call</Button>
          </CardContent>
        </Card>
      </div>

      {/* Phone dialog */}
      <PhoneDialog open={open === "phone"} onOpenChange={(o) => !o && setOpen(null)} initial={s.phone} onSave={(v) => saveSettings({ phone: v })} saving={saving} />
      <CalendarDialog open={open === "calendar"} onOpenChange={(o) => !o && setOpen(null)} initial={s.calendar} onSave={(v) => saveSettings({ calendar: v })} saving={saving} />
      <CrmDialog open={open === "crm"} onOpenChange={(o) => !o && setOpen(null)} initial={s.crm} onSave={(v) => saveSettings({ crm: v })} saving={saving} />
      <SourcesDialog open={open === "sources"} onOpenChange={(o) => !o && setOpen(null)} initial={s.sources} onSave={(v) => saveSettings({ sources: v })} saving={saving} />
      <ScriptDialog open={open === "script"} onOpenChange={(o) => !o && setOpen(null)} initial={s.script} tenantName={tenant.name} onSave={(v) => saveSettings({ script: v })} saving={saving} />
    </div>
  );
};

/* ---------- Dialogs ---------- */

const PhoneDialog = ({ open, onOpenChange, initial, onSave, saving }: any) => {
  const [number, setNumber] = useState(initial?.number || "");
  return (
    <Dialog open={open} onOpenChange={guardedClose(saving, onOpenChange)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect phone & SMS</DialogTitle>
          <DialogDescription>
            Enter the phone number your AI agent will use to text leads. We'll provision a Twilio number on your behalf when you go live.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <Label htmlFor="phone">Business sending number</Label>
          <Input id="phone" placeholder="+1 (555) 123-4567" value={number} onChange={(e) => setNumber(e.target.value)} />
          <p className="text-xs text-muted-foreground">E.164 format preferred (e.g. +15551234567).</p>
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={saving} onClick={() => onOpenChange(false)}>Cancel</Button>
          <SavingButton saving={saving} disabled={!number} onClick={() => onSave({ number, provider: "twilio" })}>Save</SavingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CalendarDialog = ({ open, onOpenChange, initial, onSave, saving }: any) => {
  const [email, setEmail] = useState(initial?.email || "");
  const [provider, setProvider] = useState<"google" | "outlook">(initial?.provider || "google");
  return (
    <Dialog open={open} onOpenChange={guardedClose(saving, onOpenChange)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect calendar</DialogTitle>
          <DialogDescription>
            Tell us which calendar to book appointments into. OAuth link will be sent to your inbox to complete the connection.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div>
            <Label>Provider</Label>
            <div className="flex gap-2 mt-2">
              {(["google", "outlook"] as const).map((p) => (
                <Button key={p} type="button" size="sm" variant={provider === p ? "default" : "outline"} className="rounded-sm" onClick={() => setProvider(p)}>
                  {p === "google" ? "Google Calendar" : "Outlook"}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="cal-email">Calendar email</Label>
            <Input id="cal-email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={saving} onClick={() => onOpenChange(false)}>Cancel</Button>
          <SavingButton saving={saving} disabled={!email} onClick={() => onSave({ email, provider })}>Save</SavingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CrmDialog = ({ open, onOpenChange, initial, onSave, saving }: any) => {
  const [type, setType] = useState(initial?.type || CRM_OPTIONS[0]);
  const [webhook, setWebhook] = useState(initial?.webhook_url || "");
  const [apiKey, setApiKey] = useState(initial?.api_key || "");
  return (
    <Dialog open={open} onOpenChange={guardedClose(saving, onOpenChange)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect CRM / PMS</DialogTitle>
          <DialogDescription>
            Pick your system of record. We'll sync leads, notes, and appointments bidirectionally.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div>
            <Label>System</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {CRM_OPTIONS.map((c) => (
                <Button key={c} type="button" size="sm" variant={type === c ? "default" : "outline"} className="rounded-sm" onClick={() => setType(c)}>
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="webhook">Webhook URL (optional)</Label>
            <Input id="webhook" placeholder="https://..." value={webhook} onChange={(e) => setWebhook(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="apikey">API key (optional)</Label>
            <Input id="apikey" type="password" placeholder="sk_..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
            <p className="text-xs text-muted-foreground mt-1">Stored encrypted. Leave blank if you'd like our team to wire it up for you.</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={saving} onClick={() => onOpenChange(false)}>Cancel</Button>
          <SavingButton saving={saving} disabled={!type} onClick={() => onSave({ type, webhook_url: webhook || undefined, api_key: apiKey || undefined })}>Save</SavingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const SourcesDialog = ({ open, onOpenChange, initial, onSave, saving }: any) => {
  const [selected, setSelected] = useState<string[]>(initial || []);
  const toggle = (src: string) =>
    setSelected((prev) => (prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]));
  return (
    <Dialog open={open} onOpenChange={guardedClose(saving, onOpenChange)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add lead sources</DialogTitle>
          <DialogDescription>Pick everywhere new leads come from. We'll route them all into one inbox.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-2">
          {SOURCE_OPTIONS.map((src) => (
            <label key={src} className="flex items-center gap-2 rounded-sm border border-border p-2 cursor-pointer hover:bg-accent">
              <Checkbox checked={selected.includes(src)} onCheckedChange={() => toggle(src)} />
              <span className="text-sm">{src}</span>
            </label>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={saving} onClick={() => onOpenChange(false)}>Cancel</Button>
          <SavingButton saving={saving} disabled={selected.length === 0} onClick={() => onSave(selected)}>Save</SavingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ScriptDialog = ({ open, onOpenChange, initial, tenantName, onSave, saving }: any) => {
  const defaultGreeting = `Hi {{lead_first_name}}, this is the team at ${tenantName}. Thanks for reaching out — I can get you on the calendar in the next 24 hours. What time works best?`;
  const [greeting, setGreeting] = useState(initial?.greeting || defaultGreeting);
  const [bookingLink, setBookingLink] = useState(initial?.booking_link || "");
  return (
    <Dialog open={open} onOpenChange={guardedClose(saving, onOpenChange)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Review agent script</DialogTitle>
          <DialogDescription>This is the first message your AI agent sends every new lead. Use {`{{lead_first_name}}`} for personalization.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div>
            <Label htmlFor="greeting">Opening message</Label>
            <Textarea id="greeting" rows={5} value={greeting} onChange={(e) => setGreeting(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="booking">Booking link (optional)</Label>
            <Input id="booking" placeholder="https://cal.com/your-team" value={bookingLink} onChange={(e) => setBookingLink(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={saving} onClick={() => onOpenChange(false)}>Cancel</Button>
          <SavingButton saving={saving} disabled={!greeting.trim()} onClick={() => onSave({ greeting, booking_link: bookingLink || undefined })}>Save</SavingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Setup;
