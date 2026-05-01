import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Scale,
  Stethoscope,
  Calculator,
  Briefcase,
  HardHat,
  ClipboardCheck,
  Eye,
  FileSearch,
  ShieldCheck,
  Clock,
  DollarSign,
  AlertTriangle,
  Lock,
  TrendingDown,
  Calendar,
  FileText,
  Receipt,
  PhoneIncoming,
  ArrowRight,
  Check,
  Copy,
  Mail,
  Lightbulb,
  Target,
  BookOpen,
} from "lucide-react";

// ============================================================================
// Duck Construct: Practice Audit
// A productized, no-cost, workflow-only audit for solo & small professional
// practices. Outline-only construct — no proposal, no follow-up sequence.
// Inaugural deployment: Law Office of Mary Davis, P.C. (family law, Cook & DuPage)
// ============================================================================

type AuditDomain = {
  id: string;
  icon: typeof Calendar;
  title: string;
  whatWeAudit: string;
  signalsWeLookFor: string[];
  typicalLeak: string;
};

const AUDIT_DOMAINS: AuditDomain[] = [
  {
    id: "intake",
    icon: PhoneIncoming,
    title: "Intake to Engagement",
    whatWeAudit:
      "Response time, conflict-check process, consult booking, engagement-letter flow.",
    signalsWeLookFor: [
      "Time between inquiry and first human touch (target: <5 min)",
      "After-hours inquiry handling — voicemail, form, or live response",
      "Conflict-check method and time-to-clear",
      "Engagement letter turnaround and e-signature adoption",
    ],
    typicalLeak: "4x lower conversion when professional inquiries wait >5 minutes",
  },
  {
    id: "deadlines",
    icon: Calendar,
    title: "Deadline & Calendar Tracking",
    whatWeAudit:
      "How statutory, court, regulatory, and client-imposed deadlines are computed and surfaced across jurisdictions.",
    signalsWeLookFor: [
      "Where deadlines live (calendar, case management, sticky notes, memory)",
      "Manual calculation vs. rules-based docketing",
      "Cascading reminder cadence and escalation path",
      "Cross-jurisdiction local-rule coverage",
    ],
    typicalLeak: "One missed statutory deadline can end a 25-year career",
  },
  {
    id: "time-billing",
    icon: Clock,
    title: "Time Capture & Billing",
    whatWeAudit:
      "Where billable hours are lost between work performed and invoice sent.",
    signalsWeLookFor: [
      "Contemporaneous vs. reconstructed time entries",
      "Average days from work-performed to invoice-sent",
      "Write-down rate and reasons (vague entries, late capture)",
      "Adoption of passive time capture across email, docs, calls",
    ],
    typicalLeak: "25–30% of billable hours typically recovered via passive capture",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document & Matter Management",
    whatWeAudit:
      "Where case files live, how they're searched, version control, privilege handling.",
    signalsWeLookFor: [
      "Single source of truth vs. files scattered across email/desktop/drives",
      "Naming conventions and version control discipline",
      "Search time for a known document (target: <60 seconds)",
      "Privilege-aware sharing controls",
    ],
    typicalLeak: "8–12 hrs/week returned with document and intake automation",
  },
  {
    id: "trust",
    icon: Receipt,
    title: "Trust Accounting & Compliance",
    whatWeAudit:
      "Reconciliation cadence, exception handling, audit-readiness (IOLTA for legal; equivalent fiduciary accounts for other professions).",
    signalsWeLookFor: [
      "Reconciliation frequency and three-way match discipline",
      "Exception alerting — overdrafts, commingling, stale balances",
      "Audit trail completeness and retention",
      "Separation of duties on disbursements",
    ],
    typicalLeak: "A single trust-account error can trigger bar discipline or license action",
  },
];

type PracticeProfile = {
  id: string;
  icon: typeof Scale;
  name: string;
  example: string;
  hooks: string[];
};

const PRACTICE_PROFILES: PracticeProfile[] = [
  {
    id: "law",
    icon: Scale,
    name: "Solo & Small Law Firms",
    example: "Family law, estate planning, immigration, plaintiff-side litigation",
    hooks: [
      "Multi-jurisdiction deadline tracking",
      "IOLTA reconciliation rigor",
      "Conflict-check speed",
    ],
  },
  {
    id: "medical",
    icon: Stethoscope,
    name: "Independent Medical Practices",
    example: "Specialty, optometry, dental, behavioral health, concierge",
    hooks: [
      "HIPAA-safe intake response",
      "No-show and recall economics",
      "Prior-auth and claims cycle time",
    ],
  },
  {
    id: "accounting",
    icon: Calculator,
    name: "CPA & Tax Practices",
    example: "Solo CPA, small tax & advisory, fractional CFO shops",
    hooks: [
      "Engagement-letter and 7216 disclosure flow",
      "Source-document collection cycle",
      "Trust account / client-funds handling",
    ],
  },
  {
    id: "advisory",
    icon: Briefcase,
    name: "Independent Financial Advisors",
    example: "RIAs, fiduciary planners, retirement specialists",
    hooks: [
      "SEC/FINRA recordkeeping cadence",
      "Onboarding and KYC turnaround",
      "Client review cycle adherence",
    ],
  },
  {
    id: "trades",
    icon: HardHat,
    name: "Specialty Professional Services",
    example: "Architects, engineers, surveyors, expert-witness practices",
    hooks: [
      "Proposal-to-engagement velocity",
      "Stamped/sealed deliverable controls",
      "Project-based time capture leakage",
    ],
  },
];

const DELIVERABLES = [
  {
    step: "01",
    icon: Eye,
    title: "Walkthrough · 2 hours",
    body: "On-site or video. With the principal or office manager. Workflow only — no access to client matter data, files, or anything covered by professional privilege.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Analysis · 3 business days",
    body: "Benchmarked against solo and small practices we've studied in the same vertical. We map current-state workflow against the five audit domains and quantify the leaks.",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "One-Page Written Report",
    body: "Top 3 revenue leaks · Top 3 risk exposures · Top 3 quick wins. Each item includes a dollar estimate. Designed to be useful even if you never speak to us again.",
  },
  {
    step: "04",
    icon: BookOpen,
    title: "Readout · 30 minutes",
    body: "We walk you through the report. You keep it. The engagement is complete. There is no proposal at the end. No follow-up sales sequence.",
  },
];

const GROUND_RULES = [
  {
    icon: Lock,
    title: "Workflow Only",
    body: "We do not access client files, matter data, or anything covered by attorney-client, doctor-patient, or fiduciary privilege.",
  },
  {
    icon: ShieldCheck,
    title: "Privilege-First Architecture",
    body: "If you ever choose to engage further: tenant-isolated infrastructure, no model training on matter content, full audit trail.",
  },
  {
    icon: AlertTriangle,
    title: "Independent Engagement",
    body: "Independent of any current or future representation. No tie to any existing engagement, balance, or matter.",
  },
  {
    icon: TrendingDown,
    title: "No Sales Sequence",
    body: "If the report is useful, you'll know where to find us. We do not run a follow-up cadence after the readout.",
  },
];

const HEADLINE_NUMBERS = [
  { number: "4x", label: "higher conversion when inquiries are answered in <5 min" },
  { number: "25–30%", label: "billable hours typically recovered via passive time capture" },
  { number: "8–12", label: "hrs/week returned to staff with document & intake automation" },
  { number: "0", label: "missed statutory deadlines on automated calendar guardrails" },
];

const OUTREACH_EMAIL = `Subject: A no-cost workflow audit for [Practice Name]

[Principal Name],

We design agentic AI systems for solo and small professional practices. Before we ever propose anything, we offer a complimentary 2-hour workflow audit — no access to client matter data, no proposal at the end.

You receive a one-page report covering your top 3 revenue leaks, top 3 risk exposures, and top 3 quick wins, each with a dollar estimate. Benchmarked against practices like yours.

Workflow only. Privilege-respecting. No follow-up sales sequence.

If the report is useful, you'll know where to find us.

Reply to schedule the 2-hour walkthrough — on-site or video, with you or your office manager.

Row of Ducks
rowofducks.ai`;

const PracticeAudit = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(OUTREACH_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container max-w-5xl">
          <Badge className="mb-6 bg-primary/15 text-foreground hover:bg-primary/15 border-primary/20">
            <ClipboardCheck className="w-3 h-3 mr-1.5" strokeWidth={2} />
            Duck Construct · Outline Only
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            The Practice Audit.<br />
            <span className="text-muted-foreground">
              A complimentary, workflow-only diagnostic for solo & small professional practices.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            We do not look at client files. We do not write a proposal at the end. We walk your
            workflow, benchmark it against practices like yours, and hand you a one-page report
            with the top three places revenue is leaking, the top three places risk is hiding,
            and the top three quick wins worth doing this quarter.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {HEADLINE_NUMBERS.map((n) => (
              <Card key={n.label} className="duck-card border-border">
                <CardContent className="p-5">
                  <div className="text-3xl md:text-4xl font-bold tabular-nums mb-2">{n.number}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{n.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inaugural Engagement */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Inaugural Engagement
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Law Office of Mary Davis, P.C.
          </h3>
          <p className="text-base text-muted-foreground mb-6">
            Family law, exclusively · 25+ years · Active in Cook, DuPage, Kane, Kendall, and Will
            counties · Solo practitioner, premium positioning, capacity-constrained.
          </p>
          <Card className="duck-card border-border">
            <CardContent className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                What We Observed
              </div>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  <span>Five jurisdictions, five sets of local rules and deadlines.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  <span>The brand is the attorney; capacity is the ceiling.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  <span>
                    Public intake today: a single contact form. After-hours inquiries wait until
                    business hours to be touched.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">·</span>
                  <span>Award-decorated, testimonial-rich. Premium positioning intact.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The 5 Audit Domains */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-6xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            The Construct
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            Five Audit Domains.
            <br />
            <span className="text-muted-foreground">
              Every professional practice leaks revenue and absorbs risk in the same five places.
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            We do not customize the framework. We customize the findings. The same five domains
            apply whether you're a family-law attorney, an independent medical practice, a CPA,
            or a fiduciary advisor.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {AUDIT_DOMAINS.map((d, idx) => {
              const Icon = d.icon;
              return (
                <Card key={d.id} className="duck-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                          Domain {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="text-lg font-bold">{d.title}</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {d.whatWeAudit}
                    </p>

                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Signals We Look For
                    </div>
                    <ul className="space-y-2 mb-4">
                      {d.signalsWeLookFor.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2.5} />
                          <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-sm bg-primary/10 border border-primary/20 px-3 py-2 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-muted-foreground mr-2">
                        Typical Leak
                      </span>
                      <span className="font-medium">{d.typicalLeak}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            What You Receive
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-balance">
            Four steps. One page. Zero obligation.
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {DELIVERABLES.map((d) => {
              const Icon = d.icon;
              return (
                <Card key={d.step} className="duck-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl font-bold text-primary tabular-nums">{d.step}</div>
                      <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-lg font-bold mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ground Rules */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Ground Rules
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-balance">
            What we will not do.
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {GROUND_RULES.map((r) => {
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

      {/* Practice Profiles — Who This Is For */}
      <section className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Where the Construct Applies
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-balance">
            Built for the practice where the principal is the brand.
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Solo and small professional practices share a common shape: premium positioning,
            capacity-constrained delivery, regulated workflow, and revenue that walks out the
            door when the principal can't be in two places at once.
          </p>

          <Tabs defaultValue="law" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
              {PRACTICE_PROFILES.map((p) => {
                const Icon = p.icon;
                return (
                  <TabsTrigger key={p.id} value={p.id} className="flex-col gap-1 py-3 text-xs">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-center leading-tight">{p.name.replace(/^(Solo & Small |Independent |Specialty )/, "")}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {PRACTICE_PROFILES.map((p) => {
              const Icon = p.icon;
              return (
                <TabsContent key={p.id} value={p.id}>
                  <Card className="duck-card border-border">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold mb-1">{p.name}</h4>
                          <p className="text-sm text-muted-foreground">{p.example}</p>
                        </div>
                      </div>

                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Vertical-Specific Hooks We Listen For
                      </div>
                      <ul className="space-y-2">
                        {p.hooks.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-base">
                            <Target className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Outreach Email Toolkit */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Outreach Toolkit
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-balance">
            The opener.
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Use this email as the first touch into a solo or small professional practice. Keep
            the offer clean: workflow only, no proposal, no sales sequence.
          </p>

          <Card className="duck-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    First-Touch Email
                  </span>
                </div>
                <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={copyEmail}>
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <pre className="whitespace-pre-wrap text-sm font-sans leading-relaxed">{OUTREACH_EMAIL}</pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why This Construct Works */}
      <section className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Why This Construct Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-balance">
            A no-cost diagnostic earns trust faster than any pitch deck.
          </h3>

          <div className="space-y-6">
            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div className="font-semibold">It removes the buying objection up front.</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No proposal at the end means no defensive posture during the walkthrough. The
                  principal speaks freely about workflow because there is nothing to sell against.
                </p>
              </CardContent>
            </Card>

            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div className="font-semibold">Privilege-first respects the regulated profession.</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Workflow only. No client files. No matter data. The audit is structurally
                  incapable of breaching attorney-client, doctor-patient, or fiduciary privilege.
                </p>
              </CardContent>
            </Card>

            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div className="font-semibold">The one-page report is useful even if you never engage us.</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Three leaks, three risks, three quick wins, each with a dollar estimate. The
                  practice can hand the report to their existing IT vendor, office manager, or
                  fractional COO and still get value. That generosity is the entire point.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
            Two hours. One page. Zero obligation.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book the walkthrough. Keep the report. Decide later — or never.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:patrick@rowofducks.ai?subject=Practice%20Audit%20Walkthrough"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              Schedule the Walkthrough <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="/industries"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              See All 37 Industry Blueprints
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAudit;
