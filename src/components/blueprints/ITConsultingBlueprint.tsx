import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Laptop,
  Calendar,
  TrendingUp,
  DollarSign,
  FileText,
  Target,
  RefreshCw,
  Zap,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Laptop,
  badgeLabel: "Industry Blueprint: IT & Technology Consulting",
  badgeColor: "bg-accent/10",
  title: "The IT Consulting Firm: An Agentic AI Transformation",
  description:
    "A small MSP or IT consultancy — a principal consultant, 1–2 technicians, a project coordinator, and a bookkeeper — generating $500K–$2M in revenue but firefighting tickets, undercharging on projects, losing clients to bigger firms, and struggling to transition from break-fix to managed services.",
  teamLabel: "The Firm",
  teamRoles: [
    { role: "Principal / Owner", focus: "Architecture, client strategy, sales, vendor relationships" },
    { role: "Senior Technician", focus: "Complex issues, server/cloud management, security" },
    { role: "Help Desk / Jr Tech", focus: "Tier 1 tickets, onsite visits, user support" },
    { role: "Project Coordinator", focus: "Scheduling, client communication, SOW tracking" },
    { role: "Bookkeeper", focus: "Time billing, recurring invoices, vendor AP, collections" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The IT consulting reality:</span> Break-fix revenue is unpredictable and shrinking. Managed services pricing is often too low because labor hours are underestimated. Senior techs spend 40% of time on Tier 1 issues that could be automated. Project scope creep is endemic — "quick" requests balloon into unbilled hours. The firm is leaving{" "}
      <span className="font-semibold text-foreground">$6K–$12K/month on the table</span> in underpriced contracts, ticket escalation waste, and scope creep.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Ticket Management & Technician Dispatch",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Senior Techs Resetting Passwords",
        problems: [
          "No ticket triage — Tier 1 issues (password resets, printer jams) escalate to senior techs, wasting $80–$120/hr labor",
          "Onsite dispatch is inefficient — technician drives 45 min for a 10-min fix that could've been remote",
          "SLA response times are missed because there's no automated priority routing",
          "Clients submit issues via email, phone, text, and Slack — tickets get lost or duplicated",
        ],
      },
      after: {
        headline: "After: IT Service Desk Agent",
        solutions: [
          { action: "Intelligent ticket triage", detail: "Agent categorizes and routes tickets by complexity, urgency, and required skill level — Tier 1 auto-resolved or assigned to Jr tech" },
          { action: "Remote-first resolution", detail: "Agent attempts automated fixes (password resets, software installs, restart services) before assigning a human — 30% of tickets resolved without technician" },
          { action: "SLA monitoring & escalation", detail: "Agent tracks response and resolution times, auto-escalates at thresholds, and notifies clients proactively" },
          { action: "Unified intake portal", detail: "Agent consolidates all channels into a single ticketing system with auto-acknowledgment — zero lost requests" },
        ],
        savings: "30% auto-resolved tickets · Sr tech time protected · SLAs always met",
      },
    },
    {
      icon: TrendingUp,
      title: "Managed Services Pricing & Contract Management",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Losing Money on Every Contract",
        problems: [
          "Managed services contracts priced on device count but actual labor varies wildly — some clients cost 3× others",
          "No tracking of actual hours spent per client against contract value — profitability is a mystery",
          "Contract renewals are handled reactively — clients leave without negotiation because nobody started the conversation",
          "Break-fix clients get the same attention as managed clients — no service differentiation",
        ],
      },
      after: {
        headline: "After: MSP Contract Agent",
        solutions: [
          { action: "Per-client labor tracking", detail: "Agent monitors actual hours and costs per managed client against contract value — flags unprofitable agreements immediately" },
          { action: "Right-size pricing", detail: "Agent models optimal pricing based on device count, ticket volume, and historical labor — new contracts are profitable from day one" },
          { action: "Renewal pipeline", detail: "Agent initiates renewal conversations 90 days out with data-backed value reports — retention jumps to 95%" },
          { action: "Service tier enforcement", detail: "Agent ensures managed clients get priority response while break-fix clients are billed appropriately" },
        ],
        savings: "Profitable contracts · 95% retention · Data-backed pricing",
      },
    },
    {
      icon: FileText,
      title: "Documentation & Knowledge Management",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Knowledge Locked in One Person's Head",
        problems: [
          "Client network documentation is outdated or nonexistent — new techs can't service clients without hand-holding",
          "Runbooks for common issues don't exist — every tech solves the same problems differently",
          "When the senior tech is unavailable, tickets sit unresolved because nobody knows the client's environment",
          "Vendor credentials, license keys, and warranty info scattered across emails and sticky notes",
        ],
      },
      after: {
        headline: "After: IT Knowledge Agent",
        solutions: [
          { action: "Automated network documentation", detail: "Agent maintains up-to-date network maps, device inventories, and configuration records for every client — always current" },
          { action: "Runbook generation", detail: "Agent creates step-by-step resolution guides from closed tickets — builds a searchable knowledge base automatically" },
          { action: "Client environment profiles", detail: "Agent maintains detailed profiles (software stack, special configs, key contacts) — any tech can service any client" },
          { action: "Credential and license vault", detail: "Agent tracks all vendor credentials, license expirations, and warranty dates — automated renewal reminders" },
        ],
        savings: "Any tech services any client · Automated documentation · Zero knowledge loss",
      },
    },
    {
      icon: DollarSign,
      title: "Project Scoping & Financial Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Projects Always Go Over Budget",
        problems: [
          "Project estimates are based on gut feel — actual hours exceed estimates by 30–50% on average",
          "Scope creep on projects is rampant — 'While you're here, can you also...' adds unbilled hours",
          "Time tracking is honor-system — techs log hours at end of day (or week) from memory",
          "Monthly billing for managed services goes out late — cash flow is lumpy and unpredictable",
        ],
      },
      after: {
        headline: "After: IT Financial Agent",
        solutions: [
          { action: "Historical-based estimation", detail: "Agent analyzes past projects by type and complexity to generate accurate estimates — reducing overruns to under 10%" },
          { action: "Scope change management", detail: "Agent detects out-of-scope requests and generates change orders before work begins — every hour is accounted for" },
          { action: "Automated time capture", detail: "Agent tracks time from ticket assignment to resolution — accurate billing without manual entry" },
          { action: "Recurring billing automation", detail: "Agent generates and sends managed services invoices on the 1st of every month — zero late invoices" },
        ],
        savings: "Under 10% project overruns · Zero unbilled hours · Predictable cash flow",
      },
    },
    {
      icon: Target,
      title: "vCIO Services & Strategic Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Stuck as a Vendor, Not a Partner",
        problems: [
          "Clients see the firm as a break-fix vendor, not a strategic partner — replaced easily by any other MSP",
          "No technology roadmap offering — clients make IT decisions without guidance and call when things break",
          "Cybersecurity services are reactive — wait for an incident instead of proactively selling protection",
          "Revenue growth is linear — more clients = more techs, no leverage in the model",
        ],
      },
      after: {
        headline: "After: Strategic IT Agent",
        solutions: [
          { action: "Automated technology assessments", detail: "Agent generates client technology scorecards covering infrastructure age, security posture, and cloud readiness — positions firm as strategic advisor" },
          { action: "Technology roadmap generation", detail: "Agent creates 12-month IT roadmaps with budget projections — clients plan and budget for upgrades proactively" },
          { action: "Security service packaging", detail: "Agent bundles security assessments, training, and monitoring into tiered offerings — recurring security revenue" },
          { action: "Revenue per endpoint optimization", detail: "Agent models service stack additions (backup, security, compliance) that increase revenue per device by 40–60%" },
        ],
        savings: "Strategic partner positioning · 40–60% revenue per endpoint lift · Recurring security revenue",
      },
    },
  ],
  timelineTitle: "8-Week IT Consulting Firm Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Firm Assessment", icon: RefreshCw, tasks: ["Audit PSA, RMM, documentation, and billing systems", "Map ticket flow from intake through resolution and billing", "Analyze client profitability across managed and break-fix", "Identify top revenue leaks (usually escalation waste, scope creep, pricing)"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Service Desk Agent with intelligent triage", "Activate automated time capture and SLA monitoring", "Deploy client documentation automation", "Train technicians on agent-assisted workflows"] },
    { week: "Week 5–6", phase: "Contracts & Finance", icon: BarChart3, tasks: ["Deploy MSP Contract Agent with profitability tracking", "Launch scope change management for projects", "Activate recurring billing automation", "Begin client technology assessments"] },
    { week: "Week 7–8", phase: "Strategic Growth", icon: Lightbulb, tasks: ["Deploy technology roadmap generation for key clients", "Launch security service packages", "Model revenue per endpoint optimization", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for a Small IT Consulting Firm",
  roiStats: [
    { label: "Tickets Auto-Resolved", value: "30%", sub: "Automated Tier 1 resolution" },
    { label: "Project Overruns", value: "−75%", sub: "Historical estimation and scope control" },
    { label: "Revenue Per Endpoint", value: "+40–60%", sub: "Security and compliance service stacking" },
    { label: "Sr Tech Time Protected", value: "15+ hrs/week", sub: "Intelligent triage and routing" },
  ],
  investment: "Investment: $2,500–$4,500/mo",
  ctaLabel: "Get Your IT Consulting Blueprint",
  bgClass: "bg-surface-sunken",
};

const ITConsultingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default ITConsultingBlueprint;
