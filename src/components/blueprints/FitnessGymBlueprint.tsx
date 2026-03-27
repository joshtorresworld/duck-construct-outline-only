import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Dumbbell, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Dumbbell,
  badgeLabel: "Industry Blueprint: Personal Fitness & Gym",
  badgeColor: "bg-primary/10",
  title: "The Fitness Business: An Agentic AI Transformation",
  description: "A solo trainer or boutique gym — 1–5 trainers, a front desk coordinator, generating $100K–$500K — struggling with no-shows, inconsistent client tracking, and zero recurring revenue predictability.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Head Trainer / Owner", focus: "1:1 sessions, group classes, programming" },
    { role: "Associate Trainer(s)", focus: "Client sessions, assessments, class instruction" },
    { role: "Front Desk / Coordinator", focus: "Scheduling, check-ins, member comms" },
    { role: "Nutritionist (Part-time)", focus: "Meal plans, consults, supplement guidance" },
    { role: "Bookkeeper", focus: "Memberships, billing, expenses" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The fitness reality:</span> Trainers max out at 25–30 sessions/week. No-shows cost $75–$200 per missed slot. Client progress is tracked in notebooks or not at all. Membership churn runs 5–8%/month because there's no automated engagement between visits. The gym is leaving{" "}
      <span className="font-semibold text-foreground">$3K–$8K/month on the table</span>.
    </>
  ),
  painAreas: [
    {
      icon: Calendar, title: "Session Scheduling & No-Show Prevention", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Empty Slots and Lost Revenue", problems: ["No-shows average 12–18% — each costs $75–$200 in lost revenue", "Scheduling 25+ sessions/week across trainers is manual chaos", "No waitlist system — cancelled slots go unfilled", "Peak hours overbooked while off-peak sits empty"] },
      after: { headline: "After: Smart Scheduling Agent", solutions: [{ action: "Automated booking with smart rules", detail: "Clients self-book within trainer availability, energy management blocks, and class capacity limits" }, { action: "No-show prevention", detail: "Value-focused reminders at 24hr and 1hr — 'Ready for leg day? Here's what we're targeting' — reduces no-shows to 3%" }, { action: "Waitlist auto-fill", detail: "Cancellations instantly offered to waitlisted clients — 85% slot recovery rate" }, { action: "Off-peak incentives", detail: "Agent identifies empty slots and pushes targeted offers to fill them" }], savings: "85% slot recovery · 3% no-show rate · $2K+/mo recovered" },
    },
    {
      icon: TrendingUp, title: "Client Progress & Retention", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Progress is a Guessing Game", problems: ["Workout logs scattered across apps, paper, or memory", "No systematic body composition or strength tracking", "Clients plateau and churn because progress isn't visible", "Re-engagement after missed weeks is ad-hoc at best"] },
      after: { headline: "After: Client Progress Agent", solutions: [{ action: "Automated progress tracking", detail: "Agent logs workouts, body metrics, and PRs — generates visual progress reports clients can see" }, { action: "Milestone celebrations", detail: "Agent sends automated congratulations at key milestones — 100th session, new PR, streak achievements" }, { action: "Plateau detection", detail: "Agent identifies stalled progress and suggests programming adjustments before the client gets frustrated" }, { action: "Win-back sequences", detail: "Agent detects absence patterns and triggers personalized re-engagement — 'We noticed you haven't been in — here's a modified plan to get back on track'" }], savings: "40% less churn · Visible progress · Automated re-engagement" },
    },
    {
      icon: DollarSign, title: "Revenue & Membership Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Unpredictable Monthly Revenue", problems: ["Membership churn runs 5–8%/month with no early warning", "No system for upgrade timing — clients stay on starter plans forever", "Failed payment recovery is manual and awkward", "No visibility into client lifetime value or revenue per session"] },
      after: { headline: "After: Revenue Optimization Agent", solutions: [{ action: "Churn prediction", detail: "Agent monitors attendance patterns and flags at-risk members 2–3 weeks before they cancel" }, { action: "Smart upgrade prompts", detail: "Agent identifies clients ready for higher-tier packages based on usage patterns and engagement" }, { action: "Automated payment recovery", detail: "Agent handles failed payments with escalating retry sequences — recovers 70% without staff intervention" }, { action: "LTV dashboards", detail: "Real-time visibility into revenue per client, average session value, and projected monthly revenue" }], savings: "Churn cut to 2–3% · 70% payment recovery · Data-driven upgrades" },
    },
    {
      icon: Target, title: "Lead Generation & Community Building", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Referrals and Instagram Hope", problems: ["90% of leads come from word-of-mouth — unpredictable", "Social media posting is sporadic and untracked", "No funnel from free class → paid membership", "Community events are one-off efforts with no follow-up"] },
      after: { headline: "After: Growth & Community Agent", solutions: [{ action: "Content engine", detail: "Agent creates workout tips, transformation stories, and class previews from trainer inputs — 5× content output" }, { action: "Trial-to-member conversion", detail: "Agent runs automated nurture sequences for trial members — personalized based on which classes they attended" }, { action: "Referral program automation", detail: "Agent tracks referrals, sends rewards, and prompts happy members at optimal times" }, { action: "Community engagement", detail: "Agent coordinates challenges, leaderboards, and social events — building stickiness beyond just workouts" }], savings: "5× content output · Automated trial conversion · Referral engine" },
    },
  ],
  timelineTitle: "8-Week Fitness Business Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Gym Assessment", icon: RefreshCw, tasks: ["Audit scheduling, billing, and member management systems", "Map client journey from lead to long-term member", "Identify revenue leaks and churn patterns", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch smart scheduling with no-show prevention", "Activate automated payment recovery", "Deploy client progress tracking system", "Train staff on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize & Retain", icon: BarChart3, tasks: ["Deploy churn prediction and re-engagement", "Launch upgrade timing and LTV dashboards", "Activate milestone celebrations and streak tracking", "Begin content repurposing engine"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch trial-to-member conversion funnels", "Deploy referral program automation", "Activate community challenge engine", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for a Fitness Business",
  roiStats: [
    { label: "Revenue Recovered", value: "$2–5K/mo", sub: "No-show prevention and slot recovery" },
    { label: "Churn Reduction", value: "60%", sub: "From 5–8% to 2–3% monthly" },
    { label: "Time Freed", value: "10+ hrs/wk", sub: "Scheduling, billing, follow-ups" },
    { label: "Member LTV", value: "+40%", sub: "Better retention and upgrades" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Fitness Blueprint",
};

const FitnessGymBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default FitnessGymBlueprint;
