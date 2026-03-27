import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Scissors, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Scissors,
  badgeLabel: "Industry Blueprint: Salon & Barbershop",
  badgeColor: "bg-accent/10",
  title: "The Salon Business: An Agentic AI Transformation",
  description: "A salon or barbershop — 3–10 stylists, a receptionist — generating $200K–$800K but losing money to no-shows, underutilized chairs, and zero product revenue strategy.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Lead Stylist", focus: "Premium clients, business strategy, training" },
    { role: "Stylists (3–8)", focus: "Cuts, color, treatments, client building" },
    { role: "Receptionist", focus: "Booking, check-in/out, retail, phone" },
    { role: "Assistant / Shampoo Tech", focus: "Prep, washing, blow-outs, cleanup" },
    { role: "Bookkeeper", focus: "Commission tracking, billing, inventory" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The salon reality:</span> No-shows cost $100–$300 per empty chair hour. Walk-ins are turned away when online shows booked but chairs are empty due to gaps. Product retail is an afterthought — sitting on shelves. Stylists leave and take clients because there's no salon-owned relationship. The salon is leaving <span className="font-semibold text-foreground">$3K–$8K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Chair Utilization & Scheduling", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Empty Chairs Everywhere", problems: ["No-shows average 10–15% at $100–$300/slot", "Gaps between appointments aren't filled with walk-ins or last-minute bookings", "Service duration varies by stylist — scheduling doesn't account for this", "Receptionist spends 60% of time on phone bookings"] },
      after: { headline: "After: Chair Optimization Agent", solutions: [{ action: "No-show prevention", detail: "Agent sends personalized reminders with style inspiration — 'Ready for your color refresh tomorrow?' — no-shows drop to 2%" }, { action: "Gap filling", detail: "Agent identifies chair gaps and pushes last-minute availability to nearby clients — 'Opening in 2 hours, want it?'" }, { action: "Stylist-aware scheduling", detail: "Agent accounts for each stylist's speed, specialties, and preferred services" }, { action: "Online booking dominance", detail: "Agent handles 80%+ of bookings online — receptionist freed for retail and client experience" }], savings: "2% no-show rate · 90% chair utilization · Receptionist freed" },
    },
    { icon: TrendingUp, title: "Client Retention & Experience", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Clients Follow Stylists, Not the Salon", problems: ["Client relationships owned by individual stylists — high risk when they leave", "No system for rebooking reminders — clients drift to competitors", "Color formulas stored in stylists' personal notebooks", "No loyalty program — no reason to stick beyond one stylist"] },
      after: { headline: "After: Client Relationship Agent", solutions: [{ action: "Salon-owned client profiles", detail: "Color formulas, style preferences, product purchases — owned by the salon, not the stylist" }, { action: "Automated rebooking", detail: "Agent sends personalized rebooking reminders based on service cycle — 'Your roots will be showing in 2 weeks!'" }, { action: "Loyalty program management", detail: "Agent tracks visits, rewards points, and triggers tier upgrades — incentivizes salon loyalty" }, { action: "Stylist transition support", detail: "When a stylist leaves, agent matches clients to remaining stylists based on specialty and preference data" }], savings: "Salon-owned relationships · 40% higher rebooking · Smooth transitions" },
    },
    { icon: DollarSign, title: "Revenue & Retail Optimization", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Retail Revenue is an Afterthought", problems: ["Product retail represents <10% of revenue despite 50%+ margins", "Stylists inconsistently recommend products — no system or incentive", "No visibility into which products sell, which sit, which to reorder", "Commission tracking is manual and error-prone — causes stylist disputes"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Smart product recommendations", detail: "Agent suggests products based on service performed, hair type, and purchase history — sent post-visit" }, { action: "Inventory intelligence", detail: "Agent tracks product velocity, predicts reorder timing, and identifies dead stock before it expires" }, { action: "Commission automation", detail: "Agent calculates commissions on services and retail in real-time — zero disputes" }, { action: "Membership plans", detail: "Agent manages monthly blowout/treatment subscriptions — guaranteed recurring revenue" }], savings: "Retail to 20%+ revenue · Automated commissions · Membership MRR" },
    },
    { icon: Target, title: "Marketing & Reputation", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Instagram When Someone Remembers", problems: ["Social media is sporadic and uncoordinated", "No systematic review collection", "New client acquisition relies on walk-ins and word-of-mouth", "No referral incentive program"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Before/after content engine", detail: "Agent collects and posts style transformations (with consent) across platforms with consistent branding" }, { action: "Review automation", detail: "Post-visit satisfaction check routes happy clients to Google review — 5× review volume" }, { action: "New client conversion", detail: "Agent runs 'first visit' promotions and nurtures trial visitors into regulars" }, { action: "Referral rewards", detail: "Agent manages refer-a-friend program with automatic credits for both parties" }], savings: "Consistent social presence · 5× reviews · Referral engine" },
    },
  ],
  timelineTitle: "8-Week Salon Business Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Salon Assessment", icon: RefreshCw, tasks: ["Audit scheduling, retention, and revenue patterns", "Digitize color formulas and client preferences", "Map client journey from first visit to loyal regular", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch online booking with no-show prevention", "Activate salon-owned client profiles", "Deploy automated rebooking reminders", "Train receptionist and stylists on workflows"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Launch product recommendation engine", "Deploy commission automation", "Activate loyalty program", "Begin gap-filling and last-minute booking"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch review and social media automation", "Deploy referral program", "Activate membership plans", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Salon Business",
  roiStats: [
    { label: "Chair Utilization", value: "90%+", sub: "From 65–75% typical" },
    { label: "No-Show Rate", value: "2%", sub: "From 10–15% industry average" },
    { label: "Retail Revenue", value: "2×", sub: "Smart product recommendations" },
    { label: "Client Retention", value: "+40%", sub: "Rebooking and loyalty programs" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Salon Blueprint",
};

const SalonBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default SalonBlueprint;
