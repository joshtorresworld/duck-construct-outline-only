import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { PartyPopper, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: PartyPopper,
  badgeLabel: "Industry Blueprint: Event Planning",
  badgeColor: "bg-primary/10",
  title: "The Event Planning Business: An Agentic AI Transformation",
  description: "An event planning firm — 2–6 planners and coordinators — generating $200K–$1M but drowning in vendor management, timeline tracking, and client communication across 10–30 simultaneous events.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Lead Planner / Owner", focus: "Client vision, vendor negotiations, day-of coordination" },
    { role: "Event Coordinators (1–3)", focus: "Timeline management, vendor follow-up, logistics" },
    { role: "Design Coordinator", focus: "Décor, florals, rentals, visual execution" },
    { role: "Marketing / Sales", focus: "Leads, consultations, social media" },
    { role: "Admin / Bookkeeper", focus: "Contracts, invoicing, vendor payments" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The planner's reality:</span> Managing 10–30 events simultaneously with 5–15 vendors each means 100+ active vendor relationships. Timelines live in spreadsheets. Client changes cascade through vendor contracts. A single missed detail can ruin an event. The firm is leaving <span className="font-semibold text-foreground">$3K–$8K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Vendor Coordination & Timeline Management", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Spreadsheet Juggling Act", problems: ["10–30 events × 5–15 vendors each = hundreds of open threads", "Timeline changes require manually updating every vendor involved", "Vendor confirmations tracked via email — things get missed", "Day-of timelines are printed once and immediately outdated"] },
      after: { headline: "After: Event Orchestration Agent", solutions: [{ action: "Centralized vendor communication", detail: "Agent manages all vendor threads by event — every confirmation, change, and deadline in one place" }, { action: "Cascade change management", detail: "One timeline change auto-notifies all affected vendors with updated details and deadlines" }, { action: "Automated confirmations", detail: "Agent sends confirmation requests at 30-day, 14-day, and 48-hour marks — escalates non-responses" }, { action: "Living day-of timeline", detail: "Real-time digital timeline accessible to all vendors and staff — updates push instantly" }], savings: "10+ hrs/wk saved · Zero missed confirmations · Real-time timelines" },
    },
    { icon: TrendingUp, title: "Client Experience & Communication", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Clients Feel Out of the Loop", problems: ["Clients email constantly asking 'Where are we on X?' — 20+ client emails/day", "Design mood boards and vendor proposals shared via scattered emails", "Budget tracking is manual — clients don't see real-time spend", "Post-event follow-up and review collection is inconsistent"] },
      after: { headline: "After: Client Experience Agent", solutions: [{ action: "Client planning portal", detail: "Real-time dashboard showing timeline progress, vendor status, budget tracking, and upcoming decisions" }, { action: "Proactive updates", detail: "Agent sends weekly progress summaries — clients know what's happening without asking" }, { action: "Decision management", detail: "Agent presents vendor options with comparisons, tracks approvals, and documents all decisions" }, { action: "Post-event automation", detail: "Agent sends thank-yous, collects reviews, and offers anniversary/future event rebooking" }], savings: "80% fewer client emails · Real-time budget · Automated follow-up" },
    },
    { icon: DollarSign, title: "Financial Management & Profitability", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Margins Are a Mystery", problems: ["Event profitability unknown until weeks after — scope creep eats margins", "Vendor payments tracked in spreadsheets — some are late, some double-paid", "Client payment schedules (deposits, milestones) manually tracked", "No historical data on which event types are most profitable"] },
      after: { headline: "After: Financial Agent", solutions: [{ action: "Real-time profitability tracking", detail: "Agent tracks costs against budget for every event — flags margin erosion before it's too late" }, { action: "Vendor payment automation", detail: "Agent manages payment schedules, sends reminders, and tracks every dollar — zero missed or duplicate payments" }, { action: "Client billing automation", detail: "Milestone-based invoicing triggered automatically as event planning progresses" }, { action: "Profitability analytics", detail: "Dashboard shows margin by event type, season, and size — focus on what's most profitable" }], savings: "Real-time margins · Zero payment errors · Data-driven pricing" },
    },
    { icon: Target, title: "Lead Generation & Business Development", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Booked Through Referrals Only", problems: ["80% of business is referral — great but not scalable", "Inquiry response time averages 24–48 hours — prospects book elsewhere", "Portfolio and website haven't been updated in months", "No system to capture and nurture leads from venue partnerships"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Instant inquiry response", detail: "Agent responds within 5 minutes with availability, pricing guides, and consultation booking link" }, { action: "Automated portfolio updates", detail: "Post-event photo curation and website updates — portfolio always shows recent work" }, { action: "Venue partnership management", detail: "Agent nurtures venue and vendor referral relationships with automated touchpoints and commission tracking" }, { action: "Content marketing", detail: "Agent repurposes event content into blog posts, social media, and planning guides — builds SEO authority" }], savings: "5-min response · Always-current portfolio · Referral engine" },
    },
  ],
  timelineTitle: "8-Week Event Planning Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Practice Assessment", icon: RefreshCw, tasks: ["Audit vendor management and timeline processes", "Map client journey from inquiry to post-event", "Identify margin leaks and capacity constraints", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch vendor coordination and confirmation agent", "Activate client planning portal", "Deploy cascade change management", "Train coordinators on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy real-time profitability tracking", "Launch automated billing and vendor payments", "Activate proactive client updates", "Begin post-event follow-up automation"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch instant inquiry response system", "Deploy portfolio and content automation", "Activate venue partnership management", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for an Event Planning Firm",
  roiStats: [
    { label: "Time Freed", value: "15+ hrs/wk", sub: "Vendor comms, client updates, admin" },
    { label: "Margin Protection", value: "+15–20%", sub: "Real-time scope and cost tracking" },
    { label: "Capacity Increase", value: "2×", sub: "Handle more events per planner" },
    { label: "Inquiry Conversion", value: "3×", sub: "5-min response vs. 48-hour" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Event Planning Blueprint",
};

const EventPlanningBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default EventPlanningBlueprint;
