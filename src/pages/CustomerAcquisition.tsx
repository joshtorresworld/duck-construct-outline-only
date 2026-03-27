import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  UserPlus, ClipboardCheck, FileSearch, Handshake, Rocket,
  ArrowRight, CheckCircle2, AlertTriangle, Shield, Clock,
  Target, BarChart3, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const acquisitionSteps = [
  {
    step: 1,
    icon: Target,
    title: "Lead Identification & Outreach",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    description: "Identify prospects through industry events, referrals, digital marketing, and strategic partnerships.",
    actions: [
      "Prospect identifies pain point via content, referral, or outreach",
      "Visits industry-specific blueprint page on platform",
      "Downloads ROI calculator or industry one-pager",
      "Books a 15-minute discovery call via embedded scheduler",
    ],
    kpis: ["Time to first contact: <24 hours", "Lead response rate: >90%"],
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Discovery & Pain Point Survey",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    description: "Prospect completes a tailored discovery survey — universal core questions plus industry-specific modules.",
    actions: [
      "Prospect receives personalized survey link (industry pre-selected)",
      "Completes universal core assessment (5 min)",
      "Completes industry-specific pain point module (5 min)",
      "System auto-generates pain point score and priority matrix",
    ],
    kpis: ["Survey completion rate: >75%", "Time to complete: <10 minutes"],
  },
  {
    step: 3,
    icon: FileSearch,
    title: "Needs Analysis & Solution Mapping",
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    description: "Sales consultant reviews survey results, maps pain points to specific AI agents, and builds a custom proposal.",
    actions: [
      "Review survey results and pain point priority matrix",
      "Map top 3–5 pain points to specific automation agents",
      "Calculate projected ROI based on prospect's actual numbers",
      "Generate custom proposal with tier recommendation (Optimize/Augment/Innovate)",
    ],
    kpis: ["Proposal turnaround: <48 hours", "Solution fit accuracy: >90%"],
  },
  {
    step: 4,
    icon: Handshake,
    title: "Proposal & Close",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    description: "Present tailored solution with ROI projections, handle objections, and close with the 90-day results guarantee.",
    actions: [
      "Present custom solution walkthrough (30-min video call)",
      "Review projected ROI vs. current operational costs",
      "Select subscription tier and sign service agreement",
      "Activate 90-day results-or-free guarantee",
    ],
    kpis: ["Close rate: >40%", "Average sales cycle: 14–21 days"],
  },
  {
    step: 5,
    icon: Rocket,
    title: "Onboarding Kickoff",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    description: "Signed customer enters the structured 8-week onboarding program with dedicated implementation support.",
    actions: [
      "Welcome email with onboarding portal access",
      "Assign dedicated implementation manager",
      "Schedule Week 1 operations audit kickoff",
      "Provision platform access and integrations",
    ],
    kpis: ["Onboarding start: <3 business days", "Customer satisfaction at kickoff: >95%"],
  },
];

const legalConsiderations = [
  {
    icon: Shield,
    title: "Service Level Agreement (SLA)",
    items: [
      "Define uptime guarantees (99.5%+ availability)",
      "Response time commitments for support tiers",
      "Data processing and retention policies",
      "Performance benchmarks and measurement criteria",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Data Privacy & Compliance",
    items: [
      "HIPAA BAA required for healthcare verticals",
      "SOC 2 Type II compliance documentation",
      "GDPR/CCPA data handling disclosures",
      "Industry-specific regulatory compliance (FINRA, PCI-DSS, etc.)",
    ],
  },
  {
    icon: Clock,
    title: "Terms & Conditions",
    items: [
      "90-day results guarantee terms and measurement criteria",
      "Subscription auto-renewal and cancellation policies",
      "Intellectual property ownership of custom configurations",
      "Limitation of liability and indemnification clauses",
    ],
  },
];

const CustomerAcquisition = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <UserPlus className="w-4 h-4" />
              Customer Acquisition Playbook
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From First Touch to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Signed Customer
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured 5-step acquisition process designed to qualify prospects, 
              quantify their pain, and close with confidence — backed by our 90-day 
              results guarantee.
            </p>
          </motion.div>
        </section>

        {/* Acquisition Steps */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto space-y-8">
            {acquisitionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border ${step.borderColor} ${step.bgColor} p-8`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${step.color}`}>
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Actions</h4>
                        <ul className="space-y-2">
                          {step.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${step.color}`} />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Success Metrics</h4>
                        <ul className="space-y-2">
                          {step.kpis.map((kpi, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <BarChart3 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${step.color}`} />
                              <span className="font-medium text-foreground">{kpi}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {index < acquisitionSteps.length - 1 && (
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Legal Considerations */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold mb-4">Legal & Compliance Framework</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every customer engagement requires proper legal documentation. 
                These are the baseline requirements — industry-specific constraints are covered in each vertical's discovery survey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {legalConsiderations.map((legal, index) => (
                <motion.div
                  key={legal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <legal.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{legal.title}</h3>
                  <ul className="space-y-2">
                    {legal.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-10"
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Map the Full Journey?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore the industry-specific discovery surveys or dive into the post-sale 
                onboarding operations playbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/discovery-survey"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  Discovery Surveys
                </Link>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  <Rocket className="w-5 h-5" />
                  Onboarding Playbook
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

export default CustomerAcquisition;
