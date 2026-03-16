import IndustryBlueprintTemplate, { type IndustryBlueprintData } from "@/components/IndustryBlueprintTemplate";
import {
  Dog,
  Calendar,
  TrendingUp,
  DollarSign,
  Package,
  Target,
  RefreshCw,
  Zap,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const data: IndustryBlueprintData = {
  badgeIcon: Dog,
  badgeLabel: "Industry Blueprint: Veterinary Clinics",
  badgeColor: "bg-primary/10",
  title: "The Veterinary Clinic: An Agentic AI Transformation",
  description:
    "A small vet practice — 1–2 DVMs, a vet tech, a receptionist, and a practice manager — generating $800K–$2.5M in revenue but struggling with no-shows, pharmacy compliance, scattered records, and burnout from after-hours emergencies.",
  teamLabel: "The Clinic Team",
  teamRoles: [
    { role: "Veterinarian (DVM)", focus: "Exams, surgery, diagnostics, treatment plans" },
    { role: "Vet Tech / Nurse", focus: "Patient prep, labs, anesthesia, client education" },
    { role: "Receptionist", focus: "Scheduling, check-in, phones, payment collection" },
    { role: "Practice Manager", focus: "Billing, inventory, HR, compliance, P&L" },
    { role: "Kennel / Grooming", focus: "Boarding, bathing, post-op monitoring" },
  ],
  coreProblem: (
    <>
      <span className="font-semibold text-destructive">The veterinary reality:</span> DVMs spend 1.5–2 hours/day on medical records instead of seeing patients. No-shows average 15–20%, each costing $150–$300 in lost production. DEA controlled substance logging is manual and audit-risky. Consolidation pressure from corporate groups means small practices must operate efficiently or get acquired. The clinic is leaving{" "}
      <span className="font-semibold text-foreground">$8K–$15K/month on the table</span> in empty slots, missed wellness recalls, and pricing inefficiency.
    </>
  ),
  painAreas: [
    {
      icon: Calendar,
      title: "Appointment Scheduling & No-Show Prevention",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      before: {
        headline: "Before: Empty Exam Rooms, Full Voicemail",
        problems: [
          "No-shows average 15–20% — each empty 30-min slot costs $150–$300 in lost production",
          "Receptionist spends 5+ hrs/week confirming appointments by phone — often reaching voicemail",
          "Emergency walk-ins disrupt the schedule, pushing routine appointments 45+ min behind",
          "No buffer scheduling — one complex case cascades delays through the entire afternoon",
        ],
      },
      after: {
        headline: "After: Veterinary Scheduling Agent",
        solutions: [
          { action: "Automated reminder sequences", detail: "Agent sends SMS/email reminders at 48hr, 24hr, and 2hr marks — no-shows drop to under 5%" },
          { action: "Online booking with smart rules", detail: "Pet owners self-schedule within provider availability rules — routine exams, vaccines, and sick visits have different slot durations" },
          { action: "Emergency slot management", detail: "Agent maintains 2–3 emergency slots daily and redirects walk-ins to appropriate openings without disrupting scheduled clients" },
          { action: "Waitlist auto-fill", detail: "When cancellations occur, agent contacts waitlisted clients and fills within 30 minutes" },
        ],
        savings: "5 hrs/week recovered · $2.5K/mo revenue recaptured · 75% fewer no-shows",
      },
    },
    {
      icon: TrendingUp,
      title: "Patient Records & Clinical Documentation",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      before: {
        headline: "Before: Documentation Eats the Day",
        problems: [
          "DVM spends 1.5–2 hours/day writing medical records after the last patient — burnout contributor #1",
          "Lab results from reference labs arrive via fax/email and must be manually entered into practice software",
          "Vaccination and preventive care history is scattered across handwritten cards and digital records",
          "No easy way to share records when clients move or see specialists — rekeying everything",
        ],
      },
      after: {
        headline: "After: Clinical Documentation Agent",
        solutions: [
          { action: "AI-assisted SOAP notes", detail: "Agent drafts medical records from exam findings and treatment plans — DVM reviews and signs in 3 minutes instead of 15" },
          { action: "Automated lab integration", detail: "Agent receives results from IDEXX, Antech, and in-house analyzers — files directly into patient record with trend charts" },
          { action: "Unified patient timeline", detail: "Agent consolidates all encounters, labs, vaccines, and prescriptions into a chronological view — complete history at a glance" },
          { action: "One-click record sharing", detail: "Agent generates shareable summaries for specialists, emergency clinics, or client moves — HIPAA-grade secure" },
        ],
        savings: "8 hrs/week documentation saved · Zero manual lab entry · Complete patient history",
      },
    },
    {
      icon: Package,
      title: "Pharmacy, Inventory & DEA Compliance",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      before: {
        headline: "Before: Manual Logs and Expired Meds",
        problems: [
          "DEA controlled substance log is maintained in a paper ledger — one error risks audit failure",
          "Expired medications discovered during use — waste and patient safety concern",
          "Pharmacy inventory tracked mentally — stockouts on common meds happen 2–3 times/month",
          "No visibility into which medications are most profitable vs loss leaders",
        ],
      },
      after: {
        headline: "After: Veterinary Pharmacy Agent",
        solutions: [
          { action: "Digital DEA logging", detail: "Agent automatically logs every controlled substance dispensed, received, and wasted — audit-ready at all times" },
          { action: "Expiration tracking & rotation", detail: "Agent monitors expiration dates, enforces FIFO, and alerts 90 days before expiry — zero waste" },
          { action: "Predictive reordering", detail: "Agent forecasts needs based on appointment schedule and historical usage — auto-generates purchase orders" },
          { action: "Pharmacy profitability analysis", detail: "Agent calculates margin per medication vs online pharmacies — optimizes pricing and identifies in-house dispensing opportunities" },
        ],
        savings: "DEA audit-ready · Zero expired meds · $400/mo saved on rush orders",
      },
    },
    {
      icon: DollarSign,
      title: "Billing, Payment & Financial Reporting",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      before: {
        headline: "Before: Missed Charges and Late Payments",
        problems: [
          "15–20% of charges are missed at checkout — treatments provided but never invoiced",
          "Pet insurance claims are filed manually — or not at all because staff doesn't have time",
          "Monthly financial reporting takes 3+ days and is always a month behind",
          "No per-visit or per-procedure profitability tracking — can't tell which services make money",
        ],
      },
      after: {
        headline: "After: Veterinary Financial Agent",
        solutions: [
          { action: "Treatment-to-invoice automation", detail: "Agent generates charges from treatment plan and medical record — capture rate reaches 99%+" },
          { action: "Pet insurance claim filing", detail: "Agent compiles records and submits claims to major pet insurers — reduces reimbursement time by 50%" },
          { action: "Real-time P&L dashboards", detail: "Agent updates financial performance daily — revenue by provider, by service, by day of week" },
          { action: "Service profitability analysis", detail: "Agent calculates true margin on every service including labor, supplies, and overhead" },
        ],
        savings: "99% charge capture · 50% faster insurance reimbursement · Real-time financials",
      },
    },
    {
      icon: Target,
      title: "Wellness Programs & Client Retention",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
      before: {
        headline: "Before: Patients Disappear After Puppy Shots",
        problems: [
          "40% of patients don't return for annual wellness exams — the largest single revenue leak",
          "Vaccine and preventive care reminders are postcards mailed quarterly — response rate under 10%",
          "No wellness plan offerings — clients pay per visit and delay care due to cost concerns",
          "Senior pet screenings, dental prophylaxis, and parasite prevention are recommended but not tracked",
        ],
      },
      after: {
        headline: "After: Patient Retention Agent",
        solutions: [
          { action: "Automated wellness reminders", detail: "Agent sends personalized SMS/email reminders based on each pet's specific preventive care schedule — response rate jumps to 35%" },
          { action: "Wellness plan management", detail: "Agent offers and manages monthly wellness plans — bundled vaccines, exams, and dental at a monthly fee — improves compliance and cash flow" },
          { action: "Lapsed patient campaigns", detail: "Agent identifies patients overdue by 60+ days and runs targeted reactivation outreach with relevant care reminders" },
          { action: "Lifetime value tracking", detail: "Agent scores clients by LTV, compliance, and referral activity — helps focus retention efforts on highest-value relationships" },
        ],
        savings: "35% recall response rate · 25% higher compliance · Predictable monthly revenue",
      },
    },
  ],
  timelineTitle: "8-Week Veterinary Clinic Rollout",
  implementationPhases: [
    {
      week: "Week 1–2",
      phase: "Clinic Assessment",
      icon: RefreshCw,
      tasks: [
        "Map workflow from appointment through treatment, billing, and follow-up",
        "Connect practice management software, lab systems, and pharmacy",
        "Audit DEA compliance processes and inventory management",
        "Identify top revenue leaks (usually no-shows, missed charges, lapsed recalls)",
      ],
    },
    {
      week: "Week 3–4",
      phase: "Deploy Core Agents",
      icon: Zap,
      tasks: [
        "Launch Scheduling Agent with online booking and reminders",
        "Activate Clinical Documentation Agent for SOAP notes",
        "Deploy treatment-to-invoice automation at checkout",
        "Train reception and vet tech on daily agent workflows",
      ],
    },
    {
      week: "Week 5–6",
      phase: "Pharmacy & Finance",
      icon: BarChart3,
      tasks: [
        "Deploy Pharmacy Agent with DEA logging and expiration tracking",
        "Launch pet insurance claim automation",
        "Activate real-time financial dashboards",
        "Begin automated wellness recall campaigns",
      ],
    },
    {
      week: "Week 7–8",
      phase: "Retain & Grow",
      icon: Lightbulb,
      tasks: [
        "Launch wellness plan offerings with monthly billing",
        "Deploy lapsed patient reactivation campaigns",
        "Review service profitability and adjust pricing",
        "Transition to ongoing optimization with monthly reviews",
      ],
    },
  ],
  roiTitle: "Projected ROI for a Small Veterinary Clinic",
  roiStats: [
    { label: "DVM Time Recovered", value: "8+ hrs/week", sub: "Documentation, records, admin" },
    { label: "Revenue Recaptured", value: "$4K–$7K/mo", sub: "No-shows, missed charges, recalls" },
    { label: "DEA Compliance", value: "Audit-Ready", sub: "Automated controlled substance logging" },
    { label: "Client Retention", value: "+35%", sub: "Wellness plans and automated recalls" },
  ],
  investment: "Investment: $2,000–$4,000/mo",
  ctaLabel: "Get Your Veterinary Blueprint",
  bgClass: "bg-surface-sunken",
};

const VeterinaryBlueprint = () => <IndustryBlueprintTemplate data={data} />;
export default VeterinaryBlueprint;
