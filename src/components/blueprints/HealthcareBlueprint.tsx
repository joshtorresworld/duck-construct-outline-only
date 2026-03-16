import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Heart,
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
  badgeIcon: Heart,
  badgeLabel: "Industry Blueprint: Healthcare & Dental",
  badgeColor: "bg-primary/10",
  title: "The 5-Person Medical Practice: An Agentic AI Transformation",
  description:
    "A small medical or dental practice — 1 provider, 1 hygienist/MA, 1 office manager, 1 billing specialist, 1 front desk — generating $800K–$2M in revenue but hemorrhaging time on HIPAA paperwork, patient no-shows, insurance follow-ups, and scattered records. Here's how autonomous agents fix every one of those problems.",
  teamLabel: "The Practice Team",
  teamRoles: [
    { role: "Provider / Dentist", focus: "Patient care, treatment plans, clinical decisions" },
    { role: "Hygienist / MA", focus: "Patient prep, vitals, clinical support, sterilization" },
    { role: "Office Manager", focus: "Scheduling, HR, vendor management, compliance" },
    { role: "Billing Specialist", focus: "Insurance claims, coding, collections, AR" },
    { role: "Front Desk", focus: "Check-in/out, phones, appointment booking, records" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The healthcare reality:</span> HIPAA compliance alone consumes 8–12 hours per week. Patient no-shows cost the average practice $150K+/year. Insurance claim denials run 5–10%, each taking 20+ minutes to rework. The provider spends 2 hours/day on documentation instead of seeing patients. The practice is leaving{" "}
      <span className="font-semibold text-foreground">$12K–$20K/month on the table</span> in unbilled services, denied claims, and empty appointment slots.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Patient Scheduling & No-Show Prevention",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Empty Chairs, Lost Revenue",
        problems: [
          "No-show rate averages 18–22%, costing $2,500–$4,000/month in lost production",
          "Front desk spends 6+ hrs/week playing phone tag to confirm appointments",
          "Same-day cancellations leave gaps that are rarely filled — provider sits idle during prime hours",
          "New patient intake forms are still on clipboards — data entry takes 15 min/patient and is error-prone",
        ],
      },
      after: {
        headline: "After: Patient Scheduling Agent",
        solutions: [
          { action: "Automated multi-channel reminders", detail: "Agent sends SMS, email, and voice reminders at 72hr, 24hr, and 2hr marks — no-shows drop to under 5%" },
          { action: "Smart waitlist filling", detail: "When a cancellation occurs, agent contacts waitlisted patients by priority and fills the slot within 30 minutes" },
          { action: "Digital intake automation", detail: "New patients complete forms online before arrival — data flows directly into EHR, saving 15 min/patient" },
          { action: "Optimal scheduling patterns", detail: "Agent arranges appointment types to maximize provider productivity — high-revenue procedures in prime morning slots" },
        ],
        savings: "6 hrs/week recovered · $3K/mo revenue recaptured · 75% fewer no-shows",
      },
    },
    {
      icon: TrendingUp,
      title: "Insurance Claims & Revenue Cycle",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Denied Claims Pile Up",
        problems: [
          "5–10% of claims are denied on first submission — each rework takes 20–45 minutes",
          "Billing specialist spends 60% of their time chasing insurance companies on the phone",
          "Average days-to-collect is 45+ days; $40K–$80K is perpetually stuck in AR",
          "Coding errors go unnoticed until audits — risking compliance penalties and clawbacks",
        ],
      },
      after: {
        headline: "After: Revenue Cycle Agent",
        solutions: [
          { action: "Pre-submission claim scrubbing", detail: "Agent validates coding, eligibility, and documentation before submission — denial rate drops to under 2%" },
          { action: "Automated follow-up on aging claims", detail: "Agent tracks every claim and initiates follow-up at 14, 30, and 45 days — no claim falls through the cracks" },
          { action: "Patient balance automation", detail: "Agent sends payment reminders with online payment links — patient collections improve 40%" },
          { action: "Coding optimization alerts", detail: "Agent flags under-coded procedures and suggests appropriate codes based on documentation — captures missed revenue" },
        ],
        savings: "8 hrs/week saved · $5K/mo recovered from denials · 18-day avg collection",
      },
    },
    {
      icon: DollarSign,
      title: "HIPAA Compliance & Documentation",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Compliance is a Constant Worry",
        problems: [
          "HIPAA risk assessments are done annually (if at all) — gaps go unnoticed for months",
          "Provider spends 2 hrs/day on clinical documentation — charting at home after dinner",
          "BAAs with vendors are tracked in a folder somewhere — nobody knows if they're current",
          "Staff training on HIPAA is a one-time onboarding event, not ongoing — risky behaviors develop",
        ],
      },
      after: {
        headline: "After: Compliance & Documentation Agent",
        solutions: [
          { action: "Continuous risk monitoring", detail: "Agent runs automated HIPAA risk scans monthly — flags new vulnerabilities before they become violations" },
          { action: "AI-assisted clinical notes", detail: "Agent drafts clinical notes from encounter data — provider reviews and signs in 3 minutes instead of 20" },
          { action: "BAA tracker", detail: "Agent monitors all vendor agreements, sends renewal reminders 60 days out, and flags missing BAAs" },
          { action: "Quarterly staff training", detail: "Agent delivers bite-sized HIPAA training modules and tracks completion — audit-ready documentation always current" },
        ],
        savings: "10 hrs/week documentation time saved · Zero compliance gaps · Audit-ready 24/7",
      },
    },
    {
      icon: Package,
      title: "Supplies & Inventory Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Expired Supplies and Emergency Orders",
        problems: [
          "Medical/dental supplies tracked mentally or on a clipboard — stockouts happen weekly",
          "Emergency orders at rush pricing add $300–$600/month in unnecessary costs",
          "Expired supplies discovered during procedures — wasted product and patient safety risk",
          "No visibility into supply cost per procedure — can't accurately price services",
        ],
      },
      after: {
        headline: "After: Medical Supply Agent",
        solutions: [
          { action: "Usage-based auto-reordering", detail: "Agent tracks consumption patterns and generates orders at optimal reorder points — zero stockouts" },
          { action: "Expiration date tracking", detail: "Agent monitors lot numbers and expiration dates — FIFO alerts and rotation reminders prevent waste" },
          { action: "Cost-per-procedure analytics", detail: "Agent maps supply costs to procedure types — reveals true margins on every service offered" },
          { action: "Vendor price optimization", detail: "Agent compares pricing across distributors (Henry Schein, Patterson, etc.) and flags savings opportunities" },
        ],
        savings: "$500/mo saved on rush orders · Zero expired waste · Accurate procedure costing",
      },
    },
    {
      icon: Target,
      title: "Patient Retention & Growth Strategy",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Patients Quietly Disappear",
        problems: [
          "20–30% of patients don't return for recommended follow-ups — revenue walks out the door",
          "No system to identify which patients are overdue for hygiene, screenings, or preventive care",
          "New patient acquisition costs $200–$500 each, but retention efforts get zero attention",
          "Practice growth decisions (add a provider? extend hours? new services?) based on gut feel",
        ],
      },
      after: {
        headline: "After: Patient Growth Agent",
        solutions: [
          { action: "Automated recall campaigns", detail: "Agent identifies overdue patients and runs personalized outreach — reactivation rate improves 35%" },
          { action: "Treatment plan follow-up", detail: "Agent tracks unscheduled treatment and sends gentle reminders with financial options — case acceptance rises 25%" },
          { action: "Patient lifetime value scoring", detail: "Agent ranks patients by LTV, visit frequency, and referral potential — focus retention on highest-value relationships" },
          { action: "Growth modeling", detail: "Agent analyzes capacity, revenue mix, and market data to recommend expansion timing and service additions" },
        ],
        savings: "35% patient reactivation · 25% higher case acceptance · Data-driven growth",
      },
    },
  ],
  timelineTitle: "8-Week Healthcare Practice Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Audit & Connect",
      icon: RefreshCw,
      tasks: [
        "Map current workflow from patient contact through billing",
        "Connect EHR, practice management, and billing systems",
        "HIPAA risk assessment and gap analysis",
        "Identify top revenue leaks (usually no-shows, denials, recall gaps)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Patient Scheduling Agent with automated reminders",
        "Activate Revenue Cycle Agent for claim scrubbing",
        "Deploy digital intake forms with EHR integration",
        "Train front desk and billing staff on daily workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Expand & Optimize",
      icon: BarChart3,
      tasks: [
        "Deploy Compliance & Documentation Agent",
        "Launch Supply Management with auto-reordering",
        "Activate Patient Recall campaigns for overdue patients",
        "Begin weekly practice performance dashboards",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Growth & Scale",
      icon: Lightbulb,
      tasks: [
        "Review patient retention metrics and adjust strategies",
        "Deploy Growth Modeling for expansion planning",
        "Document SOPs for all agent-assisted workflows",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a 5-Person Medical/Dental Practice",
  roiStats: [
    { label: "Time Recovered", value: "25+ hrs/week", sub: "Documentation, calls, claim rework" },
    { label: "Revenue Recaptured", value: "$5K–$8K/mo", sub: "No-shows, denials, recall patients" },
    { label: "Compliance Risk", value: "Near Zero", sub: "Continuous monitoring, audit-ready" },
    { label: "Patient Retention", value: "+35%", sub: "Automated recall and follow-up" },
  ],
  investment: "Investment: $2,500–$4,500/mo",
  ctaLabel: "Get Your Healthcare Blueprint",
  bgClass: "bg-surface-sunken",
};

const HealthcareBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default HealthcareBlueprint;
