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
  HardHat,
  CloudRain,
  Ruler,
  Truck,
  FileText,
} from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

const teamRoles = [
  { role: "Owner / Estimator", focus: "Bids, client meetings, P&L, crew oversight" },
  { role: "Office Manager", focus: "Scheduling, permits, insurance certs, AR/AP" },
  { role: "Sales / Inspector", focus: "Roof inspections, storm damage claims, closing jobs" },
  { role: "Crew Lead (Field)", focus: "Job execution, material staging, quality control" },
  { role: "Laborer / Helper", focus: "Tear-off, installation, cleanup, material handling" },
];

const painAreas = [
  {
    icon: Calendar,
    title: "Job Scheduling & Weather Coordination",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    before: {
      headline: "Before: Weather Wrecks the Schedule",
      problems: [
        "Jobs scheduled via text chains and a whiteboard — rain pushes everything and nobody knows the new order",
        "Crew shows up to a jobsite only to find materials weren't delivered, costing $300–$500/day in lost labor",
        "Homeowners call the office 3–4× asking 'When is my roof getting done?' — office manager spends 5+ hrs/week on status updates",
        "No buffer days built in — one rain day creates a 2-week cascade of rescheduling chaos",
      ],
    },
    after: {
      headline: "After: Weather-Aware Scheduling Agent",
      solutions: [
        {
          action: "7-day weather integration",
          detail: "Agent monitors hourly forecasts and auto-adjusts the schedule 48hrs ahead — crew and homeowner are notified instantly",
        },
        {
          action: "Material-to-job sync",
          detail: "Agent confirms supplier delivery before locking a job date — no more crew arrivals without shingles on site",
        },
        {
          action: "Homeowner status portal",
          detail: "Clients get a branded link with real-time job status, photos, and estimated completion — inbound calls drop 80%",
        },
        {
          action: "Smart buffer scheduling",
          detail: "Agent builds rain-day buffers based on historical weather patterns for your region, keeping the pipeline flowing",
        },
      ],
      savings: "5 hrs/week recovered · $1,200/mo saved on idle crew · 80% fewer status calls",
    },
  },
  {
    icon: TrendingUp,
    title: "Lead Capture & Storm Response",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    before: {
      headline: "Before: Storm Leads Vanish in 48 Hours",
      problems: [
        "After a hailstorm, 50+ leads come in via phone, door knocks, and Facebook — tracked on paper or not at all",
        "Sales rep can only inspect 4–5 roofs per day; by day 3, homeowners have already signed with a competitor",
        "No system to prioritize leads — a $25K re-roof and a $500 gutter repair get the same follow-up (if any)",
        "Insurance claim paperwork is manual — photos, measurements, and Xactimate estimates take 2–3 hours per file",
      ],
    },
    after: {
      headline: "After: Storm Response Agent",
      solutions: [
        {
          action: "Instant lead triage",
          detail: "Agent scores every inbound lead by damage severity, roof age, and insurance likelihood — high-value jobs get contacted within 15 minutes",
        },
        {
          action: "Automated inspection scheduling",
          detail: "Agent books the sales rep's calendar in optimized geographic clusters — 6–8 inspections/day instead of 4–5",
        },
        {
          action: "Claim documentation automation",
          detail: "Agent compiles photos, measurements, and damage notes into insurance-ready packets — 45 min/claim vs 2–3 hours",
        },
        {
          action: "Drip follow-up sequences",
          detail: "For leads not ready to sign, agent runs a 30-day nurture sequence with storm damage education and urgency messaging",
        },
      ],
      savings: "100% lead capture · 40% more inspections/day · 60% faster claim filing",
    },
  },
  {
    icon: DollarSign,
    title: "Estimating, Invoicing & Cash Flow",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    before: {
      headline: "Before: Cash Flow is a Guessing Game",
      problems: [
        "Estimates built manually in Excel — material prices are outdated, and the same roof gets quoted differently by two people",
        "Invoices go out 1–2 weeks after job completion because the office manager is buried in permits and scheduling",
        "Average days-to-pay is 45+ days; $30K–$60K is always sitting in receivables",
        "No visibility into job profitability until the bookkeeper reconciles months later — some jobs lose money without anyone knowing",
      ],
    },
    after: {
      headline: "After: Financial Operations Agent",
      solutions: [
        {
          action: "Live material pricing",
          detail: "Agent pulls current pricing from your top 3 suppliers and auto-updates estimate templates — no more stale quotes",
        },
        {
          action: "Same-day invoicing",
          detail: "When crew lead marks a job complete, agent generates and sends the invoice within 2 hours — with photos attached",
        },
        {
          action: "Collections automation",
          detail: "Agent sends payment reminders at 7, 14, and 30 days with escalating urgency — average days-to-pay drops to 18",
        },
        {
          action: "Real-time job costing",
          detail: "Labor hours, material costs, and dump fees flow into a per-job P&L — you know margin before the crew leaves the site",
        },
      ],
      savings: "$40K freed from receivables · Same-day invoicing · True job-level margins",
    },
  },
  {
    icon: Package,
    title: "Materials, Equipment & Waste",
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    before: {
      headline: "Before: Overstocked, Under-Prepared",
      problems: [
        "Shingle orders are based on rough squares — over-orders waste $200–$400/job, under-orders delay completion by a day",
        "Nobody tracks what's on the trailer vs what's in the warehouse — theft and loss go unnoticed for weeks",
        "Dump fees are unpredictable because tear-off waste isn't estimated; some jobs eat $800 in unexpected disposal costs",
        "Emergency material runs to the supply house cost 2+ hours of crew downtime per week",
      ],
    },
    after: {
      headline: "After: Materials Intelligence Agent",
      solutions: [
        {
          action: "Measurement-based ordering",
          detail: "Agent calculates exact material needs from roof measurements (EagleView/hover data integration) with a 5% waste factor — no more guessing squares",
        },
        {
          action: "Trailer inventory tracking",
          detail: "Agent maintains a running inventory of what's loaded on each crew's trailer — restock alerts go out the night before",
        },
        {
          action: "Waste forecasting",
          detail: "Based on roof layers, pitch, and material type, agent estimates dump costs before the job starts — built into the quote",
        },
        {
          action: "Supplier price matching",
          detail: "Agent compares pricing across ABC Supply, SRS, and local distributors — auto-selects best value per order",
        },
      ],
      savings: "$300/job saved on materials · Zero emergency runs · Accurate waste costing",
    },
  },
  {
    icon: Target,
    title: "Growth Strategy & Seasonal Planning",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    before: {
      headline: "Before: Feast or Famine",
      problems: [
        "Spring and summer are slammed — 6-week backlogs, overtime, and quality issues from rushing",
        "Winter is dead — crew gets laid off or sits idle, and fixed costs eat into annual profit",
        "Owner has no idea which job types (insurance restoration vs retail re-roof vs repairs) actually make the most money",
        "Growth decisions are reactive — hire when overwhelmed, cut when slow — instead of planned",
      ],
    },
    after: {
      headline: "After: Roofing Strategy Agent",
      solutions: [
        {
          action: "Revenue mix analysis",
          detail: "Agent breaks down margin by job type — you may discover insurance jobs gross 42% while retail re-roofs only gross 28%",
        },
        {
          action: "Seasonal demand modeling",
          detail: "Agent forecasts monthly demand based on historical data, storm patterns, and local housing trends — hire and stock accordingly",
        },
        {
          action: "Winter revenue planning",
          detail: "Agent identifies off-season opportunities: gutter installs, interior work referral partnerships, maintenance contracts — smoothing annual revenue",
        },
        {
          action: "Crew capacity optimization",
          detail: "Agent models when you need a second crew vs overtime vs subcontractors — based on pipeline, not gut feel",
        },
      ],
      savings: "Year-round revenue stability · Data-driven hiring · 15–30% margin improvement",
    },
  },
];

const implementationPhases = [
  {
    week: "Week 1–2",
    phase: "Jobsite & Tool Audit",
    icon: RefreshCw,
    tasks: [
      "Map current workflow from lead → estimate → install → collect",
      "Connect CRM, accounting, supplier portals, and measurement tools",
      "Identify top 3 revenue leaks (usually scheduling, collections, material waste)",
      "Set up weather API integration for your service area",
    ],
  },
  {
    week: "Week 3–4",
    phase: "Deploy Core Agents",
    icon: Zap,
    tasks: [
      "Launch Weather-Aware Scheduling with homeowner portal",
      "Activate Storm Response Lead Agent across all channels",
      "Begin same-day invoicing and collections automation",
      "Train office manager and sales rep on daily agent workflow",
    ],
  },
  {
    week: "Week 5–6",
    phase: "Expand to Field Ops",
    icon: BarChart3,
    tasks: [
      "Deploy Materials Intelligence Agent with supplier integration",
      "Launch real-time job costing dashboard for owner",
      "Implement trailer inventory tracking for crew leads",
      "Begin automated weekly profitability reports",
    ],
  },
  {
    week: "Week 7–8",
    phase: "Optimize & Scale",
    icon: Lightbulb,
    tasks: [
      "Review job-type profitability and adjust pricing strategy",
      "Deploy Seasonal Demand Agent for Q2/Q3 planning",
      "Implement crew capacity modeling",
      "Transition to ongoing optimization with monthly strategy calls",
    ],
  },
];

const RoofingBlueprint = () => {
  return (
    <section className="py-16 bg-surface-sunken">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <motion.div {...anim()}>
            <div className="inline-flex items-center gap-1.5 rounded-sm bg-warning/10 px-2.5 py-1 text-xs font-medium text-foreground mb-4">
              <HardHat className="w-3.5 h-3.5" strokeWidth={1.5} />
              Industry Blueprint: Roofing &amp; Construction
            </div>
          </motion.div>
          <motion.h2 {...anim(0.05)} className="text-2xl font-semibold text-foreground mb-2">
            The 5-Person Roofing Company: An Agentic AI Transformation
          </motion.h2>
          <motion.p {...anim(0.1)} className="text-sm text-muted-foreground max-w-3xl">
            A roofing contractor with one crew, one office person, and a sales rep doing inspections —
            running $800K–$2M in revenue but leaving $10K–$20K/month on the table through scheduling
            chaos, missed storm leads, slow collections, and material waste. Here's how autonomous
            agents fix every one of those problems.
          </motion.p>
        </div>

        {/* Team Overview */}
        <motion.div {...anim(0.12)} className="duck-card bg-card rounded-lg p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              The Crew
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
              <span className="font-semibold text-destructive">The roofing reality:</span> Weather
              dictates everything. One rain day cascades into a week of chaos. The owner is on the
              roof half the day and doing estimates at the kitchen table until midnight. The office
              manager juggles permits, insurance certs, scheduling, and collections — for{" "}
              <span className="font-semibold text-foreground">
                every single job simultaneously
              </span>
              . Meanwhile, storm season brings a flood of leads that expire in 48 hours if you
              don't move fast enough.
            </p>
          </div>
        </motion.div>

        {/* Pain Areas — Before & After */}
        <div className="space-y-8 mb-12">
          {painAreas.map((area, i) => (
            <motion.div
              key={area.title}
              {...anim(i * 0.04)}
              className="duck-card bg-card rounded-lg overflow-hidden"
            >
              {/* Area Header */}
              <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-foreground/5">
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
                        <Clock
                          className="w-3.5 h-3.5 text-destructive/60 shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        <p className="text-xs text-muted-foreground leading-relaxed">{problem}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-6 bg-surface-sunken/50">
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${area.color} mb-3`}
                  >
                    {area.after.headline}
                  </p>
                  <ul className="space-y-3">
                    {area.after.solutions.map((sol) => (
                      <li key={sol.action} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-success shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{sol.action}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {sol.detail}
                          </p>
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
            8-Week Roofing Company Rollout
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
                      <ArrowRight
                        className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
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
        <motion.div
          {...anim(0.15)}
          className="duck-card bg-card rounded-lg p-6 border-l-2 border-success/30"
        >
          <h3 className="text-base font-semibold text-foreground mb-4">
            Projected ROI for a 5-Person Roofing Company
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              {
                label: "Crew Downtime Eliminated",
                value: "15+ hrs/week",
                sub: "Weather scheduling, material delays, status calls",
              },
              {
                label: "Revenue Recaptured",
                value: "$5K–$8K/mo",
                sub: "Faster storm response, zero missed leads",
              },
              {
                label: "Cash Flow Improvement",
                value: "$40K+",
                sub: "From 45-day to 18-day average collections",
              },
              {
                label: "Material Savings",
                value: "$300/job",
                sub: "Precision ordering, supplier price matching",
              },
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
              <span className="font-semibold text-foreground">Investment: $2,500–$4,000/mo</span>{" "}
              · Typical payback period: 4–6 weeks · Built for contractors, not corporations
            </p>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
              Get Your Roofing Blueprint
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoofingBlueprint;
