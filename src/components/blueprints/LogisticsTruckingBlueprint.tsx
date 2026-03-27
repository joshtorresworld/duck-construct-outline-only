import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Truck, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Truck,
  badgeLabel: "Industry Blueprint: Logistics & Trucking",
  badgeColor: "bg-accent/10",
  title: "The Trucking Operation: An Agentic AI Transformation",
  description: "A regional trucking or logistics company — 10–100 trucks, $2M–$20M revenue — struggling with driver scheduling, DOT compliance paperwork, empty mile reduction, and load optimization.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / GM", focus: "Strategy, key accounts, fleet decisions" },
    { role: "Dispatcher(s)", focus: "Load assignment, routing, driver coordination" },
    { role: "Safety / Compliance", focus: "DOT compliance, HOS, drug testing, inspections" },
    { role: "Drivers (10–80)", focus: "CDL operations, pre-trip inspections, delivery" },
    { role: "Admin / Billing", focus: "Invoicing, fuel cards, settlements, factoring" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The trucking reality:</span> Empty miles average 15–25% of total miles driven. DOT compliance paperwork consumes 10+ hours/week. Driver turnover runs 50–90%/year. Load profitability is unknown until after delivery. The company is leaving <span className="font-semibold text-foreground">$15K–$50K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Dispatch & Load Optimization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Empty Miles Everywhere", problems: ["Empty miles average 15–25% — pure cost with zero revenue", "Dispatchers manually match loads to drivers — suboptimal decisions", "No real-time visibility into driver location or availability", "Backhaul opportunities missed because load boards are checked manually"] },
      after: { headline: "After: Dispatch Intelligence Agent", solutions: [{ action: "AI load matching", detail: "Agent matches loads to trucks based on location, capacity, driver HOS, and route optimization — cuts empty miles to 8–12%" }, { action: "Real-time fleet visibility", detail: "Dashboard shows every truck's location, status, HOS remaining, and next availability" }, { action: "Backhaul automation", detail: "Agent automatically searches load boards and broker networks for profitable backhauls" }, { action: "Customer load prediction", detail: "Agent learns customer shipping patterns and pre-positions trucks for expected loads" }], savings: "Empty miles to 8–12% · Automated backhauls · Predictive positioning" },
    },
    { icon: TrendingUp, title: "DOT Compliance & Safety", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Compliance is a Full-Time Job", problems: ["HOS tracking is manual or relies on error-prone ELD data entry", "Drug testing schedules, physicals, and license renewals tracked on spreadsheets", "Pre-trip inspection reports are paper-based and rarely reviewed", "DOT audit preparation takes weeks of document gathering"] },
      after: { headline: "After: Compliance Agent", solutions: [{ action: "Automated HOS management", detail: "Agent monitors driver hours in real-time and prevents dispatching drivers approaching HOS limits" }, { action: "Credential tracking", detail: "Agent manages CDL renewals, medical cards, drug tests, and training certifications — auto-alerts before expiration" }, { action: "Digital inspection management", detail: "Pre-trip inspections on mobile — automatic flagging of deficiencies for maintenance" }, { action: "Audit-ready documentation", detail: "All compliance records organized and instantly accessible — DOT audit preparation in hours, not weeks" }], savings: "Zero HOS violations · Audit-ready in hours · Digital inspections" },
    },
    { icon: DollarSign, title: "Financial Performance & Profitability", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Profit Per Load is Unknown", problems: ["Load profitability unknown until weeks after delivery", "Fuel costs not tracked per load or per route", "Invoice processing takes 5–7 days after delivery", "Factoring costs eat into already thin margins"] },
      after: { headline: "After: Financial Agent", solutions: [{ action: "Real-time load profitability", detail: "Agent calculates true cost per load including fuel, driver pay, tolls, and deadhead — before accepting loads" }, { action: "Fuel optimization", detail: "Agent recommends fuel stops based on price, route, and tank level — saves 5–8% on fuel costs" }, { action: "Instant invoicing", detail: "Agent generates and sends invoices at delivery confirmation — DSO drops from 45 to 15 days" }, { action: "Lane profitability analysis", detail: "Agent identifies most and least profitable lanes, customers, and load types — focus on what pays" }], savings: "Know profit before accepting loads · 5–8% fuel savings · 15-day DSO" },
    },
    { icon: Target, title: "Driver Retention & Recruitment", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: 50–90% Annual Turnover", problems: ["Driver turnover costs $5K–$10K per replacement", "No home-time optimization — drivers feel like the company doesn't care", "Communication is one-way — drivers hear about loads, not appreciation", "No career development or earnings growth path"] },
      after: { headline: "After: Driver Experience Agent", solutions: [{ action: "Home-time optimization", detail: "Agent factors driver home location and preferences into load assignment — maximizes time at home" }, { action: "Driver communication hub", detail: "Agent facilitates two-way communication — load details, pay statements, recognition, and feedback" }, { action: "Earnings transparency", detail: "Driver app shows real-time earnings, projected weekly pay, and bonus opportunities" }, { action: "Recruitment pipeline", detail: "Agent manages driver recruitment ads, applications, screening, and onboarding workflow" }], savings: "Turnover cut by 40% · Home-time optimized · Transparent earnings" },
    },
  ],
  timelineTitle: "8-Week Trucking Operation Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Fleet Assessment", icon: RefreshCw, tasks: ["Audit dispatch, compliance, and financial workflows", "Analyze empty mile percentages and lane profitability", "Map driver satisfaction and turnover patterns", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch AI load matching and dispatch optimization", "Activate compliance tracking and credential management", "Deploy real-time fleet visibility dashboard", "Train dispatchers on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Financials", icon: BarChart3, tasks: ["Deploy real-time load profitability tracking", "Launch fuel optimization and instant invoicing", "Activate backhaul automation", "Begin lane profitability analysis"] },
    { week: "Week 7–8", phase: "Retain & Grow", icon: Lightbulb, tasks: ["Launch driver experience and communication hub", "Deploy home-time optimization", "Activate recruitment pipeline", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Trucking Operation",
  roiStats: [
    { label: "Empty Miles", value: "15→8%", sub: "AI load matching and backhauls" },
    { label: "Fuel Savings", value: "5–8%", sub: "Route and fuel stop optimization" },
    { label: "Driver Turnover", value: "−40%", sub: "Home-time and experience focus" },
    { label: "Revenue Impact", value: "$15–50K/mo", sub: "Utilization + efficiency + retention" },
  ],
  investment: "Investment: $3,000–$8,000/mo",
  ctaLabel: "Get Your Trucking Blueprint",
};

const LogisticsTruckingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default LogisticsTruckingBlueprint;
