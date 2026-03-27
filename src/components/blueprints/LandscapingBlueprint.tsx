import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { TreePine, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: TreePine,
  badgeLabel: "Industry Blueprint: Landscaping & Lawn Care",
  badgeColor: "bg-success/10",
  title: "The Landscaping Business: An Agentic AI Transformation",
  description: "A landscaping or lawn care company — 5–20 crew members, $300K–$2M revenue — fighting seasonal chaos, crew scheduling inefficiency, and inconsistent estimating that leaves money on the table.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Manager", focus: "Sales, estimating, client relations, crew oversight" },
    { role: "Crew Leads (2–4)", focus: "On-site supervision, equipment, quality control" },
    { role: "Crew Members (5–15)", focus: "Mowing, trimming, installation, maintenance" },
    { role: "Dispatcher / Scheduler", focus: "Route planning, crew assignments, supply ordering" },
    { role: "Office Admin", focus: "Billing, proposals, client comms" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The landscaping reality:</span> Revenue swings 60–70% between peak and off-season. Estimating is gut-feel — some jobs priced too low, others lose on price. Weather disruptions cascade through the entire week. Crew drive time wastes 20%+ of productive hours. The company is leaving <span className="font-semibold text-foreground">$5K–$15K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Crew Scheduling & Route Optimization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Weather Wrecks Everything", problems: ["Rain delays cascade through the entire week's schedule", "No route optimization — crews drive past each other's next jobs", "Weather-cancelled jobs require 3+ hours of rescheduling calls", "Seasonal ramp-up/down is chaotic — hiring and scheduling nightmares"] },
      after: { headline: "After: Dispatch & Weather Agent", solutions: [{ action: "Weather-integrated scheduling", detail: "Agent monitors forecasts and auto-reschedules rain days — clients notified automatically" }, { action: "AI-optimized routing", detail: "Agent clusters jobs geographically and sequences routes — cuts 25%+ drive time" }, { action: "Seasonal crew management", detail: "Agent plans crew scaling based on booked jobs, historical demand, and weather patterns" }, { action: "Real-time field updates", detail: "Crew leads get live route changes, job details, and client notes on mobile" }], savings: "25% less drive time · Auto weather reschedule · Smooth seasonal transitions" },
    },
    { icon: TrendingUp, title: "Estimating & Proposal Management", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Gut-Feel Pricing", problems: ["Estimates take 2–3 days to deliver — prospects hire the faster competitor", "Pricing is inconsistent — similar properties get different quotes", "No tracking of win/loss rates by job type or price point", "Site visit scheduling for estimates eats 5+ hours/week"] },
      after: { headline: "After: Estimating Agent", solutions: [{ action: "Satellite-assisted estimating", detail: "Agent uses property data and aerial imagery to generate preliminary estimates before the site visit" }, { action: "Same-day proposals", detail: "Agent generates professional proposals within hours of site visit — with photos, scope, and terms" }, { action: "Win rate analytics", detail: "Agent tracks close rates by job type, price point, and lead source — optimize where you win" }, { action: "Automated follow-up", detail: "Agent follows up on open proposals at optimal intervals — no more 'did you decide?'" }], savings: "Same-day proposals · 30% higher close rate · Data-driven pricing" },
    },
    { icon: DollarSign, title: "Revenue & Seasonal Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Feast-or-Famine Revenue", problems: ["Revenue drops 60–70% in winter — cash flow crisis every year", "No recurring contracts — chasing new clients every spring", "Invoice collection averages 30+ days", "No upsell system for additional services (mulch, fall cleanup, snow)"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Annual contract management", detail: "Agent converts one-time clients to annual maintenance contracts — guaranteed monthly revenue year-round" }, { action: "Seasonal service bundling", detail: "Agent automatically proposes seasonal add-ons at the right time — spring cleanup, fall leaf removal, winter snow" }, { action: "Automated billing", detail: "Recurring invoicing with auto-pay setup — collections drop to under 7 days" }, { action: "Revenue forecasting", detail: "Agent projects monthly revenue based on contracts, proposals in pipeline, and seasonal patterns" }], savings: "Year-round revenue · <7 day collections · Predictable cash flow" },
    },
    { icon: Target, title: "Growth & Reputation", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Yard Signs and Word-of-Mouth", problems: ["No systematic review collection — reputation is accidental", "Neighborhood concentration not leveraged for efficiency", "No referral program beyond informal word-of-mouth", "Website is outdated with no before/after portfolio"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Neighborhood density strategy", detail: "Agent identifies high-concentration neighborhoods and targets adjacent properties — more revenue, less driving" }, { action: "Review automation", detail: "Post-service photo + satisfaction survey → happy clients routed to Google review" }, { action: "Before/after portfolio", detail: "Agent curates job photos into an always-updated portfolio on the website" }, { action: "Referral engine", detail: "Agent manages neighbor referral program — 'Your neighbor [name] loves our service, here's 10% off'" }], savings: "Neighborhood density · 5× reviews · Referral growth engine" },
    },
  ],
  timelineTitle: "8-Week Landscaping Business Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Operations Audit", icon: RefreshCw, tasks: ["Map current scheduling, routing, and estimating processes", "Audit revenue patterns and seasonal impacts", "Identify drive time waste and pricing inconsistencies", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch weather-integrated scheduling and routing", "Activate satellite-assisted estimating", "Deploy automated client notifications", "Train crew leads on mobile field tools"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Launch annual contract conversion campaigns", "Deploy automated billing and collections", "Activate seasonal service bundling", "Begin revenue forecasting dashboards"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch neighborhood density targeting", "Deploy review and referral automation", "Activate portfolio management", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Landscaping Business",
  roiStats: [
    { label: "Drive Time Saved", value: "25%+", sub: "AI-optimized routing" },
    { label: "Close Rate", value: "+30%", sub: "Same-day proposals" },
    { label: "Revenue Stability", value: "Year-round", sub: "Annual contracts + seasonal bundles" },
    { label: "Collections", value: "<7 days", sub: "Auto-billing with auto-pay" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Landscaping Blueprint",
};

const LandscapingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default LandscapingBlueprint;
