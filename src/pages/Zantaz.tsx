import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Shield,
  FileSearch,
  Server,
  Scale,
  Zap,
  CheckCircle2,
  Building2,
  Briefcase,
  Heart,
  Fuel,
  Landmark,
  GraduationCap,
  DollarSign,
  Users,
  TrendingDown,
  Award,
  Layers,
  RefreshCw,
  Brain,
  FileOutput,
} from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

const industries = [
  { icon: Scale, label: "Legal & Compliance" },
  { icon: Briefcase, label: "Financial Services" },
  { icon: Heart, label: "Healthcare & Life Sciences" },
  { icon: Fuel, label: "Energy & Infrastructure" },
  { icon: Landmark, label: "Government & Public Sector" },
  { icon: GraduationCap, label: "Education & Research" },
];

const smartStackSolutions = [
  {
    icon: Brain,
    title: "AI Smart Data Refinery",
    subtitle: "Curing Dark Data",
    description:
      "Transforms unactionable Dark Data into metadata-rich, Actionable Smart Data across SharePoint, Windows, and Linux file systems — making it AI-Ready for Copilot and enterprise analytics.",
    color: "bg-primary/10 text-primary",
    accent: "border-primary/20",
  },
  {
    icon: FileOutput,
    title: "AI Data Feeder",
    subtitle: "AI-Ready Data Delivery",
    description:
      "Delivers AI-Ready Data through Smart Mirroring into OneLake and Fabric. Only enriched, classified, ROT-scrubbed data reaches Copilot — eliminating the 'Garbage In, Garbage Out' problem.",
    color: "bg-accent/10 text-accent",
    accent: "border-accent/20",
  },
  {
    icon: FileSearch,
    title: "AI Smart Legal",
    subtitle: "Advanced Legal Readiness",
    description:
      "AI-powered legal strategy layer for enterprises managing thousands of simultaneous matters — front-loading work between enterprise and outside counsel to accelerate outcomes and reduce cost.",
    color: "bg-success/10 text-success",
    accent: "border-success/20",
  },
  {
    icon: Server,
    title: "AI-Ready Archiving",
    subtitle: "Journal Archiving at Scale",
    description:
      "Industry-leading journal archiving for Exchange and Microsoft 365 that serves as a data intelligence, security, and retention-policy governance layer — safe, scalable, searchable, and AI-ready.",
    color: "bg-warning/10 text-warning",
    accent: "border-warning/20",
  },
];

const provenValueStats = [
  {
    icon: DollarSign,
    value: "$1M",
    label: "Annual Unlimited License",
    detail: "All-inclusive — no user fees, usage penalties, or activation licenses.",
  },
  {
    icon: Users,
    value: "9 Mo",
    label: "Embedded Systems Integrator",
    detail: "Fully engaged resource to integrate the Smart Stack for maximum performance.",
  },
  {
    icon: TrendingDown,
    value: "60%",
    label: "Storage & Compute Savings",
    detail: "ROT elimination before data enters expensive analytics platforms.",
  },
  {
    icon: Award,
    value: "80+",
    label: "Global Enterprise Clients",
    detail: "Including Barclays, Kirkland & Ellis, and SiriusXM.",
  },
];

const whyPartner = [
  "Closes the AI-Ready Data gap Microsoft doesn't solve natively",
  "Accelerates Copilot adoption from stalled pilots to production",
  "SEC 17a-4, FINRA, and GDPR compliance for Microsoft 365 journaling",
  "Purpose-built Microsoft Companion — extends, never replaces",
  "Proven at enterprise scale across regulated industries",
  "All-inclusive pricing removes procurement friction and budget uncertainty",
];

const Zantaz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-14">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div {...anim()} className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-medium text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Partner Showcase
              </span>
              <span className="inline-flex items-center rounded-sm bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                Microsoft Ecosystem
              </span>
            </motion.div>
            <motion.h1
              {...anim(0.05)}
              className="text-2xl md:text-[2rem] font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance"
            >
              Zantaz Data Resources — AI-Ready Data for the Microsoft Ecosystem
            </motion.h1>
            <motion.p {...anim(0.1)} className="text-lg text-muted-foreground max-w-xl mb-3">
              Built on a legacy of compliance archiving, cloud platforms, and large-scale enterprise
              data management. In the era of Copilot and enterprise AI, Zantaz delivers one thing:
              AI-Ready Data at speed and scale.
            </motion.p>
            <motion.p {...anim(0.12)} className="text-sm text-muted-foreground max-w-xl mb-8">
              While Microsoft provides world-class AI models and governance frameworks, most
              enterprise data remains unstructured, fragmented, and unprepared. Zantaz closes that
              gap — the gap that stalls AI adoption.
            </motion.p>
            <motion.div {...anim(0.15)} className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:wwhite@zantaz.ai"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                <Zap className="w-3.5 h-3.5" strokeWidth={1.5} />
                Contact Zantaz
              </a>
              <a
                href="https://www.zantaz.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Visit Website <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Industries Served
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Regulated Industries. Mission-Critical Data.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                {...anim(i * 0.04)}
                className="duck-card bg-card rounded-lg p-4 text-center"
              >
                <ind.icon className="w-5 h-5 text-muted-foreground mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-xs font-medium text-foreground leading-snug">{ind.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl">
            <motion.div {...anim()}>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                The Core Challenge
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                AI Success Depends on Data Readiness
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                As organizations rush to deploy Copilot and AI agents, one reality has become
                unavoidable — AI success depends entirely on the quality, governance, and readiness
                of the data behind it. The models aren't the bottleneck. The data is.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Zantaz addresses critical structural gaps across two consequential data domains in
                Microsoft environments:
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-3">
              <motion.div {...anim(0.08)} className="duck-card bg-card rounded-lg p-5 border-l-2 border-accent/20">
                <Database className="w-4 h-4 text-accent mb-2" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground mb-1">
                  Compliance-Grade Communications
                </p>
                <p className="text-xs text-muted-foreground">
                  Journal archiving for Exchange and Microsoft 365 — the data regulators demand.
                </p>
              </motion.div>
              <motion.div {...anim(0.12)} className="duck-card bg-card rounded-lg p-5 border-l-2 border-primary/20">
                <Layers className="w-4 h-4 text-primary mb-2" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground mb-1">
                  Unstructured Operational Data
                </p>
                <p className="text-xs text-muted-foreground">
                  Windows File Shares and SharePoint — the data Copilot needs most, yet struggles
                  to use safely.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Stack 3.0 */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Core Offerings
            </p>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Microsoft Companion Smart Stack 3.0
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg">
              Four core solutions designed to close critical structural gaps in Microsoft's
              enterprise ecosystem. Zantaz extends Microsoft — it never replaces it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {smartStackSolutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                {...anim(i * 0.08)}
                className={`duck-card bg-card rounded-lg overflow-hidden border-l-2 ${sol.accent}`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`rounded-sm p-2 ${sol.color}`}>
                      <sol.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{sol.title}</h3>
                      <p className="text-xs text-muted-foreground">{sol.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Value */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Proven Value
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Enterprise Scale. Transparent Pricing.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {provenValueStats.map((s, i) => (
              <motion.div
                key={s.label}
                {...anim(i * 0.06)}
                className="duck-card bg-card rounded-lg p-5"
              >
                <s.icon className="w-4 h-4 text-muted-foreground mb-3" strokeWidth={1.5} />
                <p className="tabular-nums text-2xl font-semibold text-foreground mb-1">
                  {s.value}
                </p>
                <p className="text-sm font-medium text-foreground mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Partner */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                Why We Partner With Zantaz
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                The Missing Intelligence Layer for Microsoft AI
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                In a world facing runaway unstructured data growth, escalating regulatory
                enforcement, and rising AI compute costs, Zantaz delivers the data intelligence
                layer required for insight, control, compliance, and confident AI adoption.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Purpose-built Microsoft Companion</span>
              </div>
            </div>
            <div className="space-y-2.5">
              {whyPartner.map((reason, i) => (
                <motion.div
                  key={i}
                  {...anim(i * 0.05)}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-foreground">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Companion Positioning */}
      <section className="py-16 bg-surface-sunken">
        <div className="container">
          <motion.div {...anim()} className="duck-card bg-card rounded-lg p-6 md:p-8 max-w-3xl">
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-sm p-2 bg-accent/10">
                <RefreshCw className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Microsoft Companion — Not a Replacement
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Extends Microsoft 365, Azure, Purview, OneLake, and Copilot
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Zantaz does not replace Microsoft services. It prepares the AI-Ready data those
              services depend on. By refining data upstream — before it reaches Copilot, AI agents,
              analytics platforms, or governance layers — Zantaz enables Microsoft AI to operate with
              accuracy, safety, and scale in production environments.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Microsoft 365", "Azure", "Purview", "OneLake", "Copilot", "Fabric"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-sm bg-surface-sunken px-2 py-0.5 text-xs font-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-background mb-2">
                Make Microsoft AI work in the real world.
              </h2>
              <p className="text-sm text-background/60 max-w-md">
                Connect with Zantaz to learn how AI-Ready Data transforms Copilot from a pilot
                into a production asset.
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-background/40">
                <span>Will White, President</span>
                <span>941.564.7996</span>
              </div>
            </div>
            <a
              href="mailto:wwhite@zantaz.ai"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
            >
              Contact Zantaz <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zantaz;
