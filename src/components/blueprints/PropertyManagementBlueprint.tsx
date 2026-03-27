import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Building, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Building,
  badgeLabel: "Industry Blueprint: Property Management",
  badgeColor: "bg-success/10",
  title: "The Property Management Company: An Agentic AI Transformation",
  description: "A property management firm — managing 50–500 units, $500K–$5M revenue — overwhelmed by tenant communications, maintenance coordination, lease management, and collections across a growing portfolio.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Portfolio Manager", focus: "Owner relations, strategy, acquisitions" },
    { role: "Property Managers (1–4)", focus: "Tenant relations, inspections, lease enforcement" },
    { role: "Maintenance Coordinator", focus: "Work orders, vendor management, turns" },
    { role: "Leasing Agent(s)", focus: "Showings, applications, lease signing" },
    { role: "Admin / Bookkeeper", focus: "Rent collection, AP/AR, owner reporting" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The property management reality:</span> Each PM manages 75–150 units and gets 200+ tenant communications per week. Maintenance coordination averages 15+ hours/week. Vacancy costs $50–$150/day per unit. Late rent collection averages 8–12% of tenants monthly. The firm is leaving <span className="font-semibold text-foreground">$10K–$30K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Tenant Communication & Service Requests", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Drowning in Tenant Requests", problems: ["200+ tenant communications per PM per week — calls, texts, emails", "Maintenance requests come in via 5+ channels — things get lost", "After-hours emergencies route to PM's personal phone", "No categorization or prioritization — leaking faucet treated same as gas leak"] },
      after: { headline: "After: Tenant Communication Agent", solutions: [{ action: "Unified communication portal", detail: "All tenant requests through one channel — auto-categorized, prioritized, and routed" }, { action: "AI triage", detail: "Agent classifies requests by urgency — emergencies escalated immediately, routine items queued" }, { action: "Self-service answers", detail: "Agent handles 60% of inquiries automatically — lease questions, payment info, community rules" }, { action: "After-hours management", detail: "Agent handles after-hours requests — true emergencies dispatched, non-urgent queued for morning" }], savings: "60% fewer PM interruptions · Smart triage · 24/7 coverage" },
    },
    { icon: TrendingUp, title: "Maintenance & Vendor Coordination", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Maintenance Black Hole", problems: ["Work orders tracked in email/texts — no status visibility", "Vendor scheduling requires 5+ calls per job", "Unit turns take 7–14 days — every day is lost rent", "No preventive maintenance — everything is reactive and expensive"] },
      after: { headline: "After: Maintenance Agent", solutions: [{ action: "Digital work order management", detail: "Tenants submit with photos — agent creates work order, assigns vendor, schedules, and tracks to completion" }, { action: "Vendor auto-dispatch", detail: "Agent matches work orders to preferred vendors by trade, availability, and property — schedules automatically" }, { action: "Turn acceleration", detail: "Agent creates turn checklists, schedules trades in sequence, and tracks completion — turns in 3–5 days" }, { action: "Preventive maintenance scheduling", detail: "Agent manages seasonal maintenance (HVAC, gutter, pest) across entire portfolio — prevents expensive emergencies" }], savings: "3–5 day turns · Auto vendor dispatch · Preventive maintenance" },
    },
    { icon: DollarSign, title: "Collections & Financial Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Chasing Rent Every Month", problems: ["Late payments average 8–12% of tenants — manual follow-up required", "Owner reporting takes 5+ hours/month per owner", "No visibility into portfolio-wide financial trends", "Lease renewal timing is missed — tenants go month-to-month at lower rates"] },
      after: { headline: "After: Financial Agent", solutions: [{ action: "Automated collections", detail: "Agent sends payment reminders, late notices, and payment plan options on schedule — late payments drop to 2–3%" }, { action: "Owner reporting automation", detail: "Agent generates monthly owner statements with income, expenses, maintenance, and occupancy — delivered automatically" }, { action: "Portfolio analytics", detail: "Dashboard shows occupancy rates, revenue per unit, maintenance costs, and NOI trends across portfolio" }, { action: "Lease renewal management", detail: "Agent initiates renewal conversations 90 days out with market-rate adjustments — prevents month-to-month drift" }], savings: "Late payments to 2–3% · Automated owner reports · Smart renewals" },
    },
    { icon: Target, title: "Leasing & Vacancy Reduction", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Vacancies Bleed Cash", problems: ["Average vacancy costs $50–$150/day — turns take too long", "Showing scheduling is manual and time-consuming", "Application processing takes 3–5 days", "No pre-leasing system — marketing starts after move-out"] },
      after: { headline: "After: Leasing Agent", solutions: [{ action: "Pre-leasing automation", detail: "Agent begins marketing 60 days before known move-outs — units often pre-leased before they're vacant" }, { action: "Self-service showings", detail: "Agent manages showing schedules, smart locks, and follow-up — prospects tour on their schedule" }, { action: "Instant application processing", detail: "Agent runs background, credit, and employment verification — qualified applicants approved same-day" }, { action: "Lead nurture", detail: "Agent follows up with prospects who toured but didn't apply — conversion rate doubles" }], savings: "Pre-leased units · Same-day approvals · 50% less vacancy days" },
    },
  ],
  timelineTitle: "8-Week Property Management Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Portfolio Assessment", icon: RefreshCw, tasks: ["Audit tenant communication and maintenance workflows", "Analyze vacancy patterns and collection rates", "Map vendor relationships and turn processes", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch tenant communication portal with AI triage", "Activate digital work order management", "Deploy automated collections sequence", "Train PMs on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy vendor auto-dispatch and turn acceleration", "Launch owner reporting automation", "Activate preventive maintenance scheduling", "Begin portfolio analytics dashboards"] },
    { week: "Week 7–8", phase: "Maximize Revenue", icon: Lightbulb, tasks: ["Launch pre-leasing and showing automation", "Deploy lease renewal management", "Activate lead nurture sequences", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Property Management Firm",
  roiStats: [
    { label: "PM Capacity", value: "2×", sub: "Manage 150–300 units per PM" },
    { label: "Vacancy Days", value: "−50%", sub: "Pre-leasing and faster turns" },
    { label: "Late Payments", value: "8→2%", sub: "Automated collections" },
    { label: "Revenue Impact", value: "$10–30K/mo", sub: "Occupancy + collections + efficiency" },
  ],
  investment: "Investment: $2,000–$8,000/mo",
  ctaLabel: "Get Your Property Management Blueprint",
};

const PropertyManagementBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default PropertyManagementBlueprint;
