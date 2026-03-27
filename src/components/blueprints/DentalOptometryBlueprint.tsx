import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Eye, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Eye,
  badgeLabel: "Industry Blueprint: Dental & Optometry Groups",
  badgeColor: "bg-primary/10",
  title: "The Multi-Location Practice: An Agentic AI Transformation",
  description: "A dental or optometry group — 2–8 locations, 20–100 employees, $2M–$15M revenue — struggling with cross-location scheduling, insurance verification bottlenecks, and patient recall inconsistency.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Practice Owner / Managing Doctor", focus: "Clinical care, strategy, provider relations" },
    { role: "Office Managers (per location)", focus: "Staff management, patient experience, operations" },
    { role: "Front Desk (per location)", focus: "Scheduling, check-in, insurance verification" },
    { role: "Clinical Staff", focus: "Hygienists, techs, assistants, opticians" },
    { role: "Billing / RCM", focus: "Claims, collections, patient billing, denials" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The multi-location reality:</span> Insurance verification takes 15–20 minutes per patient manually. No-shows average 12–18% at $150–$400/slot. Recall campaigns are inconsistent across locations. Claims denial rate runs 5–10% with slow resubmission. The group is leaving <span className="font-semibold text-foreground">$15K–$40K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Cross-Location Scheduling & No-Shows", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Location Silos", problems: ["Each location schedules independently — no cross-location optimization", "No-shows average 12–18% with basic reminder calls", "Provider schedules have gaps while patients wait weeks for appointments", "New patient onboarding varies wildly between locations"] },
      after: { headline: "After: Scheduling Intelligence Agent", solutions: [{ action: "Network-wide scheduling", detail: "Patients can book at any location based on provider availability, proximity, and wait times" }, { action: "Smart no-show prevention", detail: "Agent sends personalized reminders with appointment value — 'Your cleaning prevents $3,000 in future work' — no-shows to 3%" }, { action: "Gap optimization", detail: "Agent fills schedule gaps with recall patients, waitlisted appointments, and walk-in routing" }, { action: "Standardized onboarding", detail: "Agent runs identical intake workflows across all locations — consistent patient experience" }], savings: "3% no-show rate · Cross-location booking · Consistent onboarding" },
    },
    { icon: TrendingUp, title: "Insurance Verification & Claims", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Verification Bottleneck", problems: ["Insurance verification takes 15–20 min per patient — front desk buried", "Patients arrive to discover coverage issues — bad experience and lost production", "Claims denial rate runs 5–10% — resubmission is slow and manual", "No tracking of which procedures are most frequently denied by which payers"] },
      after: { headline: "After: Insurance Agent", solutions: [{ action: "Automated eligibility verification", detail: "Agent verifies insurance 48 hours before appointment — flags issues for resolution before patient arrives" }, { action: "Clean claims submission", detail: "Agent validates claims against payer rules before submission — first-pass acceptance rate jumps to 95%+" }, { action: "Denial management", detail: "Agent auto-identifies denial reason, corrects common issues, and resubmits — average resolution in 48 hours" }, { action: "Payer analytics", detail: "Dashboard shows denial rates, reimbursement speed, and profitability by payer — inform contracting decisions" }], savings: "Auto-verification · 95%+ clean claims · 48-hr denial resolution" },
    },
    { icon: DollarSign, title: "Patient Recall & Production Optimization", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Patients Disappear After Treatment", problems: ["Recall campaigns are inconsistent — some locations do them, some don't", "Patients overdue for hygiene or exams aren't systematically contacted", "Treatment plan acceptance is presented once and never followed up", "No measurement of production per provider or per location"] },
      after: { headline: "After: Patient Engagement Agent", solutions: [{ action: "Automated recall campaigns", detail: "Agent runs consistent recall across all locations — overdue patients get personalized outreach based on treatment history" }, { action: "Treatment plan follow-up", detail: "Agent follows up on unaccepted treatment plans — 'You discussed crowns on #14 and #19, ready to schedule?'" }, { action: "Production dashboards", detail: "Real-time production by provider, procedure, and location — identify what drives revenue" }, { action: "Reactivation campaigns", detail: "Agent identifies patients inactive 12+ months and runs win-back sequences — recovers 15–20% of lost patients" }], savings: "Consistent recall · 30% more treatment acceptance · 15% reactivation" },
    },
    { icon: Target, title: "Growth & Patient Acquisition", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Growing One Location at a Time", problems: ["Marketing is location-specific and uncoordinated", "New patient inquiry response takes 4+ hours", "No tracking of patient acquisition cost by channel", "Online reputation varies wildly across locations"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Unified marketing analytics", detail: "Agent tracks patient acquisition cost, conversion rates, and lifetime value by channel across all locations" }, { action: "Instant inquiry response", detail: "Agent responds to new patient inquiries within 5 minutes — books appointment before they call the next practice" }, { action: "Reputation management", detail: "Agent manages review collection across all locations — consistent 4.5+ star ratings everywhere" }, { action: "Referral network management", detail: "Agent tracks specialist referrals in/out and nurtures referring doctor relationships" }], savings: "5-min inquiry response · Consistent 4.5+ stars · Network-wide analytics" },
    },
  ],
  timelineTitle: "8-Week Multi-Location Practice Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Practice Assessment", icon: RefreshCw, tasks: ["Audit scheduling, billing, and recall across all locations", "Analyze no-show rates and insurance denial patterns", "Map patient journey from inquiry to recall", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch cross-location scheduling with no-show prevention", "Activate automated insurance verification", "Deploy standardized patient onboarding", "Train office managers on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Deploy clean claims and denial management", "Launch automated recall campaigns across all locations", "Activate treatment plan follow-up", "Begin production analytics dashboards"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch instant inquiry response and new patient booking", "Deploy reputation management across locations", "Activate reactivation campaigns", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Multi-Location Practice",
  roiStats: [
    { label: "Production Lift", value: "$15–40K/mo", sub: "Recall, acceptance, no-show prevention" },
    { label: "Claims Efficiency", value: "95%+", sub: "First-pass clean claim rate" },
    { label: "No-Show Rate", value: "3%", sub: "From 12–18% industry average" },
    { label: "Patient Reactivation", value: "15–20%", sub: "Win-back inactive patients" },
  ],
  investment: "Investment: $3,000–$8,000/mo",
  ctaLabel: "Get Your Practice Blueprint",
};

const DentalOptometryBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default DentalOptometryBlueprint;
