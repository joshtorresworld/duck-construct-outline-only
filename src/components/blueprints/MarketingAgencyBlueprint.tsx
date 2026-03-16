import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Megaphone,
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
  badgeIcon: Megaphone,
  badgeLabel: "Industry Blueprint: Marketing Agency",
  badgeColor: "bg-accent/10",
  title: "The Marketing Agency: An Agentic AI Transformation",
  description:
    "A 3–5 person agency — founder/strategist, a content creator, a designer, an account manager, and a VA/admin — generating $300K–$1.5M in revenue but trapped in scope creep, client reporting chaos, missed deadlines, and the feast-or-famine new business cycle.",
  teamLabel: "The Agency",
  teamRoles: [
    { role: "Founder / Strategist", focus: "Client strategy, sales, P&L, thought leadership" },
    { role: "Content Creator", focus: "Copywriting, social media, email campaigns, SEO" },
    { role: "Designer / Creative", focus: "Graphics, video, brand assets, web updates" },
    { role: "Account Manager", focus: "Client communication, project timelines, approvals" },
    { role: "VA / Admin", focus: "Scheduling, invoicing, tool management, reporting" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The agency reality:</span> The average agency spends 30% of billable capacity on client reporting alone. Scope creep on retainer clients erodes margins by 15–25%. Founders spend 60% of their time on delivery instead of sales, creating feast-or-famine revenue cycles. Client churn averages 30–40% annually. The agency is leaving{" "}
      <span className="font-semibold text-foreground">$5K–$12K/month on the table</span> in scope creep, unbilled work, and inefficient delivery.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Project Management & Delivery",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Every Project Feels Like the First",
        problems: [
          "Each client engagement is managed ad hoc — no repeatable process from kickoff to delivery",
          "Deadlines are tracked across Slack, email, spreadsheets, and memory — items slip through weekly",
          "Content approval cycles average 5–7 days because feedback loops are unstructured",
          "The team doesn't know who's at capacity and who's underloaded — work distribution is uneven",
        ],
      },
      after: {
        headline: "After: Agency Delivery Agent",
        solutions: [
          { action: "Templatized workflows", detail: "Agent generates project plans from service templates — every website, campaign, or retainer follows a proven process with built-in milestones" },
          { action: "Automated deadline tracking", detail: "Agent monitors every task and sends escalating reminders to assignees — nothing falls through the cracks" },
          { action: "Client approval portal", detail: "Agent sends content for review with one-click approve/revise — approval cycles drop to 48 hours" },
          { action: "Capacity dashboard", detail: "Agent tracks hours by person and project in real-time — founder sees who's available and who's overloaded" },
        ],
        savings: "5 hrs/week project management saved · 48hr approval cycles · Zero missed deadlines",
      },
    },
    {
      icon: TrendingUp,
      title: "New Business Pipeline & Sales",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Feast or Famine Every Quarter",
        problems: [
          "Founder only sells when delivery slows down — creating predictable revenue dips every 3–4 months",
          "Proposals take 4–6 hours to create from scratch each time — often for prospects who ghost",
          "No follow-up system — 40% of proposals are sent and never followed up on",
          "Referrals are the primary channel but they're inconsistent and untrackable",
        ],
      },
      after: {
        headline: "After: Agency Sales Agent",
        solutions: [
          { action: "Always-on lead nurture", detail: "Agent runs content marketing, email sequences, and social engagement continuously — pipeline fills even when founder is busy delivering" },
          { action: "Proposal automation", detail: "Agent generates customized proposals from templates using prospect data — 30 minutes instead of 4 hours" },
          { action: "Automated follow-up cadence", detail: "Agent follows up on proposals at 3, 7, and 14 days with value-add content — close rate improves 35%" },
          { action: "Referral tracking system", detail: "Agent tracks referral sources, sends thank-you sequences, and identifies top referrers for VIP treatment" },
        ],
        savings: "Consistent pipeline · 30-min proposals · 35% higher close rate",
      },
    },
    {
      icon: BarChart3,
      title: "Client Reporting & Analytics",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Reports Take Longer Than the Work",
        problems: [
          "Monthly client reports take 3–5 hours each — pulling data from Google Analytics, social platforms, ad managers, and email tools",
          "Reports are formatted differently for each client — no standardized template or process",
          "Data is presented without context or recommendations — clients don't understand the value",
          "QBRs are skipped because nobody has time to prepare — clients feel neglected and churn",
        ],
      },
      after: {
        headline: "After: Reporting Intelligence Agent",
        solutions: [
          { action: "Automated data aggregation", detail: "Agent pulls metrics from all platforms nightly — Google Analytics, Meta, LinkedIn, Mailchimp, HubSpot — into a unified dashboard" },
          { action: "One-click report generation", detail: "Agent compiles branded monthly reports with trend analysis and commentary — 15 minutes of review instead of 5 hours of building" },
          { action: "AI-generated insights", detail: "Agent surfaces anomalies, trends, and recommendations — 'Email open rates dropped 12% — subject line A/B test recommended'" },
          { action: "Automated QBR decks", detail: "Agent generates quarterly review presentations with performance data, wins, and strategic recommendations" },
        ],
        savings: "80% reporting time saved · Data-driven insights · Zero skipped QBRs",
      },
    },
    {
      icon: DollarSign,
      title: "Pricing, Scope & Profitability",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Scope Creep Eats Every Margin",
        problems: [
          "Retainer clients routinely request work outside scope — account managers say yes to avoid conflict",
          "No time tracking discipline — agency doesn't know actual hours spent per client",
          "Pricing is based on competitor rates, not actual cost of delivery — some clients are unprofitable",
          "Invoices go out late because time needs to be compiled — cash flow suffers",
        ],
      },
      after: {
        headline: "After: Agency Profitability Agent",
        solutions: [
          { action: "Scope tracking automation", detail: "Agent monitors deliverables against SOW — flags out-of-scope requests before work begins and generates change orders" },
          { action: "Passive time tracking", detail: "Agent tracks time spent per client by monitoring tool activity — accurate data without manual timesheets" },
          { action: "Client profitability scoring", detail: "Agent calculates true profit per client factoring labor, tools, and overhead — identifies clients that need repricing or firing" },
          { action: "Automated invoicing", detail: "Agent generates invoices on schedule with detailed line items — cash flow predictable and on time" },
        ],
        savings: "Zero scope creep · True client profitability · On-time invoicing",
      },
    },
    {
      icon: Target,
      title: "Client Retention & Agency Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Clients Leave Without Warning",
        problems: [
          "Client churn rate is 30–40% annually — each lost client costs $15K–$50K to replace",
          "No early warning system for at-risk clients — satisfaction issues surface at cancellation",
          "Upsell opportunities are missed because nobody tracks what services clients aren't buying",
          "Agency can't scale because founder is the bottleneck for strategy on every account",
        ],
      },
      after: {
        headline: "After: Agency Growth Agent",
        solutions: [
          { action: "Client health scoring", detail: "Agent monitors engagement signals (response times, feedback tone, scope requests) and flags at-risk accounts for proactive outreach" },
          { action: "Strategic upsell identification", detail: "Agent analyzes client results and identifies services that would accelerate their goals — presents data-backed expansion proposals" },
          { action: "Strategy playbook automation", detail: "Agent generates client strategy recommendations from performance data — founder reviews vs creating from scratch" },
          { action: "Scalability modeling", detail: "Agent models revenue per team member and identifies when to hire, what role to hire, and projected ROI of the hire" },
        ],
        savings: "50% less churn · 20% upsell revenue lift · Scalable operations",
      },
    },
  ],
  timelineTitle: "8-Week Marketing Agency Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Agency Audit", icon: RefreshCw, tasks: ["Map service delivery workflows from kickoff to reporting", "Connect project management, analytics, and billing tools", "Audit client profitability and scope management", "Identify top leaks (usually reporting time, scope creep, pipeline gaps)"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Delivery Agent with templatized workflows", "Activate Reporting Agent with automated data aggregation", "Deploy proposal automation for sales pipeline", "Train team on approval portals and capacity tracking"] },
    { week: "Week 5–6", phase: "Revenue & Retention", icon: BarChart3, tasks: ["Deploy Profitability Agent with scope tracking", "Launch client health scoring and upsell identification", "Activate automated invoicing and follow-up cadences", "Begin weekly agency performance dashboards"] },
    { week: "Week 7–8", phase: "Scale & Strategize", icon: Lightbulb, tasks: ["Review client profitability and adjust pricing", "Deploy scalability modeling for hiring decisions", "Document SOPs for all agent-assisted workflows", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for a Small Marketing Agency",
  roiStats: [
    { label: "Reporting Time", value: "−80%", sub: "Automated aggregation and one-click reports" },
    { label: "Revenue Recovered", value: "$4K–$8K/mo", sub: "Scope control, upsells, pipeline consistency" },
    { label: "Client Retention", value: "+50%", sub: "Health scoring and proactive outreach" },
    { label: "Founder Time Freed", value: "15+ hrs/week", sub: "Strategy playbooks and delivery automation" },
  ],
  investment: "Investment: $2,000–$3,500/mo",
  ctaLabel: "Get Your Agency Blueprint",
  bgClass: "bg-surface-sunken",
};

const MarketingAgencyBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default MarketingAgencyBlueprint;
