import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-14">
      <div className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              The AI window is closing — are you ready?
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.2, 0, 0, 1] }}
            className="text-2xl md:text-[2rem] font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance"
          >
            It's not who has the biggest budget. It's who gets AI right first.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Most "AI adoption" isn't adoption — it's procurement. Licenses purchased. All-hands delivered. Actual workflows changed: minimal.
            The companies that stop calling it an AI strategy and start treating it like the
            <span className="text-foreground font-medium"> operational transformation </span>
            it actually is will be nearly impossible to compete with in three years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="flex items-center gap-3"
          >
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              <Play className="w-3.5 h-3.5" strokeWidth={1.5} fill="currentColor" />
              See the Pipeline
            </a>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Talk to us <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
