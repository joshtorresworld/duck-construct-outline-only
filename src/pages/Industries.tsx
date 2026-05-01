import { useState, useRef, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionTiers from "@/components/SubscriptionTiers";
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
  Building,
  Briefcase,
  ChevronDown,
  Dumbbell,
  PawPrint,
  SprayCan,
  Camera,
  PartyPopper,
  TreePine,
  Scissors,
  Car,
  Factory,
  Truck,
  Eye,
  HeartPulse,
  Package,
  Store,
  Landmark,
  Stethoscope,
  Ruler,
  Wheat,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Category definitions ────────────────────────────── */

type Category = "all" | "low-entry" | "mid-market" | "middle-market" | "service" | "professional" | "trades" | "consulting";

const categories: { id: Category; label: string; description: string }[] = [
  { id: "all", label: "All Industries", description: "Browse all 37 industry blueprints" },
  { id: "low-entry", label: "Optimize · $500–$2K", description: "Solo operators and small teams — 1–10 employees, immediate ROI from eliminating friction" },
  { id: "mid-market", label: "Augment · $2K–$8K", description: "Growing businesses — 10–200 employees, AI agents that multiply capacity and intelligence" },
  { id: "middle-market", label: "Innovate · $5K–$15K", description: "Market leaders — 100–1000 employees, enterprise-grade AI transformation" },
  { id: "service", label: "Service & Retail", description: "Customer-facing service businesses" },
  { id: "professional", label: "Professional Services", description: "Licensed and regulated practices" },
  { id: "trades", label: "Trades & Field", description: "On-site and construction businesses" },
  { id: "consulting", label: "Consulting & Agencies", description: "Knowledge-work and creative firms" },
];

/* ── Industry card data ──────────────────────────────── */

type Tier = "low-entry" | "mid-market" | "middle-market";

interface IndustryCard {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  category: "service" | "professional" | "trades" | "consulting";
  tier: Tier;
  stats: { label: string; value: string }[];
  color: string;
  bgColor: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

const industries: IndustryCard[] = [
  // ── LOW-ENTRY TIER ($500–$2K) ──────────────────────
  {
    id: "small-office", icon: Building2, title: "The 5-Person Office", shortTitle: "Small Office",
    description: "A universal blueprint for any small service business — 5 employees, $500K–$1.5M revenue — showing how autonomous AI agents eliminate operational friction.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Time Recovered", value: "20+ hrs/wk" }, { label: "Margin Lift", value: "15–25%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/SmallOfficeBlueprint")),
  },
  {
    id: "restaurant", icon: UtensilsCrossed, title: "Restaurants & Food Service", shortTitle: "Restaurants",
    description: "Demand-based scheduling, food waste reduction, menu engineering, and POS analytics for single-location restaurants.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Waste Reduction", value: "60%" }, { label: "Revenue Lift", value: "10–15%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/RestaurantBlueprint")),
  },
  {
    id: "fitness-gym", icon: Dumbbell, title: "Personal Fitness & Gym", shortTitle: "Fitness",
    description: "No-show prevention, client progress tracking, membership churn reduction, and community engagement for trainers and boutique gyms.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Churn Reduction", value: "60%" }, { label: "Revenue Lift", value: "$2–5K/mo" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/FitnessGymBlueprint")),
  },
  {
    id: "pet-grooming", icon: PawPrint, title: "Pet Grooming & Boarding", shortTitle: "Pet Care",
    description: "Breed-aware scheduling, pet record digitization, seasonal demand management, and automated recall for pet care businesses.",
    category: "service", tier: "low-entry",
    stats: [{ label: "No-Show Recovery", value: "80%" }, { label: "Revenue Lift", value: "20–30%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/PetGroomingBlueprint")),
  },
  {
    id: "cleaning", icon: SprayCan, title: "Cleaning Services", shortTitle: "Cleaning",
    description: "Route optimization, digital quality checklists, subscription billing, and growth automation for residential and commercial cleaning.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Drive Time", value: "−25%" }, { label: "Client Retention", value: "2×" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/CleaningServicesBlueprint")),
  },
  {
    id: "photography", icon: Camera, title: "Photography & Videography", shortTitle: "Photography",
    description: "Automated booking flows, production pipeline tracking, gallery delivery, and off-season revenue strategies for creative studios.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Admin Freed", value: "15+ hrs/wk" }, { label: "Revenue Lift", value: "25–40%" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/PhotographyBlueprint")),
  },
  {
    id: "event-planning", icon: PartyPopper, title: "Event Planning", shortTitle: "Events",
    description: "Vendor orchestration, cascade change management, client portals, and real-time profitability tracking for event firms.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Capacity", value: "2×" }, { label: "Margin Lift", value: "+15–20%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/EventPlanningBlueprint")),
  },
  {
    id: "landscaping", icon: TreePine, title: "Landscaping & Lawn Care", shortTitle: "Landscaping",
    description: "Weather-integrated scheduling, satellite-assisted estimating, annual contract conversion, and neighborhood density growth.",
    category: "trades", tier: "low-entry",
    stats: [{ label: "Drive Time", value: "−25%" }, { label: "Close Rate", value: "+30%" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/LandscapingBlueprint")),
  },
  {
    id: "salon", icon: Scissors, title: "Salon & Barbershop", shortTitle: "Salon",
    description: "Chair utilization optimization, salon-owned client profiles, retail revenue growth, and loyalty program management.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Chair Utilization", value: "90%+" }, { label: "Retail Revenue", value: "2×" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/SalonBlueprint")),
  },
  {
    id: "mobile-detailing", icon: Car, title: "Mobile Detailing", shortTitle: "Detailing",
    description: "Geographic clustering, vehicle-based pricing, membership subscriptions, and before/after content automation.",
    category: "service", tier: "low-entry",
    stats: [{ label: "Drive Time", value: "−30–40%" }, { label: "Client LTV", value: "3×" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/MobileDetailingBlueprint")),
  },

  // ── MID-MARKET TIER ($2K–$8K) ──────────────────────
  {
    id: "roofing", icon: HardHat, title: "Roofing & Construction", shortTitle: "Roofing",
    description: "Weather-aware scheduling, storm lead response, material waste elimination, and real-time job costing for contractors.",
    category: "trades", tier: "mid-market",
    stats: [{ label: "Cash Flow Lift", value: "$40K+" }, { label: "Crew Hours Saved", value: "15+/wk" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/RoofingBlueprint")),
  },
  {
    id: "healthcare", icon: Heart, title: "Healthcare & Dental", shortTitle: "Healthcare",
    description: "HIPAA compliance automation, no-show prevention, insurance claim scrubbing, and patient wellness recall systems.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Revenue Recaptured", value: "$5–8K/mo" }, { label: "Compliance Risk", value: "Near Zero" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/HealthcareBlueprint")),
  },
  {
    id: "legal", icon: Scale, title: "Legal Practices", shortTitle: "Legal",
    description: "Deadline management, passive time capture, trust accounting automation, and privilege-protected document management.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Billable Hours", value: "+30%" }, { label: "Collections", value: "60→25 days" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/LegalBlueprint")),
  },
  {
    id: "real-estate", icon: Home, title: "Real Estate & Property Mgmt", shortTitle: "Real Estate",
    description: "Sub-60-second lead response, transaction management, wire fraud prevention, and commission tracking.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Lead Conversion", value: "3× lift" }, { label: "Wire Fraud", value: "Eliminated" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/RealEstateBlueprint")),
  },
  {
    id: "accounting", icon: Calculator, title: "Accounting & Tax", shortTitle: "Accounting",
    description: "Client document collection, tax season capacity optimization, IRS compliance, and advisory service growth.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Season Capacity", value: "+30%" }, { label: "Fee Lift", value: "15–25%" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/AccountingBlueprint")),
  },
  {
    id: "veterinary", icon: Dog, title: "Veterinary Clinics", shortTitle: "Veterinary",
    description: "Clinical documentation, DEA-compliant pharmacy management, wellness programs, and patient retention automation.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "DVM Time Saved", value: "8+ hrs/wk" }, { label: "Client Retention", value: "+35%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/VeterinaryBlueprint")),
  },
  {
    id: "auto-repair", icon: Wrench, title: "Auto Repair & Dealerships", shortTitle: "Auto Repair",
    description: "Bay utilization optimization, FTC Safeguards compliance, digital inspections, and declined service recovery.",
    category: "trades", tier: "mid-market",
    stats: [{ label: "Bay Utilization", value: "65→85%" }, { label: "FTC Compliance", value: "30 days" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/AutoRepairBlueprint")),
  },
  {
    id: "insurance", icon: Umbrella, title: "Insurance Agencies", shortTitle: "Insurance",
    description: "Certificate automation, multi-carrier quoting, commission reconciliation, and renewal pipeline management.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Cert Time", value: "−75%" }, { label: "Retention", value: "85→92%" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/InsuranceBlueprint")),
  },
  {
    id: "marketing-agency", icon: Megaphone, title: "Marketing Agency", shortTitle: "Marketing",
    description: "Automated reporting, scope creep control, client health scoring, and pipeline consistency for agencies.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "Reporting Time", value: "−80%" }, { label: "Client Retention", value: "+50%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/MarketingAgencyBlueprint")),
  },
  {
    id: "business-coaching", icon: Compass, title: "Business Coaching", shortTitle: "Coaching",
    description: "Scalable program delivery, progress tracking, revenue diversification, and authority building for coaches.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "Program Completion", value: "50→85%" }, { label: "Revenue Scale", value: "2–3×" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/BusinessCoachingBlueprint")),
  },
  {
    id: "education", icon: GraduationCap, title: "Educational Services", shortTitle: "Education",
    description: "Student-tutor matching, parent communication, seasonal revenue optimization, and curriculum management.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "No-Show Recovery", value: "80%" }, { label: "Re-Enrollment", value: "70%+" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/EducationBlueprint")),
  },
  {
    id: "it-consulting", icon: Laptop, title: "IT & Technology Consulting", shortTitle: "IT Consulting",
    description: "Ticket triage automation, MSP contract optimization, documentation management, and vCIO strategic services.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "Auto-Resolved", value: "30%" }, { label: "Revenue/Endpoint", value: "+40–60%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/ITConsultingBlueprint")),
  },
  {
    id: "creative-agency", icon: Palette, title: "Creative & Design Agency", shortTitle: "Creative",
    description: "Revision management, resource planning, project profitability tracking, and portfolio automation.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "Revision Overruns", value: "−50%" }, { label: "CD Creative Time", value: "2×" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/CreativeAgencyBlueprint")),
  },
  {
    id: "hr-staffing", icon: UserCheck, title: "HR & Staffing Consultancy", shortTitle: "HR & Staffing",
    description: "Candidate pipeline automation, interview coordination, compliance tracking, and fall-off prevention.",
    category: "consulting", tier: "mid-market",
    stats: [{ label: "Time-to-Fill", value: "−40%" }, { label: "Fall-Off Prevention", value: "80%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/HRStaffingBlueprint")),
  },
  {
    id: "manufacturing", icon: Factory, title: "Manufacturing & Job Shops", shortTitle: "Manufacturing",
    description: "Dynamic shop floor scheduling, rapid quoting, in-process quality control, and supply chain automation for CNC and job shops.",
    category: "trades", tier: "mid-market",
    stats: [{ label: "Utilization", value: "55→75%" }, { label: "Win Rate", value: "+30%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/ManufacturingBlueprint")),
  },
  {
    id: "logistics", icon: Truck, title: "Logistics & Trucking", shortTitle: "Trucking",
    description: "AI load matching, DOT compliance automation, empty mile reduction, and driver retention optimization.",
    category: "trades", tier: "mid-market",
    stats: [{ label: "Empty Miles", value: "15→8%" }, { label: "Turnover", value: "−40%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/LogisticsTruckingBlueprint")),
  },
  {
    id: "property-management", icon: Building, title: "Property Management", shortTitle: "Prop Mgmt",
    description: "Tenant communication AI triage, maintenance auto-dispatch, turn acceleration, and automated collections for 50–500 unit portfolios.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "PM Capacity", value: "2×" }, { label: "Late Payments", value: "8→2%" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/PropertyManagementBlueprint")),
  },
  {
    id: "dental-optometry", icon: Eye, title: "Dental & Optometry Groups", shortTitle: "Dental/Optometry",
    description: "Cross-location scheduling, automated insurance verification, clean claims, and patient recall for multi-location practices.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "No-Show Rate", value: "3%" }, { label: "Clean Claims", value: "95%+" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/DentalOptometryBlueprint")),
  },
  {
    id: "home-healthcare", icon: HeartPulse, title: "Home Healthcare & Care", shortTitle: "Home Care",
    description: "Smart caregiver matching, EVV compliance, family communication portals, and revenue cycle optimization for home care agencies.",
    category: "professional", tier: "mid-market",
    stats: [{ label: "Turnover", value: "−40%" }, { label: "Compliance", value: "100%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/HomeHealthcareBlueprint")),
  },
  {
    id: "wholesale", icon: Package, title: "Wholesale Distribution", shortTitle: "Distribution",
    description: "AI demand forecasting, intelligent pick optimization, carrier rate shopping, and customer profitability tracking.",
    category: "service", tier: "mid-market",
    stats: [{ label: "Inventory Accuracy", value: "95%+" }, { label: "DSO", value: "45→30 days" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/WholesaleDistributionBlueprint")),
  },
  {
    id: "construction", icon: HardHat, title: "General Contracting", shortTitle: "Construction",
    description: "Bid intelligence, subcontractor coordination, real-time change order management, and lien waiver automation.",
    category: "trades", tier: "mid-market",
    stats: [{ label: "Bid Prep", value: "−50%" }, { label: "Change Orders", value: "+80% recovery" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/ConstructionBlueprint")),
  },
  {
    id: "franchise", icon: Store, title: "Franchise Operations", shortTitle: "Franchise",
    description: "Multi-unit consistency, digital SOP compliance, performance benchmarking, and scalable launch playbooks.",
    category: "service", tier: "mid-market",
    stats: [{ label: "Performance Gap", value: "−50%" }, { label: "Launch Speed", value: "2×" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/FranchiseOpsBlueprint")),
  },

  // ── MIDDLE-MARKET TIER ($5K–$15K) ──────────────────
  {
    id: "regional-banking", icon: Landmark, title: "Regional Banking & Credit Unions", shortTitle: "Banking",
    description: "Intelligent loan processing, BSA/AML optimization, member engagement, and digital account opening for community financial institutions.",
    category: "professional", tier: "middle-market",
    stats: [{ label: "Loan Processing", value: "30→7 days" }, { label: "Cross-Sell", value: "2.5→4.0" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/RegionalBankingBlueprint")),
  },
  {
    id: "urgent-care", icon: Stethoscope, title: "Multi-Site Urgent Care", shortTitle: "Urgent Care",
    description: "Real-time wait time broadcasting, AI-assisted coding, network operations, and patient retention strategies for clinic groups.",
    category: "professional", tier: "middle-market",
    stats: [{ label: "Rev/Visit", value: "+$15–40" }, { label: "LWBS Rate", value: "<2%" }],
    color: "text-primary", bgColor: "bg-primary/10",
    component: lazy(() => import("@/components/blueprints/UrgentCareBlueprint")),
  },
  {
    id: "commercial-re", icon: Building2, title: "Commercial Real Estate", shortTitle: "CRE",
    description: "Deal pipeline management, automated comp analysis, CAM reconciliation, and lease expiration prospecting for CRE brokerages.",
    category: "professional", tier: "middle-market",
    stats: [{ label: "Selling Time", value: "+40%" }, { label: "CAM Accuracy", value: "99%+" }],
    color: "text-success", bgColor: "bg-success/10",
    component: lazy(() => import("@/components/blueprints/CommercialRealEstateBlueprint")),
  },
  {
    id: "engineering", icon: Ruler, title: "Engineering & Architecture", shortTitle: "Engineering",
    description: "Resource allocation, proposal automation, real-time project profitability, and scope change documentation for AE firms.",
    category: "consulting", tier: "middle-market",
    stats: [{ label: "Utilization", value: "65→85%" }, { label: "Proposal Time", value: "−50%" }],
    color: "text-accent", bgColor: "bg-accent/10",
    component: lazy(() => import("@/components/blueprints/EngineeringBlueprint")),
  },
  {
    id: "food-manufacturing", icon: Wheat, title: "Food & Beverage Manufacturing", shortTitle: "Food Mfg",
    description: "FDA compliance, batch traceability, shelf life management, and production scheduling for food manufacturers.",
    category: "trades", tier: "middle-market",
    stats: [{ label: "Spoilage", value: "→ <1%" }, { label: "Mock Recall", value: "4 hours" }],
    color: "text-warning", bgColor: "bg-warning/10",
    component: lazy(() => import("@/components/blueprints/FoodManufacturingBlueprint")),
  },
];

/* ── Animation helpers ───────────────────────────────── */

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay, ease: [0.2, 0, 0, 1] as const },
});

/* ── Tier badge helper ───────────────────────────────── */

const tierBadge: Record<Tier, { label: string; color: string }> = {
  "low-entry": { label: "Optimize", color: "bg-primary/15 text-primary" },
  "mid-market": { label: "Augment", color: "bg-accent/15 text-accent" },
  "middle-market": { label: "Innovate", color: "bg-success/15 text-success" },
};

/* ── Page component ──────────────────────────────────── */

const Industries = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "all"
    ? industries
    : activeCategory === "low-entry" || activeCategory === "mid-market" || activeCategory === "middle-market"
    ? industries.filter((i) => i.tier === activeCategory)
    : industries.filter((i) => i.category === activeCategory);

  const handleExpand = (id: string) => {
    setExpandedIndustry(expandedIndustry === id ? null : id);
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
                37 Industry Blueprints · 3 Tiers
              </span>
            </motion.div>
            <motion.h1
              {...anim(0.05)}
              className="text-2xl md:text-[2rem] font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance"
            >
              Find your industry. Pick your tier. See the transformation.
            </motion.h1>
            <motion.p {...anim(0.1)} className="text-lg text-muted-foreground max-w-xl mb-8">
              From solo operators to middle-market enterprises — each blueprint maps exact before-and-after
              workflows, 8-week implementation plans, and guaranteed ROI. Optimize, Augment, or Innovate.
            </motion.p>
            <motion.div {...anim(0.15)} className="flex flex-wrap items-center gap-3">
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

      {/* Subscription Tiers */}
      <SubscriptionTiers />

      {/* Category Filter */}
      <section className="sticky top-14 z-30 bg-background/95 backdrop-blur-sm border-b border-foreground/5">
        <div className="container">
          <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === "all"
                ? industries.length
                : cat.id === "low-entry" || cat.id === "mid-market" || cat.id === "middle-market"
                ? industries.filter((i) => i.tier === cat.id).length
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
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-semibold rounded-sm px-1.5 py-0.5 ${tierBadge[industry.tier].color}`}>
                          {tierBadge[industry.tier].label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-muted-foreground transition-transform ${
                            expandedIndustry === industry.id ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
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
                  <span className={`text-[10px] font-semibold rounded-sm px-1.5 py-0.5 ${tierBadge[expandedData.tier].color}`}>
                    {tierBadge[expandedData.tier].label}
                  </span>
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
                We build custom blueprints for any vertical. Get a free 30-minute
                assessment to map your specific operational challenges and identify your ideal tier.
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
