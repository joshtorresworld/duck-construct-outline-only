import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { SprayCan, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: SprayCan,
  badgeLabel: "Industry Blueprint: Cleaning Services",
  badgeColor: "bg-success/10",
  title: "The Cleaning Business: An Agentic AI Transformation",
  description: "A residential or commercial cleaning company — 5–20 crew members, 1–2 dispatchers, $300K–$1.5M revenue — drowning in scheduling, route inefficiency, and inconsistent quality with high crew turnover.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Manager", focus: "Sales, quality control, client relations" },
    { role: "Dispatcher", focus: "Crew scheduling, routing, supply management" },
    { role: "Crew Leads (2–4)", focus: "On-site supervision, training, quality" },
    { role: "Cleaners (5–15)", focus: "Residential and commercial cleaning" },
    { role: "Office Admin", focus: "Billing, payroll, client comms" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The cleaning reality:</span> Dispatch spends 10+ hours/week on scheduling and routing. Drive time between jobs wastes 15–20% of crew hours. Quality is inconsistent because checklists are in people's heads. Client churn runs 8–12%/month. The company is leaving <span className="font-semibold text-foreground">$4K–$10K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Crew Scheduling & Route Optimization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Dispatch Chaos", problems: ["Scheduling 15–40 jobs/day across multiple crews is manual whiteboard work", "No route optimization — crews zigzag across town wasting fuel and time", "Last-minute cancellations leave crews idle with no backfill system", "Crew skill matching (deep clean vs. standard) is based on memory"] },
      after: { headline: "After: Dispatch & Routing Agent", solutions: [{ action: "AI-optimized routing", detail: "Agent clusters jobs geographically and sequences routes — cuts drive time by 25–30%" }, { action: "Smart crew matching", detail: "Agent assigns crews based on skills, certifications, client preferences, and job requirements" }, { action: "Auto-backfill", detail: "Cancellations instantly offered to nearby prospects or moved to waitlisted clients" }, { action: "Real-time tracking", detail: "GPS-based ETAs, job completion tracking, and automated client notifications" }], savings: "25% less drive time · Auto-backfill · Real-time visibility" },
    },
    { icon: TrendingUp, title: "Quality Control & Consistency", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Quality is a Gamble", problems: ["No standardized checklists — quality depends on who shows up", "Client complaints only surface after the fact via angry calls", "New crew training is shadowing for a day then 'figure it out'", "No photographic evidence of completed work for disputes"] },
      after: { headline: "After: Quality Assurance Agent", solutions: [{ action: "Digital checklists", detail: "Job-specific checklists on crew phones — each task verified with photo evidence before checkout" }, { action: "Real-time quality alerts", detail: "Agent flags incomplete checklists or unusual completion times for manager review" }, { action: "Client feedback loops", detail: "Automated post-service surveys — issues flagged immediately for resolution before they become complaints" }, { action: "Training automation", detail: "New crews get guided checklists with photo examples of quality standards for each task" }], savings: "Consistent quality · Photo evidence · 60% fewer complaints" },
    },
    { icon: DollarSign, title: "Revenue & Client Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Revolving Door of Clients", problems: ["Client churn runs 8–12%/month — constantly replacing lost accounts", "No recurring revenue model — most clients are one-off or irregular", "Estimating new jobs is inconsistent — some underpriced, some lost on price", "Invoice collection averages 25+ days for commercial accounts"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Subscription billing", detail: "Agent manages weekly/biweekly/monthly recurring schedules with auto-billing — predictable revenue" }, { action: "Churn prediction", detail: "Agent monitors service frequency changes and satisfaction scores — flags at-risk clients for proactive outreach" }, { action: "Smart estimating", detail: "Agent generates accurate estimates based on sq footage, job type, and historical data — consistent pricing" }, { action: "Automated collections", detail: "Agent handles invoicing, payment reminders, and escalation — DSO drops to under 10 days" }], savings: "Churn cut to 3–5% · Predictable revenue · <10 day collections" },
    },
    { icon: Target, title: "Growth & Market Expansion", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Growing by Accident", problems: ["No systematic lead generation beyond yard signs and Thumbtack", "Estimate requests take 24–48 hours to respond to — prospects move on", "No upsell system for add-on services (windows, carpets, deep clean)", "Seasonal dips (summer) cause cash flow crises"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Instant estimate responses", detail: "Agent sends automated estimates within 5 minutes of inquiry — before competitors respond" }, { action: "Review engine", detail: "Automated review requests after every service — builds 5-star reputation on Google" }, { action: "Smart upselling", detail: "Agent recommends seasonal add-ons based on client history — 'Spring deep clean?' at the right time" }, { action: "Referral automation", detail: "Agent manages client referral program with automatic credits and tracking" }], savings: "5-min response time · 5× reviews · Seasonal revenue smoothing" },
    },
  ],
  timelineTitle: "8-Week Cleaning Business Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Operations Audit", icon: RefreshCw, tasks: ["Map current scheduling, routing, and quality processes", "Audit client retention and revenue patterns", "Identify drive time waste and capacity gaps", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch AI-optimized routing and dispatch", "Activate digital checklists with photo verification", "Deploy automated scheduling and client notifications", "Train dispatchers and crew leads"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Launch subscription billing for recurring clients", "Deploy churn prediction and re-engagement", "Activate smart estimating engine", "Begin automated collections"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch instant estimate responses", "Deploy review collection and referral program", "Activate seasonal upselling engine", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Cleaning Business",
  roiStats: [
    { label: "Drive Time Saved", value: "25–30%", sub: "AI-optimized routing" },
    { label: "Client Retention", value: "2×", sub: "From 88% to 97% monthly" },
    { label: "Revenue Lift", value: "$4–10K/mo", sub: "Capacity recovery and upsells" },
    { label: "Dispatch Time", value: "−70%", sub: "From 10+ to 3 hrs/week" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Cleaning Blueprint",
};

const CleaningServicesBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default CleaningServicesBlueprint;
