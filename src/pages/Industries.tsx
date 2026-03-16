import { useState, useRef, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Scale,
  Home,
  Calculator,
  Dog,
  UtensilsCrossed,
  Wrench,
  Umbrella,
  Megaphone,
  Compass,
  GraduationCap,
  Laptop,
  Palette,
  UserCheck,
  HardHat,
  Users,
  ArrowRight,
  Zap,
  type LucideIcon,
  Building2,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Category definitions ────────────────────────────── */

type Category = "all" | "service" | "professional" | "trades" | "consulting";

const categories: { id: Category; label: string; description: string }[] = [
  { id: "all", label: "All Industries", description: "Browse all 16 industry blueprints" },
  { id: "service", label: "Service & Retail", description: "Customer-facing service businesses" },
  { id: "professional", label: "Professional Services", description: "Licensed and regulated practices" },
  { id: "trades", label: "Trades & Field Services", description: "On-site and construction businesses" },
  { id: "consulting", label: "Consulting & Agencies", description: "Knowledge-work and creative firms" },
];

/* ── Industry card data ──────────────────────────────── */

interface IndustryCard {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  category: Category;
  stats: { label: string; value: string }[];
  color: string;
  bgColor: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

const industries: IndustryCard[] = [
  {
    id: "small-office",
    icon: Building2,
    title: "The 5-Person Office",
    shortTitle: "Small Office",
    description: "A universal blueprint for any small service business — 5 employees, $500K–$1.5M revenue — showing how autonomous AI agents eliminate operational friction.",
    category: "service",
    stats: [{ label: "Time Recovered", value: "20+ hrs/wk" }, { label: "Margin Lift", value: "15–25%" }],
    color: "text-accent",
    bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/SmallOfficeBlueprint")),
  },
  {
    id: "roofing",
    icon: HardHat,
    title: "Roofing & Construction",
    shortTitle: "Roofing",
    description: "Weather-aware scheduling, storm lead response, material waste elimination, and real-time job costing for contractors.",
    category: "trades",
    stats: [{ label: "Cash Flow Lift", value: "$40K+" }, { label: "Crew Hours Saved", value: "15+/wk" }],
    color: "text-warning",
    bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/RoofingBlueprint")),
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Dental",
    shortTitle: "Healthcare",
    description: "HIPAA compliance automation, no-show prevention, insurance claim scrubbing, and patient wellness recall systems.",
    category: "professional",
    stats: [{ label: "Revenue Recaptured", value: "$5–8K/mo" }, { label: "Compliance Risk", value: "Near Zero" }],
    color: "text-primary",
    bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/HealthcareBlueprint")),
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal Practices",
    shortTitle: "Legal",
    description: "Deadline management, passive time capture, trust accounting automation, and privilege-protected document management.",
    category: "professional",
    stats: [{ label: "Billable Hours", value: "+30%" }, { label: "Collections", value: "60→25 days" }],
    color: "text-accent",
    bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/LegalBlueprint")),
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate & Property Mgmt",
    shortTitle: "Real Estate",
    description: "Sub-60-second lead response, transaction management, wire fraud prevention, and commission tracking.",
    category: "professional",
    stats: [{ label: "Lead Conversion", value: "3× lift" }, { label: "Wire Fraud", value: "Eliminated" }],
    color: "text-success",
    bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/RealEstateBlueprint")),
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting & Tax",
    shortTitle: "Accounting",
    description: "Client document collection, tax season capacity optimization, IRS compliance, and advisory service growth.",
    category: "professional",
    stats: [{ label: "Season Capacity", value: "+30%" }, { label: "Fee Lift", value: "15–25%" }],
    color: "text-warning",
    bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/AccountingBlueprint")),
  },
  {
    id: "veterinary",
    icon: Dog,
    title: "Veterinary Clinics",
    shortTitle: "Veterinary",
    description: "Clinical documentation, DEA-compliant pharmacy management, wellness programs, and patient retention automation.",
    category: "professional",
    stats: [{ label: "DVM Time Saved", value: "8+ hrs/wk" }, { label: "Client Retention", value: "+35%" }],
    color: "text-primary",
    bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/VeterinaryBlueprint")),
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: "Restaurants & Food Service",
    shortTitle: "Restaurants",
    description: "Demand-based scheduling, food waste reduction, menu engineering, and POS analytics for single-location restaurants.",
    category: "service",
    stats: [{ label: "Waste Reduction", value: "60%" }, { label: "Revenue Lift", value: "10–15%" }],
    color: "text-accent",
    bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/RestaurantBlueprint")),
  },
  {
    id: "auto-repair",
    icon: Wrench,
    title: "Auto Repair & Dealerships",
    shortTitle: "Auto Repair",
    description: "Bay utilization optimization, FTC Safeguards compliance, digital inspections, and declined service recovery.",
    category: "trades",
    stats: [{ label: "Bay Utilization", value: "65→85%" }, { label: "FTC Compliance", value: "30 days" }],
    color: "text-success",
    bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/AutoRepairBlueprint")),
  },
  {
    id: "insurance",
    icon: Umbrella,
    title: "Insurance Agencies",
    shortTitle: "Insurance",
    description: "Certificate automation, multi-carrier quoting, commission reconciliation, and renewal pipeline management.",
    category: "professional",
    stats: [{ label: "Cert Time", value: "−75%" }, { label: "Retention", value: "85→92%" }],
    color: "text-warning",
    bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/InsuranceBlueprint")),
  },
  {
    id: "marketing-agency",
    icon: Megaphone,
    title: "Marketing Agency",
    shortTitle: "Marketing",
    description: "Automated reporting, scope creep control, client health scoring, and pipeline consistency for agencies.",
    category: "consulting",
    stats: [{ label: "Reporting Time", value: "−80%" }, { label: "Client Retention", value: "+50%" }],
    color: "text-accent",
    bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/MarketingAgencyBlueprint")),
  },
  {
    id: "business-coaching",
    icon: Compass,
    title: "Business Coaching",
    shortTitle: "Coaching",
    description: "Scalable program delivery, progress tracking, revenue diversification, and authority building for coaches.",
    category: "consulting",
    stats: [{ label: "Program Completion", value: "50→85%" }, { label: "Revenue Scale", value: "2–3×" }],
    color: "text-primary",
    bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/BusinessCoachingBlueprint")),
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Educational Services",
    shortTitle: "Education",
    description: "Student-tutor matching, parent communication, seasonal revenue optimization, and curriculum management.",
    category: "consulting",
    stats: [{ label: "No-Show Recovery", value: "80%" }, { label: "Re-Enrollment", value: "70%+" }],
    color: "text-success",
    bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/EducationBlueprint")),
  },
  {
    id: "it-consulting",
    icon: Laptop,
    title: "IT & Technology Consulting",
    shortTitle: "IT Consulting",
    description: "Ticket triage automation, MSP contract optimization, documentation management, and vCIO strategic services.",
    category: "consulting",
    stats: [{ label: "Auto-Resolved", value: "30%" }, { label: "Revenue/Endpoint", value: "+40–60%" }],
    color: "text-accent",
    bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/ITConsultingBlueprint")),
  },
  {
    id: "creative-agency",
    icon: Palette,
    title: "Creative & Design Agency",
    shortTitle: "Creative",
    description: "Revision management, resource planning, project profitability tracking, and portfolio automation.",
    category: "consulting",
    stats: [{ label: "Revision Overruns", value: "−50%" }, { label: "CD Creative Time", value: "2×" }],
    color: "text-warning",
    bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/CreativeAgencyBlueprint")),
  },
  {
    id: "hr-staffing",
    icon: UserCheck,
    title: "HR & Staffing Consultancy",
    shortTitle: "HR & Staffing",
    description: "Candidate pipeline automation, interview coordination, compliance tracking, and fall-off prevention.",
    category: "consulting",
    stats: [{ label: "Time-to-Fill", value: "−40%" }, { label: "Fall-Off Prevention", value: "80%" }],
    color: "text-primary",
    bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/HRStaffingBlueprint")),
  },
];

/* ── Animation helpers ───────────────────────────────── */

/* ── Animation helpers ───────────────────────────────── */

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

/* ── Page component ──────────────────────────────────── */

const Industries = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "all"
    ? industries
    : industries.filter((i) => i.category === activeCategory);

  const handleExpand = (id: string) => {
    setExpandedIndustry(expandedIndustry === id ? null : id);
    // Scroll to blueprint after a small delay for animation
    if (expandedIndustry !== id) {
      setTimeout(() => {
        blueprintRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const expandedData = industries.find((i) => i.id === expandedIndustry);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-14">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div {...anim()} className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                16 Industry Blueprints
              </span>
            </motion.div>
            <motion.h1
              {...anim(0.05)}
              className="text-2xl md:text-[2rem] font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance"
            >
              Find your industry. See the transformation.
            </motion.h1>
            <motion.p {...anim(0.1)} className="text-lg text-muted-foreground max-w-xl mb-8">
              Each blueprint maps exact before-and-after workflows, 8-week implementation plans,
              and projected ROI for your specific industry — built for teams of 3 to 15.
            </motion.p>
            <motion.div {...anim(0.15)} className="flex items-center gap-3">
              <a
                href="mailto:patrick@rowofducks.ai"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                <Zap className="w-3.5 h-3.5" strokeWidth={1.5} />
                Get a Custom Blueprint
              </a>
              <Link
                to="/small-business"
                className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Small Business Overview <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-14 z-30 bg-background/95 backdrop-blur-sm border-b border-foreground/5">
        <div className="container">
          <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === "all"
                ? industries.length
                : industries.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedIndustry(null);
                  }}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {cat.label}
                  <span className={`tabular-nums text-[10px] rounded-full px-1.5 py-0.5 ${
                    activeCategory === cat.id
                      ? "bg-background/20 text-background"
                      : "bg-foreground/5 text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-12">
        <div className="container">
          {activeCategory !== "all" && (
            <motion.p {...anim()} className="text-sm text-muted-foreground mb-6">
              {categories.find((c) => c.id === activeCategory)?.description}
            </motion.p>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((industry, i) => (
                <motion.div
                  key={industry.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <button
                    onClick={() => handleExpand(industry.id)}
                    className={`w-full text-left duck-card bg-card rounded-lg p-5 transition-all hover:shadow-[var(--shadow-card-hover)] group ${
                      expandedIndustry === industry.id
                        ? "ring-2 ring-primary shadow-[var(--shadow-card-hover)]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`rounded-sm p-2 ${industry.bgColor} ${industry.color}`}>
                        <industry.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          expandedIndustry === industry.id ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {industry.description}
                    </p>
                    <div className="flex gap-3">
                      {industry.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="tabular-nums text-sm font-semibold text-foreground">{stat.value}</p>
                          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Expanded Blueprint */}
      <AnimatePresence>
        {expandedIndustry && expandedData && (
          <motion.div
            ref={blueprintRef}
            key={expandedIndustry}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            {/* Close bar */}
            <div className="sticky top-[calc(3.5rem+49px)] z-20 bg-primary/5 border-y border-primary/10">
              <div className="container flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <expandedData.icon className={`w-4 h-4 ${expandedData.color}`} strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-foreground">{expandedData.title}</span>
                  <span className="text-xs text-muted-foreground">— Full Blueprint</span>
                </div>
                <button
                  onClick={() => setExpandedIndustry(null)}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-sm hover:bg-secondary"
                >
                  Close Blueprint ✕
                </button>
              </div>
            </div>

            {/* Blueprint content */}
            <Suspense
              fallback={
                <div className="py-20 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Loading blueprint...
                  </div>
                </div>
              }
            >
              <expandedData.component />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-background mb-2">
                Don't see your industry?
              </h2>
              <p className="text-sm text-background/60 max-w-md">
                We build custom blueprints for any small business vertical. Get a free 30-minute
                assessment to map your specific operational challenges.
              </p>
            </div>
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
            >
              Request Custom Blueprint <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
