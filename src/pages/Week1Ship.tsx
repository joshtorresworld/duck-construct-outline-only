import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  Mail,
  Database,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Clock,
} from "lucide-react";

type Day = {
  day: string;
  title: string;
  icon: typeof Rocket;
  deliverables: string[];
  customerSees: string;
};

const DAYS: Day[] = [
  {
    day: "Day 1",
    title: "Kickoff & Access",
    icon: Rocket,
    deliverables: [
      "60-min kickoff call — confirm goals, KPIs, success criteria",
      "Receive credentials: CRM, calendar, phone/SMS, email",
      "Provision Lovable Cloud workspace + secure secrets vault",
      "Set up Slack/Teams channel for daily updates",
    ],
    customerSees: "A dedicated channel, a shared dashboard URL, and a 90-day plan tied to revenue.",
  },
  {
    day: "Day 2",
    title: "Lead Intake Wired",
    icon: MessageSquare,
    deliverables: [
      "Connect inbound channels: web form, Zillow/Realtor.com/Facebook lead ads, phone-to-text, email parser",
      "Deploy Lead Capture Edge Function — every lead lands in one Postgres table",
      "Test with 5 live leads — confirm <10 second capture latency",
      "Source attribution tagged on every record",
    ],
    customerSees: "Every new lead — from any source — appears in one place in real time.",
  },
  {
    day: "Day 3",
    title: "Sub-60-Second Response Live",
    icon: Zap,
    deliverables: [
      "Lovable AI Gateway connected (GPT-5 / Gemini 2.5 — no API key setup required)",
      "Personalized SMS + email auto-responder live (Twilio + Resend)",
      "AI qualification questions deployed (timeline, budget, readiness)",
      "Lead scored and routed to correct rep within 60 seconds",
    ],
    customerSees: "First lead receives a personal text in under a minute. Rep gets a Slack ping with the score.",
  },
  {
    day: "Day 4",
    title: "Calendar & Booking",
    icon: Calendar,
    deliverables: [
      "Google Calendar / Outlook bidirectional sync",
      "Booking widget embedded on customer site (or sent as link in SMS)",
      "Confirmation + reminder sequence (24hr, 2hr, 15min)",
      "Service-duration logic baked in (e.g. dental cleaning vs crown, salon cut vs color)",
    ],
    customerSees: "Customers self-book. No phone tag. Calendar fills automatically.",
  },
  {
    day: "Day 5",
    title: "Reminders, Recall & Reactivation",
    icon: Phone,
    deliverables: [
      "No-show prevention sequence live (industry-tuned messaging)",
      "Recall agent identifies overdue customers from historical data import",
      "Reactivation campaign queued for 60/90/365-day inactive list",
      "Waitlist auto-fill triggered on cancellations",
    ],
    customerSees: "First batch of recall messages goes out — appointments start booking the same day.",
  },
  {
    day: "Day 6",
    title: "Dashboard & Reporting",
    icon: BarChart3,
    deliverables: [
      "Live ROI dashboard: leads in, response time, bookings, no-shows, recovered revenue",
      "Daily email digest to owner (8am)",
      "Weekly executive PDF auto-generated every Monday",
      "Per-rep performance view (if multi-user)",
    ],
    customerSees: "One screen showing exactly how much revenue the system has generated this week.",
  },
  {
    day: "Day 7",
    title: "Hand-Off & Optimization",
    icon: Shield,
    deliverables: [
      "30-min training call with front desk / sales team",
      "Written runbook + Loom videos for every workflow",
      "RLS policies + audit log verified (HIPAA / FTC Safeguards where applicable)",
      "Week 2–4 optimization plan delivered with named KPIs",
    ],
    customerSees: "A trained team, documented systems, and a clear 90-day revenue trajectory.",
  },
];

const STACK = [
  { layer: "Frontend", tech: "React + Vite + Tailwind", purpose: "Customer dashboard, booking widgets, internal tools" },
  { layer: "Backend", tech: "Lovable Cloud (Postgres + Edge Functions)", purpose: "Data, business logic, API integrations" },
  { layer: "AI", tech: "Lovable AI Gateway (GPT-5, Gemini 2.5)", purpose: "Lead qualification, message personalization, sentiment" },
  { layer: "Messaging", tech: "Twilio (SMS/voice) + Resend (email)", purpose: "Sub-60-sec outbound, reminders, sequences" },
  { layer: "Calendar", tech: "Google Calendar / Microsoft Graph", purpose: "Bidirectional booking sync" },
  { layer: "Security", tech: "Supabase RLS + audit logs + secrets vault", purpose: "HIPAA, FTC Safeguards, attorney-client privilege" },
  { layer: "Observability", tech: "Edge Function logs + dashboard alerts", purpose: "Uptime, latency, message delivery, errors" },
];

const Week1Ship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border bg-surface-sunken">
        <div className="container">
          <Badge variant="outline" className="mb-4 rounded-sm border-primary/30 bg-primary/5 text-foreground">
            <Rocket className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
            Sales Enablement: What Ships in Week 1
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 max-w-3xl">
            From signed contract to revenue in 7 days.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-6">
            Show prospects exactly what gets built, deployed, and trained in the first week — so the
            "30-day revenue" promise is grounded in a daily delivery plan, not a hopeful timeline.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-sm">
              <a href="/roi-calculator">
                Run ROI Calculator <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-sm">
              <a href="/integrations">Vendor Integration Matrix</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Day-by-day */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Day-by-day deployment</h2>
            <p className="text-sm text-muted-foreground">
              Every day has a named deliverable and a customer-visible outcome. No black boxes.
            </p>
          </div>

          <div className="space-y-4">
            {DAYS.map((d, i) => (
              <Card key={d.day} className="duck-card">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[140px_1fr] gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="rounded-sm p-1.5 bg-primary/10 text-primary">
                          <d.icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {d.day}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{d.title}</h3>
                    </div>
                    <div>
                      <ul className="space-y-2 mb-4">
                        {d.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-sm bg-primary/5 border border-primary/10 px-3 py-2">
                        <p className="text-xs text-foreground">
                          <span className="font-semibold text-primary">What the customer sees:</span>{" "}
                          {d.customerSees}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-surface-sunken border-y border-border">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-2">The stack we ship on</h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Every layer is production-grade, scales to millions of users, and is owned by the customer
              from day one. No proprietary lock-in.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-semibold text-foreground">Layer</th>
                  <th className="text-left p-4 font-semibold text-foreground">Technology</th>
                  <th className="text-left p-4 font-semibold text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {STACK.map((row, i) => (
                  <tr key={row.layer} className={i !== STACK.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4 font-medium text-foreground">{row.layer}</td>
                    <td className="p-4 text-muted-foreground">{row.tech}</td>
                    <td className="p-4 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="container">
          <Card className="duck-card bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="rounded-sm p-2 bg-primary/10 text-primary shrink-0">
                  <Shield className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    The 90-Day Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    If we don't deliver measurable revenue inside 90 days — based on the KPIs we agree
                    to in the Week 1 kickoff — we work for free until we do. Period.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="rounded-sm">Day 7: System live</Badge>
                    <Badge variant="outline" className="rounded-sm">Day 30: First revenue measured</Badge>
                    <Badge variant="outline" className="rounded-sm">Day 90: ROI proven or we work free</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Week1Ship;
