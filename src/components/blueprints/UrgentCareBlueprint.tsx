import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Stethoscope, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Stethoscope,
  badgeLabel: "Industry Blueprint: Multi-Site Urgent Care",
  badgeColor: "bg-primary/10",
  title: "The Urgent Care Network: An Agentic AI Transformation",
  description: "A multi-site urgent care or walk-in clinic group — 3–15 locations, $5M–$50M revenue — fighting patient wait time variability, cross-location staffing, insurance complexity, and patient retention to primary care relationships.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "CEO / Medical Director", focus: "Clinical oversight, strategy, payer negotiations" },
    { role: "Site Medical Directors", focus: "Clinical care, provider supervision, protocols" },
    { role: "Office Managers", focus: "Staff scheduling, patient flow, operations" },
    { role: "Clinical Staff", focus: "NPs, PAs, MAs, radiology, lab techs" },
    { role: "RCM / Billing", focus: "Coding, claims, patient billing, denials" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The urgent care reality:</span> Wait times vary 15 min to 2+ hours between locations — patients leave. Provider scheduling across locations is a puzzle. Coding accuracy directly impacts revenue — upcoding risk vs. undercoding loss. 90% of patients are one-time visitors with no retention strategy. The network is leaving <span className="font-semibold text-foreground">$30K–$100K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Patient Flow & Wait Time Optimization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Unpredictable Wait Times", problems: ["Wait times vary 15 min to 2+ hours across locations", "No real-time patient volume visibility — staffing mismatches", "Patients leave without being seen (LWBS) at 5–10% rate", "Online check-in exists but doesn't actually reduce wait times"] },
      after: { headline: "After: Patient Flow Agent", solutions: [{ action: "Real-time wait time broadcasting", detail: "Agent publishes live wait times across all locations — patients choose shortest wait, balancing demand" }, { action: "Demand prediction", detail: "Agent forecasts hourly patient volume by location based on historical patterns, weather, and events" }, { action: "Queue management", detail: "Agent manages digital queue with accurate time estimates — LWBS drops to under 2%" }, { action: "Staff float pool optimization", detail: "Agent identifies surge patterns and recommends float provider deployment in real-time" }], savings: "LWBS to <2% · Balanced patient volume · Predictive staffing" },
    },
    { icon: TrendingUp, title: "Coding & Revenue Cycle", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: Revenue Leakage in Every Visit", problems: ["Coding accuracy varies by provider — some consistently undercode", "E&M level selection is inconsistent — leaving $15–$40 per visit on the table", "Claims denial rate runs 8–12% across payers", "Patient balance collection is inconsistent — bad debt runs 10–15%"] },
      after: { headline: "After: Revenue Cycle Agent", solutions: [{ action: "AI-assisted coding", detail: "Agent reviews documentation and suggests appropriate E&M levels and procedure codes — captures full complexity" }, { action: "Pre-submission claim scrubbing", detail: "Agent validates every claim against payer rules — first-pass rate to 96%+" }, { action: "Patient billing optimization", detail: "Agent manages transparent pricing, payment plans, and collection sequences — bad debt drops to 5%" }, { action: "Provider coding education", detail: "Agent identifies coding pattern variances by provider and delivers targeted education" }], savings: "$15–40 more per visit · 96%+ clean claims · 5% bad debt" },
    },
    { icon: DollarSign, title: "Cross-Location Operations", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Each Site is an Island", problems: ["Provider credentialing tracked per-location — gaps cause billing problems", "Supply ordering is duplicated — no network purchasing leverage", "Clinical protocols vary between sites — quality inconsistency", "No cross-location analytics — can't identify what top sites do differently"] },
      after: { headline: "After: Network Operations Agent", solutions: [{ action: "Unified credentialing", detail: "Agent manages provider credentials, licenses, and payer enrollments across all sites — zero gaps" }, { action: "Network purchasing", detail: "Agent consolidates supply orders across locations — volume pricing and standardized inventory" }, { action: "Protocol standardization", detail: "Agent ensures consistent clinical protocols with digital clinical pathways and compliance tracking" }, { action: "Cross-location benchmarking", detail: "Dashboard compares every metric across sites — identify and replicate what works" }], savings: "Zero credentialing gaps · 15% supply savings · Standardized care" },
    },
    { icon: Target, title: "Patient Retention & Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: One-and-Done Patients", problems: ["90% of patients are one-time visitors — no retention strategy", "No connection between urgent care visit and primary care establishment", "Occupational medicine contracts managed ad-hoc", "Marketing is location-specific and uncoordinated"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Primary care bridge", detail: "Agent offers primary care follow-up scheduling at discharge — converts UC patients to ongoing relationships" }, { action: "Employer/occ-med pipeline", detail: "Agent manages employer accounts for drug screens, physicals, and work comp — recurring B2B revenue" }, { action: "Patient re-engagement", detail: "Agent reaches out for flu shots, physicals, and wellness visits — turns one-time into recurring" }, { action: "Network-wide marketing", detail: "Agent coordinates campaigns, reputation management, and new location launches across the network" }], savings: "Primary care conversion · Employer accounts · Network marketing" },
    },
  ],
  timelineTitle: "8-Week Urgent Care Network Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Network Assessment", icon: RefreshCw, tasks: ["Audit patient flow, coding, and operations across all sites", "Analyze revenue cycle and denial patterns", "Map provider scheduling and staffing models", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch real-time wait time broadcasting", "Activate AI-assisted coding review", "Deploy unified credentialing management", "Train site managers on agent dashboards"] },
    { week: "Week 5–6", phase: "Optimize Revenue", icon: BarChart3, tasks: ["Deploy pre-submission claim scrubbing", "Launch patient billing optimization", "Activate network purchasing consolidation", "Begin cross-location benchmarking"] },
    { week: "Week 7–8", phase: "Grow & Retain", icon: Lightbulb, tasks: ["Launch primary care bridge program", "Deploy employer/occ-med pipeline", "Activate network-wide marketing coordination", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for an Urgent Care Network",
  roiStats: [
    { label: "Revenue per Visit", value: "+$15–40", sub: "Accurate coding and capture" },
    { label: "LWBS Rate", value: "<2%", sub: "From 5–10% with queue management" },
    { label: "Clean Claims", value: "96%+", sub: "Pre-submission scrubbing" },
    { label: "Revenue Impact", value: "$30–100K/mo", sub: "Coding + retention + efficiency" },
  ],
  investment: "Investment: $5,000–$15,000/mo",
  ctaLabel: "Get Your Urgent Care Blueprint",
};

const UrgentCareBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default UrgentCareBlueprint;
