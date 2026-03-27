import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Store, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Store,
  badgeLabel: "Industry Blueprint: Franchise Operations",
  badgeColor: "bg-accent/10",
  title: "The Franchise Operation: An Agentic AI Transformation",
  description: "A multi-unit franchise owner or franchisor — 3–50 locations, $2M–$50M revenue — fighting inconsistency across locations, training compliance, performance benchmarking gaps, and the challenge of scaling human-dependent operations.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Franchise Owner / Operator", focus: "Strategy, expansion, financial oversight" },
    { role: "Area/District Manager(s)", focus: "Multi-unit oversight, coaching, standards" },
    { role: "Unit Managers", focus: "Daily operations, staff management, customer experience" },
    { role: "Training Coordinator", focus: "Onboarding, ongoing training, compliance" },
    { role: "Admin / Finance", focus: "Royalty reporting, payroll, compliance" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The franchise reality:</span> Each location runs slightly differently — customer experience is inconsistent. Training compliance is tracked on spreadsheets. Performance varies 30–50% between best and worst locations with no clear explanation. Expansion is limited because operations don't replicate reliably. The operation is leaving <span className="font-semibold text-foreground">$10K–$40K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Operational Consistency & Standards", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Every Location Does It Differently", problems: ["Standard operating procedures exist but compliance is unverified", "Mystery shoppers provide point-in-time data 2–4×/year", "Brand standards drift without constant oversight", "New location launches take 4–6 months to reach standards"] },
      after: { headline: "After: Operations Consistency Agent", solutions: [{ action: "Digital SOP compliance tracking", detail: "Agent manages daily checklists, opening/closing procedures, and quality standards — verified with photos and timestamps" }, { action: "Continuous quality monitoring", detail: "Agent analyzes customer feedback, reviews, and operational data to detect standards drift in real-time" }, { action: "Automated store audits", detail: "Digital audit tools replace manual inspections — scores benchmarked across all locations" }, { action: "Launch playbook automation", detail: "Agent manages new location launch with structured timeline, training, and readiness verification" }], savings: "Real-time compliance · Continuous quality monitoring · Faster launches" },
    },
    { icon: TrendingUp, title: "Training & Development", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Training is Hit or Miss", problems: ["New hire training quality depends entirely on who does the training", "No verification that training was actually completed or retained", "Ongoing training and recertification tracked on spreadsheets", "Knowledge transfer when employees move between locations is lost"] },
      after: { headline: "After: Training Agent", solutions: [{ action: "Standardized onboarding", detail: "Agent delivers consistent training modules with knowledge verification quizzes — same quality everywhere" }, { action: "Certification tracking", detail: "Agent manages food safety, OSHA, brand certifications — auto-alerts before expiration" }, { action: "Performance-based training", detail: "Agent identifies skill gaps from operational data and assigns targeted training modules" }, { action: "Cross-location knowledge transfer", detail: "Agent captures best practices from top-performing locations and distributes to all" }], savings: "Consistent training · Auto certifications · Best practice sharing" },
    },
    { icon: DollarSign, title: "Performance Benchmarking & P&L", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: P&L is a Surprise Every Month", problems: ["Location performance varies 30–50% with no clear explanation", "P&L reports available 2–3 weeks after month-end", "Labor costs swing wildly — no labor-to-revenue optimization", "Food/supply costs tracked monthly — waste and theft undetected until too late"] },
      after: { headline: "After: Performance Agent", solutions: [{ action: "Real-time benchmarking", detail: "Agent compares every KPI across all locations — revenue, labor %, COGS, ticket size, speed — in real-time" }, { action: "Labor optimization", detail: "Agent recommends staffing levels based on demand forecasting — matches labor cost to revenue by hour" }, { action: "Cost variance alerts", detail: "Agent flags unusual cost patterns immediately — don't wait for month-end to find problems" }, { action: "Daily flash P&L", detail: "Agent generates daily estimated P&L for each location — managers know their numbers every morning" }], savings: "Daily P&L visibility · Optimized labor · Real-time benchmarking" },
    },
    { icon: Target, title: "Growth & Expansion", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Growth Creates More Chaos", problems: ["Adding locations multiplies management complexity exponentially", "No data-driven site selection for new locations", "Franchisee recruitment and vetting is relationship-only", "Territory management and cannibalization not analyzed"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Scalable operations model", detail: "Agent ensures operations replicate reliably — each new location is a copy, not a custom build" }, { action: "Site selection analytics", detail: "Agent analyzes demographics, competition, traffic patterns, and existing location performance for new sites" }, { action: "Franchisee pipeline management", detail: "Agent manages recruitment, qualification, and onboarding of new franchisees" }, { action: "Territory optimization", detail: "Agent models territory boundaries and cannibalization impact before expansion decisions" }], savings: "Reliable replication · Data-driven expansion · Franchisee pipeline" },
    },
  ],
  timelineTitle: "8-Week Franchise Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Network Assessment", icon: RefreshCw, tasks: ["Audit operations consistency across all locations", "Analyze performance variance and KPI benchmarks", "Map training, compliance, and reporting workflows", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch digital SOP compliance tracking", "Activate standardized training and onboarding", "Deploy real-time performance benchmarking", "Train district managers on agent dashboards"] },
    { week: "Week 5–6", phase: "Optimize Performance", icon: BarChart3, tasks: ["Deploy labor optimization across all locations", "Launch cost variance alerts and daily flash P&L", "Activate certification and compliance tracking", "Begin best practice sharing from top locations"] },
    { week: "Week 7–8", phase: "Scale & Grow", icon: Lightbulb, tasks: ["Launch new location playbook automation", "Deploy site selection analytics", "Activate continuous quality monitoring", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Franchise Operation",
  roiStats: [
    { label: "Performance Gap", value: "−50%", sub: "Reduce best-to-worst variance" },
    { label: "Labor Optimization", value: "3–5%", sub: "Revenue-aligned staffing" },
    { label: "Launch Speed", value: "2×", sub: "New locations to standards faster" },
    { label: "Revenue Impact", value: "$10–40K/mo", sub: "Consistency + efficiency + growth" },
  ],
  investment: "Investment: $3,000–$8,000/mo",
  ctaLabel: "Get Your Franchise Blueprint",
};

const FranchiseOpsBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default FranchiseOpsBlueprint;
