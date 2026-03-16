import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Home,
  Calendar,
  TrendingUp,
  DollarSign,
  FileText,
  Target,
  RefreshCw,
  Zap,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Home,
  badgeLabel: "Industry Blueprint: Real Estate & Property Management",
  badgeColor: "bg-success/10",
  title: "The Real Estate Office: An Agentic AI Transformation",
  description:
    "A small brokerage or property management firm — 2–3 agents, a transaction coordinator, and an office manager — handling $5M–$20M in annual transactions but losing deals to slow response times, document chaos, wire fraud risk, and tenant data sprawl.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Broker / Owner", focus: "Deal oversight, compliance, agent mentoring, P&L" },
    { role: "Lead Agent", focus: "Listings, showings, negotiations, client relationships" },
    { role: "Buyer's Agent", focus: "Buyer consultations, showings, offer preparation" },
    { role: "Transaction Coordinator", focus: "Contract to close, timelines, document management" },
    { role: "Office Manager", focus: "Marketing, CRM, bookkeeping, tenant management" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The real estate reality:</span> The average agent responds to leads in 5+ hours — but 78% of buyers go with the first agent who responds. Transaction coordinators juggle 15–20 active files with 100+ tasks each. Wire fraud costs the industry $446M/year. The office is leaving{" "}
      <span className="font-semibold text-foreground">$10K–$18K/month on the table</span> in lost leads, transaction delays, and operational chaos.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Showing Scheduling & Client Communication",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Missed Showings, Frustrated Clients",
        problems: [
          "Showing requests come via text, email, Zillow, and phone — agent juggles scheduling across 3–4 apps",
          "Double-bookings happen weekly, damaging client trust and listing agent relationships",
          "Buyers expect instant showing availability — delays of even 2 hours lose deals to competitors",
          "Post-showing follow-up is inconsistent — some buyers hear back in a day, others never",
        ],
      },
      after: {
        headline: "After: Showing Coordination Agent",
        solutions: [
          { action: "Unified showing request hub", detail: "Agent aggregates requests from all platforms, checks availability, and confirms within 15 minutes" },
          { action: "Route-optimized showing tours", detail: "Agent clusters nearby properties and builds efficient showing routes — see 8 homes in the time it used to take for 5" },
          { action: "Automated post-showing feedback", detail: "Agent sends buyers a feedback form after each showing, compiles preferences, and suggests next properties" },
          { action: "Client status updates", detail: "Agent sends weekly market updates and new listings matching buyer criteria — keeps you top of mind" },
        ],
        savings: "5 hrs/week recovered · 40% more showings · Zero double-bookings",
      },
    },
    {
      icon: TrendingUp,
      title: "Lead Response & Nurture Pipeline",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Leads Die While You're at a Showing",
        problems: [
          "Zillow, Realtor.com, and website leads average 5+ hour response time — 78% go to the first responder",
          "Agent manually qualifies leads — spending equal time on tire-kickers and ready buyers",
          "Long-term nurture is nonexistent — leads that aren't ready today are forgotten entirely",
          "No attribution — broker doesn't know if the $2K/mo Zillow spend is actually producing closings",
        ],
      },
      after: {
        headline: "After: Real Estate Lead Agent",
        solutions: [
          { action: "Sub-60-second response", detail: "Agent sends a personalized text with matching properties within 60 seconds of any inquiry — before competitors even see the lead" },
          { action: "AI lead qualification", detail: "Agent asks pre-qualifying questions (timeline, financing, price range) and scores leads — agents spend time on ready buyers only" },
          { action: "12-month nurture sequences", detail: "Agent runs market-update drip campaigns for long-term leads — automatically re-engages when behavior signals readiness" },
          { action: "ROI by source tracking", detail: "Agent tracks every lead from source to closing — reveals true cost-per-acquisition by platform" },
        ],
        savings: "100% lead response · 3× conversion rate · Clear marketing ROI",
      },
    },
    {
      icon: FileText,
      title: "Transaction Management & Compliance",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: 150 Tasks Per File, All Manual",
        problems: [
          "Transaction coordinator tracks 100–150 tasks per file in spreadsheets — items slip through constantly",
          "Document collection from buyers, sellers, lenders, and title takes weeks of chasing",
          "Compliance deadlines (inspection periods, financing contingencies) are calculated manually",
          "Wire fraud verification is inconsistent — one wrong wire costs the entire commission and then some",
        ],
      },
      after: {
        headline: "After: Transaction Intelligence Agent",
        solutions: [
          { action: "Automated task tracking", detail: "Agent generates the full task checklist from contract terms and tracks completion — nothing falls through the cracks" },
          { action: "Document collection automation", detail: "Agent requests documents from all parties with reminders — collection time drops from weeks to days" },
          { action: "Deadline monitoring", detail: "Agent calculates contingency dates, sends alerts to all parties, and flags approaching deadlines with escalating urgency" },
          { action: "Wire fraud prevention", detail: "Agent implements multi-step wire verification with encrypted communication — protects every transaction" },
        ],
        savings: "10 hrs/week per TC · Zero missed deadlines · Wire fraud protection",
      },
    },
    {
      icon: DollarSign,
      title: "Commission Tracking & Financial Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Where Did That Commission Go?",
        problems: [
          "Commission splits, referral fees, and broker fees tracked in spreadsheets — errors are common",
          "Agents don't know their true net until weeks after closing — cash flow planning is impossible",
          "Marketing expenses aren't tracked against production — no idea which spend drives closings",
          "Tax planning is reactive — quarterly estimates are guesses based on incomplete data",
        ],
      },
      after: {
        headline: "After: Real Estate Financial Agent",
        solutions: [
          { action: "Automated commission calculation", detail: "Agent computes net commission at contract — accounting for splits, referrals, franchise fees, and marketing costs" },
          { action: "Real-time production dashboard", detail: "Agent tracks pending, closed, and projected income — agents and broker see the pipeline in real time" },
          { action: "Marketing ROI tracking", detail: "Agent ties marketing spend to closings — reveals which investments actually produce transactions" },
          { action: "Tax-ready reporting", detail: "Agent categorizes expenses continuously and generates quarterly estimated tax reports automatically" },
        ],
        savings: "Zero commission errors · Real-time financials · Tax-ready books",
      },
    },
    {
      icon: Target,
      title: "Market Positioning & Growth Strategy",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Growing by Accident",
        problems: [
          "Broker doesn't know which agent, neighborhood, or price point generates the most profit",
          "Recruiting decisions are based on headcount, not production potential",
          "Market share is unknown — no competitive intelligence on listing volume or price trends",
          "Expansion into new areas or services is based on gut feel, not data",
        ],
      },
      after: {
        headline: "After: Brokerage Strategy Agent",
        solutions: [
          { action: "Profitability by segment", detail: "Agent analyzes margin by agent, property type, price range, and geography — reveals where to focus" },
          { action: "Recruiting intelligence", detail: "Agent models the revenue impact of adding agents in specific markets — data-driven recruiting" },
          { action: "Market share tracking", detail: "Agent monitors MLS data and competes on listing volume, days on market, and price trends in your farm areas" },
          { action: "Expansion modeling", detail: "Agent evaluates new markets and service lines (property management, commercial) with projected ROI" },
        ],
        savings: "Data-driven growth · Optimal market positioning · Strategic recruiting",
      },
    },
  ],
  timelineTitle: "8-Week Real Estate Office Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Connect & Map",
      icon: RefreshCw,
      tasks: [
        "Audit CRM, MLS, transaction management, and marketing systems",
        "Map lead sources, response times, and conversion funnels",
        "Review transaction workflow from contract to close",
        "Identify biggest revenue leaks (usually lead response and TC overhead)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Lead Response Agent with sub-60-second replies",
        "Activate Showing Coordination across all platforms",
        "Deploy Transaction Intelligence with automated task tracking",
        "Train agents and TC on daily workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Expand & Optimize",
      icon: BarChart3,
      tasks: [
        "Deploy Commission Tracking and Financial Agent",
        "Launch wire fraud prevention protocols",
        "Activate 12-month lead nurture campaigns",
        "Begin weekly production and pipeline dashboards",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Scale & Strategize",
      icon: Lightbulb,
      tasks: [
        "Review market positioning and profitability data",
        "Deploy Brokerage Strategy Agent for growth planning",
        "Document SOPs for all agent-assisted workflows",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Small Real Estate Office",
  roiStats: [
    { label: "Lead Conversion", value: "3× lift", sub: "Sub-60-second response, AI qualification" },
    { label: "TC Time Saved", value: "10+ hrs/week", sub: "Automated tasks, document collection" },
    { label: "Commission Accuracy", value: "100%", sub: "Zero calculation errors or surprises" },
    { label: "Wire Fraud Risk", value: "Eliminated", sub: "Multi-step verification on every transaction" },
  ],
  investment: "Investment: $2,500–$4,500/mo",
  ctaLabel: "Get Your Real Estate Blueprint",
  bgClass: "bg-surface-sunken",
};

const RealEstateBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default RealEstateBlueprint;
