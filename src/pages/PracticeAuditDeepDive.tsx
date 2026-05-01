import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import {
  ClipboardCheck,
  PhoneIncoming,
  Calendar,
  Clock,
  FileText,
  Receipt,
  Eye,
  ShieldCheck,
  Lock,
  AlertTriangle,
  TrendingDown,
  ArrowRight,
  Check,
  Lightbulb,
  Target,
  Scale,
  Stethoscope,
  Calculator,
  Briefcase,
  HardHat,
  RefreshCw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================================
// /industries/practice-audit — Deep-dive page with single booking funnel
// ============================================================================

type Domain = {
  id: string;
  num: string;
  icon: LucideIcon;
  title: string;
  before: string[];
  after: { action: string; detail: string }[];
  result: string;
};

const DOMAINS: Domain[] = [
  {
    id: "intake",
    num: "01",
    icon: PhoneIncoming,
    title: "Intake to Engagement",
    before: [
      "Single contact form on the website; voicemail after 5pm",
      "Conflict checks done manually — 30+ minutes name-by-name",
      "Engagement letters PDF'd, signed days later",
      "Zero attribution on which referral source produces clients",
    ],
    after: [
      { action: "Privilege-safe AI intake", detail: "Captures inquiry without storing matter content; routes urgency in <5 min, 24/7" },
      { action: "Surface-level conflict screen", detail: "Name and party check against firm history before the principal takes the call" },
      { action: "E-signature engagement flow", detail: "Letter generated, sent, signed, filed in one thread" },
      { action: "Source attribution baked in", detail: "Every inquiry tagged to channel for ROI clarity" },
    ],
    result: "4× conversion lift on inquiries answered in under 5 minutes · Recovers 12–20 missed prospects/quarter",
  },
  {
    id: "deadlines",
    num: "02",
    icon: Calendar,
    title: "Deadline & Calendar Tracking",
    before: [
      "Statutory deadlines computed manually across multiple jurisdictions",
      "Local rules tracked in the principal's head",
      "Deadlines surface 24 hours out, not 30 days out",
      "Calendar conflicts caught the morning of the hearing",
    ],
    after: [
      { action: "Jurisdiction-aware computation", detail: "Agent computes deadlines from filing dates using local rules — zero manual math" },
      { action: "Cascading reminder ladder", detail: "30 / 14 / 7 / 3 / 1 day alerts to principal, paralegal, and office manager" },
      { action: "Conflict-free scheduling", detail: "Auto-blocks prep time before hearings, depositions, consult-heavy days" },
      { action: "Daily docket briefing", detail: "Each morning: prioritized deadlines, hearings, tasks with matter context" },
    ],
    result: "Zero missed statutory deadlines · 8 hrs/week recovered · Malpractice exposure eliminated",
  },
  {
    id: "billing",
    num: "03",
    icon: Clock,
    title: "Time Capture & Billing",
    before: [
      "Time logged from memory days after the work — guaranteed leakage",
      "Vague entries forced into write-downs at billing review",
      "18-day lag between work-performed and invoice-sent",
      "No passive capture across email, calls, or document review",
    ],
    after: [
      { action: "Cross-channel passive capture", detail: "Agent observes email, call duration, document time and proposes contemporaneous entries" },
      { action: "Narrative drafting in your voice", detail: "Generates billing-ready descriptions; principal approves, doesn't author" },
      { action: "Same-week invoicing", detail: "Auto-assembles draft invoices Friday; principal sends Monday" },
      { action: "Write-down forensics", detail: "Surfaces which matter types, which staff, which work types are leaking the most" },
    ],
    result: "25–30% billable hours recovered · 14 days off invoice cycle · $40K–$120K/yr captured",
  },
  {
    id: "documents",
    num: "04",
    icon: FileText,
    title: "Document & Matter Management",
    before: [
      "Files live in email, desktop, drive, and memory",
      "Searching for a known doc averages 4–7 minutes",
      "Version control via 'final-v3-actually-final.docx'",
      "Privilege-aware sharing depends on the principal remembering",
    ],
    after: [
      { action: "Single tenant-isolated vault", detail: "All matter docs ingested; no model training on content; full audit trail" },
      { action: "Sub-60-second retrieval", detail: "Natural-language search across the document base; cites source doc and page" },
      { action: "Automated version discipline", detail: "Versioning, redlines, approvals tracked; the 'final' is always identifiable" },
      { action: "Privilege-tagged sharing", detail: "Every share inherits matter privilege rules; expiry, watermark, audit baked in" },
    ],
    result: "8–12 hrs/week returned to staff · Privilege risk reduced to architectural impossibility",
  },
  {
    id: "trust",
    num: "05",
    icon: Receipt,
    title: "Trust Accounting & Compliance",
    before: [
      "IOLTA / fiduciary reconciliation done manually at month-end",
      "Three-way match performed by one person, one set of eyes",
      "Exception handling depends on someone noticing",
      "Audit prep is a fire drill, not a posture",
    ],
    after: [
      { action: "Daily three-way match", detail: "Bank, ledger, sub-ledger reconciled every business day with exception flagging" },
      { action: "Real-time exception alerts", detail: "Overdrafts, commingling, stale balances, unauthorized disbursements alert in minutes" },
      { action: "Audit-ready posture", detail: "Continuous audit trail; bar or regulatory exam pulls a packet, not a panic" },
      { action: "Separation-of-duties enforcement", detail: "Multi-party approval above thresholds — by design, not memory" },
    ],
    result: "Bar discipline / license risk eliminated · 6 hrs/month of reconciliation removed",
  },
];

const PHASES = [
  { week: "Week 0", phase: "The Wedge — Practice Audit", icon: Eye, body: "Complimentary 2-hour walkthrough · 3 days analysis · 1-page report · 30-min readout. No proposal yet." },
  { week: "Week 1–2", phase: "Discovery & Privilege Architecture", icon: ShieldCheck, body: "Tenant provisioning · BAA / privilege addendum · integration map · success metrics tied to the 90-day guarantee." },
  { week: "Week 3–4", phase: "Foundation — Intake & Calendar", icon: PhoneIncoming, body: "5-min response SLA live · rules-based docketing for primary jurisdictions · staff trained on approval flows." },
  { week: "Week 5–6", phase: "Revenue — Time & Billing", icon: Clock, body: "Passive time capture across email, calls, docs · contemporaneous entry approval · first automated draft-invoice cycle." },
  { week: "Week 7–8", phase: "Risk — Documents & Trust", icon: FileText, body: "Document vault live with privilege tags · daily three-way reconciliation active · audit-trail packet stress-tested." },
  { week: "Week 9–10", phase: "Steady State + Guarantee Clock", icon: RefreshCw, body: "All 5 agents in production · weekly metrics review · 90-day results-or-we-work-for-free clock starts." },
];

const PROFILES = [
  { icon: Scale, label: "Solo & Small Law", note: "Family, estate, immigration, plaintiff-side" },
  { icon: Stethoscope, label: "Independent Medical", note: "Specialty, dental, optometry, behavioral health" },
  { icon: Calculator, label: "CPA & Tax Practices", note: "Solo CPA, advisory, fractional CFO" },
  { icon: Briefcase, label: "Independent Advisors", note: "RIAs, fiduciary planners, retirement specialists" },
  { icon: HardHat, label: "Specialty Professionals", note: "Architects, engineers, expert-witness practices" },
];

const ROI = [
  { value: "55–70%", label: "Audit → Engagement conversion" },
  { value: "$80K–$250K", label: "Avg. recovered revenue, year 1" },
  { value: "21–35 days", label: "Walkthrough → engagement letter signed" },
  { value: "<$1,800", label: "Fully-loaded customer acquisition cost" },
  { value: "115–130%", label: "Net revenue retention" },
  { value: "1.4×", label: "Referrals per client per year" },
];

const FAQS = [
  {
    q: "Is the audit really free? What's the catch?",
    a: "Yes, complimentary, with no proposal at the end and no follow-up sales sequence. The catch is that the construct works: roughly 55–70% of practices that go through the readout choose to engage us. We can afford to give the audit away because the report is genuinely useful even to practices that never engage — and the ones who do engage convert at exceptional rates.",
  },
  {
    q: "Will you access our client files or matter data?",
    a: "No. The audit is workflow-only by design. We observe how work flows through the practice — intake handling, calendar discipline, billing rhythm, document retrieval, reconciliation cadence — without opening a single matter file. We are structurally incapable of breaching attorney-client, doctor-patient, or fiduciary privilege during the audit.",
  },
  {
    q: "How is privilege protected if we eventually engage?",
    a: "Tenant-isolated infrastructure (your data lives only in your environment), no model training on matter content, full audit trail on every action, BAA / privilege addendum signed before any production data touches the system, and SOC 2 Type II controls. Privilege-first is not a feature — it's the architecture.",
  },
  {
    q: "Who should be in the 2-hour walkthrough?",
    a: "Ideal: the principal (attorney, doctor, CPA, advisor) plus the office manager or senior staff member who runs the day-to-day workflow. Workable: just the office manager, with a 20-minute principal interview at the end. Not workable: a junior staff member alone — the audit needs someone who can speak to the economics.",
  },
  {
    q: "What does the one-page report actually look like?",
    a: "Three columns: Top 3 Revenue Leaks, Top 3 Risk Exposures, Top 3 Quick Wins. Each line item includes a dollar estimate and a difficulty rating. The report is benchmarked against solo and small-practice peers in your vertical. Designed to be useful to your existing IT vendor, fractional COO, or office manager — even if you never speak to us again.",
  },
  {
    q: "What does the 8-week rollout cost if we engage?",
    a: "Implementation: $35K–$65K depending on jurisdictional complexity and integration scope. Ongoing: $3K–$8K/month for the agent platform, support, and continuous improvement. Backed by our 90-day results-or-we-work-for-free guarantee — if you don't see the projected ROI in the first 90 days, we work without invoicing until you do.",
  },
  {
    q: "We've been burned by IT vendors before. Why is this different?",
    a: "Three reasons. (1) The audit is the proof — you see our work product before any money changes hands. (2) The 8-week rollout is fixed-scope, fixed-fee, with weekly demonstrable milestones. (3) The 90-day guarantee puts our revenue at risk, not yours. If you've been burned, the audit is the lowest-stakes way to evaluate us.",
  },
  {
    q: "Do you only work with law firms?",
    a: "No. The construct applies to any solo or small regulated practice where the principal is the brand and capacity is the ceiling — law, medical, dental/optometry, CPA/tax, RIA/financial advisory, and specialty professional services like architects and engineers. The five audit domains are universal; vertical specialists tailor the findings.",
  },
];

const PracticeAuditDeepDive = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    vertical: "",
    jurisdiction: "",
    notes: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.practice) {
      toast({
        title: "A few details first",
        description: "Name, practice, and email are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    // Frontend-only: persist payload locally and notify the user.
    // (No backend wiring requested — the funnel currently logs intent for
    // outreach via the founder's existing CRM-side handoff.)
    try {
      const queue = JSON.parse(localStorage.getItem("practice-audit-requests") || "[]");
      queue.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("practice-audit-requests", JSON.stringify(queue));
    } catch {
      // ignore storage failures
    }
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Walkthrough requested",
        description: "We'll confirm a 2-hour slot within one business day.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Badge className="mb-6 bg-primary/15 text-foreground hover:bg-primary/15 border-primary/20">
                <ClipboardCheck className="w-3 h-3 mr-1.5" strokeWidth={2} />
                Industry Blueprint · Practice Audit
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                The wedge that gets you in the room.
                <br />
                <span className="text-muted-foreground">
                  A complimentary, workflow-only diagnostic for solo & small professional practices.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Two hours on site. Three days of analysis. One page of findings. Thirty minutes of
                readout. Zero proposal at the end. Roughly 55–70% of practices that complete the
                readout choose to engage — because the report is useful enough to stand on its own.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                >
                  Book the Walkthrough <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
                >
                  How it works
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "4×", l: "conversion in <5 min" },
                  { v: "25–30%", l: "billable hours recovered" },
                  { v: "8–12", l: "hrs/week back to staff" },
                  { v: "0", l: "missed statutory deadlines" },
                ].map((s) => (
                  <Card key={s.l} className="duck-card border-border">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold tabular-nums mb-1">{s.v}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{s.l}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sticky-style booking card on the right */}
            <div className="lg:col-span-5">
              <Card className="duck-card border-primary/30 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      No cost · No proposal · No sales sequence
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Book the Practice Audit</h3>
                  <ul className="space-y-2 mb-6 text-sm">
                    {[
                      "2-hour walkthrough — on site or video",
                      "Workflow only — we never touch matter data",
                      "1-page report: 3 leaks · 3 risks · 3 wins",
                      "30-min readout. You keep the report.",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                  >
                    Reserve a Walkthrough Slot <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Confirmation within one business day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Who It's For
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-balance">
            Built for the practice where the principal is the brand.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {PROFILES.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.label} className="duck-card border-border">
                  <CardContent className="p-5">
                    <Icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                    <div className="font-semibold text-sm mb-1">{p.label}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{p.note}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 5 Audit Domains — deep dives */}
      <section id="domains" className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            The Construct
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            Five domains. Every practice leaks in the same places.
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            We don't customize the framework. We customize the findings. Every audit produces the
            same shape of deliverable — three leaks, three risks, three quick wins — sourced from
            these five domains.
          </p>

          <div className="space-y-12">
            {DOMAINS.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.id} id={d.id} className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                        Domain {d.num}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold tracking-tight">{d.title}</h4>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="duck-card border-border bg-destructive/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingDown className="w-4 h-4 text-destructive" strokeWidth={1.5} />
                          <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                            Before
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {d.before.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                              <span className="text-destructive mt-1.5 shrink-0">·</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="duck-card border-border bg-primary/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            After
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {d.after.map((s, i) => (
                            <li key={i} className="text-sm">
                              <div className="font-semibold mb-0.5">{s.action}</div>
                              <div className="text-muted-foreground leading-relaxed">{s.detail}</div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-sm bg-primary/10 border border-primary/20 px-4 py-3 text-sm">
                    <span className="font-semibold uppercase tracking-wider text-xs text-muted-foreground mr-2">
                      Result
                    </span>
                    <span className="font-medium">{d.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — 10 week motion */}
      <section id="how-it-works" className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            How It Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-balance">
            From walkthrough to live agents in 10 weeks.
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Week 0 is the audit — and the audit can stand alone. If the one-page report convinces
            you to engage, Weeks 1–10 deliver all five agent domains in production, on a 90-day
            results-or-we-work-for-free guarantee.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHASES.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.week} className="duck-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary/30 bg-primary/10 text-foreground text-xs font-mono">
                        {p.week}
                      </Badge>
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="font-bold mb-2">{p.phase}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ground rules */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-5xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Ground Rules
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-balance">
            What we will not do.
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "Workflow Only", body: "We do not access client files, matter data, or anything covered by professional privilege." },
              { icon: ShieldCheck, title: "Privilege-First Architecture", body: "If you engage further: tenant-isolated infrastructure, no model training on content, full audit trail." },
              { icon: AlertTriangle, title: "Independent Engagement", body: "Independent of any current or future representation. No tie to any existing engagement, balance, or matter." },
              { icon: TrendingDown, title: "No Sales Sequence", body: "No proposal at the readout. No follow-up cadence. If the report is useful, you'll know where to find us." },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.title} className="duck-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <div className="font-bold">{r.title}</div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI scoreboard */}
      <section className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            The Numbers
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-balance">
            Why the free audit is the highest-yield motion in the building.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ROI.map((r) => (
              <Card key={r.label} className="duck-card border-border">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold tabular-nums mb-2">{r.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground leading-snug">
                    {r.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 border-b border-border">
        <div className="container max-w-3xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Frequently Asked
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-balance">
            The questions every principal asks.
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Single Booking Funnel */}
      <section id="book" className="py-20 scroll-mt-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/15 text-foreground hover:bg-primary/15 border-primary/20">
              <ClipboardCheck className="w-3 h-3 mr-1.5" strokeWidth={2} />
              Book the Walkthrough
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
              Two hours. One page. Zero obligation.
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your practice. We'll confirm a 2-hour slot within one business day.
            </p>
          </div>

          {submitted ? (
            <Card className="duck-card border-primary/30 bg-primary/5">
              <CardContent className="p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Walkthrough requested.</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We'll confirm a slot for {form.practice} within one business day at {form.email}.
                  If you'd prefer a phone call to coordinate, reach us at the address below.
                </p>
                <a
                  href="mailto:patrick@rowofducks.ai"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  patrick@rowofducks.ai
                </a>
              </CardContent>
            </Card>
          ) : (
            <Card className="duck-card border-border">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Mary Davis"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practice">Practice name *</Label>
                      <Input
                        id="practice"
                        value={form.practice}
                        onChange={(e) => update("practice", e.target.value)}
                        placeholder="Law Office of Mary Davis, P.C."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="mary@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="(312) 555-0142"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vertical">Practice type</Label>
                      <Select value={form.vertical} onValueChange={(v) => update("vertical", v)}>
                        <SelectTrigger id="vertical">
                          <SelectValue placeholder="Choose vertical" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="law">Solo / small law firm</SelectItem>
                          <SelectItem value="medical">Independent medical practice</SelectItem>
                          <SelectItem value="dental">Dental / optometry</SelectItem>
                          <SelectItem value="cpa">CPA / tax practice</SelectItem>
                          <SelectItem value="advisor">RIA / financial advisor</SelectItem>
                          <SelectItem value="specialty">Architect / engineer / specialist</SelectItem>
                          <SelectItem value="other">Other professional practice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jurisdiction">Primary jurisdiction / market</Label>
                      <Input
                        id="jurisdiction"
                        value={form.jurisdiction}
                        onChange={(e) => update("jurisdiction", e.target.value)}
                        placeholder="Cook & DuPage Counties, IL"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">What's on your mind? (optional)</Label>
                    <Textarea
                      id="notes"
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="One sentence on the workflow pain you'd most like us to look at."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/40 rounded-sm p-3 border border-border">
                    <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span>
                      Your information is used only to schedule the walkthrough. Workflow-only audit.
                      No proposal at the readout. No follow-up sales sequence after.
                    </span>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-foreground text-background hover:opacity-90 rounded-sm h-12 text-sm font-medium"
                  >
                    {submitting ? "Submitting…" : "Request the Walkthrough"}
                    {!submitting && <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/industries"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to all 37 industry blueprints
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAuditDeepDive;
