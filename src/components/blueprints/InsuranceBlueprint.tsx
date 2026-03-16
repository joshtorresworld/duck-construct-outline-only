import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Umbrella,
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
  badgeIcon: Umbrella,
  badgeLabel: "Industry Blueprint: Insurance Agencies",
  badgeColor: "bg-warning/10",
  title: "The Independent Insurance Agency: An Agentic AI Transformation",
  description:
    "A small independent agency — 1–2 producers, a CSR, an account manager, and an office admin — writing $2M–$8M in premium but drowning in carrier portal logins, renewal processing, certificate requests, and multi-system data entry.",
  teamLabel: "The Agency",
  teamRoles: [
    { role: "Agency Principal", focus: "Business development, carrier relationships, strategy" },
    { role: "Producer", focus: "New business sales, cross-selling, client meetings" },
    { role: "Account Manager", focus: "Renewals, endorsements, policy changes, claims" },
    { role: "CSR", focus: "Certificates, billing questions, client service, data entry" },
    { role: "Admin / Bookkeeper", focus: "Commission reconciliation, AP/AR, agency compliance" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The insurance agency reality:</span> The average CSR spends 40% of their day on certificates of insurance alone. Producers only spend 25% of their time actually selling — the rest is admin. Multi-carrier quoting requires logging into 6–12 separate portals. Commission statements are reconciled manually, missing $1K–$3K/month in errors. The agency is leaving{" "}
      <span className="font-semibold text-foreground">$8K–$15K/month on the table</span> in missed cross-sells, lost renewals, and operational inefficiency.
    </>
  ),
  painAreas: [
    {
      icon: FileText,
      title: "Certificate of Insurance Management",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Certificates Eat the Entire Day",
        problems: [
          "CSR processes 15–25 certificate requests per day — each takes 8–12 minutes of repetitive data entry",
          "Certificate holders change requirements constantly — tracking who needs what is impossible",
          "Renewal certificates must be reissued manually for every certificate holder on every policy — a multi-day project",
          "Errors on certificates create E&O exposure — wrong additional insured or coverage limits are common",
        ],
      },
      after: {
        headline: "After: Certificate Automation Agent",
        solutions: [
          { action: "Self-service certificate portal", detail: "Certificate holders request certificates online with pre-populated templates — CSR reviews and approves in 30 seconds" },
          { action: "Auto-renewal certificate batching", detail: "Agent generates and distributes renewal certificates to all holders simultaneously at policy renewal — hours of work done in minutes" },
          { action: "Holder requirement tracking", detail: "Agent stores each holder's unique requirements and auto-applies them to every certificate — zero errors" },
          { action: "E&O protection", detail: "Agent validates every certificate against policy terms before issuance — catches discrepancies before they become claims" },
        ],
        savings: "75% reduction in cert time · Zero E&O exposure · Self-service portal",
      },
    },
    {
      icon: TrendingUp,
      title: "New Business Quoting & Sales Pipeline",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Producers Spend 75% of Time on Admin",
        problems: [
          "Multi-carrier quoting requires entering the same data into 6–12 carrier portals — 45 min to 2 hours per quote",
          "Producers only spend 25% of their time actually selling — the rest is data entry, follow-up, and paperwork",
          "Cross-sell opportunities are identified manually (if at all) — customers have auto but not home, or GL but not cyber",
          "Pipeline tracking is in the producer's head or a spreadsheet — principal has no visibility into future revenue",
        ],
      },
      after: {
        headline: "After: Insurance Sales Agent",
        solutions: [
          { action: "Comparative rater integration", detail: "Agent submits to multiple carriers simultaneously and returns side-by-side quotes — quoting time drops 70%" },
          { action: "Cross-sell opportunity engine", detail: "Agent analyzes book of business to identify coverage gaps — generates targeted outreach for each opportunity" },
          { action: "Automated follow-up sequences", detail: "Agent runs nurture sequences for quoted-not-bound prospects — 7-touch cadence over 30 days with carrier-specific value props" },
          { action: "Pipeline dashboard", detail: "Agent tracks every opportunity from lead to bind with revenue projections — principal sees real-time new business forecast" },
        ],
        savings: "70% faster quoting · 3× cross-sell identification · Full pipeline visibility",
      },
    },
    {
      icon: Calendar,
      title: "Renewal Management & Retention",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Renewals Handled at the Last Minute",
        problems: [
          "Renewal process starts 30 days before expiration — not enough time for remarketing if needed",
          "Account manager processes renewals reactively — some clients are contacted, others auto-renew without review",
          "Retention rate is 85–88% but improving even 2% would add $40K–$80K in annual commission",
          "No system identifies flight-risk clients — they leave without the agency knowing why",
        ],
      },
      after: {
        headline: "After: Renewal Intelligence Agent",
        solutions: [
          { action: "90-day renewal pipeline", detail: "Agent initiates the renewal process 90 days out — time to review, remarket, and present options properly" },
          { action: "Automated renewal workflows", detail: "Agent generates renewal questionnaires, requests updated information, and tracks completion — nothing falls through" },
          { action: "Flight-risk scoring", detail: "Agent identifies clients at risk of non-renewal based on claim history, premium changes, and engagement signals" },
          { action: "Proactive retention outreach", detail: "Agent triggers principal or producer outreach for high-value at-risk accounts — personal touch where it matters most" },
        ],
        savings: "90-day runway · 92%+ retention · $40K+ additional annual commission",
      },
    },
    {
      icon: DollarSign,
      title: "Commission Reconciliation & Agency Finances",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Missing Commissions Nobody Catches",
        problems: [
          "Commission statements from 10+ carriers arrive in different formats — reconciliation takes 2+ days/month",
          "$1K–$3K/month in commission errors go undetected because manual reconciliation can't catch everything",
          "Producer compensation calculations are manual — disputes arise quarterly over splits and bonus thresholds",
          "Agency P&L is based on cash accounting — no visibility into earned-but-not-received commission",
        ],
      },
      after: {
        headline: "After: Commission Intelligence Agent",
        solutions: [
          { action: "Automated statement parsing", detail: "Agent ingests commission statements from all carriers in any format — matches to policies in your management system" },
          { action: "Discrepancy detection", detail: "Agent flags missing, short-paid, and overpaid commissions — generates carrier inquiries automatically" },
          { action: "Producer comp automation", detail: "Agent calculates producer compensation based on commission rules — transparent, auditable, zero disputes" },
          { action: "Revenue forecasting", detail: "Agent projects future commission income based on book of business, retention assumptions, and new business pipeline" },
        ],
        savings: "$2K/mo recovered commissions · Zero reconciliation errors · Automated comp",
      },
    },
    {
      icon: Target,
      title: "Agency Growth & Book Optimization",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Growing by Accident, Not Design",
        problems: [
          "Agency doesn't know which lines of business are most profitable — personal lines volume may subsidize commercial losses",
          "Carrier appointments and contingency bonus targets aren't actively managed — bonus dollars left on the table",
          "Agency valuation (typically 1.5–2.5× revenue) isn't considered in daily decisions — no enterprise value focus",
          "Geographic and vertical market penetration is unknown — growth happens wherever leads land",
        ],
      },
      after: {
        headline: "After: Agency Strategy Agent",
        solutions: [
          { action: "Book of business profitability", detail: "Agent analyzes revenue, loss ratio, and servicing cost by line of business — reveals true profit by segment" },
          { action: "Contingency bonus optimization", detail: "Agent tracks progress toward carrier bonus thresholds and recommends placement strategies to maximize incentives" },
          { action: "Agency valuation tracking", detail: "Agent monitors key valuation metrics (revenue growth, retention, loss ratio) and models impact of decisions on enterprise value" },
          { action: "Market penetration analysis", detail: "Agent identifies underserved verticals and geographies with data-backed growth recommendations" },
        ],
        savings: "Data-driven growth · Maximized carrier bonuses · Enterprise value focus",
      },
    },
  ],
  timelineTitle: "8-Week Insurance Agency Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Agency Assessment",
      icon: RefreshCw,
      tasks: [
        "Audit agency management system, carrier portals, and workflows",
        "Map certificate, quoting, renewal, and commission processes",
        "Analyze book of business for cross-sell and retention opportunities",
        "Identify top revenue leaks (usually certificates, missed cross-sells, commission errors)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Certificate Automation with self-service portal",
        "Activate Sales Pipeline Agent with comparative rating",
        "Deploy 90-day Renewal Pipeline workflow",
        "Train CSR, account manager, and producers on agent workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Finance & Retention",
      icon: BarChart3,
      tasks: [
        "Deploy Commission Reconciliation Agent",
        "Launch flight-risk scoring and proactive retention",
        "Activate cross-sell opportunity campaigns",
        "Begin agency performance dashboards",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Optimize & Scale",
      icon: Lightbulb,
      tasks: [
        "Review book profitability and adjust growth strategy",
        "Deploy contingency bonus optimization",
        "Model agency valuation and improvement levers",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for an Independent Insurance Agency",
  roiStats: [
    { label: "Certificate Time", value: "−75%", sub: "Self-service portal and automation" },
    { label: "Recovered Commission", value: "$2K–$3K/mo", sub: "Automated reconciliation and dispute" },
    { label: "Retention Rate", value: "85→92%", sub: "90-day pipeline and flight-risk scoring" },
    { label: "Producer Selling Time", value: "2× more", sub: "Admin automation frees 15+ hrs/week" },
  ],
  investment: "Investment: $2,500–$4,500/mo",
  ctaLabel: "Get Your Agency Blueprint",
};

const InsuranceBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default InsuranceBlueprint;
