import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Calculator,
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
  badgeIcon: Calculator,
  badgeLabel: "Industry Blueprint: Accounting & Tax",
  badgeColor: "bg-warning/10",
  title: "The Small CPA Firm: An Agentic AI Transformation",
  description:
    "A 3–5 person CPA firm — 1–2 CPAs, a bookkeeper, a tax preparer, and an admin — generating $500K–$2M in revenue but drowning during tax season, chasing client documents for months, and unable to scale because every engagement requires manual effort.",
  teamLabel: "The Firm",
  teamRoles: [
    { role: "Managing CPA", focus: "Client advisory, complex returns, firm strategy" },
    { role: "Staff CPA", focus: "Tax preparation, audits, financial statements" },
    { role: "Bookkeeper", focus: "Monthly client books, reconciliation, payroll" },
    { role: "Tax Preparer", focus: "Individual returns, data entry, extensions" },
    { role: "Admin / Receptionist", focus: "Client communication, scheduling, document intake" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The accounting reality:</span> Tax season turns a 40-hour week into an 80-hour nightmare for 4 months straight. Client document collection takes 6–8 follow-ups per engagement. IRS Publication 4557 compliance is mandatory but overwhelming. The firm is leaving{" "}
      <span className="font-semibold text-foreground">$8K–$15K/month on the table</span> in unbilled advisory time, inefficient preparation, and client churn from slow turnaround.
    </>
  ),
  painAreas: [
    {
      icon: FileText,
      title: "Client Document Collection & Intake",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Chasing Documents for Months",
        problems: [
          "Each client requires 15–30 documents — collected via email, mail, drop-off, and text over 4–8 weeks",
          "Admin sends an average of 6 follow-up requests per client engagement before all documents arrive",
          "Documents arrive in every format: photos of receipts, PDFs, spreadsheets, paper — each needs manual processing",
          "Missing documents aren't discovered until preparation begins — causing delays and extension filings",
        ],
      },
      after: {
        headline: "After: Document Collection Agent",
        solutions: [
          { action: "Personalized document checklist", detail: "Agent generates a client-specific checklist based on prior year return and known changes — sent via secure portal" },
          { action: "Automated follow-up sequences", detail: "Agent sends reminders at 7, 14, and 21 days for missing items — escalating in urgency without human effort" },
          { action: "Smart document classification", detail: "Agent identifies, categorizes, and files uploaded documents automatically — W-2s, 1099s, receipts sorted instantly" },
          { action: "Readiness dashboard", detail: "CPA sees at a glance which clients are complete, partial, or not started — prioritize preparation efficiently" },
        ],
        savings: "80% fewer follow-ups · 3-week faster collection · Zero lost documents",
      },
    },
    {
      icon: Calendar,
      title: "Tax Season Workflow & Capacity",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: 80-Hour Weeks for 4 Months",
        problems: [
          "All 200+ returns need completion in a 14-week window — no system to prioritize or distribute work",
          "Simple returns (W-2, standard deduction) take nearly as long as complex ones because workflow is identical",
          "Review bottleneck: managing CPA reviews every return regardless of complexity — creates a 2-week backup",
          "Extensions are filed for 30–40% of clients — damaging satisfaction and triggering second-season workload",
        ],
      },
      after: {
        headline: "After: Tax Season Operations Agent",
        solutions: [
          { action: "Complexity-based routing", detail: "Agent scores each return by complexity and routes simple returns to tax preparer, complex to CPA — optimal workload distribution" },
          { action: "Automated preparation assist", detail: "Agent pre-populates return data from prior year and current documents — preparer reviews and adjusts vs starting from scratch" },
          { action: "Tiered review workflow", detail: "Agent flags only high-risk items for CPA review on simple returns — managing CPA reviews 60% fewer returns in detail" },
          { action: "Extension reduction", detail: "Agent prioritizes client readiness and preparation sequence to minimize extensions — target under 10%" },
        ],
        savings: "30% faster preparation · 60% fewer CPA reviews · Extensions under 10%",
      },
    },
    {
      icon: DollarSign,
      title: "Billing, Engagement Letters & Pricing",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Undercharging and Slow Collections",
        problems: [
          "Fees haven't been updated in 3 years — firm is undercharging 15–25% vs market rates",
          "Engagement letters are sent manually, often late, and sometimes not at all",
          "Invoices go out after filing — 30–45 days after the work is done — leading to slow payment",
          "No visibility into time spent per client — can't tell if an engagement is profitable",
        ],
      },
      after: {
        headline: "After: Accounting Billing Agent",
        solutions: [
          { action: "Market-rate pricing engine", detail: "Agent benchmarks fees against regional data and recommends annual adjustments by service type" },
          { action: "Automated engagement letters", detail: "Agent generates and sends engagement letters with e-signature at the start of every season — 100% compliance" },
          { action: "Progress billing", detail: "Agent invoices upon preparation completion (before filing) with online payment — average collection drops to 12 days" },
          { action: "Profitability tracking", detail: "Agent tracks time per engagement and calculates effective hourly rate — flags unprofitable clients" },
        ],
        savings: "15–25% fee optimization · 12-day avg collection · 100% engagement compliance",
      },
    },
    {
      icon: TrendingUp,
      title: "IRS Compliance & Data Security",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: One Breach Away from Disaster",
        problems: [
          "IRS Publication 4557 requires a Written Information Security Plan — most small firms don't have one",
          "Client SSNs and financial data stored across email, desktop folders, and shared drives with minimal encryption",
          "No employee security training — one phishing click could expose every client's data",
          "PTIN renewal, CE tracking, and regulatory filings are last-minute scrambles",
        ],
      },
      after: {
        headline: "After: Tax Security Agent",
        solutions: [
          { action: "WISP generation and monitoring", detail: "Agent creates and maintains your Written Information Security Plan — updated automatically as requirements change" },
          { action: "Encrypted client portal", detail: "Agent routes all document exchange through a secure portal — eliminates SSNs in email entirely" },
          { action: "Staff security training", detail: "Agent delivers quarterly phishing simulations and security training — tracks completion for compliance documentation" },
          { action: "Regulatory calendar", detail: "Agent tracks PTIN renewals, CE deadlines, and state licensing requirements — nothing expires unexpectedly" },
        ],
        savings: "Full IRS compliance · Zero SSNs in email · Audit-ready security",
      },
    },
    {
      icon: Target,
      title: "Advisory Services & Firm Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Stuck in Compliance, Missing Advisory",
        problems: [
          "90% of revenue comes from compliance work (tax prep, bookkeeping) — low-margin, commoditized services",
          "Clients want proactive tax planning and business advisory but CPAs have no bandwidth",
          "No system to identify which clients would benefit from (and pay for) advisory services",
          "Firm growth is linear — can only grow by adding staff, not by increasing revenue per client",
        ],
      },
      after: {
        headline: "After: Advisory Growth Agent",
        solutions: [
          { action: "Advisory opportunity scoring", detail: "Agent analyzes client data to identify tax planning, entity structuring, and succession planning opportunities" },
          { action: "Proactive outreach", detail: "Agent sends clients personalized advisory alerts — 'Your business grew 30% this year; let's discuss entity restructuring'" },
          { action: "Advisory engagement packaging", detail: "Agent helps structure and price advisory packages — monthly retainers for ongoing planning vs one-time consultations" },
          { action: "Revenue mix optimization", detail: "Agent models the firm's path from 90/10 compliance/advisory to 60/40 — with specific client targets and timelines" },
        ],
        savings: "2–3× revenue per advisory client · Higher margins · Scalable growth",
      },
    },
  ],
  timelineTitle: "8-Week CPA Firm Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Firm Assessment",
      icon: RefreshCw,
      tasks: [
        "Audit current workflow from engagement through filing",
        "Connect tax software, accounting platform, and document systems",
        "IRS compliance assessment and WISP evaluation",
        "Identify capacity bottlenecks and pricing gaps",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Document Collection Agent with secure portal",
        "Activate Tax Season Operations routing and prioritization",
        "Deploy automated engagement letters and billing",
        "Train staff on agent-assisted preparation workflow",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Security & Efficiency",
      icon: BarChart3,
      tasks: [
        "Deploy Tax Security Agent with WISP and encrypted portal",
        "Launch staff training program with phishing simulations",
        "Activate profitability tracking per engagement",
        "Begin weekly firm performance dashboards",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Advisory & Growth",
      icon: Lightbulb,
      tasks: [
        "Deploy Advisory Opportunity scoring across client base",
        "Launch proactive advisory outreach campaigns",
        "Model revenue mix optimization plan",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Small CPA Firm",
  roiStats: [
    { label: "Season Capacity", value: "+30%", sub: "More returns without more staff" },
    { label: "Document Collection", value: "3 weeks faster", sub: "Automated follow-ups and classification" },
    { label: "Fee Optimization", value: "15–25% lift", sub: "Market-rate pricing and advisory upsell" },
    { label: "Compliance Risk", value: "Near Zero", sub: "WISP, encrypted portal, staff training" },
  ],
  investment: "Investment: $2,000–$4,000/mo",
  ctaLabel: "Get Your CPA Firm Blueprint",
};

const AccountingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default AccountingBlueprint;
