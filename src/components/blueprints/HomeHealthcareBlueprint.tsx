import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { HeartPulse, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: HeartPulse,
  badgeLabel: "Industry Blueprint: Home Healthcare & Home Care",
  badgeColor: "bg-primary/10",
  title: "The Home Care Agency: An Agentic AI Transformation",
  description: "A home healthcare or personal care agency — 20–200 caregivers, $1M–$10M revenue — fighting caregiver scheduling complexity, compliance documentation, family communication gaps, and high caregiver turnover.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Owner / Administrator", focus: "Strategy, referral relations, compliance oversight" },
    { role: "Care Coordinators (2–5)", focus: "Care plans, scheduling, client matching" },
    { role: "Caregivers (20–200)", focus: "Personal care, companionship, skilled nursing" },
    { role: "Billing / Claims", focus: "Medicaid/Medicare billing, private pay, insurance" },
    { role: "HR / Recruiting", focus: "Hiring, credentialing, training, retention" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The home care reality:</span> Caregiver turnover runs 60–80% annually at $2K–$5K per replacement. Scheduling 50–200 caregivers across client homes is a daily puzzle. Compliance documentation (visit verification, care notes) is inconsistent. Family members call constantly asking for updates. The agency is leaving <span className="font-semibold text-foreground">$10K–$30K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Caregiver Scheduling & Matching", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Scheduling Nightmare", problems: ["Coordinators spend 15+ hours/week on scheduling changes alone", "Caregiver call-offs at 5 AM create scrambles for coverage", "Client-caregiver matching ignores personality, skills, and preferences", "Drive time between clients wastes caregiver hours and increases burnout"] },
      after: { headline: "After: Care Scheduling Agent", solutions: [{ action: "Smart client-caregiver matching", detail: "Agent matches based on skills, personality, language, location, and client preferences — better care outcomes" }, { action: "Call-off management", detail: "Agent automatically identifies available replacements based on proximity, skills, and client compatibility — coverage in minutes" }, { action: "Route optimization", detail: "Agent schedules caregivers geographically — minimizes drive time, maximizes care hours" }, { action: "Schedule flexibility", detail: "Caregivers see and manage their schedules via app — swap requests, availability updates, and overtime tracking" }], savings: "Call-off coverage in minutes · Optimized routes · 15 hrs/wk saved" },
    },
    { icon: TrendingUp, title: "Compliance & Documentation", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Compliance Gaps Everywhere", problems: ["EVV (Electronic Visit Verification) compliance is inconsistent", "Care notes are brief, late, or missing — audit risk", "Credential tracking for 50–200 caregivers is a spreadsheet nightmare", "State survey preparation takes weeks of document gathering"] },
      after: { headline: "After: Compliance Agent", solutions: [{ action: "EVV automation", detail: "Agent manages clock-in/out, GPS verification, and real-time visit monitoring — 100% EVV compliance" }, { action: "Guided care documentation", detail: "Agent prompts caregivers to complete required documentation during visits — notes are complete and timely" }, { action: "Credential management", detail: "Agent tracks CPR, TB tests, licenses, and training for every caregiver — auto-alerts before expiration" }, { action: "Survey readiness", detail: "All documentation organized and searchable — survey prep in hours, not weeks" }], savings: "100% EVV compliance · Complete documentation · Survey-ready always" },
    },
    { icon: DollarSign, title: "Billing & Revenue Optimization", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Revenue Leakage", problems: ["Missed visits not billed — 3–5% of authorized hours go unbilled", "Medicaid/Medicare claim denials run 8–12% with slow resubmission", "Private pay invoicing is manual and inconsistent", "No visibility into profitability by client, payer, or service type"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Authorization utilization tracking", detail: "Agent monitors authorized vs. delivered hours — flags under-utilization for care coordinators to fill" }, { action: "Clean claims submission", detail: "Agent validates claims against payer rules before submission — first-pass rate to 95%+" }, { action: "Private pay automation", detail: "Agent handles recurring invoicing, payment processing, and late payment follow-up" }, { action: "Profitability analytics", detail: "Dashboard shows margin by client, payer, service type, and caregiver — focus on profitable care" }], savings: "Zero missed billing · 95%+ clean claims · Private pay automation" },
    },
    { icon: Target, title: "Family Communication & Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Families Left in the Dark", problems: ["Family members call office 5–10×/day asking about their loved one's care", "No proactive updates on condition changes or care delivered", "Referral source relationships managed informally", "No systematic approach to increasing authorized hours"] },
      after: { headline: "After: Family & Growth Agent", solutions: [{ action: "Family portal", detail: "Real-time visibility into visit schedules, caregiver assignments, care notes, and condition updates" }, { action: "Proactive family communication", detail: "Agent sends daily/weekly care summaries to family members — reduces inbound calls by 70%" }, { action: "Referral source management", detail: "Agent nurtures hospital discharge planners, social workers, and physician relationships with regular touchpoints" }, { action: "Hours expansion", detail: "Agent identifies clients who qualify for increased authorization and initiates the request process" }], savings: "70% fewer family calls · Proactive updates · Referral nurture" },
    },
  ],
  timelineTitle: "8-Week Home Care Agency Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Agency Assessment", icon: RefreshCw, tasks: ["Audit scheduling, compliance, and billing workflows", "Analyze caregiver turnover patterns and satisfaction", "Map client journey from referral to ongoing care", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch smart scheduling with call-off management", "Activate EVV and compliance documentation", "Deploy credential tracking for all caregivers", "Train coordinators on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Deploy authorization utilization tracking", "Launch clean claims and billing automation", "Activate private pay invoicing", "Begin profitability analytics"] },
    { week: "Week 7–8", phase: "Engage & Grow", icon: Lightbulb, tasks: ["Launch family portal and proactive communication", "Deploy referral source management", "Activate hours expansion workflow", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Home Care Agency",
  roiStats: [
    { label: "Caregiver Turnover", value: "−40%", sub: "Better matching, scheduling, and experience" },
    { label: "Billing Recovery", value: "$10–30K/mo", sub: "Missed hours + clean claims" },
    { label: "Compliance", value: "100%", sub: "EVV, documentation, credentials" },
    { label: "Family Satisfaction", value: "+50%", sub: "Proactive communication" },
  ],
  investment: "Investment: $2,000–$8,000/mo",
  ctaLabel: "Get Your Home Care Blueprint",
};

const HomeHealthcareBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default HomeHealthcareBlueprint;
