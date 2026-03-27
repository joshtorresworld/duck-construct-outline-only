import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Landmark, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Landmark,
  badgeLabel: "Industry Blueprint: Regional Banking & Credit Unions",
  badgeColor: "bg-primary/10",
  title: "The Regional Bank: An Agentic AI Transformation",
  description: "A community bank or credit union — 5–30 branches, 100–500 employees, $500M–$5B in assets — losing members to digital-first competitors while drowning in compliance reporting and manual loan processing.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "CEO / President", focus: "Strategy, board relations, community engagement" },
    { role: "Lending Officers (5–20)", focus: "Loan origination, underwriting, portfolio management" },
    { role: "Branch Managers", focus: "Member service, staff management, local relationships" },
    { role: "Compliance / BSA", focus: "Regulatory reporting, BSA/AML, audits" },
    { role: "Operations / IT", focus: "Core systems, digital channels, data management" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The community banking reality:</span> Loan processing takes 30–45 days vs. fintech's 7 days. Compliance reporting consumes 20+ FTE hours per week. Member engagement is branch-centric while members go digital. Net interest margin compression demands efficiency. The institution is leaving <span className="font-semibold text-foreground">$50K–$200K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Loan Processing & Origination", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: 30–45 Day Loan Cycle", problems: ["Loan applications require manual data entry from paper or PDF documents", "Document collection chasing takes 5–10 touches per application", "Underwriting analysis is manual — each loan takes 4–8 hours of analyst time", "Borrowers go to online lenders who approve in days, not weeks"] },
      after: { headline: "After: Lending Agent", solutions: [{ action: "Intelligent document extraction", detail: "Agent extracts data from tax returns, financials, and pay stubs — auto-populates loan systems" }, { action: "Automated document collection", detail: "Agent manages borrower document requests with reminders and portal — 80% less chasing" }, { action: "Pre-underwriting analysis", detail: "Agent performs initial ratio analysis, risk scoring, and exception flagging — analyst reviews in 1 hour" }, { action: "Decision speed", detail: "Simple loans approved same-day, complex within 7 days — competitive with fintechs" }], savings: "7-day loan cycle · 80% less chasing · Same-day simple approvals" },
    },
    { icon: TrendingUp, title: "Compliance & Regulatory Reporting", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Compliance is a Department", problems: ["BSA/AML monitoring generates hundreds of alerts — 90% false positives", "Regulatory reporting (Call Report, HMDA, CRA) takes weeks to compile", "Policy updates require manual review and distribution", "Audit preparation consumes entire department for weeks"] },
      after: { headline: "After: Compliance Agent", solutions: [{ action: "Intelligent alert management", detail: "Agent tunes BSA/AML monitoring — reduces false positives by 70% while improving detection of true risks" }, { action: "Automated regulatory reporting", detail: "Agent compiles data for Call Reports, HMDA, and CRA reporting — analysts review, not build" }, { action: "Policy management", detail: "Agent tracks regulatory changes, maps to internal policies, and distributes updates with acknowledgment tracking" }, { action: "Continuous audit readiness", detail: "All compliance documentation organized and current — audit prep in days, not weeks" }], savings: "70% fewer false positives · Automated reporting · Audit-ready always" },
    },
    { icon: DollarSign, title: "Member Engagement & Digital Experience", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Losing to Digital-First", problems: ["Member engagement is reactive — branch visits declining 10%/year", "No personalized product recommendations based on member behavior", "Digital channels are transactional only — no relationship building", "Cross-sell ratio stagnant at 2.5–3.0 products per member"] },
      after: { headline: "After: Member Engagement Agent", solutions: [{ action: "Proactive member outreach", detail: "Agent identifies life events and financial patterns — triggers personalized advisor outreach at the right moment" }, { action: "Smart product matching", detail: "Agent analyzes member financial profile and recommends relevant products — 'You're carrying $8K credit card debt at 22%, our HELOC is 6.5%'" }, { action: "Digital relationship building", detail: "Agent delivers financial wellness content, rate alerts, and account insights through digital channels" }, { action: "Omnichannel experience", detail: "Agent ensures consistent experience whether member visits branch, calls, or uses digital — full context everywhere" }], savings: "Cross-sell to 4.0+ · Proactive engagement · Digital relationship" },
    },
    { icon: Target, title: "Operational Efficiency", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Manual Everything", problems: ["Account opening takes 30–45 minutes of data entry", "Wire transfer processing requires dual manual review", "Exception processing (stop payments, disputes) is fully manual", "No analytics on branch productivity or staff utilization"] },
      after: { headline: "After: Operations Agent", solutions: [{ action: "Digital account opening", detail: "Agent handles identity verification, document collection, and account setup — 10 minutes vs. 45" }, { action: "Automated wire processing", detail: "Agent performs OFAC screening, validates details, and routes for approval — processing time cut 70%" }, { action: "Exception automation", detail: "Agent handles routine exceptions (stop payments, address changes) automatically — staff focus on complex items" }, { action: "Branch analytics", detail: "Dashboard shows transactions, wait times, staff utilization, and product conversations by branch" }], savings: "10-min account opening · 70% faster wires · Branch analytics" },
    },
  ],
  timelineTitle: "8-Week Banking Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Institution Assessment", icon: RefreshCw, tasks: ["Audit lending, compliance, and operations workflows", "Analyze member engagement and digital adoption", "Map regulatory reporting and audit processes", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch intelligent document extraction for lending", "Activate automated document collection", "Deploy digital account opening", "Train staff on agent workflows"] },
    { week: "Week 5–6", phase: "Compliance & Efficiency", icon: BarChart3, tasks: ["Deploy BSA/AML alert optimization", "Launch automated regulatory reporting", "Activate wire processing automation", "Begin branch analytics dashboards"] },
    { week: "Week 7–8", phase: "Engage & Grow", icon: Lightbulb, tasks: ["Launch proactive member engagement", "Deploy smart product matching", "Activate digital relationship building", "Transition to quarterly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Community Bank / Credit Union",
  roiStats: [
    { label: "Loan Processing", value: "30→7 days", sub: "Competitive with fintechs" },
    { label: "Compliance Efficiency", value: "+70%", sub: "Fewer false positives, automated reporting" },
    { label: "Cross-Sell Ratio", value: "2.5→4.0", sub: "Smart product recommendations" },
    { label: "Revenue Impact", value: "$50–200K/mo", sub: "Speed + efficiency + engagement" },
  ],
  investment: "Investment: $5,000–$15,000/mo",
  ctaLabel: "Get Your Banking Blueprint",
};

const RegionalBankingBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default RegionalBankingBlueprint;
