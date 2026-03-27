import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Package, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Package,
  badgeLabel: "Industry Blueprint: Wholesale Distribution",
  badgeColor: "bg-warning/10",
  title: "The Wholesale Distributor: An Agentic AI Transformation",
  description: "A regional wholesale distributor — 15–100 employees, $3M–$30M revenue — fighting inventory inaccuracy, order processing delays, credit management complexity, and thin margin erosion.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / GM", focus: "Strategy, key accounts, vendor negotiations" },
    { role: "Sales Reps (3–10)", focus: "Account management, orders, territory coverage" },
    { role: "Warehouse Staff (5–40)", focus: "Receiving, picking, packing, shipping" },
    { role: "Purchasing", focus: "Vendor management, reordering, negotiations" },
    { role: "Admin / AR", focus: "Credit management, invoicing, collections" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The distribution reality:</span> Inventory accuracy runs 85–90% causing stock-outs and overstock simultaneously. Order processing takes 2–4 hours from entry to pick ticket. Credit holds delay shipments 24–48 hours while AR reviews. Net margins are 3–8% and shrinking. The distributor is leaving <span className="font-semibold text-foreground">$15K–$50K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Inventory & Demand Forecasting", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Guessing at Inventory", problems: ["Inventory accuracy at 85–90% — stock-outs and overstock coexist", "No demand forecasting — reordering is reactive and gut-feel", "Warehouse receiving errors not caught until pick time", "Dead stock ties up $50K–$200K in working capital"] },
      after: { headline: "After: Inventory Intelligence Agent", solutions: [{ action: "AI demand forecasting", detail: "Agent analyzes historical sales patterns, seasonality, and customer trends — predicts demand with 90%+ accuracy" }, { action: "Automated reordering", detail: "Agent generates purchase orders at optimal reorder points with economic order quantities" }, { action: "Receiving verification", detail: "Agent manages receiving workflows with barcode scanning and discrepancy flagging" }, { action: "Dead stock identification", detail: "Agent identifies slow-moving inventory and recommends markdown, bundle, or return strategies" }], savings: "95%+ inventory accuracy · 90% demand accuracy · Freed working capital" },
    },
    { icon: TrendingUp, title: "Order Processing & Fulfillment", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: 2–4 Hour Order-to-Ship", problems: ["Order entry is manual — phone/fax/email orders keyed by hand", "Pick tickets generated manually — errors and delays", "No real-time order status visibility for customers or reps", "Shipping carrier selection is ad-hoc — overpaying by 10–15%"] },
      after: { headline: "After: Fulfillment Agent", solutions: [{ action: "Multi-channel order capture", detail: "Agent processes orders from EDI, web portal, email, and phone — unified queue with zero manual entry" }, { action: "Intelligent pick optimization", detail: "Agent generates warehouse-optimized pick routes — reduces picking time by 30%" }, { action: "Real-time order tracking", detail: "Customers and reps see live order status from entry through delivery" }, { action: "Carrier rate shopping", detail: "Agent compares carrier rates in real-time and selects optimal shipping method — saves 10–15% on freight" }], savings: "Order-to-ship in 30 min · 30% faster picking · 10–15% freight savings" },
    },
    { icon: DollarSign, title: "Credit Management & Collections", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Cash Flow Squeeze", problems: ["Credit decisions delay shipments 24–48 hours", "DSO averages 45–60 days — cash is always tight", "No customer payment behavior tracking — surprises when accounts go bad", "Manual collections calls consume 10+ hours/week"] },
      after: { headline: "After: Credit & Collections Agent", solutions: [{ action: "Automated credit decisions", detail: "Agent evaluates credit risk based on payment history, order patterns, and credit bureau data — instant approvals" }, { action: "Smart collections", detail: "Agent manages collections escalation — reminders, calls, and holds applied automatically based on risk tier" }, { action: "Payment behavior analytics", detail: "Agent identifies customers trending toward late payment and triggers proactive outreach" }, { action: "Cash flow forecasting", detail: "Agent projects cash receipts based on invoices outstanding, payment patterns, and credit terms" }], savings: "DSO to 25–35 days · Instant credit decisions · Proactive collections" },
    },
    { icon: Target, title: "Sales & Customer Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Reps Doing Admin, Not Selling", problems: ["Sales reps spend 40% of time on order entry and status checks", "No cross-sell/upsell recommendations based on order history", "Customer profitability unknown — some accounts lose money", "No territory analytics or coverage optimization"] },
      after: { headline: "After: Sales Enablement Agent", solutions: [{ action: "Rep productivity", detail: "Agent handles order entry and status — reps focus on relationships and prospecting" }, { action: "AI-powered recommendations", detail: "Agent suggests complementary products based on order history — 'Customers who buy X also buy Y'" }, { action: "Customer profitability tracking", detail: "Dashboard shows true margin by customer including handling, delivery, and credit costs" }, { action: "Territory optimization", detail: "Agent analyzes coverage and identifies underserved segments with growth potential" }], savings: "60% more selling time · Smart cross-sell · Customer profitability" },
    },
  ],
  timelineTitle: "8-Week Distribution Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Operations Assessment", icon: RefreshCw, tasks: ["Audit inventory, order processing, and credit workflows", "Analyze margin erosion and cash flow patterns", "Map order-to-delivery process and bottlenecks", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch demand forecasting and automated reordering", "Activate multi-channel order capture", "Deploy automated credit decisions", "Train warehouse and sales teams"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy intelligent pick optimization", "Launch carrier rate shopping", "Activate smart collections and cash flow forecasting", "Begin customer profitability analytics"] },
    { week: "Week 7–8", phase: "Grow Revenue", icon: Lightbulb, tasks: ["Launch AI cross-sell recommendations", "Deploy territory optimization", "Activate dead stock management", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Wholesale Distributor",
  roiStats: [
    { label: "Inventory Accuracy", value: "95%+", sub: "From 85–90% baseline" },
    { label: "DSO Reduction", value: "45→30 days", sub: "Automated credit and collections" },
    { label: "Freight Savings", value: "10–15%", sub: "Carrier rate shopping" },
    { label: "Revenue Impact", value: "$15–50K/mo", sub: "Efficiency + margins + growth" },
  ],
  investment: "Investment: $3,000–$8,000/mo",
  ctaLabel: "Get Your Distribution Blueprint",
};

const WholesaleDistributionBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default WholesaleDistributionBlueprint;
