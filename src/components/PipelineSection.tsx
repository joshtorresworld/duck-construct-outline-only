import { motion } from "framer-motion";
import { Database, Shield, RefreshCw, ArrowRight, CheckCircle2, Zap, Scale } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Management",
    subtitle: "Organize & Optimize",
    icon: Database,
    status: "complete" as const,
    description: "Comprehensive solutions for storing, protecting, and optimizing enterprise data assets across your organization.",
    features: ["Centralized repositories", "Automated governance", "Policy enforcement"],
    outcomes: ["40% reduction in data silos", "99.9% data availability", "Unified data catalog"],
    partnerIntegration: {
      provider: "Zantaz",
      link: "/zantaz",
      solutions: ["AI Smart Data Refinery", "AI Data Feeder + Smart Mirroring", "ROT elimination before analytics"],
      impact: "60% storage & compute savings",
    },
    legalHub: {
      pillar: "Trusted Data Refinery",
      description: "Scans client data in-place to add context and classification, eliminating up to 60% of ROT before it reaches review platforms like Relativity or DISCO.",
      points: [
        "Systematic ROT identification & elimination",
        "Attorney-ready Trusted Data Collections",
        "Organized chronologies & issue maps before billable review",
      ],
    },
  },
  {
    number: "02",
    title: "Information Security",
    subtitle: "Protect & Comply",
    icon: Shield,
    status: "active" as const,
    description: "Multi-layered security frameworks that anticipate and neutralize threats before they impact operations.",
    features: ["Compliance automation", "Risk assessment", "Threat detection"],
    outcomes: ["Zero-trust architecture", "SOC 2 / ISO 27001 ready", "Real-time threat intel"],
    partnerIntegration: {
      provider: "Zantaz",
      link: "/zantaz",
      solutions: ["AI-Ready Archiving for M365", "AI Smart Legal for litigation", "SEC 17a-4, FINRA, GDPR compliance"],
      impact: "Full regulatory confidence",
    },
    legalHub: {
      pillar: "Trusted Data Portal",
      description: "Secure intake and operational control plane with Model Context Protocol (MCP) that ironclad protects attorney-client privilege.",
      points: [
        "Universal Drop Zone with immutable chain of custody",
        "Privilege-Enforcing AI via MCP governance",
        "Defensible audit trail of every AI action",
      ],
    },
  },
  {
    number: "03",
    title: "Business Continuity",
    subtitle: "Recover & Sustain",
    icon: RefreshCw,
    status: "pending" as const,
    description: "Ensure uninterrupted operations with robust disaster recovery and business continuity solutions.",
    features: ["Rapid recovery", "Minimal downtime", "Data integrity"],
    outcomes: ["< 15 min RTO", "99.99% uptime SLA", "Geo-redundant backups"],
    partnerIntegration: {
      provider: "Zantaz",
      link: "/zantaz",
      solutions: ["Retention-policy governance", "Geo-redundant archiving", "Copilot production readiness"],
      impact: "AI-ready disaster recovery",
    },
    legalHub: {
      pillar: "Trusted Data Archive",
      description: "Real-time, compliance-grade journal archiving that captures the complete envelope of communications — including BCCs and distribution lists often lost in standard exports.",
      points: [
        "Immutable evidentiary-grade preservation",
        "Complete metadata capture (BCCs, distribution lists)",
        "Legally defensible foundation for AI reasoning",
      ],
    },
  },
];

const statusColors = {
  complete: "bg-success",
  active: "bg-primary animate-status-pulse",
  pending: "bg-muted-foreground/30",
};

const PipelineSection = () => {
  return (
    <section id="pipeline" className="py-16 bg-surface-sunken">
      <div className="container">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Execution Pipeline
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Enterprise Solutions That Drive Results
          </h2>
        </div>

        {/* Pipeline connector line */}
        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-foreground/8 z-0" />
          <div className="hidden md:block absolute top-[60px] left-0 w-1/3 h-[2px] bg-primary z-10 animate-pulse-line"
            style={{
              background: "linear-gradient(90deg, hsl(var(--duck-yellow)), hsl(var(--duck-yellow)) 50%, transparent)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-6 relative z-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              >
                <div className="duck-card bg-card rounded-lg p-0 overflow-hidden hover:border-t-2 hover:border-t-primary transition-all group">
                  {/* Step header */}
                  <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="tabular-nums text-xs font-mono text-muted-foreground">
                        {step.number}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${statusColors[step.status]}`} />
                    </div>
                    <step.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-2">
                    <h3 className="text-lg font-semibold text-foreground mb-0.5">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{step.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="px-5 pb-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1.5">
                      {step.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" strokeWidth={1.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="bg-surface-sunken px-5 py-3 border-t border-foreground/5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      Expected Outcomes
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.outcomes.map((o) => (
                        <span
                          key={o}
                          className="inline-flex items-center rounded-sm bg-background px-2 py-0.5 text-xs font-mono text-muted-foreground"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Partner Integration — Smart Stack */}
                  <div className="px-5 py-3 border-t border-foreground/5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      <Zap className="w-3 h-3 inline-block mr-1 text-accent" strokeWidth={1.5} />
                      Powered by {step.partnerIntegration.provider}
                    </p>
                    <ul className="space-y-1 mb-2">
                      {step.partnerIntegration.solutions.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0" strokeWidth={1.5} />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center rounded-sm bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      {step.partnerIntegration.impact}
                    </span>
                  </div>

                  {/* Legal HUB Pillar */}
                  <div className="px-5 py-3 border-t border-foreground/5 bg-primary/[0.03]">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                      <Scale className="w-3 h-3 inline-block mr-1 text-primary" strokeWidth={1.5} />
                      Legal HUB — {step.legalHub.pillar}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {step.legalHub.description}
                    </p>
                    <ul className="space-y-1">
                      {step.legalHub.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" strokeWidth={1.5} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 mt-2 rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Launching April 2026
                    </span>
                  </div>

                  {/* Action */}
                  <div className="px-5 py-3 border-t border-foreground/5 flex items-center justify-between">
                    <a
                      href="mailto:patrick@rowofducks.ai"
                      className="inline-flex items-center gap-1 text-xs font-medium text-logic hover:underline"
                    >
                      Learn more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                    <a
                      href={step.partnerIntegration.link}
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      {step.partnerIntegration.provider} <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;