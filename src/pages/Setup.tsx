import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Calendar,
  Plug,
  ArrowLeft,
  CheckCircle2,
  Globe,
  MessageSquare,
} from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    title: "Connect phone & SMS",
    desc: "Provision a Twilio sending number for sub-60-second lead response.",
    cta: "Connect Twilio",
    badge: "Required",
  },
  {
    icon: Calendar,
    title: "Connect calendar",
    desc: "Google or Outlook so the agent can auto-book appointments.",
    cta: "Connect Google",
    badge: "Required",
  },
  {
    icon: Plug,
    title: "Connect CRM / PMS",
    desc: "Bidirectional sync with your existing system of record.",
    cta: "Browse integrations",
    badge: "Recommended",
  },
  {
    icon: Globe,
    title: "Add lead sources",
    desc: "Web form, Zillow, Realtor.com, Google LSA — pipe everything into one inbox.",
    cta: "Add source",
    badge: "Recommended",
  },
  {
    icon: MessageSquare,
    title: "Review agent script",
    desc: "Approve the first message your AI sends new leads.",
    cta: "Review script",
    badge: "Optional",
  },
];

const Setup = () => {
  const navigate = useNavigate();
  const { tenant } = useAuth();

  if (!tenant) return null;

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
            Go-live checklist
          </Badge>
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Finish setup to go live
          </h1>
          <p className="text-sm text-muted-foreground">
            Complete these steps to start capturing and responding to leads automatically.
            Most teams finish in under 20 minutes.
          </p>
        </div>

        <div className="space-y-3">
          {STEPS.map((s) => (
            <Card key={s.title} className="duck-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="rounded-sm bg-primary/10 p-2 text-primary shrink-0">
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-foreground">{s.title}</p>
                    <Badge variant="outline" className="rounded-sm text-xs">
                      {s.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
                  <Button size="sm" variant="outline" className="rounded-sm h-7 text-xs" disabled>
                    {s.cta} · Coming Day 2
                  </Button>
                </div>
                <CheckCircle2 className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-1" strokeWidth={1.5} />
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="duck-card mt-6 bg-primary/5 border-primary/20">
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-foreground mb-1">
              Want us to do it for you?
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              White-glove setup is included with every plan. Book a 30-minute call and we'll
              wire everything up while you watch.
            </p>
            <Button size="sm" className="rounded-sm h-7 text-xs">
              Book setup call
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Setup;
