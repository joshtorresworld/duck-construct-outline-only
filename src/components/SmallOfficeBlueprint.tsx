import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Target,
  BarChart3,
  Bell,
  RefreshCw,
  Lightbulb,
} from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

const teamRoles = [
  { role: "Owner / GM", focus: "Strategy, client relationships, P&L oversight" },
  { role: "Office Manager", focus: "Scheduling, admin, vendor coordination" },
  { role: "Sales Rep", focus: "Lead gen, follow-ups, closing deals" },
  { role: "Bookkeeper", focus: "Invoicing, reconciliation, payroll" },
  { role: "Operations / Field", focus: "Service delivery, inventory, quality" },
];

const painAreas = [
  {
    icon: Calendar,
    title: "Appointment Tracking",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    before: {
      headline: "Before: Manual Chaos",
      problems: [
        "Appointments tracked in a mix of Google Calendar, sticky notes, and text messages",
        "Double-bookings happen 2–3× per week, costing ~$400/month in lost revenue",
        "No-shows average 15% because reminders are sent manually (or forgotten)",
        "Office manager spends 6 hrs/week just managing the calendar",
      ],
    },
    after: {
      headline: "After: Autonomous Scheduling Agent",
      solutions: [
        {
          action: "Centralized booking portal",
          detail: "Clients self-schedule via a branded link; agent enforces buffer times, staff availability, and service duration rules",
        },
        {
          action: "Smart reminder sequences",
          detail: "Agent sends SMS/email reminders at 48hr, 24hr, and 2hr marks — no-shows drop to under 5%",
        },
        {
          action: "Auto-reschedule on cancellation",
          detail: "When a slot opens, the agent contacts waitlisted clients and fills the gap within minutes",
        },
        {
          action: "Daily briefing",
          detail: "Each morning, every team member gets a personalized schedule digest with client context and prep notes",
        },
      ],
      savings: "6 hrs/week recovered · $400/mo revenue recaptured · 67% fewer no-shows",
    },
  },
  {
    icon: TrendingUp,
    title: "Sales & Lead Tracking",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    before: {
      headline: "Before: Leads Fall Through the Cracks",
      problems: [
        "Leads come from website forms, phone calls, referrals, and social media — tracked nowhere consistently",
        "Sales rep follows up on ~60% of leads; 40% are never contacted",
        "No visibility into pipeline value — owner guesses at monthly revenue forecast",
        "Follow-up timing is random: some leads get called in 5 minutes, others in 5 days",
      ],
    },
    after: {
      headline: "After: Lead Intelligence Agent",
      solutions: [
        {
          action: "Unified lead capture",
          detail: "Agent ingests leads from all channels (web, phone, social, referral) into a single pipeline with source attribution",
        },
        {
          action: "Instant response",
          detail: "Within 60 seconds of a new lead, agent sends a personalized acknowledgment and schedules the sales rep's callback",
        },
        {
          action: "Automated follow-up cadence",
          detail: "Agent runs a 7-touch sequence over 21 days — email, SMS, and task reminders — so no lead goes cold",
        },
        {
          action: "Pipeline dashboard",
          detail: "Real-time view of leads by stage, conversion rates, and projected revenue — updated automatically",
        },
      ],
      savings: "100% lead capture · 3× faster response time · 25–40% conversion lift",
    },
  },
  {
    icon: DollarSign,
    title: "Financial Reporting & Productivity",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    before: {
      headline: "Before: Flying Blind on Finances",
      problems: [
        "Bookkeeper manually enters data into QuickBooks from bank statements, receipts, and invoices",
        "Monthly P&L takes 3 days to produce and is 2–3 weeks stale by the time owner reviews it",
        "No connection between financial data and team productivity — can't tell if a busy week was profitable",
        "Tax prep is a 40-hour scramble every quarter because records are incomplete",
      ],
    },
    after: {
      headline: "After: Financial Intelligence Agent",
      solutions: [
        {
          action: "Auto-reconciliation",
          detail: "Agent matches bank transactions to invoices and expenses daily — bookkeeper reviews exceptions only (45 min/week vs 8 hrs)",
        },
        {
          action: "Real-time P&L",
          detail: "Live profit & loss by service line, client, or time period — owner checks the dashboard, not a spreadsheet",
        },
        {
          action: "Productivity-linked reporting",
          detail: "Agent correlates revenue per appointment, cost per job, and team utilization — surfaces which services actually make money",
        },
        {
          action: "Tax-ready books",
          detail: "Continuous categorization and documentation means quarter-end takes hours, not days",
        },
      ],
      savings: "7 hrs/week bookkeeping saved · Real-time visibility · 75% faster tax prep",
    },
  },
  {
    icon: Package,
    title: "Inventory & Supply Management",
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    before: {
      headline: "Before: Guesswork and Emergency Orders",
      problems: [
        "Inventory tracked in a spreadsheet updated weekly (at best) — counts are always off",
        "Emergency reorders at rush pricing happen 2–3× per month, adding $500–$800 in unnecessary costs",
        "No visibility into which supplies map to which jobs — can't accurately cost a project",
        "Dead stock accumulates because nobody tracks what's not moving",
      ],
    },
    after: {
      headline: "After: Inventory Optimization Agent",
      solutions: [
        {
          action: "Usage-linked tracking",
          detail: "Agent ties inventory consumption to completed jobs — every item used is logged against the project automatically",
        },
        {
          action: "Predictive reordering",
          detail: "Based on upcoming schedule and historical usage, agent generates purchase orders before you run low — at regular pricing",
        },
        {
          action: "Cost-per-job accuracy",
          detail: "True material costs flow into job profitability reports — no more guessing margins",
        },
        {
          action: "Dead stock alerts",
          detail: "Agent flags items with no movement in 60+ days and suggests markdown or return options",
        },
      ],
      savings: "$600/mo saved on rush orders · Accurate job costing · Zero stockouts",
    },
  },
  {
    icon: Target,
    title: "Profitability Strategy",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    before: {
      headline: "Before: Busy but Not Profitable",
      problems: [
        "The team is always busy, but the bank account doesn't reflect it",
        "Owner can't identify which clients, services, or team members drive the most profit",
        "Pricing is based on gut feel and competitor copying — not actual cost data",
        "Growth decisions (hire someone? add a service? raise prices?) are made on intuition, not evidence",
      ],
    },
    after: {
      headline: "After: Profitability Strategy Agent",
      solutions: [
        {
          action: "Service profitability ranking",
          detail: "Agent calculates true margin on every service (including labor, materials, overhead) and ranks them — you may discover your most popular service is your least profitable",
        },
        {
          action: "Client value scoring",
          detail: "Agent scores clients on lifetime value, payment reliability, and service frequency — helps focus retention efforts on the right accounts",
        },
        {
          action: "Pricing optimization",
          detail: "Based on actual cost data, agent models pricing scenarios — 'A 10% price increase on Service X would add $2,400/mo with minimal churn risk'",
        },
        {
          action: "Growth readiness signals",
          detail: "Agent monitors capacity utilization and flags when you're ready to hire, expand, or cut — backed by financial evidence, not gut feel",
        },
      ],
      savings: "Data-driven pricing · Clear growth roadmap · 15–25% margin improvement",
    },
  },
];

const implementationPhases = [
  {
    week: "Week 1–2",
    phase: "Connect & Assess",
    icon: RefreshCw,
    tasks: [
      "Audit current tools and data sources",
      "Connect calendar, accounting, email, and POS systems",
      "Map existing workflows for each team member",
      "Identify quick wins and highest-impact automations",
    ],
  },
  {
    week: "Week 3–4",
    phase: "Deploy Core Agents",
    icon: Zap,
    tasks: [
      "Launch Scheduling Agent with client booking portal",
      "Activate Lead Capture Agent across all channels",
      "Begin auto-reconciliation of financial records",
      "Team training on daily agent interactions",
    ],
  },
  {
    week: "Week 5–6",
    phase: "Expand & Optimize",
    icon: BarChart3,
    tasks: [
      "Deploy Inventory and Profitability Agents",
      "Fine-tune automation rules based on 4 weeks of data",
      "Launch real-time dashboards for owner and team leads",
      "Begin weekly automated business health reports",
    ],
  },
  {
    week: "Week 7–8",
    phase: "Scale & Strategize",
    icon: Lightbulb,
    tasks: [
      "Review profitability insights and adjust pricing",
      "Implement growth recommendations from Strategy Agent",
      "Document SOPs for agent-assisted workflows",
      "Transition to ongoing optimization and support",
    ],
  },
];

const SmallOfficeBlueprint = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <motion.div {...anim()}>
            <div className="inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-medium text-foreground mb-4">
              <Bot className="w-3.5 h-3.5" strokeWidth={1.5} />
              Case Study Blueprint
            </div>
          </motion.div>
          <motion.h2 {...anim(0.05)} className="text-2xl font-semibold text-foreground mb-2">
            The 5-Person Office: A Complete Agentic AI Transformation
          </motion.h2>
          <motion.p {...anim(0.1)} className="text-sm text-muted-foreground max-w-3xl">
            A practical blueprint for a small service business — 5 employees, $500K–$1.5M revenue —
            showing exactly how autonomous AI agents eliminate the operational friction that keeps
            small teams busy but not profitable.
          </motion.p>
        </div>

        {/* Team Overview */}
        <motion.div {...anim(0.12)} className="duck-card bg-card rounded-lg p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              The Team
            </h3>
          </div>
          <div className="grid sm:grid-cols-5 gap-3">
            {teamRoles.map((member) => (
              <div key={member.role} className="rounded-sm bg-surface-sunken p-3">
                <p className="text-xs font-semibold text-foreground mb-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-sm bg-destructive/5 border border-destructive/10 p-3">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-destructive">The core problem:</span> Every person wears multiple hats.
              Admin work consumes 30–40% of each person's day — time that should go to revenue-generating activities.
              The business is leaving <span className="font-semibold text-foreground">$8K–$15K/month on the table</span> in
              lost productivity, missed leads, and pricing inefficiency.
            </p>
          </div>
        </motion.div>

        {/* Pain Areas — Before & After */}
        <div className="space-y-8 mb-12">
          {painAreas.map((area, i) => (
            <motion.div key={area.title} {...anim(i * 0.04)} className="duck-card bg-card rounded-lg overflow-hidden">
              {/* Area Header */}
              <div className={`px-6 pt-6 pb-4 flex items-center gap-3 border-b border-foreground/5`}>
                <div className={`rounded-sm p-2 ${area.bgColor} ${area.color} shrink-0`}>
                  <area.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
              </div>

              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-foreground/5">
                {/* Before */}
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-destructive mb-3">
                    {area.before.headline}
                  </p>
                  <ul className="space-y-2.5">
                    {area.before.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-destructive/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <p className="text-xs text-muted-foreground leading-relaxed">{problem}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-6 bg-surface-sunken/50">
                  <p className={`text-xs font-medium uppercase tracking-wider ${area.color} mb-3`}>
                    {area.after.headline}
                  </p>
                  <ul className="space-y-3">
                    {area.after.solutions.map((sol) => (
                      <li key={sol.action} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{sol.action}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{sol.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-4 rounded-sm ${area.bgColor} px-3 py-2`}>
                    <p className={`text-xs font-semibold ${area.color}`}>
                      <Zap className="w-3 h-3 inline mr-1" strokeWidth={1.5} />
                      {area.after.savings}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <motion.div {...anim(0.1)} className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            8-Week Implementation Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {implementationPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                {...anim(0.12 + i * 0.05)}
                className="duck-card bg-card rounded-lg p-5 relative"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="rounded-sm p-1.5 bg-primary/10 text-primary">
                    <phase.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{phase.week}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-3">{phase.phase}</h4>
                <ul className="space-y-1.5">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-1.5">
                      <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-xs text-muted-foreground">{task}</p>
                    </li>
                  ))}
                </ul>
                {i < implementationPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 text-muted-foreground/30">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Summary */}
        <motion.div {...anim(0.15)} className="duck-card bg-card rounded-lg p-6 border-l-2 border-success/30">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Projected ROI for a 5-Person Office
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { label: "Time Recovered", value: "20+ hrs/week", sub: "Across all 5 team members" },
              { label: "Revenue Recaptured", value: "$3K–$5K/mo", sub: "From missed leads & no-shows" },
              { label: "Cost Reduction", value: "$1.5K–$2K/mo", sub: "Rush orders, errors, manual work" },
              { label: "Margin Improvement", value: "15–25%", sub: "Data-driven pricing & efficiency" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-sm bg-surface-sunken p-4 text-center">
                <p className="text-lg font-semibold text-success">{stat.value}</p>
                <p className="text-xs font-medium text-foreground mt-0.5">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-foreground/5">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Investment: $2,500–$4,000/mo</span> ·
              Typical payback period: 6–8 weeks · No long-term contracts required
            </p>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
              Get Your Custom Blueprint
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmallOfficeBlueprint;
