import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Home,
  Calendar,
  TrendingUp,
  FileText,
  DollarSign,
  Target,
  RefreshCw,
  Zap,
  BarChart3,
  Lightbulb,
  Star,
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ProspectRorigi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(10,45%,48%)] to-[hsl(10,50%,35%)] text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
          <div className="container relative z-10 max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
                <Home className="w-4 h-4" />
                Prepared for Rorigi Real Estate Group
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Agentic AI Transformation
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8">
                A personalized blueprint for Anthony Rorigi and the team at Serenity Realty — turning 14 years of market expertise into an AI-powered competitive moat.
              </motion.p>
              <motion.div variants={fadeIn}>
                <a
                  href="mailto:patrick@rowofducks.ai"
                  className="inline-flex items-center gap-2 rounded-md bg-white text-[hsl(10,45%,48%)] px-6 py-3 text-base font-semibold hover:bg-white/90 transition-colors"
                >
                  Schedule Discovery Call <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* We Did Our Homework */}
        <section className="py-16 md:py-20 bg-surface-sunken">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2 text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                We Did Our Homework, Anthony
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10 text-lg">
                Here's what we know about your operation — and why we think there's a massive opportunity.
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Users, label: "Team Size", value: "6 Agents", detail: "Serenity Realty, NW Ohio" },
                  { icon: Star, label: "Track Record", value: "194+ Closings", detail: "5.0★ on Redfin (16 reviews)" },
                  { icon: MapPin, label: "Markets", value: "10+ Areas", detail: "Toledo, Perrysburg, Maumee, Sylvania, Oregon" },
                  { icon: Clock, label: "Experience", value: "14 Years", detail: "Also owns NW Tree Service & Landscaping" },
                ].map((stat) => (
                  <motion.div key={stat.label} variants={fadeIn}>
                    <Card className="h-full border-border/50">
                      <CardContent className="p-5">
                        <stat.icon className="w-5 h-5 text-[hsl(10,45%,48%)] mb-3" />
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Real Cost */}
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2 text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                The Real Cost of Manual Operations
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10 text-lg max-w-3xl">
                With 6 agents across 10+ NW Ohio neighborhoods, 23 active listings, and leads flowing from Zillow, Redfin, and iHouseweb — your team is leaving{" "}
                <span className="font-semibold text-destructive">$10K–$18K/month on the table</span>.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: AlertTriangle, value: "$4K–$7K/mo", label: "Lost Leads", detail: "5+ hr average response time means 78% of buyers go to the first responder" },
                  { icon: Clock, value: "$3K–$5K/mo", label: "TC Overhead", detail: "15–20 active files × 100+ tasks each — all tracked manually" },
                  { icon: DollarSign, value: "$3K–$6K/mo", label: "Ops Chaos", detail: "Commission errors, missed deadlines, untracked marketing ROI" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeIn}>
                    <Card className="h-full border-destructive/20 bg-destructive/5">
                      <CardContent className="p-6">
                        <item.icon className="w-6 h-6 text-destructive mb-3" />
                        <p className="text-3xl font-bold text-foreground">{item.value}</p>
                        <p className="font-semibold text-foreground mt-1">{item.label}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before / After Pain Areas */}
        {[
          {
            icon: Calendar,
            title: "Showing Scheduling & Client Communication",
            color: "hsl(var(--primary))",
            bgClass: "bg-primary/5",
            borderClass: "border-primary/20",
            before: [
              "Showing requests come via text, email, Zillow, and phone — juggling 3–4 apps across 10+ NW Ohio neighborhoods",
              "Double-bookings happen weekly — damaging trust with Toledo-area listing agents",
              "Buyers expect instant availability — 2-hour delays lose deals to local competitors",
              "Post-showing follow-up is inconsistent across your 6 agents",
            ],
            after: [
              { action: "Unified showing hub", detail: "Aggregates requests from all platforms, confirms within 15 minutes" },
              { action: "Route-optimized tours", detail: "Clusters Perrysburg, Maumee, Sylvania properties into efficient routes" },
              { action: "Automated feedback", detail: "Post-showing forms compile buyer preferences, suggest next properties" },
              { action: "Weekly market updates", detail: "Sends matching listings to every buyer in your pipeline automatically" },
            ],
            savings: "5 hrs/week recovered · 40% more showings · Zero double-bookings",
          },
          {
            icon: TrendingUp,
            title: "Lead Response & Nurture Pipeline",
            color: "hsl(var(--accent))",
            bgClass: "bg-accent/5",
            borderClass: "border-accent/20",
            before: [
              "Zillow, Redfin, and iHouseweb leads average 5+ hr response time",
              "Agents manually qualify — spending equal time on tire-kickers and ready buyers",
              "Long-term nurture is nonexistent — leads not ready today are forgotten",
              "No attribution — unclear if Zillow spend actually drives closings",
            ],
            after: [
              { action: "Sub-60-second response", detail: "Personalized text with matching NW Ohio properties before competitors see the lead" },
              { action: "AI lead qualification", detail: "Pre-qualifying questions + scoring — agents focus on ready buyers only" },
              { action: "12-month nurture sequences", detail: "Market-update drips auto re-engage when behavior signals readiness" },
              { action: "ROI by source tracking", detail: "Tracks every lead from Zillow/Redfin/iHouseweb to closing" },
            ],
            savings: "100% lead response · 3× conversion rate · Clear marketing ROI",
          },
          {
            icon: FileText,
            title: "Transaction Management & Compliance",
            color: "hsl(var(--success))",
            bgClass: "bg-success/5",
            borderClass: "border-success/20",
            before: [
              "100–150 tasks per file tracked in spreadsheets — items slip through constantly",
              "Document collection from buyers, sellers, lenders, and title takes weeks",
              "Compliance deadlines calculated manually across 23 active listings",
              "Wire fraud verification is inconsistent — one wrong wire costs everything",
            ],
            after: [
              { action: "Automated task tracking", detail: "Full checklist from contract terms — nothing falls through the cracks" },
              { action: "Document collection automation", detail: "Requests docs from all parties with reminders — weeks become days" },
              { action: "Deadline monitoring", detail: "Contingency dates auto-calculated, alerts escalate as deadlines approach" },
              { action: "Wire fraud prevention", detail: "Multi-step encrypted verification protects every transaction" },
            ],
            savings: "10 hrs/week per TC · Zero missed deadlines · Wire fraud protection",
          },
          {
            icon: DollarSign,
            title: "Commission Tracking & Financial Management",
            color: "hsl(var(--warning))",
            bgClass: "bg-warning/5",
            borderClass: "border-warning/20",
            before: [
              "Commission splits, referral fees, and broker fees tracked in spreadsheets",
              "Agents don't know true net until weeks after closing",
              "Marketing expenses aren't tracked against production",
              "Tax planning is reactive — quarterly estimates are guesses",
            ],
            after: [
              { action: "Automated commission calc", detail: "Net commission at contract — splits, referrals, franchise fees, marketing costs" },
              { action: "Real-time production dashboard", detail: "Pending, closed, and projected income visible to all 6 agents and Anthony" },
              { action: "Marketing ROI tracking", detail: "Ties Zillow/Redfin spend to actual closings" },
              { action: "Tax-ready reporting", detail: "Continuous expense categorization, quarterly estimates auto-generated" },
            ],
            savings: "Zero commission errors · Real-time financials · Tax-ready books",
          },
        ].map((area, i) => (
          <section key={area.title} className={i % 2 === 0 ? "py-16 md:py-20 bg-surface-sunken" : "py-16 md:py-20"}>
            <div className="container max-w-5xl">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 rounded-lg ${area.bgClass}`}>
                    <area.icon className="w-5 h-5" style={{ color: area.color }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                    {area.title}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before */}
                  <motion.div variants={fadeIn}>
                    <Card className="h-full border-destructive/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-destructive flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Before: Current State
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {area.before.map((problem, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-destructive mt-0.5 shrink-0">✗</span>
                              {problem}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* After */}
                  <motion.div variants={fadeIn}>
                    <Card className={`h-full ${area.borderClass}`}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2" style={{ color: area.color }}>
                          <CheckCircle className="w-4 h-4" /> After: With AI Agents
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {area.after.map((sol, j) => (
                            <li key={j} className="text-sm">
                              <span className="font-semibold text-foreground">{sol.action}:</span>{" "}
                              <span className="text-muted-foreground">{sol.detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-border/50">
                          <p className="text-sm font-medium" style={{ color: area.color }}>
                            {area.savings}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* 8-Week Rollout */}
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-10 text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                8-Week Rollout for Rorigi Real Estate Group
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    week: "Week 1–2",
                    phase: "Connect & Map",
                    icon: RefreshCw,
                    tasks: [
                      "Audit iHouseweb, Zillow, Redfin integrations",
                      "Map lead flow across all 6 agents",
                      "Review transaction workflow from contract to close",
                      "Identify biggest revenue leaks",
                    ],
                  },
                  {
                    week: "Week 3–4",
                    phase: "Deploy Core Agents",
                    icon: Zap,
                    tasks: [
                      "Launch Lead Response Agent (sub-60s replies)",
                      "Activate Showing Coordination across platforms",
                      "Deploy Transaction Intelligence with auto task tracking",
                      "Train Anthony's team on daily workflows",
                    ],
                  },
                  {
                    week: "Week 5–6",
                    phase: "Expand & Optimize",
                    icon: BarChart3,
                    tasks: [
                      "Deploy Commission Tracking & Financial Agent",
                      "Launch wire fraud prevention protocols",
                      "Activate 12-month lead nurture campaigns",
                      "Begin weekly production dashboards",
                    ],
                  },
                  {
                    week: "Week 7–8",
                    phase: "Scale & Strategize",
                    icon: Lightbulb,
                    tasks: [
                      "Review market positioning and profitability data",
                      "Deploy Brokerage Strategy Agent for growth",
                      "Document SOPs for all agent-assisted workflows",
                      "Transition to ongoing optimization w/ monthly reviews",
                    ],
                  },
                ].map((phase) => (
                  <motion.div key={phase.week} variants={fadeIn}>
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-md bg-primary/10">
                            <phase.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{phase.week}</span>
                        </div>
                        <h3 className="font-bold text-foreground mb-3">{phase.phase}</h3>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, j) => (
                            <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                              <CheckCircle className="w-3 h-3 text-success mt-0.5 shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI & Investment */}
        <section className="py-16 md:py-20 bg-surface-sunken">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-10 text-foreground" style={{ fontFamily: "Georgia, serif" }}>
                Projected ROI
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Lead Conversion", value: "3× Lift", sub: "Sub-60-second response, AI qualification" },
                  { label: "TC Time Saved", value: "10+ hrs/week", sub: "Automated tasks, document collection" },
                  { label: "Commission Accuracy", value: "100%", sub: "Zero calculation errors or surprises" },
                  { label: "Wire Fraud Risk", value: "Eliminated", sub: "Multi-step verification on every transaction" },
                ].map((stat) => (
                  <motion.div key={stat.label} variants={fadeIn}>
                    <Card className="h-full text-center">
                      <CardContent className="p-6">
                        <p className="text-3xl md:text-4xl font-bold text-[hsl(10,45%,48%)]">{stat.value}</p>
                        <p className="font-semibold text-foreground mt-2">{stat.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn}>
                <Card className="border-[hsl(10,45%,48%)]/30 bg-gradient-to-r from-[hsl(10,45%,48%)]/5 to-transparent">
                  <CardContent className="p-8 text-center">
                    <p className="text-2xl font-bold text-foreground mb-2">Investment: $2,500 – $4,500/mo</p>
                    <p className="text-muted-foreground mb-6">
                      Recovering $10K–$18K/month in lost revenue against a $2.5K–$4.5K investment — that's a 3–4× return from day one.
                    </p>
                    <a
                      href="mailto:patrick@rowofducks.ai"
                      className="inline-flex items-center gap-2 rounded-md bg-[hsl(10,45%,48%)] text-white px-8 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                    >
                      Let's Build Your Competitive Moat, Anthony <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProspectRorigi;
