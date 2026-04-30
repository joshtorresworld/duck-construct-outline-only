import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Scale,
  Phone,
  Calendar,
  FileText,
  Shield,
  Lock,
  Clock,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Award,
  MessageSquare,
  Brain,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const ProspectMaryDavis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(220,55%,22%)] to-[hsl(220,60%,12%)] text-white py-20 md:py-28">
          <div className="container relative z-10 max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6"
              >
                <Scale className="w-4 h-4" />
                Prepared for Law Office of Mary Davis, P.C.
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Hold Every Client's Hand —<br />Even When You're In Court.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/75 max-w-3xl mb-8">
                A privilege-safe AI operations layer for your DuPage family law practice — so no
                lead, no court date, and no scared client ever falls through the cracks again.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                <a
                  href="mailto:patrick@rowofducks.ai?subject=Mary%20Davis%20%E2%80%94%20Discovery%20Call"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule Discovery Call <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.illinoisdivorcelawyer.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                >
                  illinoisdivorcelawyer.net
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* We Did Our Homework */}
        <section className="py-16 md:py-20 bg-surface-sunken">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold mb-2 text-foreground"
                style={{ fontFamily: "Georgia, serif" }}
              >
                We Did Our Homework, Mary
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10 text-lg">
                Here's what we know about your practice — and where AI quietly compounds the
                advantage you've already built over 25 years.
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Award, label: "Years Practicing", value: "25+", detail: "Family law, exclusively" },
                  { icon: MapPin, label: "Coverage", value: "5 Counties", detail: "DuPage, Cook, Kane, Kendall, Will" },
                  { icon: Scale, label: "Focus Areas", value: "6 Practice Lines", detail: "Divorce, custody, support, high-asset" },
                  { icon: Heart, label: "Brand Promise", value: '"Hand-holding"', detail: "Until the case is finished" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                        <p className="text-2xl font-semibold tabular-nums text-foreground mb-1">{item.value}</p>
                        <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-8 rounded-lg border-l-2 border-primary/40 bg-card p-5">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "I aim to treat each client with respect and courtesy during this process and
                  believe in holding my client's hand until the case is finished."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Mary Davis, Attorney at Law</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Hidden Tax */}
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning mb-3">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Hidden Tax On A Solo Family Law Practice
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold mb-3 text-foreground"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Your Promise Is Personal. Your Day Is Finite.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10 text-lg max-w-3xl">
                Every hour in court is an hour the phone rings unanswered. Every emotional client
                call is an hour not billed. Every lead that hits voicemail at 7pm Friday is a
                retainer your competitor cashes Monday morning.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Phone,
                    title: "Missed-Call Leakage",
                    body: "Family law leads call in crisis. Industry data shows 40–60% of first calls to solo firms go to voicemail — and most never call back. That's pure retainer revenue walking to the next firm on Google.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Emotional Bandwidth Drain",
                    body: "Divorce clients need reassurance, not just legal answers. Every 'just checking in' call is real, billable time you can't recover — and it crowds out strategic case work.",
                  },
                  {
                    icon: FileText,
                    title: "Intake & Document Friction",
                    body: "Financial affidavits, parenting plans, discovery requests — the same forms, the same questions, every case. Manual intake costs you 3–5 hours per new matter.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card className="h-full border-l-2 border-warning/30">
                      <CardContent className="p-5">
                        <item.icon className="w-5 h-5 text-warning mb-3" strokeWidth={1.5} />
                        <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE VALUE PROP */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeIn} className="text-xs font-medium uppercase tracking-widest text-background/50 mb-3">
                The Most Compelling Value Prop
              </motion.p>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Become a 24/7 Firm Without Hiring a Single Person —<br />
                <span className="text-primary">Without Ever Compromising Privilege.</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-background/70 max-w-3xl mb-10">
                Row of Ducks deploys a privilege-safe Agentic AI operations layer that answers every
                lead, qualifies every caller, schedules every consult, drafts every routine
                document, and reassures every existing client — all inside a closed, attorney-client
                privileged environment Mary controls.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: Phone,
                    title: "24/7 Family Law Intake Concierge",
                    body: "AI voice + SMS agent answers within 2 rings, screens for jurisdiction (DuPage/Cook/Kane/Kendall/Will), conflict-checks, captures crisis context, and books the qualified consult on Mary's calendar — at 11pm on a Sunday if needed.",
                  },
                  {
                    icon: Heart,
                    title: '"Hand-Holding" at Scale',
                    body: "Existing clients get an AI-powered status portal: case milestones, court date reminders, document checklists, and a triage layer that escalates only the questions that truly need Mary. Your brand promise — kept on every case, every day.",
                  },
                  {
                    icon: FileText,
                    title: "Document & Intake Automation",
                    body: "Auto-generate first drafts of financial disclosures, parenting plans, discovery requests, and engagement letters from intake conversations. Mary edits, not types. 3–5 hours saved per new matter.",
                  },
                  {
                    icon: Shield,
                    title: "Privilege-Safe by Architecture",
                    body: "Closed-tenant deployment. No client data ever trains a public model. Attorney-client privilege preserved end-to-end. Built on the same Legal HUB architecture trusted by enterprise law firms.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <div className="rounded-lg border border-background/10 bg-background/5 p-5 h-full backdrop-blur-sm">
                      <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                      <h3 className="text-base font-semibold text-background mb-2">{item.title}</h3>
                      <p className="text-sm text-background/70 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="rounded-lg border border-primary/30 bg-primary/10 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">The privilege guarantee</p>
                    <p className="text-base md:text-lg text-background leading-relaxed">
                      Every conversation, document, and case detail stays inside Mary's tenant.
                      No public LLM ever sees client content. ABA Model Rule 1.6 confidentiality
                      and Illinois RPC 1.6 are preserved by design — not by policy.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What changes in 90 days */}
        <section className="py-16 md:py-20 bg-surface-sunken">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold mb-2 text-foreground"
                style={{ fontFamily: "Georgia, serif" }}
              >
                What Changes In The First 90 Days
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10 text-lg max-w-2xl">
                Concrete, measurable outcomes — backed by our 90-day results-or-work-for-free
                guarantee.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, value: "+30–50%", label: "Qualified consults booked", detail: "From recovered after-hours and missed-call leads." },
                  { icon: Clock, value: "10–15 hrs", label: "Reclaimed per week", detail: "Off intake, status calls, and routine drafting." },
                  { icon: DollarSign, value: "3–5x ROI", label: "Within first quarter", detail: "Conservative model based on average DuPage divorce retainer." },
                  { icon: Users, value: "100%", label: "Client touchpoint coverage", detail: "Every client gets proactive updates — automatically." },
                  { icon: Brain, value: "Zero", label: "New hires required", detail: "Your existing team operates with leverage, not headcount." },
                  { icon: Shield, value: "Closed", label: "Privileged environment", detail: "Single-tenant, no data leakage, audit-ready." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                        <p className="text-2xl font-semibold tabular-nums text-foreground mb-1">{item.value}</p>
                        <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The 8-week plan */}
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold mb-10 text-foreground"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The 8-Week Solo Practice Blueprint
              </motion.h2>

              <div className="space-y-3">
                {[
                  { week: "Weeks 1–2", title: "Discovery & Privilege Setup", body: "Map your intake flow, court calendar, document templates, and conflict-check process. Provision your closed tenant." },
                  { week: "Weeks 3–4", title: "Intake Concierge Live", body: "AI voice + SMS agent goes live. Every call answered. Every lead routed. Calendar synced." },
                  { week: "Weeks 5–6", title: "Client Hand-Holding Portal", body: "Existing clients onboarded to the status portal. Court reminders, document checklists, proactive updates." },
                  { week: "Weeks 7–8", title: "Document Automation & Tune", body: "First-draft generation for financial affidavits, parenting plans, discovery. Performance review and optimization." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="shrink-0 w-24 text-xs font-medium uppercase tracking-wider text-primary pt-1">
                          {item.week}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.body}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-1" strokeWidth={1.5} />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container max-w-4xl text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                90 Days. Real Results. Or We Work For Free.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
                Let's spend 30 minutes mapping where leads, hours, and revenue are leaking out of
                your practice today — and exactly what we'd deploy to stop it.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:patrick@rowofducks.ai?subject=Mary%20Davis%20%E2%80%94%20Discovery%20Call"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-4 h-4" /> Book Discovery Call
                </a>
                <a
                  href="tel:+1"
                  className="inline-flex items-center gap-2 rounded-md border border-background/20 px-6 py-3 text-base font-medium text-background hover:bg-background/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Or Call Patrick Directly
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProspectMaryDavis;
