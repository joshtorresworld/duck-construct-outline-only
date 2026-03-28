import { motion } from "framer-motion";
import {
  Bot,
  FileSpreadsheet,
  Receipt,
  Package,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cpu,
  MessageSquare,
} from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

const painPoints = [
  {
    icon: FileSpreadsheet,
    problem: "Customer data lives in 5 different spreadsheets",
    scenario:
      "A roofing contractor tracks leads in Google Sheets, invoices in QuickBooks, job notes in email, photos in a phone gallery, and warranties in a filing cabinet. When a homeowner calls about a leak, the office manager spends 20 minutes piecing together the job history.",
    agenticSolution: {
      title: "Autonomous Data Unification Agent",
      how: "An AI agent continuously monitors your tools — email, accounting software, CRM, cloud storage — and automatically links related records together. When that homeowner calls, the agent surfaces the full history before you even pick up the phone.",
      steps: [
        "Agent connects to your existing tools (no migration needed)",
        "Automatically identifies and links related records across systems",
        "Builds a unified customer profile updated in real time",
        "Proactively alerts you to follow-ups, warranty expirations, and upsell opportunities",
      ],
    },
    result: "20 min lookup → instant answer. Zero missed follow-ups.",
  },
  {
    icon: Receipt,
    problem: "Invoices and payments don't reconcile",
    scenario:
      "A landscaping company sends 150+ invoices a month. Payments come via check, Venmo, ACH, and credit card. The bookkeeper spends every Friday cross-referencing bank statements with QuickBooks, chasing down mismatches, and hunting for missing payments.",
    agenticSolution: {
      title: "Financial Reconciliation Agent",
      how: "An AI agent watches incoming payments across all channels, matches them to outstanding invoices using fuzzy logic (partial payments, mismatched names, split transactions), and flags only the true exceptions for human review.",
      steps: [
        "Agent ingests bank feeds, payment processors, and invoicing data",
        "Auto-matches 90%+ of payments using intelligent pattern recognition",
        "Sends automated payment reminders on overdue invoices",
        "Generates weekly cash flow reports without manual input",
      ],
    },
    result: "8 hrs/week bookkeeping → 45 min exception review.",
  },
  {
    icon: Package,
    problem: "Inventory counts are always wrong",
    scenario:
      "A boutique retailer sells in-store and on Shopify. Stock levels are manually updated at close of business, leading to overselling online, disappointed customers, and emergency reorders at premium pricing. Last quarter, $12K in revenue was lost to stockouts.",
    agenticSolution: {
      title: "Inventory Intelligence Agent",
      how: "An AI agent synchronizes inventory across POS and e-commerce in real time, predicts demand based on seasonality and trends, and auto-generates purchase orders when stock hits reorder thresholds.",
      steps: [
        "Real-time sync between POS system and online store",
        "Demand forecasting based on historical sales patterns",
        "Automated reorder alerts with suggested quantities",
        "Dead stock identification with markdown recommendations",
      ],
    },
    result: "Zero oversells. 30% reduction in carrying costs.",
  },
  {
    icon: UserCheck,
    problem: "Employee onboarding is chaos",
    scenario:
      "A dental practice hires a new hygienist. HR needs to collect credentials, run background checks, set up software access, order supplies, schedule training, and ensure HIPAA compliance — across 8 different systems. Things get missed. Last time, a new hire couldn't access patient records for 3 days.",
    agenticSolution: {
      title: "Onboarding Orchestration Agent",
      how: "An AI agent manages the entire onboarding workflow — triggering tasks in sequence, collecting documents, provisioning accounts, and ensuring every compliance checkbox is completed before day one.",
      steps: [
        "Auto-generates role-specific onboarding checklist",
        "Sends and tracks document collection from the new hire",
        "Provisions software access and credentials automatically",
        "Verifies compliance requirements are met before start date",
      ],
    },
    result: "3-day delays → day-one readiness. 100% compliance.",
  },
  {
    icon: AlertTriangle,
    problem: "Reports take forever and nobody trusts them",
    scenario:
      "A multi-location fitness studio owner wants to know which classes are profitable. The manager pulls data from the booking system, payroll, rent spreadsheet, and utility bills — manually — once a month. By the time the report is ready, the data is stale and the formulas are suspect.",
    agenticSolution: {
      title: "Real-Time Reporting Agent",
      how: "An AI agent pulls from all your data sources on a continuous basis, applies consistent business logic, and generates live dashboards you can trust. Ask questions in plain English and get instant, accurate answers.",
      steps: [
        "Connects to booking, payroll, and financial systems",
        "Builds automated P&L by location, service, or time period",
        "Natural language queries: \"Which classes lost money last month?\"",
        "Anomaly detection alerts when metrics deviate from norms",
      ],
    },
    result: "Monthly guesswork → real-time, trustworthy insights.",
  },
];

const AgenticDataSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <motion.div {...anim()}>
            <div className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground mb-4">
              <Bot className="w-3.5 h-3.5" strokeWidth={1.5} />
              Powered by Agentic AI
            </div>
          </motion.div>
          <motion.h2 {...anim(0.05)} className="text-2xl font-semibold text-foreground mb-2">
            Real Problems. Autonomous Solutions.
          </motion.h2>
          <motion.p {...anim(0.1)} className="text-sm text-muted-foreground max-w-2xl">
            These aren't hypothetical — they're the exact nightmares we hear every week. The businesses
            solving these problems now will have a
            <span className="text-foreground font-medium"> 3-year head start</span> that competitors
            can't buy their way out of. Agentic AI doesn't just analyze your data; it
            <span className="text-foreground font-medium"> acts on it autonomously</span>, compounding
            your advantage every single day.
          </motion.p>
        </div>

        {/* How Agentic AI differs */}
        <motion.div {...anim(0.12)} className="duck-card bg-card rounded-lg p-6 mb-10 border-l-2 border-accent/20">
          <div className="flex items-start gap-4">
            <div className="rounded-sm p-2 bg-accent/10 text-accent shrink-0">
              <Cpu className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Closing the AI Execution Gap
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                The gap between what AI can do and what your company is actually doing with it is much larger than you think — and it's widening every quarter. We close that gap by solving the three things most companies are underbuilding:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">1. Margin, Not Novelty</p>
                  <p className="text-sm text-muted-foreground">We target the expensive, repetitive, high-volume work nobody wants to do — that's where the economics are.</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">2. Workflow Integration</p>
                  <p className="text-sm text-muted-foreground">A better tool doesn't change the workflow around it. We redesign the process — not just add AI to the existing one.</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">3. Frontline Buy-In</p>
                  <p className="text-sm text-muted-foreground">Not the C-suite. Not the frontline. The middle — where initiatives go to die quietly. We build for the people whose cooperation is most required.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pain points */}
        <div className="space-y-6">
          {painPoints.map((pp, i) => (
            <motion.div
              key={pp.problem}
              {...anim(i * 0.06)}
              className="duck-card bg-card rounded-lg overflow-hidden"
            >
              {/* Problem header */}
              <div className="px-6 pt-6 pb-4 flex items-start gap-3">
                <div className="rounded-sm p-1.5 bg-destructive/10 text-destructive shrink-0 mt-0.5">
                  <pp.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-destructive mb-1">
                    The Problem
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    "{pp.problem}"
                  </h3>
                </div>
              </div>

              {/* Scenario */}
              <div className="px-6 pb-4">
                <div className="rounded-sm bg-surface-sunken p-4">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {pp.scenario}
                    </p>
                  </div>
                </div>
              </div>

              {/* Agentic Solution */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    Agentic AI Solution
                  </p>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {pp.agenticSolution.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {pp.agenticSolution.how}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {pp.agenticSolution.steps.map((step) => (
                    <div key={step} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-xs text-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="bg-surface-sunken px-6 py-3 border-t border-foreground/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Result
                  </span>
                  <span className="text-sm font-semibold text-foreground">{pp.result}</span>
                </div>
                <a
                  href="mailto:patrick@rowofducks.ai"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Solve this <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticDataSection;
