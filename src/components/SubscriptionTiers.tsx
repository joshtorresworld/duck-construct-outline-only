import { motion } from "framer-motion";
import { Check, Zap, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

interface Tier {
  id: string;
  name: string;
  icon: typeof Zap;
  tagline: string;
  price: string;
  priceNote: string;
  description: string;
  idealFor: string;
  features: string[];
  highlight?: boolean;
  color: string;
  bgColor: string;
  borderColor: string;
}

const tiers: Tier[] = [
  {
    id: "optimize",
    name: "Optimize",
    icon: Zap,
    tagline: "Eliminate the friction",
    price: "$500 – $2,000",
    priceNote: "/month",
    description:
      "Automate the repetitive, error-prone tasks that drain your team — scheduling, follow-ups, billing, and basic reporting. Get time back and stop leaving money on the table.",
    idealFor: "Solo operators, 1–10 employees, $100K–$1M revenue",
    features: [
      "Smart scheduling & no-show prevention",
      "Automated client communication & reminders",
      "Basic billing & payment recovery",
      "Digital checklists & quality tracking",
      "Review collection & reputation building",
      "Monthly performance dashboard",
      "Email & chat support",
      "8-week guided implementation",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    id: "augment",
    name: "Augment",
    icon: TrendingUp,
    tagline: "Multiply your capacity",
    price: "$2,000 – $8,000",
    priceNote: "/month",
    description:
      "Go beyond automation — AI agents that think, learn, and act. Predictive analytics, revenue optimization, compliance management, and cross-functional intelligence that multiplies what your team can do.",
    idealFor: "Growing businesses, 10–100 employees, $1M–$20M revenue",
    features: [
      "Everything in Optimize, plus:",
      "AI-powered demand forecasting & capacity planning",
      "Revenue optimization & churn prediction",
      "Compliance automation (HIPAA, DOT, FDA, OSHA)",
      "Multi-location / multi-crew coordination",
      "Vendor & supply chain management",
      "Advanced analytics & profitability dashboards",
      "Dedicated success manager",
      "Priority support with 4-hour SLA",
    ],
    highlight: true,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    id: "innovate",
    name: "Innovate",
    icon: Lightbulb,
    tagline: "Transform your business model",
    price: "$5,000 – $15,000",
    priceNote: "/month",
    description:
      "Enterprise-grade AI transformation — new revenue models, market intelligence, strategic decision support, and operational innovation that fundamentally changes how your business competes.",
    idealFor: "Market leaders, 100–1000 employees, $10M–$100M+ revenue",
    features: [
      "Everything in Augment, plus:",
      "Custom AI agent development for unique workflows",
      "Market intelligence & competitive monitoring",
      "Strategic decision support & scenario modeling",
      "Multi-entity / franchise / network optimization",
      "Integration with enterprise systems (ERP, CRM, EHR)",
      "Quarterly business reviews with executive team",
      "Custom reporting & board-ready analytics",
      "Dedicated engineering & strategy team",
      "White-glove onboarding & change management",
    ],
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
  },
];

const SubscriptionTiers = () => {
  return (
    <section className="py-20 bg-surface-sunken/30">
      <div className="container">
        <motion.div {...anim()} className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Three Tiers · One Mission
          </span>
        </motion.div>
        <motion.h2
          {...anim(0.05)}
          className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-3 tracking-tight"
        >
          Optimize. Augment. Innovate.
        </motion.h2>
        <motion.p
          {...anim(0.1)}
          className="text-base text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Every tier guarantees measurable ROI. Start where you are, scale as you grow.
          No long-term contracts — results speak for themselves.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              {...anim(0.1 + i * 0.08)}
              className={`relative duck-card bg-card rounded-lg overflow-hidden flex flex-col ${
                tier.highlight
                  ? "ring-2 ring-accent shadow-[0_8px_30px_-10px_hsl(var(--accent)/0.3)]"
                  : ""
              }`}
            >
              {tier.highlight && (
                <div className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest text-center py-1.5">
                  Most Popular
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`rounded-sm p-1.5 ${tier.bgColor} ${tier.color}`}>
                    <tier.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                </div>
                <p className={`text-xs font-medium ${tier.color} mb-3`}>{tier.tagline}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-xs text-muted-foreground">{tier.priceNote}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {tier.description}
                </p>

                {/* Ideal For */}
                <div className={`rounded-sm ${tier.bgColor} px-3 py-2 mb-5`}>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5">
                    Ideal for
                  </p>
                  <p className={`text-xs font-semibold ${tier.color}`}>{tier.idealFor}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 ${tier.color} shrink-0 mt-0.5`} strokeWidth={2} />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:patrick@rowofducks.ai"
                  className={`inline-flex items-center justify-center gap-1.5 rounded-sm px-4 py-2.5 text-xs font-semibold transition-all ${
                    tier.highlight
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  Get Started with {tier.name}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          {...anim(0.3)}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="duck-card bg-card rounded-lg p-6 border-l-2 border-success/30">
            <h3 className="text-base font-semibold text-foreground mb-2">
              🎯 Our Guarantee: Measurable Results or We Make It Right
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every engagement starts with a baseline measurement. If you don't see measurable
              improvement in the metrics that matter — time recovered, revenue lifted, costs reduced —
              within 90 days, we'll work for free until you do. We succeed when you succeed. Period.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;
