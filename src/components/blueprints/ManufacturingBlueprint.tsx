import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Factory, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Factory,
  badgeLabel: "Industry Blueprint: Manufacturing & Job Shops",
  badgeColor: "bg-primary/10",
  title: "The Manufacturing Operation: An Agentic AI Transformation",
  description: "A CNC job shop or small manufacturer — 10–100 employees, $1M–$20M revenue — losing money on quoting inaccuracies, shop floor scheduling bottlenecks, and quality control gaps that drive rework costs.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / GM", focus: "Strategy, key accounts, financial oversight" },
    { role: "Estimator / Sales", focus: "RFQs, quoting, customer relationships" },
    { role: "Shop Foreman", focus: "Floor scheduling, machine assignments, quality" },
    { role: "Machinists (5–50)", focus: "CNC, manual machining, assembly, finishing" },
    { role: "Office / Admin", focus: "AP/AR, shipping, purchasing, compliance" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The manufacturing reality:</span> Quoting takes 2–5 days — 30% of quotes are never responded to before the deadline. Shop floor scheduling is a whiteboard that's outdated by noon. Rework runs 3–8% of revenue because quality issues are caught at final inspection, not in-process. Machine utilization hovers at 55–65% despite feeling "maxed out." The shop is leaving <span className="font-semibold text-foreground">$10K–$50K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Shop Floor Scheduling & Machine Utilization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Whiteboard Chaos", problems: ["Shop schedule on a whiteboard — outdated by mid-morning", "Machine utilization at 55–65% despite feeling fully loaded", "Rush jobs blow up the entire week's schedule", "No visibility into bottlenecks until jobs are late"] },
      after: { headline: "After: Production Scheduling Agent", solutions: [{ action: "Dynamic scheduling", detail: "Agent optimizes job sequencing across machines — accounts for setup time, tool changes, and material availability" }, { action: "Real-time utilization tracking", detail: "Dashboard shows machine utilization, operator efficiency, and bottleneck prediction in real-time" }, { action: "Rush job impact analysis", detail: "Agent shows exactly what gets pushed when a rush is inserted — informed decisions, not chaos" }, { action: "Predictive maintenance alerts", detail: "Agent monitors machine hours and flags maintenance needs before breakdowns cause downtime" }], savings: "75%+ machine utilization · Zero surprise delays · Rush job clarity" },
    },
    { icon: TrendingUp, title: "Quoting & Estimating", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: 2–5 Day Quote Turnaround", problems: ["RFQ response takes 2–5 days — 30% of quotes expire before submission", "Estimating is experience-based — inconsistent and impossible to scale", "No tracking of quote-to-win rates or why jobs are lost", "Material cost fluctuations make old quotes unprofitable"] },
      after: { headline: "After: Quoting Agent", solutions: [{ action: "Rapid quote generation", detail: "Agent generates preliminary quotes within hours using historical job data, material costs, and machine rates" }, { action: "Quote accuracy tracking", detail: "Agent compares estimated vs. actual costs on completed jobs — continuously improves accuracy" }, { action: "Win/loss analytics", detail: "Agent tracks why quotes win or lose — price, lead time, capability — informs strategy" }, { action: "Material cost integration", detail: "Agent pulls current material prices and adjusts quotes automatically — no more stale pricing" }], savings: "Same-day quotes · 30% higher win rate · Accurate pricing" },
    },
    { icon: DollarSign, title: "Quality Control & Rework Reduction", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Catching Defects at Final Inspection", problems: ["Quality issues found at final inspection — entire batch may need rework", "Rework costs 3–8% of revenue with zero root cause tracking", "Customer complaints about tolerance drift with no data to investigate", "Inspection records are paper-based and unfindable"] },
      after: { headline: "After: Quality Agent", solutions: [{ action: "In-process inspection tracking", detail: "Agent manages inspection checkpoints at each operation — catches issues before they propagate" }, { action: "Statistical process control", detail: "Agent monitors dimensional trends and alerts operators when measurements drift toward limits" }, { action: "Root cause tracking", detail: "Agent logs every defect with machine, operator, material lot, and conditions — patterns become visible" }, { action: "Digital quality records", detail: "Searchable inspection records with photos — instant response to customer quality inquiries" }], savings: "Rework cut by 60% · Real-time SPC · Instant quality traceability" },
    },
    { icon: Target, title: "Supply Chain & Inventory", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Stock-Outs and Overstock", problems: ["Material stock-outs delay jobs 2–5 days — cascading schedule impacts", "Inventory is counted manually — inaccurate and time-consuming", "No automated reorder points — purchasing is reactive", "Vendor lead times not tracked systematically"] },
      after: { headline: "After: Supply Chain Agent", solutions: [{ action: "Automated reorder management", detail: "Agent monitors inventory levels and triggers purchase orders at optimal reorder points" }, { action: "Vendor lead time tracking", detail: "Agent learns actual vendor delivery patterns and accounts for variability in scheduling" }, { action: "Job-based material allocation", detail: "Agent reserves material for scheduled jobs — prevents stock-outs from competing orders" }, { action: "Cost optimization", detail: "Agent consolidates orders across jobs, negotiates volume pricing, and tracks cost trends" }], savings: "Zero stock-outs · 15% material cost savings · Automated purchasing" },
    },
  ],
  timelineTitle: "8-Week Manufacturing Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Shop Assessment", icon: RefreshCw, tasks: ["Audit quoting, scheduling, and quality processes", "Map material flow and inventory management", "Analyze machine utilization and bottleneck patterns", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch rapid quoting with historical data analysis", "Activate dynamic shop floor scheduling", "Deploy in-process quality checkpoints", "Train foreman and estimators on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy supply chain and inventory management", "Launch machine utilization tracking dashboards", "Activate SPC and root cause tracking", "Begin quote accuracy feedback loops"] },
    { week: "Week 7–8", phase: "Scale & Refine", icon: Lightbulb, tasks: ["Deploy predictive maintenance alerts", "Launch win/loss analytics for sales optimization", "Activate vendor performance tracking", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Manufacturing Operation",
  roiStats: [
    { label: "Machine Utilization", value: "55→75%+", sub: "Dynamic scheduling optimization" },
    { label: "Quote Win Rate", value: "+30%", sub: "Same-day response with accurate pricing" },
    { label: "Rework Reduction", value: "60%", sub: "In-process quality control" },
    { label: "Revenue Impact", value: "$10–50K/mo", sub: "Utilization + quality + speed" },
  ],
  investment: "Investment: $2,000–$8,000/mo",
  ctaLabel: "Get Your Manufacturing Blueprint",
};

const ManufacturingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default ManufacturingBlueprint;
