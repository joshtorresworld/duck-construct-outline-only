import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  BarChart3,
  RefreshCw,
  Lightbulb,
  Bell,
  type LucideIcon,
} from "lucide-react";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

export interface TeamRole {
  role: string;
  focus: string;
}

export interface PainArea {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  before: {
    headline: string;
    problems: string[];
  };
  after: {
    headline: string;
    solutions: { action: string; detail: string }[];
    savings: string;
  };
}

export interface ImplementationPhase {
  week: string;
  phase: string;
  icon: LucideIcon;
  tasks: string[];
}

export interface ROIStat {
  label: string;
  value: string;
  sub: string;
}

export interface IndustryBlueprintData {
  badgeIcon: LucideIcon;
  badgeLabel: string;
  badgeColor: string;
  title: string;
  description: string;
  teamLabel: string;
  teamRoles: TeamRole[];
  coreProblem: React.ReactNode;
  painAreas: PainArea[];
  timelineTitle: string;
  implementationPhases: ImplementationPhase[];
  roiTitle: string;
  roiStats: ROIStat[];
  investment: string;
  ctaLabel: string;
  bgClass?: string;
}

const IndustryBlueprintTemplate = ({ data }: { data: IndustryBlueprintData }) => {
  return (
    <section className={`py-16 ${data.bgClass || ""}`}>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <motion.div {...anim()}>
            <div className={`inline-flex items-center gap-1.5 rounded-sm ${data.badgeColor} px-2.5 py-1 text-xs font-medium text-foreground mb-4`}>
              <data.badgeIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {data.badgeLabel}
            </div>
          </motion.div>
          <motion.h2 {...anim(0.05)} className="text-2xl font-semibold text-foreground mb-2">
            {data.title}
          </motion.h2>
          <motion.p {...anim(0.1)} className="text-sm text-muted-foreground max-w-3xl">
            {data.description}
          </motion.p>
        </div>

        {/* Team Overview */}
        <motion.div {...anim(0.12)} className="duck-card bg-card rounded-lg p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {data.teamLabel}
            </h3>
          </div>
          <div className="grid sm:grid-cols-5 gap-3">
            {data.teamRoles.map((member) => (
              <div key={member.role} className="rounded-sm bg-surface-sunken p-3">
                <p className="text-xs font-semibold text-foreground mb-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-sm bg-destructive/5 border border-destructive/10 p-3">
            <p className="text-xs text-muted-foreground">{data.coreProblem}</p>
          </div>
        </motion.div>

        {/* Pain Areas — Before & After */}
        <div className="space-y-8 mb-12">
          {data.painAreas.map((area, i) => (
            <motion.div key={area.title} {...anim(i * 0.04)} className="duck-card bg-card rounded-lg overflow-hidden">
              <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-foreground/5">
                <div className={`rounded-sm p-2 ${area.bgColor} ${area.color} shrink-0`}>
                  <area.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
              </div>
              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-foreground/5">
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-destructive mb-3">
                    {area.before.headline}
                  </p>
                  <ul className="space-y-2.5">
                    {area.before.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-destructive/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <p className="text-xs text-muted-foreground leading-relaxed">{problem}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-surface-sunken/50">
                  <p className={`text-xs font-medium uppercase tracking-wider ${area.color} mb-3`}>
                    {area.after.headline}
                  </p>
                  <ul className="space-y-3">
                    {area.after.solutions.map((sol) => (
                      <li key={sol.action} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{sol.action}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{sol.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-4 rounded-sm ${area.bgColor} px-3 py-2`}>
                    <p className={`text-xs font-semibold ${area.color}`}>
                      <Zap className="w-3 h-3 inline mr-1" strokeWidth={1.5} />
                      {area.after.savings}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <motion.div {...anim(0.1)} className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">{data.timelineTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.implementationPhases.map((phase, i) => (
              <motion.div key={phase.phase} {...anim(0.12 + i * 0.05)} className="duck-card bg-card rounded-lg p-5 relative">
                <div className="flex items-center gap-2 mb-1">
                  <div className="rounded-sm p-1.5 bg-primary/10 text-primary">
                    <phase.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{phase.week}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-3">{phase.phase}</h4>
                <ul className="space-y-1.5">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-1.5">
                      <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-xs text-muted-foreground">{task}</p>
                    </li>
                  ))}
                </ul>
                {i < data.implementationPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 text-muted-foreground/30">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Summary */}
        <motion.div {...anim(0.15)} className="duck-card bg-card rounded-lg p-6 border-l-2 border-success/30">
          <h3 className="text-base font-semibold text-foreground mb-4">{data.roiTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {data.roiStats.map((stat) => (
              <div key={stat.label} className="rounded-sm bg-surface-sunken p-4 text-center">
                <p className="text-lg font-semibold text-success">{stat.value}</p>
                <p className="text-xs font-medium text-foreground mt-0.5">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-foreground/5">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{data.investment}</span> ·
              No long-term contracts required
            </p>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
              {data.ctaLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryBlueprintTemplate;
