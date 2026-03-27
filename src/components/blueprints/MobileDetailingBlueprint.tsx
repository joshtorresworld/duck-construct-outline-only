import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Car, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Car,
  badgeLabel: "Industry Blueprint: Mobile Detailing",
  badgeColor: "bg-warning/10",
  title: "The Mobile Detailing Business: An Agentic AI Transformation",
  description: "A mobile detailing operation — 1–5 detailers — generating $80K–$400K but trapped in phone booking, inefficient routing, and zero recurring revenue with high customer acquisition costs.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Lead Detailer", focus: "Premium details, sales, quality control" },
    { role: "Detailers (1–3)", focus: "Interior/exterior details, ceramic coating, PPF" },
    { role: "Dispatcher (often the owner)", focus: "Booking, routing, client comms" },
    { role: "Social Media (part-time)", focus: "Before/after content, marketing" },
    { role: "Bookkeeper", focus: "Invoicing, expenses, supplies" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The detailing reality:</span> 80% of time is spent driving between jobs or on the phone. Pricing is inconsistent — the same SUV detail gets quoted differently each time. No recurring revenue — every month starts at zero. Before/after photos are taken but never used for marketing. The business is leaving <span className="font-semibold text-foreground">$2K–$5K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Route Optimization & Scheduling", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Criss-Crossing the City", problems: ["No route optimization — driving 60+ miles between jobs that could be clustered", "Booking is phone-based — 1+ hour/day on calls and texts", "No buffer time for travel — running late to every appointment", "Rain cancellations require manual rescheduling"] },
      after: { headline: "After: Route & Scheduling Agent", solutions: [{ action: "Geographic clustering", detail: "Agent books jobs in geographic clusters — reduces daily driving by 30–40%" }, { action: "Online booking with vehicle info", detail: "Clients select vehicle type, condition, and service — accurate time/price quotes instantly" }, { action: "Weather-aware scheduling", detail: "Agent monitors weather and auto-reschedules outdoor details — clients notified automatically" }, { action: "Smart buffer management", detail: "Agent accounts for travel time, service complexity, and prep between jobs" }], savings: "30–40% less driving · Zero phone booking · Weather-proof schedule" },
    },
    { icon: TrendingUp, title: "Pricing & Service Consistency", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Every Quote is a Guess", problems: ["Same vehicle type gets different prices depending on mood or memory", "No upsell system — clients pick basic wash when they need full detail", "Service quality varies — no checklists or photo documentation", "Ceramic coating follow-up care is forgotten"] },
      after: { headline: "After: Service & Quality Agent", solutions: [{ action: "Vehicle-based pricing engine", detail: "Agent generates consistent quotes based on vehicle type, size, condition, and service level" }, { action: "Smart upsell recommendations", detail: "Agent suggests appropriate upgrades based on vehicle age, condition, and last service — 'Your leather needs conditioning'" }, { action: "Service checklists with photos", detail: "Before/after photo documentation for every detail — quality evidence and marketing content" }, { action: "Coating care schedules", detail: "Agent manages maintenance schedules for ceramic coating clients — guaranteed repeat business" }], savings: "Consistent pricing · 25% upsell lift · Photo quality proof" },
    },
    { icon: DollarSign, title: "Recurring Revenue & Growth", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Every Month Starts at Zero", problems: ["100% project-based revenue — no predictability", "Client rebooking is random — they call when they remember", "Fleet/commercial accounts not pursued systematically", "No visibility into client lifetime value"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Membership plans", detail: "Agent manages monthly/quarterly detail subscriptions — 'Tesla Plan: $149/mo includes monthly wash + quarterly full detail'" }, { action: "Automated rebooking", detail: "Agent sends vehicle-appropriate reminders — 'Your BMW's leather treatment is due next week'" }, { action: "Fleet account management", detail: "Agent handles fleet scheduling, billing, and per-vehicle tracking for commercial accounts" }, { action: "LTV optimization", detail: "Agent identifies highest-value clients and triggers upgrade and referral prompts at optimal times" }], savings: "Predictable MRR · Fleet accounts · 3× client LTV" },
    },
    { icon: Target, title: "Marketing & Reputation", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Great Work Nobody Sees", problems: ["Before/after photos taken but rarely posted", "No review collection system", "Instagram content is sporadic at best", "No referral program"] },
      after: { headline: "After: Brand Agent", solutions: [{ action: "Auto-post engine", detail: "Before/after photos auto-formatted and posted to Instagram, Google Business, and Facebook with vehicle tags" }, { action: "Review automation", detail: "Post-service text with rating request — happy clients routed to Google review with one tap" }, { action: "Content calendar", detail: "Agent schedules tips, transformations, and seasonal content — consistent social presence" }, { action: "Referral program", detail: "Agent manages 'Refer a car, get $20 off your next detail' with automatic tracking" }], savings: "Daily social content · 5× reviews · Referral growth" },
    },
  ],
  timelineTitle: "8-Week Mobile Detailing Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Business Assessment", icon: RefreshCw, tasks: ["Map current routing, booking, and pricing processes", "Audit client base and revenue patterns", "Identify drive time waste and pricing inconsistencies", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch geographic booking with route optimization", "Activate vehicle-based pricing engine", "Deploy service checklists with photo documentation", "Set up weather-aware scheduling"] },
    { week: "Week 5–6", phase: "Build Revenue", icon: BarChart3, tasks: ["Launch membership subscription plans", "Deploy automated rebooking reminders", "Begin fleet account outreach", "Activate smart upselling engine"] },
    { week: "Week 7–8", phase: "Grow Brand", icon: Lightbulb, tasks: ["Launch before/after social media automation", "Deploy review collection engine", "Activate referral program", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Mobile Detailing Business",
  roiStats: [
    { label: "Drive Time Saved", value: "30–40%", sub: "Geographic clustering" },
    { label: "Revenue Lift", value: "25–40%", sub: "Memberships + upsells" },
    { label: "Booking Time", value: "−80%", sub: "Online self-booking" },
    { label: "Client LTV", value: "3×", sub: "Subscriptions + rebooking" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Detailing Blueprint",
};

const MobileDetailingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default MobileDetailingBlueprint;
