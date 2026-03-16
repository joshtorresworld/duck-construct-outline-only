import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  UserCheck,
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
  badgeIcon: UserCheck,
  badgeLabel: "Industry Blueprint: HR & Staffing Consultancy",
  badgeColor: "bg-primary/10",
  title: "The HR & Staffing Consultancy: An Agentic AI Transformation",
  description:
    "A boutique staffing or HR consultancy — a principal, 1–2 recruiters, an admin/coordinator, and a bookkeeper — generating $500K–$2M in revenue but losing placements to slow sourcing, manual compliance tracking, disorganized candidate pipelines, and irregular client communication.",
  teamLabel: "The Firm",
  teamRoles: [
    { role: "Principal / Owner", focus: "Client development, strategic placements, firm growth" },
    { role: "Senior Recruiter", focus: "Sourcing, screening, interviews, offer negotiation" },
    { role: "Jr Recruiter / Sourcer", focus: "Resume screening, candidate outreach, database management" },
    { role: "Coordinator / Admin", focus: "Interview scheduling, background checks, onboarding docs" },
    { role: "Bookkeeper", focus: "Client invoicing, contractor payroll, commission tracking" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The staffing reality:</span> Time-to-fill averages 36–42 days but clients expect 14–21. Recruiters spend 65% of time on admin (scheduling, data entry, follow-ups) instead of sourcing and relationship building. Candidate databases become graveyards — 90% of sourced candidates are never contacted again. Placement fees average $15K–$25K but fall-offs within 90 days cost the firm a full refund. The firm is leaving{" "}
      <span className="font-semibold text-foreground">$8K–$18K/month on the table</span> in slow fills, lost candidates, and preventable fall-offs.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Interview Scheduling & Candidate Coordination",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Scheduling Eats Half the Day",
        problems: [
          "Coordinating interviews between candidates, hiring managers, and panels requires 8–12 emails per interview",
          "Time zone mismatches and calendar conflicts cause 15% of scheduled interviews to be rescheduled",
          "Coordinator spends 6+ hrs/week on scheduling alone — for a 3-person firm, that's a massive resource drain",
          "Candidates drop out of slow processes — every day of delay reduces hire probability by 10%",
        ],
      },
      after: {
        headline: "After: Interview Coordination Agent",
        solutions: [
          { action: "Automated scheduling", detail: "Agent syncs candidate and hiring manager calendars and proposes optimal slots — interviews scheduled in minutes, not days" },
          { action: "Time zone intelligence", detail: "Agent handles all time zone conversions and sends location-appropriate calendar invites — zero mismatches" },
          { action: "Prep packet automation", detail: "Agent sends candidates interview prep materials (company info, interviewer bios, logistics) 24hrs in advance" },
          { action: "Feedback collection", detail: "Agent sends structured feedback forms to interviewers immediately after — responses captured same-day instead of chased for weeks" },
        ],
        savings: "6 hrs/week recovered · Same-day interview scheduling · Zero time zone errors",
      },
    },
    {
      icon: TrendingUp,
      title: "Candidate Sourcing & Pipeline Management",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Great Candidates Lost in the Database",
        problems: [
          "ATS/database has 5,000+ candidates but 90% are never contacted again after initial screening",
          "Sourcing for each new role starts from scratch — LinkedIn searches repeated endlessly",
          "Passive candidates require 6–8 touches before engaging — recruiters give up after 2–3",
          "No system to match existing candidates to new roles — silver medalists from past searches are forgotten",
        ],
      },
      after: {
        headline: "After: Talent Intelligence Agent",
        solutions: [
          { action: "Database reactivation", detail: "Agent matches new job orders against existing candidates by skills, experience, and location — surfaces qualified candidates in seconds" },
          { action: "Automated outreach sequences", detail: "Agent runs personalized multi-touch campaigns to passive candidates — 8 touches over 30 days across email and LinkedIn" },
          { action: "Candidate scoring", detail: "Agent ranks candidates by fit, availability, and engagement signals — recruiters spend time on the highest-probability matches" },
          { action: "Pipeline health dashboard", detail: "Agent shows candidates by stage for every active role — reveals where bottlenecks are and which roles need more sourcing" },
        ],
        savings: "50% faster sourcing · 90% database utilization · 6–8 touch automation",
      },
    },
    {
      icon: FileText,
      title: "Compliance, Background Checks & Onboarding",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Compliance Is a Last-Minute Scramble",
        problems: [
          "Background check initiation is manual — coordinator copies data between systems and chases candidates for consent forms",
          "I-9 and E-Verify deadlines are tracked manually — missed deadlines risk federal penalties",
          "Client-specific compliance requirements (drug testing, certifications, clearances) vary and aren't tracked systematically",
          "Onboarding paperwork for contract placements takes 2–3 days to compile — delaying start dates",
        ],
      },
      after: {
        headline: "After: Staffing Compliance Agent",
        solutions: [
          { action: "Automated background check workflow", detail: "Agent initiates checks at offer acceptance, sends consent forms digitally, and tracks completion — zero manual data entry" },
          { action: "Compliance deadline tracking", detail: "Agent monitors I-9, E-Verify, and client-specific requirements with escalating alerts — zero missed deadlines" },
          { action: "Client requirement matrix", detail: "Agent maintains each client's compliance requirements and auto-generates checklists per placement — nothing missed" },
          { action: "Digital onboarding packets", detail: "Agent compiles and sends all onboarding documents in one digital package — candidates complete in 30 minutes vs 3 days" },
        ],
        savings: "Zero compliance misses · 30-min digital onboarding · Audit-ready records",
      },
    },
    {
      icon: DollarSign,
      title: "Billing, Commission & Financial Tracking",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Commission Disputes Every Quarter",
        problems: [
          "Placement fee invoicing happens days after start date — sometimes weeks when coordinator is busy",
          "Commission splits between recruiters are tracked in spreadsheets — disputes arise constantly",
          "Contractor payroll and client billing for temp placements require manual timesheet reconciliation",
          "Guarantee period tracking (90-day fall-off refunds) is informal — sometimes the firm eats a $20K refund it could have prevented",
        ],
      },
      after: {
        headline: "After: Staffing Finance Agent",
        solutions: [
          { action: "Auto-invoicing at placement", detail: "Agent generates and sends placement fee invoices on the candidate's start date — zero delay" },
          { action: "Commission automation", detail: "Agent calculates splits based on defined rules — transparent, auditable, zero disputes" },
          { action: "Timesheet reconciliation", detail: "Agent matches contractor timesheets to client approvals and generates invoices — same-day billing cycle" },
          { action: "Guarantee period monitoring", detail: "Agent tracks all active guarantees and triggers check-in calls at 30, 60, and 80 days — prevents fall-offs with proactive support" },
        ],
        savings: "Same-day invoicing · Zero commission disputes · Proactive fall-off prevention",
      },
    },
    {
      icon: Target,
      title: "Client Development & Firm Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Living and Dying by 3 Clients",
        problems: [
          "80% of revenue comes from 2–3 clients — losing one would be catastrophic",
          "Client communication is reactive — only talking when there's an active search",
          "No market intelligence sharing — competitors position themselves as partners while you position as vendors",
          "Expansion into new verticals or geographies is based on opportunity, not strategy",
        ],
      },
      after: {
        headline: "After: Staffing Growth Agent",
        solutions: [
          { action: "Client concentration risk monitoring", detail: "Agent tracks revenue concentration and flags when any client exceeds 25% of revenue — triggers diversification outreach" },
          { action: "Proactive client engagement", detail: "Agent sends quarterly labor market reports, salary benchmarks, and hiring trend insights — positions firm as a strategic partner" },
          { action: "Job order prediction", detail: "Agent analyzes client hiring patterns and signals to predict upcoming needs — proactive outreach before they go to market" },
          { action: "Vertical expansion modeling", detail: "Agent identifies high-growth industries with fee structures and competition data — data-backed expansion decisions" },
        ],
        savings: "Diversified revenue · Strategic partner positioning · Predictable pipeline",
      },
    },
  ],
  timelineTitle: "8-Week Staffing Consultancy Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Firm Assessment", icon: RefreshCw, tasks: ["Audit ATS, CRM, billing, and compliance systems", "Map workflow from job order through placement and guarantee period", "Analyze client concentration and placement profitability", "Identify top revenue leaks (usually sourcing speed, fall-offs, invoicing)"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Interview Coordination Agent", "Activate Talent Intelligence for database reactivation", "Deploy automated outreach sequences for passive candidates", "Train recruiters and coordinator on agent workflows"] },
    { week: "Week 5–6", phase: "Compliance & Finance", icon: BarChart3, tasks: ["Deploy Compliance Agent with digital onboarding", "Launch auto-invoicing and commission automation", "Activate guarantee period monitoring and check-ins", "Begin weekly placement and pipeline dashboards"] },
    { week: "Week 7–8", phase: "Growth & Strategy", icon: Lightbulb, tasks: ["Deploy client engagement and market intelligence sharing", "Launch client concentration monitoring", "Model vertical expansion opportunities", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for an HR & Staffing Consultancy",
  roiStats: [
    { label: "Time-to-Fill", value: "−40%", sub: "Database reactivation and automated outreach" },
    { label: "Fall-Off Prevention", value: "80%", sub: "Proactive check-ins during guarantee period" },
    { label: "Recruiter Selling Time", value: "2× more", sub: "Admin automation frees 12+ hrs/week" },
    { label: "Revenue Concentration", value: "De-risked", sub: "Client diversification monitoring" },
  ],
  investment: "Investment: $2,500–$4,000/mo",
  ctaLabel: "Get Your Staffing Blueprint",
  bgClass: "bg-surface-sunken",
};

const HRStaffingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default HRStaffingBlueprint;
