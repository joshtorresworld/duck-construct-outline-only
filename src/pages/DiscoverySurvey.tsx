import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle,
  Shield, Building2, Users, DollarSign, Clock, BarChart3, Zap,
  Heart, Scale, Home, Calculator, Dog, UtensilsCrossed, Wrench, Umbrella,
  Megaphone, Compass, GraduationCap, Laptop, Palette, UserCheck, HardHat,
  Dumbbell, PawPrint, SprayCan, Camera, PartyPopper, TreePine, Scissors, Car,
  Factory, Truck, Eye, HeartPulse, Package, Store, Landmark, Stethoscope, Ruler, Wheat,
  type LucideIcon,
} from "lucide-react";

// Universal core questions (all verticals)
const universalQuestions = [
  {
    id: "revenue",
    category: "Business Profile",
    question: "What is your approximate annual revenue?",
    type: "select" as const,
    options: ["Under $300K", "$300K–$1M", "$1M–$5M", "$5M–$15M", "$15M–$50M", "$50M+"],
  },
  {
    id: "employees",
    category: "Business Profile",
    question: "How many employees/team members do you have?",
    type: "select" as const,
    options: ["Solo / 1–3", "4–10", "11–25", "26–50", "51–200", "200+"],
  },
  {
    id: "tech_current",
    category: "Technology",
    question: "What best describes your current technology setup?",
    type: "select" as const,
    options: [
      "Mostly paper/spreadsheets",
      "Basic software (QuickBooks, email, etc.)",
      "Industry-specific software but disconnected",
      "Integrated platform but underutilized",
      "Modern tech stack, looking to add AI",
    ],
  },
  {
    id: "biggest_pain",
    category: "Pain Points",
    question: "What is your single biggest operational frustration?",
    type: "select" as const,
    options: [
      "Scheduling & coordination chaos",
      "Manual data entry & paperwork",
      "Inconsistent revenue / cash flow",
      "Customer acquisition & retention",
      "Staff productivity & accountability",
      "Compliance & regulatory burden",
    ],
  },
  {
    id: "time_waste",
    category: "Pain Points",
    question: "How many hours per week does your team spend on tasks that could be automated?",
    type: "select" as const,
    options: ["Under 5 hours", "5–10 hours", "10–20 hours", "20–40 hours", "40+ hours"],
  },
  {
    id: "revenue_leak",
    category: "Revenue Impact",
    question: "How much revenue do you estimate you lose monthly to inefficiency?",
    type: "select" as const,
    options: ["Not sure", "Under $1,000", "$1K–$5K", "$5K–$15K", "$15K–$50K", "$50K+"],
  },
  {
    id: "growth_goal",
    category: "Goals",
    question: "What is your primary growth goal for the next 12 months?",
    type: "select" as const,
    options: [
      "Increase revenue 20%+",
      "Reduce operational costs",
      "Improve customer satisfaction",
      "Scale without adding headcount",
      "Enter new markets or services",
      "All of the above",
    ],
  },
  {
    id: "decision_timeline",
    category: "Goals",
    question: "When are you looking to implement a solution?",
    type: "select" as const,
    options: ["Immediately", "Within 30 days", "1–3 months", "3–6 months", "Just exploring"],
  },
];

// Industry-specific add-on questions
interface IndustryModule {
  id: string;
  name: string;
  icon: LucideIcon;
  legalConstraints: string[];
  questions: {
    id: string;
    question: string;
    type: "select" | "multiselect";
    options: string[];
  }[];
}

const industryModules: IndustryModule[] = [
  {
    id: "healthcare", name: "Healthcare", icon: Heart,
    legalConstraints: ["HIPAA compliance required — BAA must be signed", "State medical board regulations on AI-assisted diagnostics", "Patient data retention minimums (6–10 years)", "Informed consent for AI-driven scheduling/communications"],
    questions: [
      { id: "hc_ehr", question: "Which EHR system do you currently use?", type: "select", options: ["Epic", "Cerner", "Athenahealth", "NextGen", "eClinicalWorks", "Other/None"] },
      { id: "hc_noshow", question: "What is your average patient no-show rate?", type: "select", options: ["Under 5%", "5–10%", "10–20%", "20–30%", "Over 30%"] },
      { id: "hc_billing", question: "What percentage of claims are denied on first submission?", type: "select", options: ["Under 5%", "5–10%", "10–20%", "Over 20%"] },
    ],
  },
  {
    id: "legal", name: "Legal Services", icon: Scale,
    legalConstraints: ["Attorney-client privilege must be maintained in all AI processing", "State bar ethics rules on AI-generated legal work", "Client data segregation requirements", "Conflicts of interest checking before AI engagement"],
    questions: [
      { id: "lg_pms", question: "What practice management system do you use?", type: "select", options: ["Clio", "MyCase", "PracticePanther", "Smokeball", "None"] },
      { id: "lg_billing", question: "How much time is lost to manual time entry and billing?", type: "select", options: ["Under 5 hrs/week", "5–10 hrs/week", "10–20 hrs/week", "20+ hrs/week"] },
      { id: "lg_intake", question: "What is your lead-to-client conversion rate?", type: "select", options: ["Under 10%", "10–25%", "25–40%", "Over 40%", "Don't track"] },
    ],
  },
  {
    id: "real_estate", name: "Real Estate", icon: Home,
    legalConstraints: ["Fair Housing Act compliance for all AI communications", "State real estate licensing board regulations", "MLS data usage restrictions", "RESPA compliance for referral programs"],
    questions: [
      { id: "re_crm", question: "What CRM do you currently use?", type: "select", options: ["Follow Up Boss", "kvCORE", "LionDesk", "Salesforce", "None"] },
      { id: "re_leads", question: "How many leads do you receive monthly?", type: "select", options: ["Under 20", "20–50", "50–100", "100–300", "300+"] },
      { id: "re_response", question: "What is your average lead response time?", type: "select", options: ["Under 5 minutes", "5–30 minutes", "30 min–2 hours", "2–24 hours", "Over 24 hours"] },
    ],
  },
  {
    id: "accounting", name: "Accounting/Bookkeeping", icon: Calculator,
    legalConstraints: ["CPA licensing requirements for AI-assisted tax prep", "IRS e-file authorization requirements", "Client confidentiality under AICPA Code of Professional Conduct", "SOX compliance for public company clients"],
    questions: [
      { id: "ac_software", question: "Primary accounting platform?", type: "select", options: ["QuickBooks Online", "Xero", "FreshBooks", "Sage", "Other"] },
      { id: "ac_clients", question: "How many active clients do you manage?", type: "select", options: ["Under 25", "25–50", "50–100", "100–250", "250+"] },
      { id: "ac_season", question: "What % of revenue comes during tax season (Jan–Apr)?", type: "select", options: ["Under 30%", "30–50%", "50–70%", "Over 70%"] },
    ],
  },
  {
    id: "veterinary", name: "Veterinary", icon: Dog,
    legalConstraints: ["State veterinary medical board practice standards", "DEA licensing for controlled substance management", "AVMA guidelines on telemedicine", "Medical records retention (typically 5–7 years)"],
    questions: [
      { id: "vt_pms", question: "Which practice management system do you use?", type: "select", options: ["Cornerstone", "AVImark", "eVetPractice", "Shepherd", "Other/None"] },
      { id: "vt_volume", question: "Average daily patient volume?", type: "select", options: ["Under 15", "15–30", "30–50", "50+"] },
      { id: "vt_noshow", question: "Appointment no-show/cancellation rate?", type: "select", options: ["Under 5%", "5–15%", "15–25%", "Over 25%"] },
    ],
  },
  {
    id: "restaurant", name: "Restaurant/Food Service", icon: UtensilsCrossed,
    legalConstraints: ["Food safety regulations (HACCP, local health codes)", "Tip credit and wage compliance per state", "Allergen disclosure requirements", "Alcohol licensing restrictions on AI-driven promotions"],
    questions: [
      { id: "rs_pos", question: "What POS system do you use?", type: "select", options: ["Toast", "Square", "Clover", "Aloha", "Other"] },
      { id: "rs_waste", question: "What is your estimated monthly food waste (%)?", type: "select", options: ["Under 5%", "5–10%", "10–20%", "Over 20%", "Don't track"] },
      { id: "rs_labor", question: "What % of revenue goes to labor costs?", type: "select", options: ["Under 25%", "25–30%", "30–35%", "Over 35%"] },
    ],
  },
  {
    id: "auto_repair", name: "Auto Repair", icon: Wrench,
    legalConstraints: ["State automotive repair licensing requirements", "Consumer protection laws on repair estimates", "EPA regulations on waste disposal and emissions", "Right to Repair legislation compliance"],
    questions: [
      { id: "ar_software", question: "Shop management system?", type: "select", options: ["Mitchell 1", "Shop-Ware", "Tekmetric", "R.O. Writer", "None"] },
      { id: "ar_bays", question: "How many service bays?", type: "select", options: ["1–3", "4–6", "7–10", "10+"] },
      { id: "ar_parts", question: "What % of parts orders are manual/phone-based?", type: "select", options: ["Under 25%", "25–50%", "50–75%", "Over 75%"] },
    ],
  },
  {
    id: "insurance", name: "Insurance", icon: Umbrella,
    legalConstraints: ["State insurance commissioner regulations", "NAIC model laws compliance", "Anti-rebating statutes", "Errors & Omissions liability for AI recommendations"],
    questions: [
      { id: "in_ams", question: "Agency management system?", type: "select", options: ["Applied Epic", "Hawksoft", "AMS360", "EZLynx", "Other"] },
      { id: "in_policies", question: "Policies under management?", type: "select", options: ["Under 500", "500–2,000", "2,000–5,000", "5,000+"] },
      { id: "in_retention", question: "Annual policy retention rate?", type: "select", options: ["Under 80%", "80–85%", "85–90%", "Over 90%"] },
    ],
  },
  {
    id: "marketing_agency", name: "Marketing Agency", icon: Megaphone,
    legalConstraints: ["FTC endorsement and testimonial guidelines", "CAN-SPAM and TCPA compliance for outreach", "Client data ownership and NDA requirements", "Platform-specific advertising policies (Google, Meta)"],
    questions: [
      { id: "ma_tools", question: "Primary project management tool?", type: "select", options: ["Asana", "Monday.com", "ClickUp", "Basecamp", "Other"] },
      { id: "ma_clients", question: "Active client count?", type: "select", options: ["Under 10", "10–25", "25–50", "50+"] },
      { id: "ma_churn", question: "Monthly client churn rate?", type: "select", options: ["Under 3%", "3–5%", "5–10%", "Over 10%", "Don't track"] },
    ],
  },
  {
    id: "education", name: "Education/Tutoring", icon: GraduationCap,
    legalConstraints: ["FERPA compliance for student data", "COPPA requirements for under-13 users", "State education board licensing", "ADA/Section 508 accessibility requirements"],
    questions: [
      { id: "ed_lms", question: "Learning management system?", type: "select", options: ["Canvas", "Google Classroom", "Moodle", "Custom/None"] },
      { id: "ed_students", question: "Active students/learners?", type: "select", options: ["Under 50", "50–200", "200–500", "500+"] },
      { id: "ed_retention", question: "Student retention/completion rate?", type: "select", options: ["Under 50%", "50–70%", "70–85%", "Over 85%"] },
    ],
  },
  {
    id: "it_consulting", name: "IT Consulting/MSP", icon: Laptop,
    legalConstraints: ["SOC 2 compliance for client data handling", "Cyber insurance requirements", "CISA advisories for managed security", "State data breach notification laws"],
    questions: [
      { id: "it_psa", question: "PSA/ticketing platform?", type: "select", options: ["ConnectWise", "Datto Autotask", "Halo PSA", "Freshservice", "Other"] },
      { id: "it_endpoints", question: "Managed endpoints?", type: "select", options: ["Under 200", "200–1,000", "1,000–5,000", "5,000+"] },
      { id: "it_sla", question: "SLA breach rate?", type: "select", options: ["Under 2%", "2–5%", "5–10%", "Over 10%", "Don't track"] },
    ],
  },
  {
    id: "creative_agency", name: "Creative Agency", icon: Palette,
    legalConstraints: ["Copyright and IP ownership in client contracts", "AI-generated content disclosure requirements", "Stock licensing compliance", "Non-compete and work-for-hire agreements"],
    questions: [
      { id: "ca_tools", question: "Primary creative suite?", type: "select", options: ["Adobe Creative Cloud", "Figma", "Canva Pro", "Mixed tools"] },
      { id: "ca_revisions", question: "Average revision rounds per project?", type: "select", options: ["1–2", "3–4", "5–6", "7+"] },
      { id: "ca_scope", question: "How often do projects experience scope creep?", type: "select", options: ["Rarely (<10%)", "Sometimes (10–30%)", "Often (30–50%)", "Always (50%+)"] },
    ],
  },
  {
    id: "hr_staffing", name: "HR & Staffing", icon: UserCheck,
    legalConstraints: ["EEOC compliance for AI-driven candidate screening", "Ban-the-box and fair chance hiring laws", "I-9 verification requirements", "State-specific pay transparency laws"],
    questions: [
      { id: "hr_ats", question: "Applicant tracking system?", type: "select", options: ["Bullhorn", "Greenhouse", "Lever", "iCIMS", "None"] },
      { id: "hr_fill", question: "Average time-to-fill (days)?", type: "select", options: ["Under 14", "14–30", "30–60", "60+"] },
      { id: "hr_falloff", question: "Candidate fall-off rate after offer?", type: "select", options: ["Under 5%", "5–15%", "15–25%", "Over 25%"] },
    ],
  },
  {
    id: "roofing", name: "Roofing", icon: HardHat,
    legalConstraints: ["State contractor licensing requirements", "OSHA safety compliance", "Building permit and inspection requirements", "Lien law and bond requirements by state"],
    questions: [
      { id: "rf_software", question: "Estimating/CRM software?", type: "select", options: ["AccuLynx", "JobNimbus", "Roofr", "CompanyCam", "None"] },
      { id: "rf_crews", question: "Number of crews?", type: "select", options: ["1–2", "3–5", "6–10", "10+"] },
      { id: "rf_lead", question: "Primary lead source?", type: "select", options: ["Storm chasing", "Referrals", "Digital marketing", "Insurance restoration", "Mixed"] },
    ],
  },
  {
    id: "fitness", name: "Fitness & Gym", icon: Dumbbell,
    legalConstraints: ["Liability waiver requirements", "AED/emergency response compliance", "Personal trainer certification requirements", "Auto-renewal and cancellation regulations by state"],
    questions: [
      { id: "ft_software", question: "Gym management platform?", type: "select", options: ["Mindbody", "Zen Planner", "Glofox", "Pike13", "None"] },
      { id: "ft_members", question: "Active member count?", type: "select", options: ["Under 100", "100–300", "300–700", "700+"] },
      { id: "ft_churn", question: "Monthly member churn rate?", type: "select", options: ["Under 3%", "3–5%", "5–8%", "Over 8%"] },
    ],
  },
  {
    id: "pet_grooming", name: "Pet Grooming", icon: PawPrint,
    legalConstraints: ["State/local pet groomer licensing (where required)", "Animal welfare compliance", "Liability insurance requirements", "Vaccination verification policies"],
    questions: [
      { id: "pg_software", question: "Booking/scheduling tool?", type: "select", options: ["Gingr", "PetExec", "DaySmart Pet", "Manual/phone"] },
      { id: "pg_daily", question: "Average daily appointments?", type: "select", options: ["Under 5", "5–10", "10–20", "20+"] },
      { id: "pg_noshow", question: "No-show/late cancellation rate?", type: "select", options: ["Under 5%", "5–10%", "10–20%", "Over 20%"] },
    ],
  },
  {
    id: "cleaning", name: "Cleaning Services", icon: SprayCan,
    legalConstraints: ["OSHA chemical handling and SDS requirements", "Workers' compensation requirements", "Background check compliance (FCRA)", "Bonding and insurance minimums"],
    questions: [
      { id: "cl_software", question: "Scheduling/dispatch tool?", type: "select", options: ["ZenMaid", "Jobber", "Housecall Pro", "Manual/spreadsheet"] },
      { id: "cl_type", question: "Primary service type?", type: "select", options: ["Residential", "Commercial", "Both equally", "Specialty (post-construction, etc.)"] },
      { id: "cl_turnover", question: "Annual staff turnover rate?", type: "select", options: ["Under 30%", "30–60%", "60–100%", "Over 100%"] },
    ],
  },
  {
    id: "photography", name: "Photography/Videography", icon: Camera,
    legalConstraints: ["Model release and consent requirements", "Copyright registration and delivery terms", "Drone operation FAA Part 107 compliance", "Music licensing for video productions"],
    questions: [
      { id: "ph_crm", question: "Client management tool?", type: "select", options: ["HoneyBook", "Dubsado", "17hats", "Studio Ninja", "None"] },
      { id: "ph_bookings", question: "Monthly bookings?", type: "select", options: ["Under 5", "5–10", "10–20", "20+"] },
      { id: "ph_delivery", question: "Average delivery time to client?", type: "select", options: ["Under 1 week", "1–2 weeks", "2–4 weeks", "4+ weeks"] },
    ],
  },
  {
    id: "event_planning", name: "Event Planning", icon: PartyPopper,
    legalConstraints: ["Venue liability and insurance requirements", "Liquor license coordination", "ADA accessibility compliance", "Force majeure and cancellation policies"],
    questions: [
      { id: "ev_software", question: "Event management platform?", type: "select", options: ["Planning Pod", "Cvent", "Social Tables", "Aisle Planner", "None"] },
      { id: "ev_annual", question: "Events managed annually?", type: "select", options: ["Under 20", "20–50", "50–100", "100+"] },
      { id: "ev_vendors", question: "Average vendors coordinated per event?", type: "select", options: ["Under 5", "5–10", "10–20", "20+"] },
    ],
  },
  {
    id: "landscaping", name: "Landscaping & Lawn Care", icon: TreePine,
    legalConstraints: ["Pesticide applicator licensing requirements", "EPA stormwater runoff regulations", "OSHA equipment safety standards", "State contractor licensing (for hardscape)"],
    questions: [
      { id: "ls_software", question: "Business management tool?", type: "select", options: ["LMN", "Jobber", "Service Autopilot", "Aspire", "None"] },
      { id: "ls_seasonal", question: "Revenue drop in off-season (%)?", type: "select", options: ["Under 30%", "30–50%", "50–70%", "Over 70%"] },
      { id: "ls_recurring", question: "What % of revenue is recurring contracts?", type: "select", options: ["Under 20%", "20–40%", "40–60%", "Over 60%"] },
    ],
  },
  {
    id: "salon", name: "Salon & Barbershop", icon: Scissors,
    legalConstraints: ["State cosmetology licensing requirements", "Sanitation and hygiene inspection compliance", "Booth rental vs. employment classification", "Product liability for chemical treatments"],
    questions: [
      { id: "sl_software", question: "Booking platform?", type: "select", options: ["Vagaro", "Square Appointments", "Boulevard", "Fresha", "None"] },
      { id: "sl_stylists", question: "Number of stylists/barbers?", type: "select", options: ["1–3", "4–8", "9–15", "15+"] },
      { id: "sl_retention", question: "Client rebooking rate?", type: "select", options: ["Under 40%", "40–60%", "60–75%", "Over 75%"] },
    ],
  },
  {
    id: "mobile_detailing", name: "Mobile Detailing", icon: Car,
    legalConstraints: ["EPA wastewater discharge regulations", "Local water usage restrictions", "Mobile business permit requirements", "Chemical storage and transport regulations"],
    questions: [
      { id: "md_software", question: "Scheduling/CRM tool?", type: "select", options: ["Urable", "Jobber", "Housecall Pro", "Manual/phone"] },
      { id: "md_daily", question: "Average daily jobs?", type: "select", options: ["Under 3", "3–5", "5–8", "8+"] },
      { id: "md_drive", question: "Average drive time between jobs?", type: "select", options: ["Under 15 min", "15–30 min", "30–45 min", "45+ min"] },
    ],
  },
  {
    id: "manufacturing", name: "Manufacturing (CNC/Job Shop)", icon: Factory,
    legalConstraints: ["OSHA machine guarding and lockout/tagout", "ISO 9001 quality management certification", "EPA emissions and waste disposal", "Export control regulations (ITAR/EAR)"],
    questions: [
      { id: "mf_erp", question: "ERP/MRP system?", type: "select", options: ["JobBOSS", "E2 Shop", "ProShop", "Epicor", "None"] },
      { id: "mf_utilization", question: "Average machine utilization rate?", type: "select", options: ["Under 50%", "50–65%", "65–80%", "Over 80%"] },
      { id: "mf_quoting", question: "Average time to deliver a quote?", type: "select", options: ["Same day", "1–2 days", "3–5 days", "Over 5 days"] },
    ],
  },
  {
    id: "logistics", name: "Logistics & Trucking", icon: Truck,
    legalConstraints: ["FMCSA/DOT compliance (HOS, ELD mandate)", "HAZMAT transportation regulations", "BOC-3 process agent requirements", "State fuel tax reporting (IFTA)"],
    questions: [
      { id: "lo_tms", question: "TMS/dispatch system?", type: "select", options: ["McLeod", "TMW", "Samsara", "KeepTruckin", "None"] },
      { id: "lo_fleet", question: "Fleet size?", type: "select", options: ["Under 10", "10–25", "25–50", "50+"] },
      { id: "lo_deadhead", question: "Average deadhead percentage?", type: "select", options: ["Under 10%", "10–20%", "20–30%", "Over 30%"] },
    ],
  },
  {
    id: "property_mgmt", name: "Property Management", icon: Home,
    legalConstraints: ["State landlord-tenant law compliance", "Fair Housing Act for AI-driven screening", "Security deposit handling regulations", "Lead paint and environmental disclosures"],
    questions: [
      { id: "pm_software", question: "Property management platform?", type: "select", options: ["AppFolio", "Buildium", "Yardi", "RentManager", "None"] },
      { id: "pm_units", question: "Total units managed?", type: "select", options: ["Under 50", "50–200", "200–500", "500+"] },
      { id: "pm_vacancy", question: "Average vacancy rate?", type: "select", options: ["Under 3%", "3–5%", "5–8%", "Over 8%"] },
    ],
  },
  {
    id: "dental", name: "Dental & Optometry", icon: Eye,
    legalConstraints: ["HIPAA compliance for patient data", "State dental/optometry board practice standards", "DEA compliance for controlled substances", "Informed consent for AI-assisted diagnostics"],
    questions: [
      { id: "dn_pms", question: "Practice management software?", type: "select", options: ["Dentrix", "Open Dental", "Eaglesoft", "OfficeMate (Opt)", "Other"] },
      { id: "dn_recall", question: "Recall compliance rate?", type: "select", options: ["Under 40%", "40–55%", "55–70%", "Over 70%"] },
      { id: "dn_case", question: "Case acceptance rate?", type: "select", options: ["Under 40%", "40–55%", "55–70%", "Over 70%"] },
    ],
  },
  {
    id: "home_healthcare", name: "Home Healthcare", icon: HeartPulse,
    legalConstraints: ["Medicare/Medicaid Conditions of Participation", "HIPAA and patient privacy", "State home health agency licensing", "Caregiver background check requirements"],
    questions: [
      { id: "hh_ehr", question: "Home health EHR?", type: "select", options: ["WellSky", "Axxess", "MatrixCare", "Homecare Homebase", "None"] },
      { id: "hh_patients", question: "Active patients?", type: "select", options: ["Under 50", "50–150", "150–300", "300+"] },
      { id: "hh_readmit", question: "30-day hospital readmission rate?", type: "select", options: ["Under 10%", "10–15%", "15–20%", "Over 20%", "Don't track"] },
    ],
  },
  {
    id: "wholesale", name: "Wholesale Distribution", icon: Package,
    legalConstraints: ["UCC Article 2 sales compliance", "Product liability and recall procedures", "DOT regulations for fleet delivery", "State resale certificate management"],
    questions: [
      { id: "ws_erp", question: "ERP/distribution system?", type: "select", options: ["SAP Business One", "NetSuite", "Acumatica", "Epicor", "None"] },
      { id: "ws_accuracy", question: "Inventory accuracy rate?", type: "select", options: ["Under 85%", "85–90%", "90–95%", "Over 95%"] },
      { id: "ws_dso", question: "Days Sales Outstanding (DSO)?", type: "select", options: ["Under 30", "30–45", "45–60", "Over 60"] },
    ],
  },
  {
    id: "construction", name: "Construction / GC", icon: HardHat,
    legalConstraints: ["State contractor licensing and bonding", "OSHA construction safety standards", "Prevailing wage requirements (Davis-Bacon)", "Mechanics lien and payment bond laws"],
    questions: [
      { id: "cn_software", question: "Project management tool?", type: "select", options: ["Procore", "Buildertrend", "CoConstruct", "PlanGrid", "None"] },
      { id: "cn_projects", question: "Active projects at any time?", type: "select", options: ["Under 5", "5–10", "10–20", "20+"] },
      { id: "cn_change", question: "Average change orders per project?", type: "select", options: ["Under 3", "3–5", "5–10", "10+"] },
    ],
  },
  {
    id: "franchise", name: "Franchise Operations", icon: Store,
    legalConstraints: ["FTC Franchise Rule (FDD disclosure)", "State franchise registration requirements", "Franchise agreement territory restrictions", "Brand standards compliance enforcement"],
    questions: [
      { id: "fr_units", question: "Total franchise units?", type: "select", options: ["Under 10", "10–25", "25–50", "50–100", "100+"] },
      { id: "fr_compliance", question: "Brand compliance audit pass rate?", type: "select", options: ["Under 70%", "70–85%", "85–95%", "Over 95%"] },
      { id: "fr_variance", question: "Revenue variance across units?", type: "select", options: ["Under 15%", "15–30%", "30–50%", "Over 50%"] },
    ],
  },
  {
    id: "regional_banking", name: "Regional Banking", icon: Landmark,
    legalConstraints: ["Federal banking regulations (OCC, FDIC, Fed)", "BSA/AML compliance requirements", "Fair lending laws (ECOA, CRA)", "GLBA customer data privacy"],
    questions: [
      { id: "rb_core", question: "Core banking system?", type: "select", options: ["Jack Henry", "Fiserv", "FIS", "Temenos", "Other"] },
      { id: "rb_branches", question: "Number of branches?", type: "select", options: ["Under 5", "5–15", "15–30", "30+"] },
      { id: "rb_digital", question: "Digital banking adoption rate?", type: "select", options: ["Under 30%", "30–50%", "50–70%", "Over 70%"] },
    ],
  },
  {
    id: "urgent_care", name: "Urgent Care / Multi-site Healthcare", icon: Stethoscope,
    legalConstraints: ["HIPAA compliance across all locations", "State medical director supervision requirements", "CLIA certification for lab testing", "EMTALA compliance for emergencies"],
    questions: [
      { id: "uc_ehr", question: "EHR system?", type: "select", options: ["athenahealth", "eClinicalWorks", "Practice Fusion", "Experity", "Other"] },
      { id: "uc_volume", question: "Average daily patient volume per site?", type: "select", options: ["Under 30", "30–50", "50–80", "80+"] },
      { id: "uc_wait", question: "Average patient wait time?", type: "select", options: ["Under 15 min", "15–30 min", "30–60 min", "60+ min"] },
    ],
  },
  {
    id: "commercial_re", name: "Commercial Real Estate", icon: Building2,
    legalConstraints: ["SEC regulations for investment offerings", "State real estate commission licensing", "ADA compliance for commercial properties", "Environmental assessment requirements (Phase I/II)"],
    questions: [
      { id: "cre_platform", question: "Deal/portfolio management tool?", type: "select", options: ["Yardi", "MRI Software", "RealPage", "CoStar", "Spreadsheets"] },
      { id: "cre_portfolio", question: "Properties in portfolio?", type: "select", options: ["Under 10", "10–25", "25–50", "50+"] },
      { id: "cre_occupancy", question: "Average occupancy rate?", type: "select", options: ["Under 80%", "80–88%", "88–95%", "Over 95%"] },
    ],
  },
  {
    id: "engineering", name: "Engineering & Architecture", icon: Ruler,
    legalConstraints: ["PE/RA licensing and stamp requirements", "Professional liability (E&O) insurance", "Building code compliance documentation", "AIA contract standards and deliverable requirements"],
    questions: [
      { id: "en_software", question: "Primary design platform?", type: "select", options: ["AutoCAD", "Revit", "ArchiCAD", "Civil 3D", "Mixed"] },
      { id: "en_projects", question: "Active projects at any time?", type: "select", options: ["Under 5", "5–15", "15–30", "30+"] },
      { id: "en_overrun", question: "Average project cost overrun?", type: "select", options: ["Under 5%", "5–10%", "10–20%", "Over 20%"] },
    ],
  },
  {
    id: "food_mfg", name: "Food & Beverage Manufacturing", icon: Wheat,
    legalConstraints: ["FDA FSMA compliance and HARPC plans", "USDA inspection requirements (meat/poultry)", "Allergen labeling (FALCPA)", "State weights and measures compliance"],
    questions: [
      { id: "fm_erp", question: "ERP/production system?", type: "select", options: ["SAP", "NetSuite", "BatchMaster", "DEACOM", "None"] },
      { id: "fm_waste", question: "Production waste rate?", type: "select", options: ["Under 2%", "2–5%", "5–10%", "Over 10%"] },
      { id: "fm_compliance", question: "Time spent on compliance documentation weekly?", type: "select", options: ["Under 5 hrs", "5–10 hrs", "10–20 hrs", "20+ hrs"] },
    ],
  },
  {
    id: "business_coaching", name: "Business Coaching/Consulting", icon: Compass,
    legalConstraints: ["No regulated licensing (but ICF credential recommended)", "Client confidentiality agreements", "Results disclaimer requirements", "Professional liability insurance recommended"],
    questions: [
      { id: "bc_crm", question: "Client management tool?", type: "select", options: ["HubSpot", "Dubsado", "Practice Better", "CoachAccountable", "None"] },
      { id: "bc_clients", question: "Active coaching clients?", type: "select", options: ["Under 10", "10–25", "25–50", "50+"] },
      { id: "bc_model", question: "Primary revenue model?", type: "select", options: ["1-on-1 coaching", "Group programs", "Online courses", "Retainer/advisory", "Mixed"] },
    ],
  },
];

const DiscoverySurvey = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0); // 0 = industry select, 1 = universal, 2 = vertical, 3 = results
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const selectedModule = industryModules.find((m) => m.id === selectedIndustry);
  const totalUniversalQuestions = universalQuestions.length;

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustry(id);
    setCurrentStep(1);
    setAnswers({});
  };

  const universalAnswered = universalQuestions.every((q) => answers[q.id]);
  const verticalAnswered = selectedModule?.questions.every((q) => answers[q.id]);

  const getPainScore = () => {
    let score = 0;
    if (answers.time_waste === "20–40 hours" || answers.time_waste === "40+ hours") score += 3;
    else if (answers.time_waste === "10–20 hours") score += 2;
    else score += 1;
    if (answers.revenue_leak === "$15K–$50K" || answers.revenue_leak === "$50K+") score += 3;
    else if (answers.revenue_leak === "$5K–$15K") score += 2;
    else score += 1;
    if (answers.biggest_pain) score += 2;
    if (answers.decision_timeline === "Immediately" || answers.decision_timeline === "Within 30 days") score += 2;
    return Math.min(10, score);
  };

  const getTierRecommendation = () => {
    const rev = answers.revenue;
    const emp = answers.employees;
    if (rev === "$15M–$50M" || rev === "$50M+" || emp === "200+") return "Innovate";
    if (rev === "$5M–$15M" || emp === "51–200" || emp === "26–50") return "Augment";
    return "Optimize";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <ClipboardCheck className="w-4 h-4" />
              Customer Discovery Survey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Uncover Your{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Operational Pain Points
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A 10-minute assessment that maps your biggest inefficiencies to specific AI solutions — 
              with a recommended tier and projected ROI.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 max-w-4xl">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {["Select Industry", "Core Assessment", "Industry Deep-Dive", "Results"].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  i <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i < currentStep ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>
                <span className={`text-xs hidden sm:inline ${i <= currentStep ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {i < 3 && <div className={`flex-1 h-0.5 ${i < currentStep ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 0: Industry Selection */}
            {currentStep === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold mb-6">Select Your Industry</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {industryModules.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => handleSelectIndustry(mod.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all hover:border-primary/50 hover:bg-primary/5 ${
                        selectedIndustry === mod.id ? "border-primary bg-primary/10" : "border-border bg-card"
                      }`}
                    >
                      <mod.icon className="w-6 h-6 text-primary" />
                      <span className="text-xs font-medium text-center text-foreground">{mod.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Universal Core Questions */}
            {currentStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold mb-2">Core Business Assessment</h2>
                <p className="text-muted-foreground mb-6">These questions help us understand your business fundamentals.</p>
                <div className="space-y-6">
                  {universalQuestions.map((q) => (
                    <div key={q.id} className="rounded-xl border border-border bg-card p-6">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{q.category}</p>
                      <p className="font-semibold text-foreground mb-3">{q.question}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleAnswer(q.id, opt)}
                            className={`px-3 py-2 rounded-lg text-sm border transition-all ${
                              answers[q.id] === opt
                                ? "border-primary bg-primary/10 text-primary font-semibold"
                                : "border-border bg-background text-muted-foreground hover:border-primary/30"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(0)} className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={() => universalAnswered && setCurrentStep(2)}
                    disabled={!universalAnswered}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold disabled:opacity-40 hover:bg-primary/90"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Industry-Specific Questions */}
            {currentStep === 2 && selectedModule && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-3 mb-2">
                  <selectedModule.icon className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">{selectedModule.name} Deep-Dive</h2>
                </div>
                <p className="text-muted-foreground mb-6">Industry-specific questions to map your exact pain points.</p>

                <div className="space-y-6">
                  {selectedModule.questions.map((q) => (
                    <div key={q.id} className="rounded-xl border border-border bg-card p-6">
                      <p className="font-semibold text-foreground mb-3">{q.question}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleAnswer(q.id, opt)}
                            className={`px-3 py-2 rounded-lg text-sm border transition-all ${
                              answers[q.id] === opt
                                ? "border-accent bg-accent/10 text-accent font-semibold"
                                : "border-border bg-background text-muted-foreground hover:border-accent/30"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legal Constraints */}
                <div className="mt-8 rounded-xl border border-destructive/20 bg-destructive/5 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold text-foreground">Legal & Regulatory Constraints — {selectedModule.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedModule.legalConstraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-destructive/70" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(1)} className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={() => verticalAnswered && setCurrentStep(3)}
                    disabled={!verticalAnswered}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold disabled:opacity-40 hover:bg-accent/90"
                  >
                    View Results <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Results */}
            {currentStep === 3 && selectedModule && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold mb-6">Discovery Assessment Results</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Pain Score</p>
                    <p className="text-4xl font-bold text-primary">{getPainScore()}/10</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {getPainScore() >= 7 ? "Critical — Immediate action recommended" : getPainScore() >= 4 ? "Moderate — Strong improvement potential" : "Low — Optimization opportunity"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Recommended Tier</p>
                    <p className="text-4xl font-bold text-accent">{getTierRecommendation()}</p>
                    <p className="text-xs text-muted-foreground mt-1">Based on your business profile</p>
                  </div>
                  <div className="rounded-xl border border-success/20 bg-success/5 p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Est. Monthly Impact</p>
                    <p className="text-4xl font-bold text-success">
                      {answers.revenue_leak === "$50K+" ? "$50K+" : answers.revenue_leak === "$15K–$50K" ? "$15–50K" : answers.revenue_leak === "$5K–$15K" ? "$5–15K" : "$1–5K"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Recoverable revenue</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-xl border border-border bg-card p-6 mb-6">
                  <h3 className="font-bold text-foreground mb-4">Response Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(answers).map(([key, val]) => {
                      const uq = universalQuestions.find((q) => q.id === key);
                      const vq = selectedModule.questions.find((q) => q.id === key);
                      const label = uq?.question || vq?.question || key;
                      return (
                        <div key={key} className="flex justify-between items-start gap-2 text-sm border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-semibold text-foreground text-right">{val}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Legal Reminder */}
                <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold text-foreground">Legal Requirements for {selectedModule.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedModule.legalConstraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-destructive/70" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between">
                  <button onClick={() => { setCurrentStep(0); setAnswers({}); setSelectedIndustry(null); }} className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" /> Start Over
                  </button>
                  <a href="/onboarding" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                    View Onboarding Playbook <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiscoverySurvey;
