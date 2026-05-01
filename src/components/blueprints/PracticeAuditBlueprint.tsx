import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  ClipboardCheck,
  PhoneIncoming,
  Calendar,
  Clock,
  FileText,
  Receipt,
  Eye,
  FileSearch,
  BookOpen,
  Lightbulb,
  ShieldCheck,
  Lock,
  Megaphone,
  Handshake,
  RefreshCw,
} from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: ClipboardCheck,
  badgeLabel: "Industry Blueprint: The Practice Audit",
  badgeColor: "bg-primary/15",
  title: "The Practice Audit: A Productized Diagnostic for Solo & Small Professional Practices",
  description:
    "A no-cost, workflow-only diagnostic that wins trust with regulated practices — solo attorneys, independent doctors, CPAs, RIAs, and licensed specialists. Two hours on site, one page of findings, zero obligation. The audit is the wedge; the 8-week agentic rollout is the product.",
  teamLabel: "The Audit Pod",
  teamRoles: [
    { role: "Audit Lead", focus: "Walkthrough facilitation, principal interview, finding synthesis" },
    { role: "Workflow Analyst", focus: "Maps current-state across 5 audit domains, benchmarks vs. peers" },
    { role: "Vertical Specialist", focus: "Law / Medical / CPA / Advisory domain expertise + privilege fluency" },
    { role: "Report Writer", focus: "One-page deliverable: 3 leaks · 3 risks · 3 wins, dollar-quantified" },
    { role: "Engagement Manager", focus: "Schedules walkthrough + 30-min readout, holds 'no sales sequence' line" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The professional-services reality:</span>{" "}
      Solo and small regulated practices won't take a sales meeting and won't grant access to
      client matter data. They've been burned by IT vendors and they're privilege-paranoid (rightly).
      Meanwhile they're bleeding{" "}
      <span className="font-semibold text-foreground">$80K–$250K/year</span> in unanswered
      after-hours inquiries, unbilled time, manual deadline tracking, and document chaos — and
      every demo deck on earth bounces off them. The Practice Audit is the only construct that
      gets a meeting.
    </>
  ),
  painAreas: [
    {
      icon: PhoneIncoming,
      title: "Audit Domain 01 · Intake to Engagement",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: After-Hours Inquiries Wait Until Morning",
        problems: [
          "Single contact form on the website; voicemail after 5pm",
          "Conflict checks are manual — name-by-name across legacy files takes 30+ minutes",
          "Engagement letters emailed as PDFs, signed and returned days later",
          "Zero tracking of which referral source produces which client",
        ],
      },
      after: {
        headline: "After: 5-Minute Response with Privilege Guardrails",
        solutions: [
          { action: "Privilege-safe AI intake", detail: "Captures inquiry details without storing matter content; routes urgency in <5 minutes 24/7" },
          { action: "Automated conflict screen", detail: "Surface-level name and party check against firm history before the principal ever takes the call" },
          { action: "E-signature engagement flow", detail: "Engagement letter generated, sent, signed, and filed in a single thread" },
          { action: "Source attribution baked in", detail: "Every inquiry tagged to channel — referral, search, directory, repeat — for ROI clarity" },
        ],
        savings: "4x conversion lift on inquiries answered in <5 min · Recovers 12–20 missed prospects/quarter",
      },
    },
    {
      icon: Calendar,
      title: "Audit Domain 02 · Deadline & Calendar Tracking",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Deadlines Live Across Five Jurisdictions and Three Calendars",
        problems: [
          "Statutory and court deadlines manually computed — one bad math day ends a career",
          "Cross-jurisdiction local rules tracked in the principal's head",
          "No cascading reminder system; deadlines surface 24 hours before, not 30 days",
          "Calendar conflicts caught the morning of the hearing",
        ],
      },
      after: {
        headline: "After: Rules-Based Docketing Agent",
        solutions: [
          { action: "Jurisdiction-aware computation", detail: "Agent computes deadlines from filing dates using Cook/DuPage/Kane/Kendall/Will local rules — zero manual math" },
          { action: "Cascading alert ladder", detail: "30 / 14 / 7 / 3 / 1 day reminders to principal, paralegal, and office manager" },
          { action: "Conflict-free scheduling", detail: "Auto-blocks prep time before hearings, depositions, and consult-heavy days" },
          { action: "Daily docket briefing", detail: "Each morning: prioritized list of deadlines, hearings, and tasks with matter context" },
        ],
        savings: "Zero missed statutory deadlines · 8 hrs/week recovered · Malpractice exposure eliminated",
      },
    },
    {
      icon: Clock,
      title: "Audit Domain 03 · Time Capture & Billing",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Reconstructed Time Entries on Friday Afternoon",
        problems: [
          "Time logged from memory days after the work — guaranteed leakage",
          "Vague entries forced into write-downs at billing review",
          "Average 18-day lag from work-performed to invoice-sent",
          "No passive capture across email, calls, document review",
        ],
      },
      after: {
        headline: "After: Passive Time-Capture Agent",
        solutions: [
          { action: "Cross-channel capture", detail: "Agent observes email threads, call duration, and document time and proposes contemporaneous entries" },
          { action: "Narrative drafting", detail: "Generates billing-ready descriptions in the principal's voice — they approve, not author" },
          { action: "Same-week invoicing", detail: "Auto-assembles draft invoices on Friday; principal reviews and sends Monday" },
          { action: "Write-down forensics", detail: "Surfaces patterns: which matter types, which staff, which work types are leaking the most" },
        ],
        savings: "25–30% billable hours recovered · 14 days off invoice cycle · $40K–$120K/yr captured",
      },
    },
    {
      icon: FileText,
      title: "Audit Domain 04 · Document & Matter Management",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Files Live in Email, Desktop, Drive, and Memory",
        problems: [
          "Naming conventions exist on paper; ignored in practice",
          "Searching for a known document averages 4–7 minutes",
          "Version control via 'final-v3-actually-final.docx'",
          "Privilege-aware sharing depends on the principal remembering",
        ],
      },
      after: {
        headline: "After: Privilege-Aware Document Agent",
        solutions: [
          { action: "Single source of truth", detail: "All matter docs ingested into a tenant-isolated vault — no model training on content, full audit trail" },
          { action: "Sub-60-second retrieval", detail: "Natural-language search across the entire document base; cites the source doc and page" },
          { action: "Automated version discipline", detail: "Versioning, redlines, and approvals tracked; the 'final' is always identifiable" },
          { action: "Privilege-tagged sharing", detail: "Every share link inherits matter privilege rules; expiry, watermark, and audit baked in" },
        ],
        savings: "8–12 hrs/week returned to staff · Privilege risk dropped to architectural impossibility",
      },
    },
    {
      icon: Receipt,
      title: "Audit Domain 05 · Trust Accounting & Compliance",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Reconciliation Once a Month, Stress Always",
        problems: [
          "IOLTA / fiduciary reconciliation done manually at month-end",
          "Three-way match performed by one person with one set of eyes",
          "Exception handling depends on someone noticing",
          "Audit prep is a fire drill, not a posture",
        ],
      },
      after: {
        headline: "After: Continuous Reconciliation Agent",
        solutions: [
          { action: "Daily three-way match", detail: "Bank, ledger, and matter sub-ledger reconciled every business day with exception flagging" },
          { action: "Real-time exception alerts", detail: "Overdrafts, commingling, stale balances, and unauthorized disbursements alert the principal within minutes" },
          { action: "Audit-ready posture", detail: "Continuous audit trail; bar or regulatory exam pulls a packet, not a panic" },
          { action: "Separation-of-duties enforcement", detail: "Disbursement workflow requires multi-party approval above thresholds — by design, not memory" },
        ],
        savings: "Bar discipline / license risk eliminated · 6 hrs/month of reconciliation removed",
      },
    },
  ],
  timelineTitle: "The Sales-to-Ship Motion: From Audit to Live Agents in 10 Weeks",
  implementationPhases: [
    {
      week: "Week 0",
      phase: "The Wedge — Practice Audit",
      icon: Eye,
      tasks: [
        "2-hour on-site or video walkthrough — workflow only, no matter data",
        "Map current-state across all 5 audit domains",
        "Benchmark against solo / small-practice peers in the same vertical",
        "Deliver one-page report: 3 leaks · 3 risks · 3 wins, each dollar-quantified",
        "30-minute readout. Engagement complete. No proposal yet.",
      ],
    },
    {
      week: "Week 1–2",
      phase: "Discovery & Privilege Architecture",
      icon: ShieldCheck,
      tasks: [
        "Principal opts in to engage — initiated by them, not us",
        "Tenant provisioning: dedicated isolated environment, no model training on content",
        "Map integrations: practice management, billing, document store, calendar, bank feeds",
        "Sign BAA / privilege addendum / SOC 2 attestation package",
        "Define success metrics tied to the 90-day guarantee",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Foundation — Intake & Calendar Agents",
      icon: PhoneIncoming,
      tasks: [
        "Deploy intake agent with 5-minute response SLA",
        "Stand up rules-based docketing for the practice's primary jurisdictions",
        "Migrate 90 days of historical calendar entries; validate cascading reminders",
        "Train principal and office manager on approval workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Revenue — Time & Billing Agents",
      icon: Clock,
      tasks: [
        "Roll out passive time capture across email, calls, and documents",
        "Launch contemporaneous entry approval flow for the principal",
        "First automated draft-invoice cycle runs end-to-week",
        "Baseline write-down rate measured; target reduction set",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Risk — Documents & Trust Accounting",
      icon: FileText,
      tasks: [
        "Document vault live; historical files ingested with privilege tags",
        "Daily three-way reconciliation agent active on trust accounts",
        "Exception alerting routed to principal via SMS + secure email",
        "Audit-trail packet template stress-tested against a mock exam",
      ],
    },
    {
      week: "Week 9–10",
      phase: "Steady State + 90-Day Guarantee Clock",
      icon: RefreshCw,
      tasks: [
        "All 5 agent domains in production with documented runbooks",
        "Weekly metrics review: response time, billable recovery, missed deadlines (target: 0)",
        "90-day results-or-we-work-for-free guarantee clock starts",
        "Quarterly business review cadence locked",
      ],
    },
  ],
  roiTitle: "ROI: Why the Free Audit Is the Highest-Yield Sales Motion in the Building",
  roiStats: [
    { label: "Audit-to-Engagement Conversion", value: "55–70%", sub: "Once a principal sees the one-page report, the proposal writes itself" },
    { label: "Avg. Recovered Revenue (Year 1)", value: "$80K–$250K", sub: "Across billable capture, faster intake, and reduced write-downs" },
    { label: "Sales Cycle Length", value: "21–35 days", sub: "From walkthrough → readout → engagement letter signed" },
    { label: "Customer Acquisition Cost", value: "<$1,800", sub: "2 hrs walkthrough + 3 days analysis + 30 min readout fully loaded" },
    { label: "Net Revenue Retention", value: "115–130%", sub: "Audit findings → Phase 2 expansion (more agents, more matter types)" },
    { label: "Referral Rate", value: "1.4x per client/yr", sub: "Regulated professionals refer peer-to-peer when the audit is genuinely useful" },
  ],
  investment: "Audit: complimentary · 8-week rollout: $35K–$65K + $3K–$8K/mo · 90-day results-or-we-work-for-free",
  ctaLabel: "Book the Practice Audit Walkthrough",
  bgClass: "bg-muted/20",
};

const PracticeAuditBlueprint = () => <IndustryBlueprintTemplate data={data} />;

export default PracticeAuditBlueprint;
