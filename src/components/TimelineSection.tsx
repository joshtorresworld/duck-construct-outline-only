import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Flag } from "lucide-react";

type PhaseStatus = "complete" | "active" | "pending";

interface Milestone {
  label: string;
  week: number;
  status: PhaseStatus;
}

interface Phase {
  id: string;
  number: string;
  title: string;
  pillar: string;
  startWeek: number;
  endWeek: number;
  status: PhaseStatus;
  milestones: Milestone[];
  deliverables: string[];
}

const phases: Phase[] = [
  {
    id: "discovery",
    number: "P1",
    title: "Discovery & Assessment",
    pillar: "Data Management",
    startWeek: 1,
    endWeek: 4,
    status: "complete",
    milestones: [
      { label: "Data audit complete", week: 2, status: "complete" },
      { label: "Gap analysis delivered", week: 4, status: "complete" },
    ],
    deliverables: ["Asset inventory", "Data flow mapping", "Risk register v1"],
  },
  {
    id: "foundation",
    number: "P2",
    title: "Foundation & Governance",
    pillar: "Data Management",
    startWeek: 3,
    endWeek: 8,
    status: "complete",
    milestones: [
      { label: "Governance framework approved", week: 5, status: "complete" },
      { label: "Central repo deployed", week: 8, status: "complete" },
    ],
    deliverables: ["Policy playbook", "Centralized repository", "Automated tagging"],
  },
  {
    id: "security",
    number: "P3",
    title: "Security Hardening",
    pillar: "Information Security",
    startWeek: 6,
    endWeek: 12,
    status: "active",
    milestones: [
      { label: "Threat model finalized", week: 7, status: "complete" },
      { label: "Compliance audit passed", week: 10, status: "active" },
      { label: "Zero-trust deployed", week: 12, status: "pending" },
    ],
    deliverables: ["SOC 2 readiness report", "SIEM integration", "IAM overhaul"],
  },
  {
    id: "continuity",
    number: "P4",
    title: "Continuity & Recovery",
    pillar: "Business Continuity",
    startWeek: 10,
    endWeek: 16,
    status: "pending",
    milestones: [
      { label: "DR plan approved", week: 11, status: "pending" },
      { label: "Failover test passed", week: 14, status: "pending" },
      { label: "Go-live", week: 16, status: "pending" },
    ],
    deliverables: ["BCP documentation", "Geo-redundant backups", "Runbook automation"],
  },
  {
    id: "optimize",
    number: "P5",
    title: "Optimize & Scale",
    pillar: "All Pillars",
    startWeek: 14,
    endWeek: 20,
    status: "pending",
    milestones: [
      { label: "KPI dashboard live", week: 15, status: "pending" },
      { label: "Quarterly review cadence", week: 18, status: "pending" },
      { label: "Full handoff", week: 20, status: "pending" },
    ],
    deliverables: ["Performance baselines", "Optimization playbook", "Team enablement"],
  },
];

const TOTAL_WEEKS = 20;
const PILLAR_COLORS: Record<string, string> = {
  "Data Management": "bg-logic",
  "Information Security": "bg-primary",
  "Business Continuity": "bg-success",
  "All Pillars": "bg-foreground",
};
const PILLAR_BG: Record<string, string> = {
  "Data Management": "bg-logic/10",
  "Information Security": "bg-primary/10",
  "Business Continuity": "bg-success/10",
  "All Pillars": "bg-foreground/10",
};
const PILLAR_TEXT: Record<string, string> = {
  "Data Management": "text-logic",
  "Information Security": "text-foreground",
  "Business Continuity": "text-success",
  "All Pillars": "text-foreground",
};

const statusIcon = (status: PhaseStatus) => {
  switch (status) {
    case "complete":
      return <CheckCircle2 className="w-3 h-3 text-success" strokeWidth={1.5} />;
    case "active":
      return <Clock className="w-3 h-3 text-primary" strokeWidth={1.5} />;
    case "pending":
      return <Circle className="w-3 h-3 text-muted-foreground/40" strokeWidth={1.5} />;
  }
};

const TimelineSection = () => {
  const weekMarkers = Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1);

  return (
    <section id="timeline" className="py-16 bg-surface-sunken">
      <div className="container">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Implementation Roadmap
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Phased Execution Plan
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            A 20-week engagement structured across all three service pillars,
            with overlapping phases to accelerate time-to-value.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {["Data Management", "Information Security", "Business Continuity"].map((pillar) => (
            <div key={pillar} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${PILLAR_COLORS[pillar]}`} />
              <span className="text-xs text-muted-foreground">{pillar}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-success" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground">Done</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-primary" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
            <div className="flex items-center gap-1">
              <Circle className="w-3 h-3 text-muted-foreground/40" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Gantt chart */}
        <div className="duck-card bg-card rounded-lg overflow-hidden">
          {/* Week header */}
          <div className="flex border-b border-foreground/5">
            <div className="w-56 shrink-0 px-4 py-2 border-r border-foreground/5">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Phase
              </span>
            </div>
            <div className="flex-1 overflow-x-auto">
              <div className="flex min-w-[640px]">
                {weekMarkers.map((w) => (
                  <div
                    key={w}
                    className="flex-1 px-1 py-2 text-center border-r border-foreground/5 last:border-r-0"
                  >
                    <span className="tabular-nums text-xs font-mono text-muted-foreground">
                      {w}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rows */}
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
              className="flex border-b border-foreground/5 last:border-b-0 group hover:bg-surface-sunken/50 transition-colors"
            >
              {/* Label */}
              <div className="w-56 shrink-0 px-4 py-3 border-r border-foreground/5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="tabular-nums text-xs font-mono text-muted-foreground">
                    {phase.number}
                  </span>
                  {statusIcon(phase.status)}
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {phase.title}
                </p>
                <span
                  className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-xs mt-1 ${PILLAR_BG[phase.pillar]} ${PILLAR_TEXT[phase.pillar]}`}
                >
                  {phase.pillar}
                </span>
              </div>

              {/* Bar area */}
              <div className="flex-1 overflow-x-auto">
                <div className="relative min-w-[640px] h-full">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex">
                    {weekMarkers.map((w) => (
                      <div
                        key={w}
                        className="flex-1 border-r border-foreground/5 last:border-r-0"
                      />
                    ))}
                  </div>

                  {/* Bar */}
                  <div
                    className="absolute top-3 h-6 rounded-sm flex items-center overflow-hidden"
                    style={{
                      left: `${((phase.startWeek - 1) / TOTAL_WEEKS) * 100}%`,
                      width: `${((phase.endWeek - phase.startWeek + 1) / TOTAL_WEEKS) * 100}%`,
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${PILLAR_COLORS[phase.pillar]} ${
                        phase.status === "pending" ? "opacity-20" : phase.status === "active" ? "opacity-60" : "opacity-40"
                      } rounded-sm`}
                    />
                    <span className="relative z-10 px-2 text-xs font-medium text-foreground truncate">
                      W{phase.startWeek}–{phase.endWeek}
                    </span>
                  </div>

                  {/* Milestones */}
                  {phase.milestones.map((m) => (
                    <div
                      key={m.label}
                      className="absolute top-11 group/ms"
                      style={{
                        left: `${((m.week - 0.5) / TOTAL_WEEKS) * 100}%`,
                      }}
                    >
                      <div className="relative flex flex-col items-center">
                        <Flag
                          className={`w-3 h-3 ${
                            m.status === "complete"
                              ? "text-success"
                              : m.status === "active"
                              ? "text-primary"
                              : "text-muted-foreground/30"
                          }`}
                          strokeWidth={1.5}
                        />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/ms:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded-sm pointer-events-none z-30">
                          {m.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables summary */}
        <div className="grid md:grid-cols-5 gap-3 mt-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="duck-card bg-card rounded-lg p-3"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="tabular-nums text-xs font-mono text-muted-foreground">
                  {phase.number}
                </span>
                <span className="text-xs font-medium text-foreground">{phase.title}</span>
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                Deliverables
              </p>
              <ul className="space-y-1">
                {phase.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
