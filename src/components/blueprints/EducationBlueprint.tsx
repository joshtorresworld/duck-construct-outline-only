import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  GraduationCap,
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
  badgeIcon: GraduationCap,
  badgeLabel: "Industry Blueprint: Educational Services & Tutoring",
  badgeColor: "bg-success/10",
  title: "The Education Services Firm: An Agentic AI Transformation",
  description:
    "A small tutoring center or educational consulting firm — a director, 2–3 tutors/instructors, a scheduler, and a bookkeeper — generating $200K–$1M in revenue but struggling with student matching, session scheduling across subjects, parent communication, and seasonal enrollment swings.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Director / Owner", focus: "Curriculum, instructor hiring, parent consultations, P&L" },
    { role: "Lead Tutor", focus: "Advanced subjects, test prep, student assessments" },
    { role: "Tutor / Instructor", focus: "Session delivery, homework help, progress notes" },
    { role: "Scheduler / Admin", focus: "Student-tutor matching, booking, rescheduling" },
    { role: "Bookkeeper", focus: "Billing, tutor payroll, package tracking, collections" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The education services reality:</span> Matching students to the right tutor by subject, level, and personality takes 30+ min per student. No-shows average 15–18% and each empty slot costs $50–$150. Parents expect detailed progress updates but tutors barely have time between sessions. Revenue drops 40–60% during summer. The center is leaving{" "}
      <span className="font-semibold text-foreground">$4K–$8K/month on the table</span> in empty slots, lost re-enrollments, and seasonal revenue gaps.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Scheduling & Student-Tutor Matching",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Scheduling Is a Full-Time Job",
        problems: [
          "Matching students to tutors by subject, level, availability, and learning style takes 30+ minutes per student",
          "Recurring weekly sessions mean one tutor's sick day requires manually rescheduling 6–8 students",
          "Parents and tutors constantly text/call to reschedule — admin spends 8+ hrs/week managing calendar changes",
          "No-shows average 15–18% — each empty slot is $50–$150 in lost revenue with no recovery system",
        ],
      },
      after: {
        headline: "After: Education Scheduling Agent",
        solutions: [
          { action: "Intelligent student-tutor matching", detail: "Agent matches based on subject expertise, learning style, availability, and past success rates — optimal pairings in seconds" },
          { action: "Automated substitution", detail: "When a tutor is unavailable, agent identifies qualified substitutes, contacts them, and notifies affected students — zero disruption" },
          { action: "Parent/student self-service", detail: "Families reschedule through a portal with rules (24hr notice, available slots only) — admin workload drops 70%" },
          { action: "No-show recovery", detail: "Agent sends reminders at 48hr and 2hr, contacts waitlisted students for same-day fills, and tracks patterns" },
        ],
        savings: "8 hrs/week scheduling saved · 80% fewer no-shows · Instant tutor matching",
      },
    },
    {
      icon: TrendingUp,
      title: "Student Progress & Parent Communication",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Parents Are Left in the Dark",
        problems: [
          "Tutors write session notes in a notebook (or don't write them at all) — no accessible record of what was covered",
          "Parents ask 'How is my child doing?' and the answer is vague — no measurable progress tracking",
          "Progress reports are created manually 1–2× per year — they take hours and are always late",
          "No connection between tutoring sessions and school performance — can't prove impact",
        ],
      },
      after: {
        headline: "After: Student Progress Agent",
        solutions: [
          { action: "Structured session notes", detail: "Tutor completes a quick post-session form (topics, mastery level, next steps) — takes 2 minutes, creates permanent record" },
          { action: "Automated parent updates", detail: "Agent sends parents a summary after each session with topics covered, progress, and homework assignments" },
          { action: "Mastery tracking dashboard", detail: "Agent maps student progress against learning objectives — visual skill progression parents can see anytime" },
          { action: "Impact reporting", detail: "Agent correlates tutoring hours with grade improvements and test scores — data-backed proof of value" },
        ],
        savings: "Real-time parent visibility · Measurable outcomes · 3× re-enrollment rate",
      },
    },
    {
      icon: DollarSign,
      title: "Billing, Packages & Tutor Payroll",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Package Balances Are a Mystery",
        problems: [
          "Prepaid session packages tracked in spreadsheets — families dispute remaining balances regularly",
          "Tutor payroll calculated manually from session logs — errors and disputes every pay period",
          "Late payments average 20% of receivables — no automated follow-up on overdue invoices",
          "No visibility into revenue per student or per subject — can't tell which programs are profitable",
        ],
      },
      after: {
        headline: "After: Education Billing Agent",
        solutions: [
          { action: "Real-time package tracking", detail: "Agent deducts sessions from packages automatically and notifies families when balance is low — zero disputes" },
          { action: "Automated tutor compensation", detail: "Agent calculates pay from confirmed session logs — accurate, transparent, and dispute-free" },
          { action: "Payment automation", detail: "Agent sends invoices and reminders, processes auto-pay, and flags overdue accounts — collections drop to under 5%" },
          { action: "Revenue analytics", detail: "Agent tracks revenue by student, subject, tutor, and program — reveals which offerings drive the most value" },
        ],
        savings: "Zero billing disputes · Automated payroll · Under 5% overdue accounts",
      },
    },
    {
      icon: FileText,
      title: "Curriculum & Content Management",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Every Tutor Does Their Own Thing",
        problems: [
          "No standardized curriculum — each tutor uses their own materials and approach",
          "Worksheets and practice problems are created from scratch for each student — massive duplication of effort",
          "When a tutor leaves, their materials and methods leave with them",
          "Test prep programs aren't aligned to current exam formats — updates happen reactively",
        ],
      },
      after: {
        headline: "After: Curriculum Intelligence Agent",
        solutions: [
          { action: "Centralized resource library", detail: "Agent organizes all worksheets, lesson plans, and practice sets by subject, level, and learning objective — any tutor can access any material" },
          { action: "Adaptive assignment generation", detail: "Agent suggests practice materials based on student's current mastery level and weak areas — personalized learning paths" },
          { action: "Curriculum version control", detail: "Agent tracks material updates, ensures tutors use current versions, and archives outdated content" },
          { action: "Test prep alignment", detail: "Agent monitors exam format changes (SAT, ACT, state tests) and flags curriculum items that need updating" },
        ],
        savings: "Consistent quality · Personalized learning paths · Zero knowledge loss",
      },
    },
    {
      icon: Target,
      title: "Enrollment & Seasonal Revenue Optimization",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Summer Revenue Drops 50%",
        problems: [
          "Back-to-school enrollment is a 4-week scramble — no pre-registration or waitlist system",
          "Summer revenue drops 40–60% because test prep and homework help demand disappears",
          "No re-enrollment system — families drift away between school years without outreach",
          "Marketing is limited to flyers and word-of-mouth — no digital presence or lead nurture",
        ],
      },
      after: {
        headline: "After: Enrollment Growth Agent",
        solutions: [
          { action: "Seasonal program planning", detail: "Agent designs and promotes summer enrichment, test prep boot camps, and skill-building workshops — fills the summer gap" },
          { action: "Automated re-enrollment", detail: "Agent contacts families 60 days before each school year with personalized program recommendations based on student needs" },
          { action: "Waitlist and early registration", detail: "Agent manages waitlists for popular tutors/times and opens early bird registration with incentive pricing" },
          { action: "Digital lead nurture", detail: "Agent runs parent-focused content (study tips, exam prep guides) that builds trust and converts to enrollment" },
        ],
        savings: "Year-round revenue · 70% re-enrollment rate · Full summer programs",
      },
    },
  ],
  timelineTitle: "8-Week Education Services Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Center Assessment", icon: RefreshCw, tasks: ["Map student journey from inquiry to enrollment to outcomes", "Audit scheduling, billing, and curriculum systems", "Analyze seasonal revenue patterns and retention rates", "Identify top revenue leaks (usually scheduling, re-enrollment, summer drop)"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Scheduling Agent with student-tutor matching", "Activate automated parent communication after sessions", "Deploy package tracking and billing automation", "Train tutors on session note workflow"] },
    { week: "Week 5–6", phase: "Content & Finance", icon: BarChart3, tasks: ["Deploy Curriculum Agent with centralized resource library", "Launch student mastery tracking dashboards", "Activate tutor payroll automation", "Begin seasonal program planning"] },
    { week: "Week 7–8", phase: "Grow & Retain", icon: Lightbulb, tasks: ["Launch re-enrollment campaigns and waitlist management", "Deploy digital lead nurture and content marketing", "Review revenue by program and optimize pricing", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for an Education Services Firm",
  roiStats: [
    { label: "Admin Time Saved", value: "12+ hrs/week", sub: "Scheduling, billing, parent communication" },
    { label: "No-Show Recovery", value: "80%", sub: "Automated reminders and waitlist fills" },
    { label: "Re-Enrollment Rate", value: "70%+", sub: "Automated outreach and program recommendations" },
    { label: "Summer Revenue", value: "+40%", sub: "Enrichment programs and boot camps" },
  ],
  investment: "Investment: $1,500–$3,000/mo",
  ctaLabel: "Get Your Education Blueprint",
};

const EducationBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default EducationBlueprint;
