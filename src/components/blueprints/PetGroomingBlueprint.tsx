import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { PawPrint, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: PawPrint,
  badgeLabel: "Industry Blueprint: Pet Grooming & Boarding",
  badgeColor: "bg-accent/10",
  title: "The Pet Care Business: An Agentic AI Transformation",
  description: "A pet grooming shop or boarding facility — 3–8 staff, $200K–$800K revenue — fighting appointment chaos, seasonal demand swings, and high staff turnover with zero systems.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Lead Groomer", focus: "Grooming, client relations, business ops" },
    { role: "Groomers (2–4)", focus: "Bathing, grooming, breed-specific cuts" },
    { role: "Kennel Attendants", focus: "Boarding care, feeding, exercise, cleaning" },
    { role: "Front Desk", focus: "Booking, check-in/out, phone, retail" },
    { role: "Bookkeeper", focus: "Billing, payroll, inventory" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The pet care reality:</span> Phone-based booking eats 2+ hours daily. No-shows waste 15% of grooming slots. Boarding capacity is underutilized in off-seasons. Pet health/preference records are on paper cards. The business is leaving <span className="font-semibold text-foreground">$2K–$5K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Appointment & Capacity Management", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Phone Tag All Day", problems: ["70% of bookings come by phone — 2+ hrs/day answering and scheduling", "No-shows waste 15% of grooming slots at $50–$120 each", "Breed-specific timing isn't accounted for — Poodles take 2hr, Labs take 45min", "Boarding capacity is guesswork — overbooking or empty kennels"] },
      after: { headline: "After: Booking & Capacity Agent", solutions: [{ action: "Online self-booking with breed logic", detail: "System knows breed grooming times, assigns correct slot duration, and manages groomer specialties" }, { action: "No-show prevention", detail: "Photo reminders of pet's last groom + 'Bella is due!' messaging — reduces no-shows to 3%" }, { action: "Boarding capacity optimization", detail: "Real-time kennel availability with automated waitlists and seasonal pricing" }, { action: "Smart scheduling", detail: "Agent batches similar breeds, optimizes groomer rotations, and manages equipment availability" }], savings: "2 hrs/day recovered · 3% no-show rate · Optimized capacity" },
    },
    { icon: TrendingUp, title: "Pet Records & Client Retention", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Index Cards and Memory", problems: ["Pet preferences, allergies, and behavior notes on paper cards", "Vaccination records not tracked — liability risk", "No recall system — pets go months past due for grooming", "Owner preferences lost when staff turns over"] },
      after: { headline: "After: Pet Profile Agent", solutions: [{ action: "Digital pet profiles", detail: "Complete history: breed, temperament, allergies, grooming preferences, photos of preferred cuts" }, { action: "Vaccination tracking", detail: "Agent monitors expiration dates and reminds owners to update — protects the business from liability" }, { action: "Automated recall", detail: "Agent sends breed-appropriate grooming reminders — 'It's been 6 weeks, Bella's coat needs attention!'" }, { action: "Staff continuity", detail: "Any groomer can see a pet's full history and deliver consistent results" }], savings: "Zero paper records · Automated recall · Liability protection" },
    },
    { icon: DollarSign, title: "Revenue & Seasonal Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Feast or Famine Seasons", problems: ["Holiday boarding maxes out while January sits 40% empty", "No package or membership model — every visit is one-off pricing", "Add-on services (teeth, nails, de-shed) inconsistently offered", "No visibility into revenue per pet or per groomer"] },
      after: { headline: "After: Revenue Optimization Agent", solutions: [{ action: "Membership plans", detail: "Agent manages monthly grooming subscriptions — predictable revenue and guaranteed frequency" }, { action: "Seasonal demand shaping", detail: "Agent pushes off-peak promotions and early-bird holiday booking — smooths revenue curve" }, { action: "Smart upselling", detail: "Agent recommends add-ons based on breed, season, and pet history — 'Winter coat? Add de-shedding treatment'" }, { action: "Per-groomer revenue tracking", detail: "Dashboard shows revenue, utilization, and upsell rate per groomer" }], savings: "Recurring membership revenue · Smoothed seasonality · 25%+ upsell lift" },
    },
    { icon: Target, title: "Marketing & Community Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Yelp Reviews and Hope", problems: ["No systematic review collection — reputation is passive", "Social media is sporadic before/after photos when someone remembers", "No referral program beyond word-of-mouth", "New pet owner acquisition costs $50+ with no tracking"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Automated review collection", detail: "Agent sends post-visit satisfaction surveys and routes happy clients to Google/Yelp review" }, { action: "Content automation", detail: "Before/after photos (with permission) auto-posted to social with breed tags and local hashtags" }, { action: "Referral rewards", detail: "Agent manages 'Refer a friend, both get $10 off' with automatic tracking and credit" }, { action: "New client nurture", detail: "First-visit follow-up sequence with pet care tips and rebooking offers" }], savings: "5× reviews · Automated social · Referral engine" },
    },
  ],
  timelineTitle: "8-Week Pet Care Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Shop Assessment", icon: RefreshCw, tasks: ["Audit booking, records, and billing systems", "Map pet journey from first visit to loyal client", "Identify revenue leaks and seasonal patterns", "Digitize pet records from paper cards"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch online booking with breed-aware scheduling", "Activate no-show prevention and recall system", "Deploy digital pet profiles", "Train front desk on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Launch membership/subscription plans", "Deploy seasonal demand shaping", "Activate smart upselling engine", "Begin per-groomer analytics"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch automated review collection", "Deploy referral program", "Activate social media content engine", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Pet Care Business",
  roiStats: [
    { label: "Time Freed", value: "12+ hrs/wk", sub: "Phone booking, records, follow-ups" },
    { label: "No-Show Recovery", value: "80%", sub: "From 15% to 3% no-show rate" },
    { label: "Revenue Lift", value: "20–30%", sub: "Memberships, upsells, recall" },
    { label: "Review Growth", value: "5×", sub: "Automated collection and routing" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Pet Care Blueprint",
};

const PetGroomingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default PetGroomingBlueprint;
