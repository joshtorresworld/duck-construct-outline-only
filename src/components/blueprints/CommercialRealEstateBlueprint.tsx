import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Building2, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Building2,
  badgeLabel: "Industry Blueprint: Commercial Real Estate",
  badgeColor: "bg-success/10",
  title: "The CRE Brokerage: An Agentic AI Transformation",
  description: "A commercial real estate brokerage or investment firm — 5–30 brokers, $2M–$20M in commissions — struggling with long deal cycles, complex tenant improvement tracking, CAM reconciliation, and market analysis paralysis.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Principal / Managing Broker", focus: "Key relationships, deal strategy, market positioning" },
    { role: "Brokers (5–20)", focus: "Leasing, sales, tenant/landlord representation" },
    { role: "Transaction Coordinator(s)", focus: "Deal documentation, due diligence, closing" },
    { role: "Research / Marketing", focus: "Market analysis, property marketing, proposals" },
    { role: "Property Accountant", focus: "CAM reconciliation, rent rolls, financial reporting" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The CRE reality:</span> Deal cycles run 6–18 months with complex multi-party coordination. Market analysis that used to differentiate now takes too long. CAM reconciliation errors cost landlord clients $5–$20 per sq ft annually. Brokers spend 40% of time on admin instead of deal-making. The firm is leaving <span className="font-semibold text-foreground">$20K–$80K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Deal Pipeline & Transaction Management", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Deals Fall Through Cracks", problems: ["Deal pipelines tracked in spreadsheets — status unknown until someone asks", "Due diligence checklists are ad-hoc — critical items missed", "Multi-party coordination (attorneys, lenders, inspectors) is email chaos", "Closing timelines slip because nobody tracks interdependent tasks"] },
      after: { headline: "After: Transaction Agent", solutions: [{ action: "Visual deal pipeline", detail: "Agent manages every deal from prospect to close — status, tasks, and blockers visible in real-time" }, { action: "Due diligence automation", detail: "Agent generates property-type-specific checklists and tracks completion with deadline management" }, { action: "Multi-party coordination", detail: "Agent manages communication with all parties — attorneys, lenders, inspectors — with task tracking and reminders" }, { action: "Closing timeline management", detail: "Agent maps interdependent tasks and flags potential delays before they cascade" }], savings: "Zero dropped deals · Automated due diligence · On-time closings" },
    },
    { icon: TrendingUp, title: "Market Analysis & Property Marketing", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Analysis Paralysis", problems: ["Comp analysis takes 4–8 hours per assignment — pulling from multiple databases", "Property marketing materials are custom-built each time", "Market reports are quarterly at best — clients want real-time insights", "No systematic tracking of market activity in target submarkets"] },
      after: { headline: "After: Market Intelligence Agent", solutions: [{ action: "Automated comp analysis", detail: "Agent pulls and analyzes comps from multiple sources — delivers formatted analysis in minutes, not hours" }, { action: "Marketing material generation", detail: "Agent creates property brochures, OMs, and email campaigns from listing data — consistent quality, zero manual design" }, { action: "Real-time market monitoring", detail: "Agent tracks leasing activity, sales, and development in target submarkets — proactive client updates" }, { action: "Investment analysis", detail: "Agent models cap rates, cash-on-cash returns, and IRR scenarios — supports broker presentations" }], savings: "Minutes vs. hours for comps · Auto marketing materials · Real-time market intel" },
    },
    { icon: DollarSign, title: "CAM Reconciliation & Financial Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: CAM is a Black Box", problems: ["CAM reconciliation takes 20–40 hours per property annually", "Errors average $5–$20 per sq ft — landlords overpay or tenants dispute", "Rent escalation tracking across hundreds of leases is manual", "Commission tracking and split calculations are spreadsheet-based"] },
      after: { headline: "After: Financial Agent", solutions: [{ action: "Automated CAM reconciliation", detail: "Agent categorizes expenses, allocates by lease terms, and generates tenant reconciliation statements" }, { action: "Lease abstraction", detail: "Agent extracts key terms from leases — escalations, options, exclusions — into searchable database" }, { action: "Rent roll management", detail: "Agent tracks rent escalations, lease expirations, and option dates — proactive notifications" }, { action: "Commission automation", detail: "Agent calculates commissions based on deal structure, splits, and broker agreements — zero disputes" }], savings: "80% faster CAM · Automated lease abstraction · Zero commission disputes" },
    },
    { icon: Target, title: "Client Relationships & Business Development", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Relationships Live in Brokers' Heads", problems: ["Client relationships owned by individual brokers — firm has no institutional memory", "No systematic prospecting — deals come from relationships only", "Lease expiration tracking for prospecting is manual and incomplete", "No measurement of broker productivity or deal velocity"] },
      after: { headline: "After: Relationship Agent", solutions: [{ action: "Institutional CRM", detail: "Agent maintains firm-wide relationship database — every interaction, deal, and preference captured" }, { action: "Lease expiration prospecting", detail: "Agent tracks lease expirations in target buildings and triggers broker outreach at 18-month mark" }, { action: "Automated market updates", detail: "Agent sends personalized market insights to prospects and clients — builds authority between deals" }, { action: "Broker productivity analytics", detail: "Dashboard shows activity metrics, pipeline value, and conversion rates by broker" }], savings: "Institutional relationships · Proactive prospecting · Broker analytics" },
    },
  ],
  timelineTitle: "8-Week CRE Firm Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Firm Assessment", icon: RefreshCw, tasks: ["Audit deal pipeline, marketing, and financial workflows", "Analyze deal velocity and conversion patterns", "Map client relationships and prospecting processes", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch deal pipeline and transaction management", "Activate automated comp analysis", "Deploy lease abstraction for active portfolio", "Train brokers and coordinators"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy CAM reconciliation automation", "Launch property marketing material generation", "Activate commission tracking", "Begin market monitoring dashboards"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch lease expiration prospecting", "Deploy automated market updates to clients", "Activate broker productivity analytics", "Transition to quarterly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a CRE Firm",
  roiStats: [
    { label: "Broker Selling Time", value: "+40%", sub: "Less admin, more deal-making" },
    { label: "Deal Velocity", value: "+25%", sub: "Faster closings with automation" },
    { label: "CAM Accuracy", value: "99%+", sub: "Automated reconciliation" },
    { label: "Revenue Impact", value: "$20–80K/mo", sub: "Velocity + accuracy + prospecting" },
  ],
  investment: "Investment: $5,000–$15,000/mo",
  ctaLabel: "Get Your CRE Blueprint",
};

const CommercialRealEstateBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default CommercialRealEstateBlueprint;
