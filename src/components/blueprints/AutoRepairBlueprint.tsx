import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Wrench,
  Calendar,
  TrendingUp,
  DollarSign,
  Package,
  Target,
  RefreshCw,
  Zap,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Wrench,
  badgeLabel: "Industry Blueprint: Auto Repair & Dealerships",
  badgeColor: "bg-success/10",
  title: "The Auto Repair Shop: An Agentic AI Transformation",
  description:
    "A 3–5 person shop — owner/lead tech, 1–2 mechanics, a service writer, and a bookkeeper — generating $500K–$2M in revenue but losing bays to scheduling gaps, missing upsells, struggling with FTC Safeguards compliance, and watching parts margins erode.",
  teamLabel: "The Shop",
  teamRoles: [
    { role: "Owner / Lead Tech", focus: "Diagnostics, complex repairs, estimates, P&L" },
    { role: "Mechanic / Tech", focus: "Repairs, maintenance, inspections, quality" },
    { role: "Service Writer", focus: "Customer intake, estimates, approvals, scheduling" },
    { role: "Parts Manager", focus: "Ordering, inventory, returns, vendor relationships" },
    { role: "Bookkeeper", focus: "Invoicing, payroll, accounts payable, tax prep" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The auto repair reality:</span> The FTC Safeguards Rule (mandatory since June 2023) requires a Written Information Security Plan — most shops don't have one. Average bay utilization is only 65–70%. Declined service recommendations represent $2K–$5K/month in lost revenue. Parts markup is being compressed by online retailers. The shop is leaving{" "}
      <span className="font-semibold text-foreground">$6K–$12K/month on the table</span> in empty bays, declined repairs, and compliance risk.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Bay Scheduling & Workflow Optimization",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Bays Sitting Empty or Double-Booked",
        problems: [
          "Bay utilization averages 65–70% — $800–$1,200/day in potential revenue goes unrealized",
          "Jobs take longer than estimated but the schedule doesn't adjust — afternoon appointments stack up",
          "No visibility into tech workload — one mechanic is slammed while another waits for parts",
          "Drop-offs and walk-ins create chaos — service writer doesn't know what's coming until it arrives",
        ],
      },
      after: {
        headline: "After: Bay Management Agent",
        solutions: [
          { action: "Job-duration-aware scheduling", detail: "Agent estimates repair time based on vehicle, service type, and tech skill level — schedules bays to maximize throughput" },
          { action: "Real-time bay status board", detail: "Agent tracks job progress and alerts when a bay is running long — allows proactive customer communication" },
          { action: "Tech workload balancing", detail: "Agent distributes jobs based on skill level, certification, and current queue — optimal utilization across all techs" },
          { action: "Online appointment booking", detail: "Customers schedule based on service type with accurate time estimates — reduces phone volume 50%" },
        ],
        savings: "85%+ bay utilization · $1K/day additional revenue potential · 50% fewer calls",
      },
    },
    {
      icon: TrendingUp,
      title: "Digital Vehicle Inspections & Upsells",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Declined Services Disappear Forever",
        problems: [
          "Technicians find additional needed work but recommendations are verbal — customer forgets by checkout",
          "$2K–$5K/month in declined services are never followed up on — the customer goes elsewhere",
          "Paper inspection forms are illegible and unconvincing — customers don't trust what they can't see",
          "No system tracks vehicle service history — the same recommendation is made (and declined) repeatedly",
        ],
      },
      after: {
        headline: "After: Inspection & Recommendation Agent",
        solutions: [
          { action: "Digital multi-point inspections", detail: "Tech photographs findings and rates severity — customer receives a visual report with red/yellow/green items" },
          { action: "Declined service follow-up", detail: "Agent tracks every declined recommendation and follows up at 30, 60, and 90 days — converts 25% of previously declined work" },
          { action: "Vehicle history tracking", detail: "Agent maintains complete service history per VIN — knows what's due, what's overdue, and what was previously declined" },
          { action: "Maintenance schedule reminders", detail: "Agent sends proactive service reminders based on mileage intervals and manufacturer recommendations" },
        ],
        savings: "25% recovery on declined services · Visual inspections boost trust · Recurring revenue",
      },
    },
    {
      icon: Package,
      title: "Parts Procurement & Inventory",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Emergency Orders and Margin Erosion",
        problems: [
          "Emergency parts orders (hotshots) add $200–$400/month in rush fees and delay job completion",
          "Parts markup is being compressed by Amazon and RockAuto — customers question every price",
          "Core returns are missed or forgotten — $50–$150/month in unreturned cores",
          "No tracking of which suppliers deliver fastest and most accurately — ordering is habit, not data",
        ],
      },
      after: {
        headline: "After: Parts Intelligence Agent",
        solutions: [
          { action: "Pre-appointment parts ordering", detail: "Agent cross-references scheduled jobs with parts availability — orders in advance so parts arrive before the vehicle" },
          { action: "Multi-supplier price comparison", detail: "Agent compares AutoZone, NAPA, O'Reilly, and dealer pricing in real-time — selects best value per job" },
          { action: "Core tracking automation", detail: "Agent tracks every core from removal through return — sends reminders and monitors credits received" },
          { action: "Supplier scorecard", detail: "Agent rates suppliers on price, delivery speed, accuracy, and return handling — data-driven procurement decisions" },
        ],
        savings: "$300/mo saved on rush orders · Core returns captured · Optimized margins",
      },
    },
    {
      icon: DollarSign,
      title: "FTC Safeguards Compliance & Data Security",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: One Audit Away from Penalties",
        problems: [
          "FTC Safeguards Rule requires a Written Information Security Plan — most shops have never heard of it",
          "Customer financial data (credit apps, payment info) stored insecurely in filing cabinets and unsecured computers",
          "No employee cybersecurity training — phishing and malware are constant threats",
          "Vendor access to shop management software is uncontrolled — former vendors may still have credentials",
        ],
      },
      after: {
        headline: "After: Shop Compliance Agent",
        solutions: [
          { action: "FTC Safeguards compliance kit", detail: "Agent generates your Written Information Security Plan, risk assessment, and required policies — compliance within 30 days" },
          { action: "Secure data handling", detail: "Agent enforces encryption for customer financial data and implements access controls — no more credit apps in unlocked drawers" },
          { action: "Employee security training", detail: "Agent delivers quarterly training modules on phishing, password security, and data handling — with completion tracking" },
          { action: "Vendor access audit", detail: "Agent reviews all system access quarterly, revokes former vendor credentials, and maintains access logs" },
        ],
        savings: "Full FTC compliance · Customer data protected · Zero penalty risk",
      },
    },
    {
      icon: Target,
      title: "Customer Retention & Shop Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Customers Come Once and Disappear",
        problems: [
          "Customer retention rate is 40–50% — more than half never return after their first visit",
          "No system to track when customers are due for service — they go to whoever is convenient",
          "Online reviews are sparse and unmanaged — a single 1-star review tanks monthly calls",
          "Growth strategy is 'spend more on Google Ads' without knowing actual customer acquisition cost",
        ],
      },
      after: {
        headline: "After: Shop Growth Agent",
        solutions: [
          { action: "Automated service reminders", detail: "Agent tracks every vehicle's maintenance schedule and sends reminders at the right intervals — retention jumps to 70%+" },
          { action: "Post-service review requests", detail: "Agent sends a satisfaction check followed by a review request to happy customers — doubles positive review volume" },
          { action: "Customer lifetime value tracking", detail: "Agent calculates CLV by customer and identifies at-risk relationships — proactive outreach before they leave" },
          { action: "Marketing ROI analysis", detail: "Agent tracks every customer from first visit source through lifetime spend — reveals true acquisition cost by channel" },
        ],
        savings: "70%+ retention · 2× review volume · Data-driven marketing spend",
      },
    },
  ],
  timelineTitle: "8-Week Auto Repair Shop Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Shop Assessment",
      icon: RefreshCw,
      tasks: [
        "Audit shop management software, POS, and accounting systems",
        "Map workflow from appointment through invoicing and follow-up",
        "FTC Safeguards compliance assessment",
        "Identify top revenue leaks (usually bay utilization, declined services, retention)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Bay Management Agent with online booking",
        "Activate Digital Inspection workflow",
        "Deploy FTC Safeguards compliance kit",
        "Train service writers and techs on agent workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Parts & Finance",
      icon: BarChart3,
      tasks: [
        "Deploy Parts Intelligence Agent with multi-supplier comparison",
        "Launch declined service follow-up automation",
        "Activate real-time financial dashboards",
        "Begin employee security training program",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Retain & Grow",
      icon: Lightbulb,
      tasks: [
        "Launch automated service reminders and retention campaigns",
        "Deploy review management and post-service outreach",
        "Review marketing ROI and adjust spend allocation",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Small Auto Repair Shop",
  roiStats: [
    { label: "Bay Utilization", value: "65→85%", sub: "Smart scheduling and workload balancing" },
    { label: "Declined Service Recovery", value: "$2K–$4K/mo", sub: "Automated follow-up at 30/60/90 days" },
    { label: "FTC Compliance", value: "30 days", sub: "Full Safeguards Rule implementation" },
    { label: "Customer Retention", value: "70%+", sub: "Automated reminders and proactive outreach" },
  ],
  investment: "Investment: $2,000–$3,500/mo",
  ctaLabel: "Get Your Auto Shop Blueprint",
  bgClass: "bg-surface-sunken",
};

const AutoRepairBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default AutoRepairBlueprint;
