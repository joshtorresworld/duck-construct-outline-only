import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  UtensilsCrossed,
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
  badgeIcon: UtensilsCrossed,
  badgeLabel: "Industry Blueprint: Restaurants & Food Service",
  badgeColor: "bg-accent/10",
  title: "The Restaurant: An Agentic AI Transformation",
  description:
    "A single-location restaurant — owner/operator, kitchen manager, 2–3 servers, and a bookkeeper — doing $500K–$2M in annual revenue but bleeding money through food waste, labor inefficiency, POS data silos, and high turnover. Here's how autonomous agents fix it.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Operator", focus: "Menu strategy, vendor relationships, P&L, front-of-house" },
    { role: "Kitchen Manager", focus: "Prep, line management, food safety, ordering" },
    { role: "Head Server / FOH Lead", focus: "Guest experience, scheduling, training, upselling" },
    { role: "Line Cook / Prep", focus: "Food preparation, plating, station management" },
    { role: "Bookkeeper", focus: "Payroll, invoices, sales tax, vendor payments" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The restaurant reality:</span> Average restaurant profit margin is 3–5%. Food waste runs 4–10% of food costs. Employee turnover exceeds 70% annually, and each replacement costs $3,500–$5,000. POS data goes unanalyzed — the owner knows what sold today but not what's actually profitable. The restaurant is leaving{" "}
      <span className="font-semibold text-foreground">$5K–$12K/month on the table</span> in food waste, labor inefficiency, and menu pricing gaps.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Labor Scheduling & Turnover Management",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Scheduling Chaos Every Week",
        problems: [
          "Owner spends 4+ hrs/week building schedules — juggling availability, overtime rules, and shift swaps via text",
          "Overstaffing on slow nights wastes $300–$500/week in unnecessary labor",
          "Understaffing on busy nights leads to poor service, bad reviews, and staff burnout",
          "New hire onboarding is informal — each replacement takes 2–3 weeks to reach productivity, costing $3,500+",
        ],
      },
      after: {
        headline: "After: Restaurant Scheduling Agent",
        solutions: [
          { action: "Demand-based scheduling", detail: "Agent analyzes POS history, reservations, events, and weather to predict covers — schedules the right staff for the right volume" },
          { action: "Shift swap automation", detail: "Agent lets staff request swaps via app — auto-approves when rules are met (no overtime, skills match)" },
          { action: "Overtime prevention", detail: "Agent monitors hours in real-time and alerts managers before overtime triggers — labor cost stays in target range" },
          { action: "Structured onboarding", detail: "Agent delivers training modules by role with checklists and quizzes — new hires reach productivity in 5 days, not 15" },
        ],
        savings: "4 hrs/week scheduling saved · $400/week labor optimization · Faster onboarding",
      },
    },
    {
      icon: Package,
      title: "Food Cost & Waste Management",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Throwing Money in the Dumpster",
        problems: [
          "Food waste runs 4–10% of food cost — $2K–$6K/month literally in the trash",
          "Ordering is based on gut feel and last week's memory — over-orders spoil, under-orders mean 86'd items",
          "No recipe costing — menu prices are based on competitor copying, not actual food cost percentages",
          "Vendor invoices are filed but never analyzed — price creep of 3–5% per year goes unnoticed",
        ],
      },
      after: {
        headline: "After: Food Intelligence Agent",
        solutions: [
          { action: "Sales-based par forecasting", detail: "Agent analyzes POS data by day-of-week, season, and events to predict prep quantities — waste drops 60%" },
          { action: "Automated ordering", detail: "Agent generates purchase orders based on forecasted need, current inventory, and vendor lead times — zero emergency orders" },
          { action: "Recipe costing engine", detail: "Agent calculates exact food cost per plate using current ingredient prices — flags items below target margin instantly" },
          { action: "Vendor price monitoring", detail: "Agent tracks price changes across suppliers and alerts on increases — negotiation leverage with data" },
        ],
        savings: "60% waste reduction · Accurate plate costing · $2K–$4K/mo saved",
      },
    },
    {
      icon: DollarSign,
      title: "Financial Reporting & POS Analytics",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Flying Blind on a 5% Margin",
        problems: [
          "POS generates sales reports but nobody analyzes them — data exists but creates no actionable insight",
          "Monthly P&L arrives 3 weeks late from the bookkeeper — problems from January discovered in March",
          "No visibility into daypart profitability — lunch may be losing money while dinner carries the business",
          "Sales tax, payroll tax, and tip reporting are manual compilations that eat 8+ hours/month",
        ],
      },
      after: {
        headline: "After: Restaurant Financial Agent",
        solutions: [
          { action: "Daily flash reports", detail: "Agent compiles sales, labor, food cost, and weather into a morning report — owner knows yesterday's numbers by 7am" },
          { action: "Real-time prime cost tracking", detail: "Agent monitors food + labor as a percentage of sales continuously — alerts when prime cost exceeds 60% threshold" },
          { action: "Daypart profitability analysis", detail: "Agent breaks down revenue and cost by breakfast/lunch/dinner — identifies which dayparts actually make money" },
          { action: "Automated tax compliance", detail: "Agent handles sales tax calculation, payroll tax filing prep, and tip reporting — bookkeeper reviews, not compiles" },
        ],
        savings: "Daily visibility · 8 hrs/mo tax prep saved · Actionable POS insights",
      },
    },
    {
      icon: TrendingUp,
      title: "Online Presence & Review Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Bad Reviews Fester Unanswered",
        problems: [
          "Google, Yelp, and DoorDash reviews go unanswered for days or weeks — damaging reputation",
          "Online ordering through 3–4 platforms (DoorDash, UberEats, direct) — each with separate menus to maintain",
          "No system to encourage happy customers to leave reviews — only unhappy people bother",
          "Social media posting is sporadic and reactive — no content strategy or consistency",
        ],
      },
      after: {
        headline: "After: Reputation & Marketing Agent",
        solutions: [
          { action: "Review monitoring and response", detail: "Agent alerts on new reviews within minutes and drafts personalized responses — owner approves with one click" },
          { action: "Unified menu management", detail: "Agent syncs menu updates across all platforms simultaneously — price changes, 86'd items, and specials reflected everywhere" },
          { action: "Review solicitation", detail: "Agent sends post-visit texts to dine-in customers requesting reviews — positive review volume increases 3×" },
          { action: "Automated social content", detail: "Agent generates and schedules posts featuring daily specials, behind-the-scenes content, and seasonal promotions" },
        ],
        savings: "Same-day review responses · 3× review volume · Unified menu across platforms",
      },
    },
    {
      icon: Target,
      title: "Menu Engineering & Growth Strategy",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: The Menu Hasn't Changed in 3 Years",
        problems: [
          "Menu items aren't evaluated by profitability and popularity — stars and dogs get equal real estate",
          "Specials are created on gut feel, not data — no way to know if they're profitable or just busy-work for the kitchen",
          "No understanding of customer ordering patterns — which items are ordered together, which drive add-ons",
          "Growth strategy is 'do more marketing' without knowing what to market or to whom",
        ],
      },
      after: {
        headline: "After: Menu Strategy Agent",
        solutions: [
          { action: "Menu engineering matrix", detail: "Agent classifies every item as Star (high profit, high popularity), Puzzle (high profit, low popularity), Plow Horse, or Dog — action plan for each" },
          { action: "Special performance tracking", detail: "Agent measures food cost, labor impact, and sales volume on every special — keeps winners, kills losers" },
          { action: "Pairing and upsell analysis", detail: "Agent identifies natural item pairings and suggests upsell training — 'Guests who order X add Y 35% of the time'" },
          { action: "Customer segmentation", detail: "Agent profiles regulars by visit frequency, spend, daypart, and preferences — enables targeted marketing" },
        ],
        savings: "Data-driven menu · 10–15% margin improvement · Targeted growth",
      },
    },
  ],
  timelineTitle: "8-Week Restaurant Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Kitchen & Systems Audit",
      icon: RefreshCw,
      tasks: [
        "Connect POS, scheduling, accounting, and delivery platforms",
        "Audit food cost percentages and waste patterns",
        "Map labor scheduling process and overtime patterns",
        "Identify top 3 profit leaks (usually waste, labor, and pricing)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch demand-based Scheduling Agent",
        "Activate Food Intelligence with par forecasting",
        "Deploy daily flash reports for owner",
        "Train kitchen manager and FOH lead on workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Marketing & Margins",
      icon: BarChart3,
      tasks: [
        "Deploy Reputation Agent with review monitoring",
        "Launch recipe costing and menu engineering analysis",
        "Activate unified menu management across platforms",
        "Begin vendor price monitoring and comparison",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Optimize & Scale",
      icon: Lightbulb,
      tasks: [
        "Implement menu engineering recommendations",
        "Deploy customer segmentation and targeted marketing",
        "Review prime cost trends and adjust operations",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Single-Location Restaurant",
  roiStats: [
    { label: "Food Waste Reduction", value: "60%", sub: "Sales-based forecasting and ordering" },
    { label: "Labor Savings", value: "$1.5K/mo", sub: "Demand-based scheduling, overtime prevention" },
    { label: "Revenue Lift", value: "10–15%", sub: "Menu optimization, upsell training, reviews" },
    { label: "Owner Time Saved", value: "12+ hrs/week", sub: "Scheduling, reporting, social media" },
  ],
  investment: "Investment: $2,000–$3,500/mo",
  ctaLabel: "Get Your Restaurant Blueprint",
};

const RestaurantBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default RestaurantBlueprint;
