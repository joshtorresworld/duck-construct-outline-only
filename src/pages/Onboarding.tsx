import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Rocket, ClipboardCheck, Settings, BarChart3, Users, Shield,
  ArrowRight, CheckCircle2, Clock, AlertTriangle, Zap,
  FileSearch, Headphones, RefreshCw, Target, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

interface OnboardingPhase {
  week: string;
  phase: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  owner: string;
  description: string;
  backOfficeActions: string[];
  clientActions: string[];
  deliverables: string[];
  successMetrics: string[];
}

const onboardingPhases: OnboardingPhase[] = [
  {
    week: "Days 1–3",
    phase: "Welcome & Access Provisioning",
    icon: Rocket,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    owner: "Implementation Manager",
    description: "Onboard the client into the platform, provision accounts, and set expectations for the 8-week journey.",
    backOfficeActions: [
      "Create client workspace and provision user accounts",
      "Assign dedicated implementation manager and support team",
      "Generate onboarding portal with personalized timeline",
      "Set up internal Slack/Teams channel for the engagement",
      "Pull discovery survey results into implementation plan",
    ],
    clientActions: [
      "Sign service agreement and complete payment setup",
      "Designate internal champion and key stakeholders",
      "Provide system access credentials for integrations",
      "Review and approve implementation timeline",
    ],
    deliverables: ["Welcome packet", "Onboarding portal access", "Implementation timeline", "Stakeholder contact sheet"],
    successMetrics: ["Portal accessed within 24 hours", "All credentials received within 72 hours"],
  },
  {
    week: "Week 1–2",
    phase: "Operations Audit & Data Migration",
    icon: FileSearch,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    owner: "Solutions Architect",
    description: "Deep-dive into the client's current workflows, map data sources, and begin integration setup.",
    backOfficeActions: [
      "Conduct detailed workflow mapping sessions (2–3 hours)",
      "Document current tech stack and data flows",
      "Identify integration points (CRM, ERP, scheduling, billing)",
      "Build data migration plan and validate data quality",
      "Configure API connections and test data sync",
      "Map industry-specific regulatory requirements to agent configurations",
    ],
    clientActions: [
      "Participate in workflow mapping sessions",
      "Provide historical data exports (12+ months)",
      "Identify edge cases and exceptions in current processes",
      "Approve data mapping and migration plan",
    ],
    deliverables: ["Workflow map document", "Integration architecture diagram", "Data migration plan", "Regulatory compliance checklist"],
    successMetrics: ["100% of integrations mapped", "Data quality score >90%", "Client signs off on workflow map"],
  },
  {
    week: "Week 3–4",
    phase: "Core Agent Deployment",
    icon: Zap,
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    owner: "Technical Lead",
    description: "Deploy the first wave of AI agents — scheduling, client management, and core automation.",
    backOfficeActions: [
      "Deploy scheduling/dispatch agent with client's business rules",
      "Configure client communication agent (SMS, email, notifications)",
      "Set up billing/invoicing automation with payment gateway",
      "Build custom dashboards for client KPI tracking",
      "Run parallel processing (AI + manual) for first 5 business days",
      "QA test all agent outputs against historical results",
    ],
    clientActions: [
      "Participate in agent training sessions (1 hour each)",
      "Run parallel workflows alongside AI for validation",
      "Flag any output discrepancies or edge cases",
      "Approve agent configurations before going live",
    ],
    deliverables: ["Agent deployment report", "Training documentation", "Parallel processing comparison report", "Go-live approval form"],
    successMetrics: ["Agent accuracy >95%", "Zero critical errors in parallel run", "All staff trained within 48 hours"],
  },
  {
    week: "Week 5–6",
    phase: "Revenue & Analytics Activation",
    icon: BarChart3,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    owner: "Revenue Operations",
    description: "Activate revenue optimization agents — forecasting, collections, upsell engines, and analytics dashboards.",
    backOfficeActions: [
      "Deploy revenue forecasting and cash flow projection agents",
      "Configure automated collections and payment reminders",
      "Set up upsell/cross-sell recommendation engine",
      "Build executive dashboard with real-time KPIs",
      "Configure alert thresholds and escalation rules",
      "Generate first monthly performance report",
    ],
    clientActions: [
      "Review and approve revenue agent recommendations",
      "Set pricing rules and discount authority levels",
      "Define escalation procedures for flagged accounts",
      "Review first analytics dashboard and provide feedback",
    ],
    deliverables: ["Revenue dashboard", "Collections automation report", "First performance baseline", "Escalation procedures document"],
    successMetrics: ["Dashboard adoption >80%", "First measurable efficiency gain documented", "Client satisfaction survey >4/5"],
  },
  {
    week: "Week 7–8",
    phase: "Growth, Optimization & Handoff",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    owner: "Customer Success Manager",
    description: "Activate growth agents, optimize configurations, and transition from implementation to ongoing success management.",
    backOfficeActions: [
      "Deploy lead generation and reputation management agents",
      "Fine-tune all agent parameters based on 6 weeks of data",
      "Document all custom configurations and business rules",
      "Create client-specific runbook for ongoing operations",
      "Conduct formal handoff from implementation to customer success",
      "Schedule monthly optimization review cadence",
    ],
    clientActions: [
      "Review ROI report against original projections",
      "Approve transition to ongoing success management",
      "Participate in knowledge transfer session",
      "Provide implementation satisfaction feedback",
    ],
    deliverables: ["ROI achievement report", "Custom runbook", "Optimization recommendations", "Ongoing support SLA"],
    successMetrics: ["ROI on track per original projections", "Client NPS score >8", "100% handoff documentation complete"],
  },
];

const backOfficeRoles = [
  {
    icon: Users,
    title: "Implementation Manager",
    responsibility: "Owns the client relationship during onboarding. Single point of contact for timeline, escalations, and weekly check-ins.",
    tools: ["Project management platform", "Client portal", "Video conferencing"],
  },
  {
    icon: Settings,
    title: "Solutions Architect",
    responsibility: "Maps client workflows to agent configurations. Designs integrations, data flows, and custom business rules.",
    tools: ["Integration platform", "API documentation", "Data mapping tools"],
  },
  {
    icon: Zap,
    title: "Technical Lead",
    responsibility: "Deploys and configures AI agents. Manages parallel testing, QA, and production releases.",
    tools: ["Agent platform", "Testing framework", "Monitoring dashboard"],
  },
  {
    icon: BarChart3,
    title: "Revenue Operations",
    responsibility: "Configures revenue, billing, and analytics agents. Builds dashboards and validates financial accuracy.",
    tools: ["Analytics platform", "Payment gateway", "Forecasting models"],
  },
  {
    icon: Headphones,
    title: "Customer Success Manager",
    responsibility: "Owns post-implementation relationship. Conducts monthly reviews, optimization recommendations, and renewal management.",
    tools: ["CRM", "Support ticketing", "Health scoring"],
  },
];

const riskMitigations = [
  { risk: "Client disengagement during onboarding", mitigation: "Weekly check-in cadence with escalation triggers at 48-hour non-response" },
  { risk: "Data quality issues block migration", mitigation: "Data quality audit in Week 1 with remediation plan before agent deployment" },
  { risk: "Agent accuracy below threshold", mitigation: "Mandatory parallel processing period — no go-live below 95% accuracy" },
  { risk: "Staff resistance to AI adoption", mitigation: "Change management sessions and 'AI as copilot' messaging — agents augment, not replace" },
  { risk: "Integration failures or API downtime", mitigation: "Graceful degradation protocols with manual fallback procedures documented" },
  { risk: "Scope creep during implementation", mitigation: "Formal change request process — new requirements documented and scheduled for Phase 2" },
];

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              Post-Sale Operations Playbook
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From Signed Contract to{" "}
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Delivered Outcomes
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The back-of-house implementation playbook that ensures every customer is onboarded successfully, 
              with clear ownership, milestones, and measurable outcomes at every stage.
            </p>
          </motion.div>
        </section>

        {/* Back Office Roles */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Implementation Team Structure</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {backOfficeRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <role.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{role.title}</h3>
                  <p className="text-xs text-muted-foreground">{role.responsibility}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Phases */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">8-Week Implementation Timeline</h2>
            <div className="space-y-8">
              {onboardingPhases.map((phase, index) => (
                <motion.div
                  key={phase.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border ${phase.borderColor} ${phase.bgColor} p-8`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${phase.bgColor} border ${phase.borderColor} flex items-center justify-center flex-shrink-0`}>
                      <phase.icon className={`w-6 h-6 ${phase.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-wider ${phase.color}`}>{phase.week}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Owner: {phase.owner}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{phase.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Settings className="w-4 h-4" /> Back-Office Actions
                      </h4>
                      <ul className="space-y-2">
                        {phase.backOfficeActions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${phase.color}`} />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Client Actions
                      </h4>
                      <ul className="space-y-2">
                        {phase.clientActions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${phase.color}`} />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border/30">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <ClipboardCheck className="w-4 h-4" /> Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((d, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-background border border-border text-foreground">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" /> Success Metrics
                      </h4>
                      <ul className="space-y-1">
                        {phase.successMetrics.map((m, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <BarChart3 className={`w-3 h-3 ${phase.color}`} />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6 text-center">Risk Mitigation Framework</h2>
              <div className="rounded-xl border border-destructive/20 bg-card overflow-hidden">
                <div className="grid grid-cols-2 gap-0 text-sm font-semibold text-foreground bg-destructive/5 px-6 py-3 border-b border-destructive/10">
                  <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-destructive" /> Risk</span>
                  <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-success" /> Mitigation</span>
                </div>
                {riskMitigations.map((rm, i) => (
                  <div key={i} className={`grid grid-cols-2 gap-0 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-card" : "bg-muted/30"} ${i < riskMitigations.length - 1 ? "border-b border-border/50" : ""}`}>
                    <span className="text-muted-foreground pr-4">{rm.risk}</span>
                    <span className="text-foreground">{rm.mitigation}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-success/20 bg-success/5 p-10">
              <RefreshCw className="w-10 h-10 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">The Cycle Continues</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                After the 8-week implementation, every customer transitions to monthly optimization reviews — 
                ensuring continuous improvement and long-term ROI delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/customer-acquisition" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                  <Target className="w-5 h-5" />
                  Acquisition Playbook
                </Link>
                <Link to="/industries" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors">
                  <Zap className="w-5 h-5" />
                  Industry Blueprints
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
