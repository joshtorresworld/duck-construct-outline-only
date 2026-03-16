import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-background mb-2">
              Ready to get your ducks in a row?
            </h2>
            <p className="text-sm text-background/60 max-w-md">
              Transform scattered information into a powerful, synchronized formation.
              Let's build your execution pipeline.
            </p>
          </div>
          <a
            href="mailto:patrick@rowofducks.ai"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
          >
            Start a conversation <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
