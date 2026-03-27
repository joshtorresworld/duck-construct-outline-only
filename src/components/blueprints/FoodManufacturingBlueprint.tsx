import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Wheat, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Wheat,
  badgeLabel: "Industry Blueprint: Food & Beverage Manufacturing",
  badgeColor: "bg-warning/10",
  title: "The Food Manufacturer: An Agentic AI Transformation",
  description: "A food or beverage manufacturer — 20–200 employees, $3M–$50M revenue — fighting FDA compliance complexity, batch traceability requirements, short shelf-life inventory management, and supplier quality consistency.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / GM", focus: "Strategy, key accounts, regulatory relations" },
    { role: "Production Manager", focus: "Scheduling, line efficiency, staffing" },
    { role: "QA / Food Safety", focus: "HACCP, SQF, testing, documentation" },
    { role: "Production Workers (15–150)", focus: "Line operations, packaging, sanitation" },
    { role: "Supply Chain / Purchasing", focus: "Ingredients, packaging, vendor management" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The food manufacturing reality:</span> FDA compliance documentation consumes 15–25% of QA time. Batch traceability is manual — a recall would take days to identify affected product. Ingredient shelf life management causes 3–8% spoilage waste. Production scheduling balances customer demand against short shelf life with limited data. The plant is leaving <span className="font-semibold text-foreground">$20K–$80K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Production Scheduling & Efficiency", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Scheduling by Gut Feel", problems: ["Production schedule built weekly in spreadsheets — changes are constant", "Changeover time between products not optimized — 15–20% of production lost", "No demand forecasting — overproduction causes waste, underproduction causes stockouts", "Labor scheduling doesn't align with production demands"] },
      after: { headline: "After: Production Scheduling Agent", solutions: [{ action: "Demand-driven scheduling", detail: "Agent forecasts demand by product and schedules production to minimize changeovers and maximize shelf life" }, { action: "Changeover optimization", detail: "Agent sequences production runs to minimize cleaning and changeover — light to dark, mild to strong" }, { action: "Labor alignment", detail: "Agent schedules crew based on production complexity, volume, and skill requirements" }, { action: "Real-time OEE tracking", detail: "Dashboard monitors line efficiency, downtime reasons, and yield in real-time" }], savings: "15% less changeover time · Demand-driven production · Real-time OEE" },
    },
    { icon: TrendingUp, title: "Food Safety & Compliance", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Paper-Based Compliance", problems: ["HACCP logs, temperature records, and sanitation checklists on paper", "Batch traceability requires manual lot tracking — recall would take days", "SQF/FDA audit preparation consumes weeks of document gathering", "Allergen control documentation is inconsistent across shifts"] },
      after: { headline: "After: Food Safety Agent", solutions: [{ action: "Digital HACCP management", detail: "Agent manages all critical control points digitally — automated monitoring, alerts, and corrective action tracking" }, { action: "Full batch traceability", detail: "Agent tracks every ingredient lot through production to finished goods — mock recall in 4 hours, not 4 days" }, { action: "Automated compliance documentation", detail: "All food safety records digital, searchable, and organized — audit prep in hours" }, { action: "Allergen control tracking", detail: "Agent manages allergen protocols, changeover verification, and labeling compliance" }], savings: "4-hour mock recall · Digital HACCP · Audit-ready always" },
    },
    { icon: DollarSign, title: "Inventory & Shelf Life Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: 3–8% Spoilage Waste", problems: ["Ingredient shelf life tracking is manual — expired materials found at production", "Finished goods inventory managed FIFO 'in theory' — reality is different", "No visibility into true cost of goods manufactured per product", "Supplier lead time variability causes production delays"] },
      after: { headline: "After: Inventory Agent", solutions: [{ action: "Shelf life management", detail: "Agent tracks expiration dates for all ingredients and finished goods — FEFO (First Expiry, First Out) enforced" }, { action: "Spoilage prevention", detail: "Agent alerts when ingredients approach expiration — production scheduled to use them first" }, { action: "True COGM calculation", detail: "Agent tracks actual ingredient usage, labor, and overhead per batch — accurate product costing" }, { action: "Supplier management", detail: "Agent tracks supplier quality scores, lead times, and pricing — data-driven sourcing decisions" }], savings: "Spoilage to <1% · True product costing · FEFO enforced" },
    },
    { icon: Target, title: "Growth & Customer Management", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Growth Creates Complexity", problems: ["New customer onboarding requires custom spec sheets for every product", "No capacity planning for new business — accepting orders that can't be fulfilled", "Private label management is manual — each customer has unique specifications", "No analytics on customer profitability"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Customer spec management", detail: "Agent maintains product specifications per customer — labeling, packaging, formulation tracked digitally" }, { action: "Capacity planning", detail: "Agent models production capacity impact of new business — informed go/no-go decisions" }, { action: "Private label automation", detail: "Agent manages customer-specific formulations, labeling, and quality requirements" }, { action: "Customer profitability", detail: "Dashboard shows true margin by customer including complexity cost, changeovers, and special requirements" }], savings: "Digital spec management · Capacity modeling · Customer profitability" },
    },
  ],
  timelineTitle: "8-Week Food Manufacturing Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Plant Assessment", icon: RefreshCw, tasks: ["Audit production, food safety, and inventory processes", "Analyze waste, efficiency, and compliance gaps", "Map ingredient flow from receiving to shipping", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch demand-driven production scheduling", "Activate digital HACCP and food safety tracking", "Deploy batch traceability system", "Train production and QA teams"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy shelf life and FEFO management", "Launch true COGM calculation", "Activate supplier quality tracking", "Begin real-time OEE dashboards"] },
    { week: "Week 7–8", phase: "Scale & Grow", icon: Lightbulb, tasks: ["Launch customer spec management", "Deploy capacity planning tools", "Activate customer profitability analytics", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Food Manufacturer",
  roiStats: [
    { label: "Spoilage Reduction", value: "3–8% → <1%", sub: "Shelf life management" },
    { label: "Mock Recall Time", value: "4 hours", sub: "Full batch traceability" },
    { label: "Line Efficiency", value: "+15%", sub: "Changeover optimization" },
    { label: "Revenue Impact", value: "$20–80K/mo", sub: "Waste + efficiency + compliance" },
  ],
  investment: "Investment: $5,000–$15,000/mo",
  ctaLabel: "Get Your Food Manufacturing Blueprint",
};

const FoodManufacturingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default FoodManufacturingBlueprint;
