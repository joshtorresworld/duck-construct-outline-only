import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import { Camera, Calendar, TrendingUp, DollarSign, Target, RefreshCw, Zap, BarChart3, Lightbulb } from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Camera,
  badgeLabel: "Industry Blueprint: Photography & Videography",
  badgeColor: "bg-warning/10",
  title: "The Photography Business: An Agentic AI Transformation",
  description: "A photography or videography studio — 1–3 shooters, an editor, a coordinator — generating $100K–$400K but buried in admin, slow gallery delivery, and inconsistent booking.",
  teamLabel: "The Team",
  teamRoles: [
    { role: "Lead Photographer", focus: "Shooting, creative direction, client experience" },
    { role: "Second Shooter", focus: "Backup coverage, candids, B-roll" },
    { role: "Editor / Retoucher", focus: "Post-processing, album design, video editing" },
    { role: "Studio Coordinator", focus: "Booking, contracts, client comms, scheduling" },
    { role: "Bookkeeper", focus: "Invoicing, deposits, expense tracking" },
  ],
  coreProblem: (<><span className="font-semibold text-destructive">The photographer's reality:</span> 40% of working time is admin — emails, contracts, scheduling, delivery. Gallery turnaround averages 4–6 weeks (clients expect 2). Peak season (May–Oct) is booked solid while winter is dead. No system to turn one-time clients into repeat buyers. The studio is leaving <span className="font-semibold text-foreground">$2K–$5K/month on the table</span>.</>),
  painAreas: [
    { icon: Calendar, title: "Booking & Client Journey", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
      before: { headline: "Before: Email Ping-Pong for Every Booking", problems: ["Average of 8–12 emails to book a single session", "Contracts and deposits sent manually — some fall through the cracks", "No pre-session prep questionnaire — shows up without client vision", "Double-bookings happen when calendar isn't synced across platforms"] },
      after: { headline: "After: Client Journey Agent", solutions: [{ action: "One-click booking flow", detail: "Inquiry → questionnaire → contract → deposit → calendar confirmation in one automated sequence" }, { action: "Pre-session prep automation", detail: "Agent sends mood boards, location guides, and wardrobe suggestions based on session type" }, { action: "Calendar intelligence", detail: "Agent syncs all calendars, manages travel time between locations, and prevents conflicts" }, { action: "Client portal", detail: "Clients track their project status, view contracts, and communicate — no more email chains" }], savings: "80% less booking admin · Zero double-bookings · Better client prep" },
    },
    { icon: TrendingUp, title: "Post-Production & Gallery Delivery", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/20",
      before: { headline: "Before: 4–6 Week Turnaround", problems: ["Gallery delivery takes 4–6 weeks — client excitement fades", "No system to track editing progress across multiple projects", "Album design revisions go back and forth over email", "File management is a nightmare — shoots stored on scattered drives"] },
      after: { headline: "After: Production Workflow Agent", solutions: [{ action: "Automated culling workflow", detail: "Agent organizes raw files, creates project folders, and initiates AI-assisted culling — cuts editing start time in half" }, { action: "Project pipeline tracking", detail: "Visual dashboard shows every project's status — shoot → cull → edit → deliver — nothing falls behind" }, { action: "Gallery delivery automation", detail: "Agent sends galleries with personalized messages, download instructions, and social sharing prompts" }, { action: "Revision management", detail: "Clients review and approve albums in a portal — changes tracked and versioned automatically" }], savings: "2-week turnaround · Zero lost files · Streamlined revisions" },
    },
    { icon: DollarSign, title: "Revenue & Pricing Optimization", color: "text-warning", bgColor: "bg-warning/10", borderColor: "border-warning/20",
      before: { headline: "Before: Feast-or-Famine Revenue", problems: ["Peak season booked solid, winter at 20% capacity", "No print/product upsell system — revenue stops at session fee", "Package pricing is inconsistent — different quotes for similar work", "No recurring revenue — every month starts at zero"] },
      after: { headline: "After: Revenue Agent", solutions: [{ action: "Off-season marketing", detail: "Agent pushes seasonal mini-sessions, corporate headshots, and content packages to fill winter calendar" }, { action: "Automated product upsells", detail: "Agent presents print, album, and wall art options at gallery delivery — when excitement is highest" }, { action: "Dynamic pricing", detail: "Agent manages peak vs. off-peak pricing, last-minute booking discounts, and package bundles" }, { action: "Retainer clients", detail: "Agent identifies and proposes recurring arrangements — monthly content for businesses, quarterly family sessions" }], savings: "Year-round revenue · 30% product upsell rate · Retainer income" },
    },
    { icon: Target, title: "Marketing & Portfolio Growth", color: "text-success", bgColor: "bg-success/10", borderColor: "border-success/20",
      before: { headline: "Before: Portfolio Updates When There's Time", problems: ["Website portfolio hasn't been updated in months", "Blog posts about sessions are 'someday' tasks", "No systematic review collection from happy clients", "Vendor relationships (venues, planners) are informal and untracked"] },
      after: { headline: "After: Marketing Agent", solutions: [{ action: "Automated portfolio updates", detail: "Agent selects best images from each session and updates website portfolio by category" }, { action: "Blog automation", detail: "Agent drafts session stories with SEO optimization — photographer reviews and publishes in minutes" }, { action: "Review engine", detail: "Post-delivery surveys route satisfied clients to Google, The Knot, or Yelp" }, { action: "Vendor relationship management", detail: "Agent tracks venue and planner partnerships, sends styled shoot images, and nurtures referral networks" }], savings: "Always-current portfolio · SEO blog content · 5× reviews" },
    },
  ],
  timelineTitle: "8-Week Photography Business Rollout",
  implementationPhases: [
    { week: "Week 1–2", phase: "Studio Assessment", icon: RefreshCw, tasks: ["Audit booking, editing, and delivery workflows", "Map client journey from inquiry to referral", "Identify revenue gaps and seasonal patterns", "Prioritize highest-impact automations"] },
    { week: "Week 3–4", phase: "Deploy Core Agents", icon: Zap, tasks: ["Launch automated booking flow with contracts and deposits", "Activate project pipeline tracking", "Deploy pre-session prep automation", "Train coordinator on agent workflows"] },
    { week: "Week 5–6", phase: "Optimize Delivery", icon: BarChart3, tasks: ["Deploy gallery delivery automation", "Launch product upsell sequences", "Activate revision management portal", "Begin automated blog and portfolio updates"] },
    { week: "Week 7–8", phase: "Grow & Scale", icon: Lightbulb, tasks: ["Launch off-season marketing campaigns", "Deploy review collection engine", "Activate vendor relationship management", "Transition to monthly optimization reviews"] },
  ],
  roiTitle: "Projected ROI for a Photography Business",
  roiStats: [
    { label: "Admin Time Freed", value: "15+ hrs/wk", sub: "Booking, comms, delivery" },
    { label: "Gallery Turnaround", value: "4wk→2wk", sub: "Automated workflow pipeline" },
    { label: "Revenue Lift", value: "25–40%", sub: "Upsells, off-season, retainers" },
    { label: "Booking Conversion", value: "2×", sub: "Faster response, better experience" },
  ],
  investment: "Investment: $500–$1,500/mo",
  ctaLabel: "Get Your Photography Blueprint",
};

const PhotographyBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default PhotographyBlueprint;
