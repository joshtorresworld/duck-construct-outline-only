import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Ruler, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Ruler,
  badgeLabel: "Industry Blueprint: Engineering & Architecture",
  badgeColor: "bg-accent/10",
  title: "The Engineering Firm: An Agentic AI Transformation",
  description: "An engineering or architecture firm — 10–100 professionals, $2M–$20M revenue — fighting project profitability erosion, RFP response burden, resource allocation conflicts, and scope creep that erodes every project margin.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Principal / Partner(s)", focus: "Client development, project oversight, firm strategy" },
    { role: "Project Managers", focus: "Scope management, scheduling, client communication" },
    { role: "Engineers / Architects", focus: "Design, analysis, calculations, drawings" },
    { role: "Drafters / CAD", focus: "Drawing production, BIM modeling, revisions" },
    { role: "Admin / Finance", focus: "Billing, proposals, contracts, HR" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The AE firm reality:</span> RFP responses take 40–80 hours at a 10–20% win rate. Resource allocation across 10–30 concurrent projects causes constant conflicts. Scope creep erodes 10–20% of project margins because changes aren't documented in real-time. Time tracking compliance runs 70–80% — lost billable hours. The firm is leaving <span className="font-semibold text-foreground">$15K–$50K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Resource Allocation & Utilization", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Resource Roulette", problems: ["PMs compete for the same senior engineers — no visibility into availability", "Utilization targets of 85% rarely achieved — actual is 65–75%", "Junior staff underutilized while seniors are overcommitted", "No forecasting of resource needs 4–8 weeks ahead"] },
      after: { headline: "After: Resource Agent", solutions: [{ action: "Real-time capacity planning", detail: "Agent shows every professional's availability, current assignments, and upcoming commitments — no more guessing" }, { action: "Smart assignment matching", detail: "Agent recommends staff assignments based on skills, availability, development goals, and project requirements" }, { action: "Utilization forecasting", detail: "Agent predicts utilization 8 weeks out — identifies both shortfalls and over-commitments before they happen" }, { action: "Development tracking", detail: "Agent ensures junior staff get appropriate project exposure for professional growth" }], savings: "85%+ utilization · Zero resource conflicts · Predictive staffing" },
    },
    { icon: TrendingUp, title: "Proposal & RFP Management", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: 80 Hours Per Proposal", problems: ["RFP responses take 40–80 hours — win rate is 10–20%", "Resumes, project descriptions, and boilerplate recreated each time", "Go/no-go decisions are emotional, not data-driven", "No tracking of what differentiates winning vs. losing proposals"] },
      after: { headline: "After: Proposal Agent", solutions: [{ action: "Content library management", detail: "Agent maintains up-to-date resumes, project descriptions, and firm qualifications — instant retrieval" }, { action: "Proposal assembly", detail: "Agent drafts proposal sections from library content and project-specific inputs — 50% less preparation time" }, { action: "Go/no-go scoring", detail: "Agent evaluates opportunities based on fit, competition, capacity, and historical win patterns" }, { action: "Win/loss analysis", detail: "Agent tracks win rates by client, project type, and team composition — data-driven pursuit strategy" }], savings: "50% less proposal time · Data-driven go/no-go · Higher win rate" },
    },
    { icon: DollarSign, title: "Project Profitability & Scope Management", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Scope Creep Eats Every Margin", problems: ["Scope creep erodes 10–20% of project margins — poorly documented", "Time tracking compliance at 70–80% — billable hours go unrecorded", "Project budget burn rate unknown until monthly review — too late to course-correct", "Additional services not identified or billed — free work for clients"] },
      after: { headline: "After: Project Financial Agent", solutions: [{ action: "Real-time budget tracking", detail: "Agent tracks hours and costs against budget by phase and task — alerts when burn rate exceeds plan" }, { action: "Scope change documentation", detail: "Agent flags out-of-scope work in real-time — additional services identified and authorized before work begins" }, { action: "Time tracking enforcement", detail: "Agent sends daily reminders and makes timesheet entry frictionless — compliance to 95%+" }, { action: "Project profitability dashboards", detail: "Real-time margin by project, phase, project manager, and client — spot problems early" }], savings: "Scope creep captured · 95% time compliance · Real-time margins" },
    },
    { icon: Target, title: "Client Development & Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Growth by Reputation Only", problems: ["Business development is the principal's side job — inconsistent effort", "No systematic tracking of past client rebooking potential", "Thought leadership content is 'someday' — never gets done", "Conference and industry event follow-up is inconsistent"] },
      after: { headline: "After: Growth Agent", solutions: [{ action: "Client rebooking pipeline", detail: "Agent tracks past clients and identifies opportunities for follow-on work based on project completion and timing" }, { action: "Thought leadership content", detail: "Agent repurposes project case studies into articles, presentations, and social content" }, { action: "Conference management", detail: "Agent manages conference attendance, speaking submissions, and post-event contact follow-up" }, { action: "Teaming partner management", detail: "Agent tracks teaming partnerships and identifies complementary firms for joint pursuits" }], savings: "Proactive client development · Thought leadership · Teaming pipeline" },
    },
  ],
  timelineTitle: "8-Week Engineering Firm Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Firm Assessment", icon: RefreshCw, tasks: ["Audit resource allocation, proposal, and financial processes", "Analyze project profitability and utilization patterns", "Map business development and client management", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch resource allocation and capacity planning", "Activate proposal content library and assembly", "Deploy real-time project budget tracking", "Train PMs on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Operations", icon: BarChart3, tasks: ["Deploy scope change documentation system", "Launch time tracking enforcement", "Activate project profitability dashboards", "Begin go/no-go scoring for pursuits"] },
    { week: "Week 7–8", phase: "Grow & Develop", icon: Lightbulb, tasks: ["Launch client rebooking pipeline", "Deploy thought leadership content engine", "Activate win/loss analysis", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for an Engineering / Architecture Firm",
  roiStats: [
    { label: "Utilization", value: "65→85%", sub: "Real-time capacity planning" },
    { label: "Scope Recovery", value: "+$10–20K/mo", sub: "Documented additional services" },
    { label: "Proposal Time", value: "−50%", sub: "Content library and assembly" },
    { label: "Revenue Impact", value: "$15–50K/mo", sub: "Utilization + scope + wins" },
  ],
  investment: "Investment: $5,000–$15,000/mo",
  ctaLabel: "Get Your Engineering Blueprint",
};

const EngineeringBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default EngineeringBlueprint;
