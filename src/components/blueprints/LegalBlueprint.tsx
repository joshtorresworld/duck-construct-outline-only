import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Scale,
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
  badgeIcon: Scale,
  badgeLabel: "Industry Blueprint: Legal Practices",
  badgeColor: "bg-accent/10",
  title: "The Small Law Firm: An Agentic AI Transformation",
  description:
    "A 3–5 attorney firm with paralegals and admin — generating $1M–$3M in revenue but losing billable hours to document management, missed deadlines, intake bottlenecks, and scattered case files. Here's how autonomous agents transform every aspect of practice management.",
  teamLabel: "The Firm",
  teamRoles: [
    { role: "Managing Partner", focus: "Client relationships, strategy, high-value matters" },
    { role: "Associate Attorney", focus: "Research, drafting, depositions, court appearances" },
    { role: "Paralegal", focus: "Document prep, discovery, filing, case management" },
    { role: "Legal Secretary", focus: "Calendar, correspondence, client communication" },
    { role: "Office Manager", focus: "Billing, trust accounting, HR, vendor management" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The legal reality:</span> Attorneys lose 2.5 hours/day on administrative tasks that don't generate revenue. Missed deadlines are a malpractice risk. Client intake takes 3–5 days when competitors respond in hours. Trust accounting errors can result in bar discipline. The firm is leaving{" "}
      <span className="font-semibold text-foreground">$15K–$25K/month on the table</span> in unbilled time, slow intake, and operational inefficiency.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Deadline Management & Calendar Control",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Missed Deadlines = Malpractice Risk",
        problems: [
          "Court deadlines tracked across Outlook calendars, sticky notes, and case files — nothing is centralized",
          "Statute of limitations dates are manually calculated — one error could end a career",
          "Attorneys triple-book themselves because nobody has visibility into everyone's schedule",
          "Legal secretary spends 8+ hrs/week managing calendars and sending deadline reminders",
        ],
      },
      after: {
        headline: "After: Legal Calendar Agent",
        solutions: [
          { action: "Automated deadline calculation", detail: "Agent computes court deadlines from filing dates using jurisdiction-specific rules — zero manual calculation" },
          { action: "Cascading reminder system", detail: "Agent sends escalating alerts at 30, 14, 7, 3, and 1 day before each deadline — to attorney, paralegal, and managing partner" },
          { action: "Conflict-free scheduling", detail: "Agent prevents double-booking and blocks prep time before hearings and depositions automatically" },
          { action: "Daily docket briefing", detail: "Each morning, every attorney gets a prioritized list of deadlines, hearings, and tasks with case context" },
        ],
        savings: "8 hrs/week recovered · Zero missed deadlines · Malpractice risk eliminated",
      },
    },
    {
      icon: TrendingUp,
      title: "Client Intake & Lead Conversion",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Prospects Go to the Faster Firm",
        problems: [
          "New client inquiries sit in a voicemail or email inbox for 24–72 hours before response",
          "Conflict checks are manual — searching name-by-name across old case files takes 30+ minutes",
          "Intake forms are paper-based or PDFs emailed back and forth — data re-entry into the case management system",
          "No tracking of referral sources — firm has no idea which marketing channels actually produce clients",
        ],
      },
      after: {
        headline: "After: Client Intake Agent",
        solutions: [
          { action: "Instant response system", detail: "Agent acknowledges every inquiry within 5 minutes with a personalized message and scheduling link" },
          { action: "Automated conflict checking", detail: "Agent searches all matter records, opposing parties, and related entities in seconds — flags potential conflicts instantly" },
          { action: "Digital intake workflow", detail: "Client completes intake online — data flows directly into case management system with engagement letter ready for signature" },
          { action: "Referral source tracking", detail: "Agent attributes every new client to its source — reveals which channels deliver the highest-value matters" },
        ],
        savings: "3× faster intake · 40% higher conversion · Instant conflict checks",
      },
    },
    {
      icon: DollarSign,
      title: "Billing, Trust Accounting & Collections",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Leaking Revenue at Every Step",
        problems: [
          "Attorneys capture only 60–70% of billable time — the rest is lost because entries aren't made same-day",
          "Monthly billing takes the office manager 3–5 days to compile, review, and send",
          "Trust account reconciliation is manual and terrifying — errors risk bar discipline",
          "Average days-to-collect is 60+ days; $50K–$100K perpetually sitting in receivables",
        ],
      },
      after: {
        headline: "After: Legal Billing Agent",
        solutions: [
          { action: "Passive time capture", detail: "Agent tracks document activity, calls, and emails — suggests time entries throughout the day, capturing 95%+ of billable work" },
          { action: "Automated bill generation", detail: "Agent compiles time entries, applies fee arrangements, and generates pre-bills — monthly billing takes hours, not days" },
          { action: "Trust accounting automation", detail: "Agent manages three-way reconciliation daily, flags discrepancies instantly, and maintains audit-ready records" },
          { action: "Collections acceleration", detail: "Agent sends payment reminders with online payment options — average days-to-collect drops to 25" },
        ],
        savings: "30% more billable hours captured · $40K freed from AR · Trust compliance assured",
      },
    },
    {
      icon: FileText,
      title: "Document Management & Privilege Protection",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Documents Everywhere, Found Nowhere",
        problems: [
          "Case files scattered across network drives, email attachments, and attorney desktops",
          "Paralegals spend 4+ hrs/week searching for documents that should be in the case file",
          "Version control is nonexistent — attorneys work on outdated drafts without knowing",
          "Privilege logs are built manually during discovery — tedious, error-prone, and expensive",
        ],
      },
      after: {
        headline: "After: Document Intelligence Agent",
        solutions: [
          { action: "Centralized case repository", detail: "Agent auto-files every document by matter, type, and date — every file exactly where it should be" },
          { action: "Intelligent search", detail: "Agent searches across all matters by content, date, party, or issue — finds any document in seconds" },
          { action: "Version control enforcement", detail: "Agent tracks every revision, prevents conflicts, and maintains a complete edit history" },
          { action: "Automated privilege review", detail: "Agent flags potentially privileged documents during discovery and builds privilege logs automatically" },
        ],
        savings: "4 hrs/week saved per paralegal · Zero lost documents · Privilege protection",
      },
    },
    {
      icon: Target,
      title: "Practice Growth & Profitability",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Busy Lawyers, Thin Margins",
        problems: [
          "Managing partner can't tell which practice areas actually make money vs just generate revenue",
          "Associate utilization is unknown — some bill 1,400 hrs/year, others bill 1,800, but nobody tracks it",
          "Fee arrangements (hourly vs flat fee vs contingency) are set by tradition, not profitability data",
          "Growth is accidental — the firm takes whatever walks in the door instead of targeting profitable work",
        ],
      },
      after: {
        headline: "After: Practice Strategy Agent",
        solutions: [
          { action: "Matter profitability analysis", detail: "Agent calculates true profit per matter type factoring attorney time, overhead, and realization rates" },
          { action: "Attorney performance dashboards", detail: "Agent tracks utilization, realization, and collection rates per attorney — identifies coaching opportunities" },
          { action: "Fee arrangement optimization", detail: "Agent models different fee structures against historical data — reveals which arrangements maximize profit" },
          { action: "Strategic growth planning", detail: "Agent identifies the firm's most profitable client profiles and practice areas — focuses marketing spend accordingly" },
        ],
        savings: "Data-driven practice management · 20% margin improvement · Strategic growth",
      },
    },
  ],
  timelineTitle: "8-Week Law Firm Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Practice Audit",
      icon: RefreshCw,
      tasks: [
        "Map workflows from intake through billing and collections",
        "Connect case management, billing, and document systems",
        "Audit deadline tracking and trust accounting processes",
        "Identify top revenue leaks (usually time capture, collections, intake speed)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Legal Calendar Agent with automated deadline calculation",
        "Activate Client Intake Agent with instant response",
        "Deploy passive time capture for all attorneys",
        "Train staff on daily agent-assisted workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Expand to Operations",
      icon: BarChart3,
      tasks: [
        "Deploy Document Intelligence Agent across all matters",
        "Launch trust accounting automation with daily reconciliation",
        "Activate automated billing and collections",
        "Begin weekly practice performance dashboards",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Optimize & Grow",
      icon: Lightbulb,
      tasks: [
        "Review matter profitability and adjust fee structures",
        "Deploy Practice Strategy Agent for growth planning",
        "Document SOPs for all agent-assisted workflows",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Small Law Firm",
  roiStats: [
    { label: "Billable Hours Captured", value: "+30%", sub: "Passive time tracking across all attorneys" },
    { label: "Revenue Recaptured", value: "$8K–$15K/mo", sub: "Faster intake, better collections, fewer leaks" },
    { label: "Malpractice Risk", value: "Near Zero", sub: "Automated deadlines and conflict checks" },
    { label: "Collections Improved", value: "60→25 days", sub: "Automated reminders and online payment" },
  ],
  investment: "Investment: $3,000–$5,000/mo",
  ctaLabel: "Get Your Legal Practice Blueprint",
};

const LegalBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default LegalBlueprint;
