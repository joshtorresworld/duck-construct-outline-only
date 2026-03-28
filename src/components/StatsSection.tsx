import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Clients" },
  { value: "50+", label: "Tech Experts" },
  { value: "$20M+", label: "In Cost Savings" },
  { value: "100%", label: "Client Satisfaction" },
];

const StatsSection = () => {
  return (
    <section id="results" className="py-16">
      <div className="container">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Track Record
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Results That Speak
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            The gap between AI-ready companies and everyone else is widening every quarter. Our clients aren't just keeping up — they're building operational moats that will be nearly impossible to replicate in 36 months.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="duck-card bg-card rounded-lg p-5"
            >
              <p className="tabular-nums text-2xl font-semibold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
