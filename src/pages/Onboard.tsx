import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Home,
  Smile,
  Hammer,
  Wrench,
  Scissors,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Phone,
  Calendar,
  Plug,
} from "lucide-react";

type Industry = {
  id: "real_estate" | "dental" | "roofing" | "auto_repair" | "salon_spa";
  name: string;
  icon: typeof Home;
  blurb: string;
  defaultTier: number;
};

const INDUSTRIES: Industry[] = [
  { id: "real_estate", name: "Real Estate", icon: Home, blurb: "Sub-60s lead response → more closings", defaultTier: 4000 },
  { id: "dental", name: "Dental / Optometry", icon: Smile, blurb: "No-show prevention + recall + reactivation", defaultTier: 5000 },
  { id: "roofing", name: "Roofing", icon: Hammer, blurb: "24/7 storm response + insurance follow-up", defaultTier: 5000 },
  { id: "auto_repair", name: "Auto Repair", icon: Wrench, blurb: "Bay utilization + declined service recovery", defaultTier: 2750 },
  { id: "salon_spa", name: "Salon / Spa", icon: Scissors, blurb: "Auto-rebook + waitlist + winback", defaultTier: 1000 },
];

const STEPS = ["Industry", "Business", "Channels", "Done"] as const;

const Onboard = () => {
  const navigate = useNavigate();
  const { user, refreshTenant } = useAuth();
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [timezone, setTimezone] = useState("America/New_York");
  const [submitting, setSubmitting] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const createTenant = async () => {
    if (!user || !industry) return;
    setSubmitting(true);
    try {
      const { data: tenantRow, error: tErr } = await supabase
        .from("tenants")
        .insert({
          name: businessName,
          industry: industry.id,
          business_phone: businessPhone || null,
          business_email: user.email,
          timezone,
          monthly_price_cents: industry.defaultTier * 100,
        })
        .select()
        .single();

      if (tErr) throw tErr;

      const { error: mErr } = await supabase.from("tenant_members").insert({
        tenant_id: tenantRow.id,
        user_id: user.id,
        role: "owner",
      });

      if (mErr) throw mErr;

      await refreshTenant();
      next();
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err: any) {
      toast.error(err.message || "Could not create workspace");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-sunken">
      <header className="border-b border-border bg-background">
        <div className="container h-14 flex items-center">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
            Row of Ducks
          </span>
        </div>
      </header>

      <div className="container max-w-2xl py-12">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`}
              />
              <span
                className={`text-xs font-medium whitespace-nowrap ${
                  i <= step ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <Card className="duck-card">
          <CardContent className="p-8">
            {/* Step 0: Industry */}
            {step === 0 && (
              <>
                <h1 className="text-2xl font-semibold text-foreground mb-1">
                  What kind of business are you?
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  We'll load the right agent template, KPIs, and integrations.
                </p>
                <div className="space-y-2 mb-6">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setIndustry(ind)}
                      className={`w-full text-left rounded-sm border p-4 flex items-center gap-4 transition-colors ${
                        industry?.id === ind.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/40 hover:bg-muted/30"
                      }`}
                    >
                      <div className="rounded-sm bg-primary/10 p-2 text-primary">
                        <ind.icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">{ind.name}</p>
                        <p className="text-xs text-muted-foreground">{ind.blurb}</p>
                      </div>
                      <Badge variant="outline" className="rounded-sm text-xs">
                        ${(ind.defaultTier / 1000).toFixed(2)}K/mo
                      </Badge>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button onClick={next} disabled={!industry} className="rounded-sm">
                    Continue <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </>
            )}

            {/* Step 1: Business info */}
            {step === 1 && (
              <>
                <h1 className="text-2xl font-semibold text-foreground mb-1">
                  Tell us about your business
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  We'll personalize every message and report with this.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <Label>Business name</Label>
                    <Input
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Acme Realty Group"
                      className="rounded-sm mt-1.5"
                    />
                  </div>
                  <div>
                    <Label>Main phone (for outbound SMS)</Label>
                    <Input
                      type="tel"
                      value={businessPhone}
                      onChange={(e) => setBusinessPhone(e.target.value)}
                      placeholder="+1 555 555 0100"
                      className="rounded-sm mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll provision a sending number in Step 3 if you don't have one.
                    </p>
                  </div>
                  <div>
                    <Label>Timezone</Label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full mt-1.5 rounded-sm border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="America/New_York">Eastern (New York)</option>
                      <option value="America/Chicago">Central (Chicago)</option>
                      <option value="America/Denver">Mountain (Denver)</option>
                      <option value="America/Los_Angeles">Pacific (Los Angeles)</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prev} className="rounded-sm">
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                  </Button>
                  <Button onClick={next} disabled={!businessName} className="rounded-sm">
                    Continue <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </>
            )}

            {/* Step 2: Channels (preview, real OAuth comes Day 3-4) */}
            {step === 2 && (
              <>
                <h1 className="text-2xl font-semibold text-foreground mb-1">
                  Channels we'll wire up
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  These get connected after your workspace is provisioned. We'll guide you
                  step-by-step.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    { icon: Phone, name: "SMS & Voice (Twilio)", note: "Sub-60-second lead response" },
                    { icon: Calendar, name: "Calendar (Google / Outlook)", note: "Auto-booking + reminders" },
                    { icon: Plug, name: "Your CRM / PMS", note: "Bidirectional sync — see Integrations" },
                    { icon: Building2, name: "Web form / Zillow / Realtor.com", note: "All inbound leads in one place" },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="rounded-sm border border-border bg-muted/20 p-3 flex items-center gap-3"
                    >
                      <div className="rounded-sm bg-primary/10 p-1.5 text-primary">
                        <c.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.note}</p>
                      </div>
                      <Badge variant="outline" className="rounded-sm text-xs">
                        Day 1–4
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prev} className="rounded-sm">
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                  </Button>
                  <Button onClick={createTenant} disabled={submitting} className="rounded-sm">
                    {submitting ? "Creating workspace…" : "Create my workspace"}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </>
            )}

            {/* Step 3: Done */}
            {step === 3 && (
              <div className="text-center py-8">
                <div className="inline-flex rounded-full bg-success/10 p-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-success" strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl font-semibold text-foreground mb-2">
                  Workspace ready
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  Your 14-day trial just started. Taking you to the dashboard…
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboard;
