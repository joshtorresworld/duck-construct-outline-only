import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgenticDataSection from "@/components/AgenticDataSection";
import SmallOfficeBlueprint from "@/components/SmallOfficeBlueprint";
import RoofingBlueprint from "@/components/RoofingBlueprint";
import { motion } from "framer-motion";
import {
  Database,
  Shield,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Data Management",
    enterprise: "Centralized repositories, automated governance, policy enforcement across global teams.",
    smb: "Right-sized data organization that grows with you — no massive infrastructure, no wasted spend.",
    benefits: [
      { label: "Unified customer view", detail: "One source of truth instead of scattered spreadsheets" },
      { label: "Automated backups", detail: "Set-and-forget protection for your most valuable asset" },
      { label: "Compliance-ready", detail: "Meet industry requirements without a dedicated compliance team" },
      { label: "Scalable storage", detail: "Pay only for what you use, scale when you need to" },
    ],
    outcomes: ["60% less time finding data", "Zero data loss incidents", "$8K–$15K annual savings"],
    color: "bg-primary/10 text-primary",
    accent: "border-primary/20",
  },
  {
    icon: Shield,
    title: "Information Security",
    enterprise: "Multi-layered security frameworks, SOC 2 / ISO 27001, zero-trust architecture.",
    smb: "Enterprise-grade protection scaled for small business budgets — because hackers don't check your revenue first.",
    benefits: [
      { label: "Threat monitoring", detail: "24/7 automated scanning without a full-time security team" },
      { label: "Employee training", detail: "Phishing awareness and security best practices for every role" },
      { label: "Access controls", detail: "Right people, right data, right time — nothing more" },
      { label: "Incident response", detail: "A clear playbook so a breach doesn't become a disaster" },
    ],
    outcomes: ["95% fewer vulnerabilities", "4hr incident response", "Insurance premium reduction"],
    color: "bg-accent/10 text-accent",
    accent: "border-accent/20",
  },
  {
    icon: RefreshCw,
    title: "Business Continuity",
    enterprise: "Geo-redundant backups, < 15 min RTO, 99.99% uptime SLAs across data centers.",
    smb: "Keep your doors open when things go wrong — affordable recovery plans that actually work.",
    benefits: [
      { label: "Rapid recovery", detail: "Get back online in hours, not days or weeks" },
      { label: "Cloud-first approach", detail: "No expensive secondary sites — leverage the cloud intelligently" },
      { label: "Tested plans", detail: "Regular drills so your team knows exactly what to do" },
      { label: "Vendor continuity", detail: "Backup plans for critical supplier and SaaS dependencies" },
    ],
    outcomes: ["< 4hr recovery time", "Zero revenue loss events", "Peace of mind"],
    color: "bg-success/10 text-success",
    accent: "border-success/20",
  },
];

const stats = [
  { icon: Users, value: "33M+", label: "Small businesses in the U.S." },
  { icon: Target, value: "43%", label: "Of cyberattacks target SMBs" },
  { icon: DollarSign, value: "$200K", label: "Avg cost of a data breach for SMBs" },
  { icon: Clock, value: "60%", label: "Close within 6 months of a breach" },
];

const phases = [
  {
    number: "01",
    title: "Assess & Prioritize",
    duration: "Weeks 1–3",
    description: "We audit your current state, identify quick wins, and build a prioritized roadmap that fits your budget.",
    deliverables: ["Risk assessment report", "Quick-win action items", "Budget-aligned roadmap"],
  },
  {
    number: "02",
    title: "Implement & Protect",
    duration: "Weeks 4–8",
    description: "Deploy right-sized solutions across all three pillars — data, security, and continuity — without disrupting operations.",
    deliverables: ["Data consolidation", "Security hardening", "Backup automation"],
  },
  {
    number: "03",
    title: "Train & Transfer",
    duration: "Weeks 9–10",
    description: "Your team learns to maintain and monitor everything we've built, with clear documentation and support channels.",
    deliverables: ["Team training sessions", "Runbook documentation", "Support handoff"],
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    duration: "Ongoing",
    description: "Quarterly check-ins, continuous monitoring, and optimization recommendations as your business grows.",
    deliverables: ["Quarterly reviews", "Performance reports", "Growth recommendations"],
  },
];

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

const SmallBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-14">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div {...anim()} className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Small Business Solutions
              </span>
            </motion.div>
            <motion.h1
              {...anim(0.05)}
              className="text-2xl md:text-[2rem] font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance"
            >
              Enterprise results, small business reality.
            </motion.h1>
            <motion.p {...anim(0.1)} className="text-lg text-muted-foreground max-w-xl mb-8">
              80% of U.S. businesses are small businesses. They deserve the same operational
              excellence as Fortune 500 companies — without the Fortune 500 price tag.
            </motion.p>
            <motion.div {...anim(0.15)} className="flex items-center gap-3">
              <a
                href="mailto:patrick@rowofducks.ai"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                <Zap className="w-3.5 h-3.5" strokeWidth={1.5} />
                Get a Free Assessment
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Enterprise Solutions <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it matters — stats */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              The Small Business Reality
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Why This Matters Now
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...anim(i * 0.05)}
                className="duck-card bg-card rounded-lg p-5"
              >
                <s.icon className="w-4 h-4 text-muted-foreground mb-3" strokeWidth={1.5} />
                <p className="tabular-nums text-2xl font-semibold text-foreground mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars — SMB Translation */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Adapted For You
            </p>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Enterprise Pillars, Small Business Scale
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg">
              The same three pillars that protect enterprise operations — right-sized, right-priced,
              and built for teams of 5 to 500.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...anim(i * 0.1)}
                className={`duck-card bg-card rounded-lg overflow-hidden border-l-2 ${pillar.accent}`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`rounded-sm p-2 ${pillar.color}`}>
                      <pillar.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{pillar.title}</h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Enterprise Approach
                          </p>
                          <p className="text-sm text-muted-foreground">{pillar.enterprise}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">
                            Small Business Approach
                          </p>
                          <p className="text-sm text-foreground/80">{pillar.smb}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    {pillar.benefits.map((b) => (
                      <div key={b.label} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{b.label}</p>
                          <p className="text-xs text-muted-foreground">{b.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.outcomes.map((o) => (
                      <span
                        key={o}
                        className="inline-flex items-center rounded-sm bg-surface-sunken px-2 py-0.5 text-xs font-mono text-muted-foreground"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agentic AI Deep Dive — Data Management */}
      <AgenticDataSection />

      {/* 5-Person Office Blueprint */}
      <SmallOfficeBlueprint />

      {/* Implementation Roadmap */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Implementation
            </p>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              A 10-Week Path to Operational Confidence
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg">
              No multi-year contracts. No six-figure minimums. A focused engagement that delivers
              measurable results within a single quarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                {...anim(i * 0.08)}
                className="duck-card bg-card rounded-lg p-5 relative"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="tabular-nums text-xs font-mono text-muted-foreground">
                    {phase.number}
                  </span>
                  <span className="text-xs text-primary font-medium">{phase.duration}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {phase.description}
                </p>
                <div className="space-y-1.5">
                  {phase.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-foreground">
                      <BarChart3 className="w-3 h-3 text-muted-foreground shrink-0" strokeWidth={1.5} />
                      {d}
                    </div>
                  ))}
                </div>
                {i < phases.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 z-10" strokeWidth={1.5} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Return on Investment
            </p>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              The Numbers Make Sense
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <motion.div {...anim()} className="duck-card bg-card rounded-lg p-6">
              <TrendingUp className="w-5 h-5 text-success mb-3" strokeWidth={1.5} />
              <p className="tabular-nums text-3xl font-semibold text-foreground mb-1">3–5×</p>
              <p className="text-sm font-medium text-foreground mb-1">ROI within 12 months</p>
              <p className="text-xs text-muted-foreground">
                Through reduced downtime, prevented breaches, and operational efficiency gains.
              </p>
            </motion.div>
            <motion.div {...anim(0.08)} className="duck-card bg-card rounded-lg p-6">
              <DollarSign className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
              <p className="tabular-nums text-3xl font-semibold text-foreground mb-1">$2K–$5K</p>
              <p className="text-sm font-medium text-foreground mb-1">Monthly investment</p>
              <p className="text-xs text-muted-foreground">
                Fraction of a full-time hire, delivering expertise across all three pillars.
              </p>
            </motion.div>
            <motion.div {...anim(0.16)} className="duck-card bg-card rounded-lg p-6">
              <Clock className="w-5 h-5 text-accent mb-3" strokeWidth={1.5} />
              <p className="tabular-nums text-3xl font-semibold text-foreground mb-1">20+ hrs</p>
              <p className="text-sm font-medium text-foreground mb-1">Saved per week</p>
              <p className="text-xs text-muted-foreground">
                Your team focuses on growth while we handle the operational complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-background mb-2">
                Your business deserves better than duct tape and hope.
              </h2>
              <p className="text-sm text-background/60 max-w-md">
                Get a free 30-minute assessment to identify your biggest operational risks
                and the quickest path to fixing them.
              </p>
            </div>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
            >
              Book Free Assessment <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmallBusiness;
