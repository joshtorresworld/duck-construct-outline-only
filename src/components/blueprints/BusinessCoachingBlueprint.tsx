import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Compass,
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
  badgeIcon: Compass,
  badgeLabel: "Industry Blueprint: Business Coaching & Consulting",
  badgeColor: "bg-primary/10",
  title: "The Business Coaching Practice: An Agentic AI Transformation",
  description:
    "A solo or small coaching practice — 1–2 coaches, a program coordinator, a VA, and a bookkeeper — generating $200K–$1M in revenue but trapped trading time for money, manually managing client progress, and unable to scale beyond 1:1 sessions.",
  teamLabel: "The Practice",
  teamRoles: [
    { role: "Lead Coach / Founder", focus: "1:1 coaching, group programs, content, speaking" },
    { role: "Associate Coach", focus: "Client sessions, assessments, accountability calls" },
    { role: "Program Coordinator", focus: "Scheduling, onboarding, materials, event logistics" },
    { role: "Virtual Assistant", focus: "Email, social media, tech support, client comms" },
    { role: "Bookkeeper", focus: "Invoicing, subscriptions, expenses, tax prep" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The coaching reality:</span> Revenue is capped by calendar hours — a coach maxes out at 20–25 client sessions/week before burnout. Client progress tracking is informal (notebooks, scattered notes). Program delivery is manual — the same onboarding, the same worksheets, the same follow-ups, done from scratch each time. The practice is leaving{" "}
      <span className="font-semibold text-foreground">$5K–$10K/month on the table</span> in unscalable delivery, low program completion rates, and missed upsell timing.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Session Scheduling & Client Management",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Calendar Tetris Every Week",
        problems: [
          "Scheduling 20–25 sessions/week across time zones takes 3+ hrs/week of back-and-forth",
          "No-shows and last-minute cancellations average 12–15% — each slot costs $150–$500 in lost revenue",
          "Pre-session prep is skipped because there's no system to surface client context before each call",
          "Rescheduling one session creates a domino effect across the entire week",
        ],
      },
      after: {
        headline: "After: Coaching Calendar Agent",
        solutions: [
          { action: "Smart self-scheduling", detail: "Clients book within rules (buffer times, energy management blocks, time zone awareness) — zero back-and-forth" },
          { action: "No-show prevention", detail: "Agent sends value-focused reminders at 48hr, 24hr, and 1hr — reminding clients of their goals and session prep" },
          { action: "Pre-session briefing", detail: "Agent compiles client progress notes, last session action items, and upcoming milestones — coach is prepared in 2 minutes" },
          { action: "Waitlist auto-fill", detail: "Cancellations are instantly offered to waitlisted clients — 80% of slots are recovered" },
        ],
        savings: "3 hrs/week recovered · 80% slot recovery · Coach always prepared",
      },
    },
    {
      icon: TrendingUp,
      title: "Client Progress Tracking & Accountability",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Progress Lives in the Coach's Head",
        problems: [
          "Client goals, action items, and milestones tracked in notebooks or scattered docs — nothing is searchable",
          "Accountability between sessions is limited to 'How did it go?' at the start of the next call",
          "No system to measure actual client outcomes — testimonials are anecdotal, not data-backed",
          "When coach is sick or on vacation, nobody can pick up where they left off",
        ],
      },
      after: {
        headline: "After: Client Progress Agent",
        solutions: [
          { action: "Structured goal & milestone tracking", detail: "Agent records goals, action items, and progress after each session — creates a living client development record" },
          { action: "Between-session check-ins", detail: "Agent sends automated accountability prompts mid-week — 'How's progress on [action item]?' with easy response options" },
          { action: "Outcome measurement", detail: "Agent tracks quantifiable metrics (revenue growth, habit streaks, KPIs) tied to coaching goals — data-backed testimonials" },
          { action: "Coach continuity", detail: "Any coach can review a client's full history and pick up seamlessly — practice isn't dependent on one person's memory" },
        ],
        savings: "Measurable outcomes · 40% better accountability · Practice continuity",
      },
    },
    {
      icon: FileText,
      title: "Program Delivery & Scalable Content",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Reinventing the Wheel Every Client",
        problems: [
          "Onboarding each new client takes 2–3 hours — welcome emails, assessments, contracts, intake forms, all manual",
          "Group program materials are sent manually — worksheets, videos, and resources via individual emails",
          "Program completion rates are 50–60% because there's no automated engagement between modules",
          "Course/program content is locked in the founder's head — can't be delegated or scaled",
        ],
      },
      after: {
        headline: "After: Program Delivery Agent",
        solutions: [
          { action: "Automated client onboarding", detail: "Agent runs the entire welcome sequence — contract, intake assessment, first session prep, and resource delivery — in 15 minutes" },
          { action: "Drip content delivery", detail: "Agent releases program modules on schedule with engagement prompts — completion rates jump to 85%" },
          { action: "Engagement nurture between modules", detail: "Agent sends reflection prompts, micro-assignments, and peer-connection invitations — keeping momentum between sessions" },
          { action: "Content library management", detail: "Agent organizes all frameworks, worksheets, and resources — any coach can deliver any program consistently" },
        ],
        savings: "15-min onboarding · 85% completion rate · Infinitely scalable programs",
      },
    },
    {
      icon: DollarSign,
      title: "Revenue Model & Financial Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Trading Time for Money",
        problems: [
          "100% of revenue comes from 1:1 sessions — income is capped by available hours",
          "No recurring revenue — each month starts at zero unless clients have ongoing packages",
          "Invoicing is manual and inconsistent — some clients are billed late, some not at all",
          "No visibility into client lifetime value or when clients are likely to churn",
        ],
      },
      after: {
        headline: "After: Coaching Revenue Agent",
        solutions: [
          { action: "Revenue stream diversification", detail: "Agent models hybrid offerings — 1:1 + group + course + membership — and projects revenue impact of each" },
          { action: "Subscription management", detail: "Agent handles recurring billing, failed payment recovery, and upgrade/downgrade flows — predictable monthly revenue" },
          { action: "Churn prediction", detail: "Agent monitors engagement patterns and flags clients likely to leave — triggers re-engagement sequences before cancellation" },
          { action: "LTV optimization", detail: "Agent identifies optimal upsell timing — 'Clients who complete Module 3 convert to Mastermind at 45%'" },
        ],
        savings: "Recurring revenue model · 30% less churn · Data-driven upsell timing",
      },
    },
    {
      icon: Target,
      title: "Lead Generation & Authority Building",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Relying on Referrals and Hope",
        problems: [
          "80% of clients come from referrals — unpredictable and unscalable",
          "Webinars and workshops take 20+ hours to plan, promote, and deliver — ROI is unclear",
          "Content creation is sporadic — LinkedIn posts happen when founder has time (rarely)",
          "No funnel from free content → paid offering — valuable leads consume content but never buy",
        ],
      },
      after: {
        headline: "After: Authority & Lead Gen Agent",
        solutions: [
          { action: "Content repurposing engine", detail: "Agent takes one coaching session insight and creates LinkedIn posts, email newsletters, short videos, and lead magnets — 10× output from one input" },
          { action: "Webinar automation", detail: "Agent handles promotion, registration, reminder sequences, and post-event follow-up — coach just shows up and delivers" },
          { action: "Lead scoring & nurture", detail: "Agent tracks content engagement and scores leads — warm prospects get personalized outreach at the right time" },
          { action: "Funnel optimization", detail: "Agent maps the journey from free content to paid coaching and identifies where prospects drop off — plug the leaks" },
        ],
        savings: "10× content output · Automated webinar funnels · Predictable lead flow",
      },
    },
  ],
  timelineTitle: "8-Week Coaching Practice Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Practice Assessment", icon: RefreshCw, tasks: ["Map current client journey from discovery to engagement end", "Audit scheduling, content, and billing systems", "Identify revenue model opportunities (group, course, membership)", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Smart Scheduling with no-show prevention", "Activate automated client onboarding sequence", "Deploy Progress Tracking with between-session check-ins", "Train coordinator and VA on agent workflows"] },
    { week: "Week 5–6", phase: "Scale & Monetize", icon: BarChart3, tasks: ["Deploy Program Delivery Agent with drip content", "Launch subscription billing and churn prediction", "Activate content repurposing engine", "Begin client outcome dashboards"] },
    { week: "Week 7–8", phase: "Grow & Optimize", icon: Lightbulb, tasks: ["Launch webinar automation and lead nurture funnels", "Review revenue model and implement diversification", "Deploy authority building content calendar", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for a Business Coaching Practice",
  roiStats: [
    { label: "Time Freed", value: "15+ hrs/week", sub: "Scheduling, onboarding, reporting, content" },
    { label: "Program Completion", value: "50→85%", sub: "Automated engagement and accountability" },
    { label: "Revenue Scalability", value: "2–3×", sub: "Group programs + courses + memberships" },
    { label: "Client Outcomes", value: "Measurable", sub: "Data-backed progress and testimonials" },
  ],
  investment: "Investment: $1,500–$3,000/mo",
  ctaLabel: "Get Your Coaching Blueprint",
};

const BusinessCoachingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default BusinessCoachingBlueprint;
