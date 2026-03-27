import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { HardHat, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: HardHat,
  badgeLabel: "Industry Blueprint: Construction & General Contracting",
  badgeColor: "bg-warning/10",
  title: "The General Contractor: An Agentic AI Transformation",
  description: "A general contractor or construction company — 15–100 employees, $2M–$30M revenue — fighting bid management complexity, subcontractor coordination chaos, change order disputes, and lien tracking nightmares.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / President", focus: "Business development, key relationships, strategy" },
    { role: "Project Managers (2–8)", focus: "Job oversight, scheduling, client communication" },
    { role: "Estimator(s)", focus: "Bid preparation, takeoffs, subcontractor pricing" },
    { role: "Superintendents", focus: "Field supervision, safety, quality, daily logs" },
    { role: "Office / Admin", focus: "AP/AR, payroll, lien waivers, compliance" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The GC reality:</span> Bid preparation takes 40–80 hours per project — win rate is 15–25%. Subcontractor coordination across 10–20 trades per job generates 100+ emails daily. Change orders average 10–15% of project value and are poorly documented. Lien waiver tracking is manual and one miss can hold up $100K+ in payment. The firm is leaving <span className="font-semibold text-foreground">$20K–$80K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Bid Management & Estimating", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: 80 Hours Per Bid", problems: ["Bid preparation takes 40–80 hours — at 15–25% win rate, most effort is wasted", "Subcontractor pricing requests sent individually — chasing responses for days", "Historical job cost data isn't systematically used to improve estimates", "Bid/no-bid decisions are gut-feel, not data-driven"] },
      after: { headline: "After: Bid Intelligence Agent", solutions: [{ action: "Bid/no-bid scoring", detail: "Agent analyzes project fit, competition, capacity, and historical win rate to recommend pursuit decisions" }, { action: "Automated sub pricing requests", detail: "Agent sends RFPs to qualified subs by trade, tracks responses, and compiles pricing automatically" }, { action: "Historical cost analysis", detail: "Agent references completed project costs to validate estimates — catches pricing errors before submission" }, { action: "Bid assembly automation", detail: "Agent compiles sub pricing, markup, schedule, and qualifications into professional bid packages" }], savings: "50% less bid prep time · Data-driven bid/no-bid · Higher win rate" },
    },
    { icon: TrendingUp, title: "Subcontractor Coordination", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: 100+ Emails Daily", problems: ["Coordinating 10–20 trades per project generates overwhelming communication", "Schedule changes require individually notifying every affected sub", "Subcontractor quality and reliability tracked only in people's heads", "RFI responses take days — field work stops while waiting"] },
      after: { headline: "After: Sub Coordination Agent", solutions: [{ action: "Centralized sub communication", detail: "Agent manages all subcontractor communication by project and trade — nothing gets lost" }, { action: "Schedule cascade updates", detail: "One schedule change auto-notifies all affected subs with updated dates and requirements" }, { action: "Sub performance tracking", detail: "Agent tracks quality, schedule adherence, safety, and change order rates by subcontractor" }, { action: "RFI management", detail: "Agent routes RFIs to the right person, tracks response deadlines, and escalates delays" }], savings: "80% less coordination email · Auto schedule updates · Sub scorecards" },
    },
    { icon: DollarSign, title: "Change Orders & Financial Control", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Change Orders Eat Profit", problems: ["Change orders average 10–15% of project value — many are undocumented", "Cost tracking lags 2–4 weeks behind actual spending", "Lien waiver tracking is manual — one miss holds up six-figure payments", "Job profitability unknown until project closeout"] },
      after: { headline: "After: Financial Control Agent", solutions: [{ action: "Real-time change order management", detail: "Agent documents scope changes instantly with cost impact, photos, and approval workflow" }, { action: "Live cost tracking", detail: "Agent tracks committed costs, actual spend, and projected final cost in real-time — no surprises" }, { action: "Lien waiver automation", detail: "Agent tracks, requests, and verifies lien waivers for every sub and supplier — automated before payment" }, { action: "Job profitability dashboards", detail: "Real-time margin by project, cost code, and trade — identify problems while there's time to fix them" }], savings: "Documented change orders · Real-time costs · Automated lien tracking" },
    },
    { icon: Target, title: "Safety & Compliance", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Safety is Paperwork", problems: ["Daily safety logs completed inconsistently or after the fact", "OSHA documentation scattered across job trailers", "Incident tracking is reactive — no trend analysis", "Sub insurance certificates expire without notice"] },
      after: { headline: "After: Safety Agent", solutions: [{ action: "Digital daily logs", detail: "Superintendents complete logs on mobile — weather, crew counts, activities, and safety observations captured in real-time" }, { action: "Safety trend analysis", detail: "Agent identifies patterns in near-misses and incidents — proactive safety improvements" }, { action: "Certificate of insurance tracking", detail: "Agent monitors sub COI expirations and automatically requests renewals — zero gaps" }, { action: "OSHA readiness", detail: "All safety records organized and instantly accessible — inspection readiness at all times" }], savings: "Real-time safety logs · COI auto-tracking · OSHA-ready always" },
    },
  ],
  timelineTitle: "8-Week Construction Firm Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Firm Assessment", icon: RefreshCw, tasks: ["Audit bid, project management, and financial processes", "Analyze job profitability and change order patterns", "Map subcontractor coordination workflow", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch bid intelligence and sub pricing automation", "Activate centralized sub communication", "Deploy digital daily logs and safety tracking", "Train PMs and supers on agent workflows"] },
    { week: "Week 5–6", phase: "Financial Control", icon: BarChart3, tasks: ["Deploy real-time change order management", "Launch live cost tracking dashboards", "Activate lien waiver automation", "Begin job profitability analytics"] },
    { week: "Week 7–8", phase: "Optimize & Scale", icon: Lightbulb, tasks: ["Launch sub performance scorecards", "Deploy RFI management system", "Activate COI tracking automation", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a General Contractor",
  roiStats: [
    { label: "Bid Prep Time", value: "−50%", sub: "Automation and historical data" },
    { label: "Change Order Recovery", value: "+80%", sub: "Documented and tracked" },
    { label: "PM Coordination Time", value: "−60%", sub: "Centralized sub management" },
    { label: "Revenue Impact", value: "$20–80K/mo", sub: "Margins + efficiency + recovery" },
  ],
  investment: "Investment: $3,000–$8,000/mo",
  ctaLabel: "Get Your Construction Blueprint",
};

const ConstructionBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default ConstructionBlueprint;
