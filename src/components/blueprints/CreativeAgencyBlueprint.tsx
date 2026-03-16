import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Palette,
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
  badgeIcon: Palette,
  badgeLabel: "Industry Blueprint: Creative & Design Agency",
  badgeColor: "bg-warning/10",
  title: "The Creative Agency: An Agentic AI Transformation",
  description:
    "A boutique design or creative agency — a creative director, 1–2 designers, a copywriter, and a project manager — generating $300K–$1.5M in revenue but drowning in revision cycles, underpricing creative work, losing projects to scope creep, and struggling to maintain a consistent pipeline.",
  teamLabel: "The Studio",
  teamRoles: [
    { role: "Creative Director", focus: "Client strategy, creative vision, pitches, brand oversight" },
    { role: "Senior Designer", focus: "Brand identity, web design, campaign visuals, art direction" },
    { role: "Jr Designer / Production", focus: "Asset production, file prep, template execution" },
    { role: "Copywriter / Strategist", focus: "Messaging, content strategy, naming, UX writing" },
    { role: "Project Manager", focus: "Timelines, client communication, resource allocation" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The creative agency reality:</span> Revision cycles are the #1 margin killer — the average project goes through 5–7 rounds when SOW allows 2–3. Creative directors spend 60% of time on admin instead of creative work. Pricing is project-based with no time tracking, so profitable projects subsidize money-losers invisibly. Client acquisition is feast-or-famine. The studio is leaving{" "}
      <span className="font-semibold text-foreground">$5K–$10K/month on the table</span> in revision overruns, underpriced projects, and inconsistent pipeline.
    </>
  ),
  painAreas: [
    {
      icon: FileText,
      title: "Creative Brief & Revision Management",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Endless Revisions Kill Every Project",
        problems: [
          "Creative briefs are vague or incomplete — designers start work and discover missing information mid-project",
          "Revision rounds average 5–7 per project when SOW specifies 2–3 — each extra round costs $500–$1,500",
          "Client feedback is scattered across email, Slack, and verbal conversations — contradictory direction is common",
          "No system to track which revision round the project is on — scope creep is invisible until it's too late",
        ],
      },
      after: {
        headline: "After: Creative Workflow Agent",
        solutions: [
          { action: "Structured brief builder", detail: "Agent guides clients through a comprehensive brief with visual references, goals, and constraints — designers start with clarity" },
          { action: "Centralized feedback portal", detail: "Agent collects all revision requests in one place with annotation tools — no more conflicting email threads" },
          { action: "Revision round tracking", detail: "Agent counts rounds against SOW, alerts team at limit, and auto-generates change order for additional revisions" },
          { action: "Approval workflow", detail: "Agent routes deliverables for approval with sign-off tracking — clear record of what was approved and when" },
        ],
        savings: "50% fewer revision rounds · Zero scope confusion · Clear approval records",
      },
    },
    {
      icon: Calendar,
      title: "Resource Planning & Capacity Management",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Everyone Is Either Idle or Drowning",
        problems: [
          "Project manager has no real-time view of each designer's workload — assigns by guessing availability",
          "Creative director is pulled into production work because nobody else is 'available' (they're on unclear projects)",
          "Freelancer onboarding is last-minute — rush hiring at premium rates when internal capacity runs out",
          "Project timelines overlap unpredictably — quality suffers when every designer has 4 active projects",
        ],
      },
      after: {
        headline: "After: Creative Resource Agent",
        solutions: [
          { action: "Real-time capacity dashboard", detail: "Agent tracks hours allocated vs available by team member — visual heatmap shows who's overloaded and who has bandwidth" },
          { action: "Smart project assignment", detail: "Agent recommends designer assignment based on skills, availability, and project complexity — optimal utilization" },
          { action: "Freelancer pipeline management", detail: "Agent maintains a vetted freelancer bench with rates, skills, and availability — onboarding takes hours, not days" },
          { action: "Timeline conflict detection", detail: "Agent flags overlapping deadlines and suggests schedule adjustments before quality suffers" },
        ],
        savings: "Balanced workloads · CD time protected · Proactive freelancer bench",
      },
    },
    {
      icon: DollarSign,
      title: "Pricing, Profitability & Financial Health",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Winning Projects That Lose Money",
        problems: [
          "Project pricing based on competitor rates and gut feel — no actual cost modeling per project type",
          "No time tracking — agency has no idea if a $15K branding project took 50 hours or 150 hours",
          "Invoicing happens after project completion — sometimes 30–60 days after the work is done",
          "Retainer clients quietly consume 40–50% more hours than contracted — nobody notices until year-end",
        ],
      },
      after: {
        headline: "After: Creative Finance Agent",
        solutions: [
          { action: "Project cost modeling", detail: "Agent builds pricing from historical time data — 'Branding projects average 80hrs at $150/hr blended rate = $12K minimum'" },
          { action: "Passive time tracking", detail: "Agent monitors design tool activity and meetings — auto-generates time records without manual entry" },
          { action: "Milestone billing automation", detail: "Agent triggers invoices at project milestones (brief approval, first draft, final delivery) — cash flow matches delivery" },
          { action: "Retainer utilization alerts", detail: "Agent tracks hours against retainer caps weekly — flags overages before they erode margin" },
        ],
        savings: "Data-driven pricing · Zero unbilled hours · Cash flow matches delivery",
      },
    },
    {
      icon: TrendingUp,
      title: "Portfolio, Case Studies & Thought Leadership",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Best Work Never Gets Showcased",
        problems: [
          "Portfolio hasn't been updated in 6+ months — best recent work isn't visible to prospects",
          "Case studies are on the 'someday' list — the data and results exist but nobody has time to write them up",
          "Social media presence is sporadic — weeks of silence followed by a burst of posts",
          "Speaking engagements and awards submissions are missed because deadlines aren't tracked",
        ],
      },
      after: {
        headline: "After: Creative Brand Agent",
        solutions: [
          { action: "Automated case study drafts", detail: "Agent compiles project briefs, before/after visuals, and client results into case study frameworks — CD edits vs writes from scratch" },
          { action: "Portfolio curation prompts", detail: "Agent flags completed projects for portfolio inclusion and generates web-ready assets — portfolio stays current" },
          { action: "Content calendar automation", detail: "Agent schedules process shots, project reveals, and team spotlights across social platforms — consistent presence without effort" },
          { action: "Opportunity tracker", detail: "Agent monitors award submission deadlines, speaking opportunities, and press features relevant to the agency's work" },
        ],
        savings: "Always-current portfolio · Automated content calendar · Award and press pipeline",
      },
    },
    {
      icon: Target,
      title: "Client Acquisition & Agency Growth",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Waiting for the Phone to Ring",
        problems: [
          "90% of new business comes from referrals and inbound — no proactive outreach system",
          "RFP responses take 20+ hours and win rate is under 20% — poor ROI on the time investment",
          "No system to nurture prospects who aren't ready now but might be in 6 months",
          "Agency growth is accidental — taking whatever comes rather than targeting ideal clients",
        ],
      },
      after: {
        headline: "After: Agency Growth Agent",
        solutions: [
          { action: "Ideal client targeting", detail: "Agent profiles the most profitable clients by industry, project type, and revenue — builds a target list for proactive outreach" },
          { action: "RFP response automation", detail: "Agent pre-populates RFP responses from a capability database with relevant case studies — response time drops 70%" },
          { action: "Long-term nurture sequences", detail: "Agent runs value-add email sequences for prospects not ready to buy — case studies, insights, and thought leadership" },
          { action: "Revenue modeling", detail: "Agent projects growth scenarios based on win rate, average project value, and capacity — data-backed hiring decisions" },
        ],
        savings: "Proactive pipeline · 70% faster RFP responses · Data-driven growth",
      },
    },
  ],
  timelineTitle: "8-Week Creative Agency Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Studio Assessment", icon: RefreshCw, tasks: ["Map creative workflow from brief through delivery and billing", "Audit project management, time tracking, and billing tools", "Analyze project profitability across recent engagements", "Identify top margin leaks (usually revisions, pricing, utilization)"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch Creative Workflow Agent with brief builder and feedback portal", "Activate Resource Planning with capacity dashboards", "Deploy passive time tracking across the team", "Train PM and designers on agent-assisted workflows"] },
    { week: "Week 5–6", phase: "Finance & Marketing", icon: BarChart3, tasks: ["Deploy Finance Agent with milestone billing automation", "Launch case study and portfolio automation", "Activate retainer utilization monitoring", "Begin agency performance dashboards"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Deploy ideal client targeting and proactive outreach", "Launch long-term prospect nurture sequences", "Review project profitability and adjust pricing model", "Transition to ongoing optimization with monthly reviews"] },
  ],
  roiTitle: "Projected ROI for a Boutique Creative Agency",
  roiStats: [
    { label: "Revision Overruns", value: "−50%", sub: "Structured briefs, centralized feedback" },
    { label: "Unbilled Hours Captured", value: "100%", sub: "Passive time tracking and scope management" },
    { label: "CD Time on Creative", value: "2× more", sub: "Admin automation frees strategic capacity" },
    { label: "Portfolio & Pipeline", value: "Always On", sub: "Automated case studies and nurture" },
  ],
  investment: "Investment: $2,000–$3,500/mo",
  ctaLabel: "Get Your Creative Agency Blueprint",
};

const CreativeAgencyBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default CreativeAgencyBlueprint;
