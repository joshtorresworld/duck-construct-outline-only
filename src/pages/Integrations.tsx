import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plug,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Search,
  Home,
  Smile,
  Hammer,
  Wrench,
  Scissors,
  ArrowRight,
} from "lucide-react";

type Tier = "plug-and-play" | "scoping" | "middleware";

type Integration = {
  vendor: string;
  industry: string;
  category: string;
  tier: Tier;
  apiType: string;
  shipTime: string;
  notes: string;
};

const INTEGRATIONS: Integration[] = [
  // Real Estate
  { vendor: "Follow Up Boss", industry: "Real Estate", category: "CRM", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 2", notes: "First-class API. Lead push, notes, tasks, calls — fully bidirectional." },
  { vendor: "kvCORE", industry: "Real Estate", category: "CRM", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 2", notes: "Solid API. Lead routing and behavior triggers supported." },
  { vendor: "Sierra Interactive", industry: "Real Estate", category: "CRM", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "API key per account. Lead and activity sync." },
  { vendor: "BoomTown", industry: "Real Estate", category: "CRM", tier: "scoping", apiType: "Limited REST", shipTime: "Day 4–6", notes: "Partner API access required. Add 2–3 days for approval." },
  { vendor: "Zillow Premier Agent", industry: "Real Estate", category: "Lead Source", tier: "plug-and-play", apiType: "Lead Webhook", shipTime: "Day 2", notes: "Direct webhook delivery. Captured in seconds." },
  { vendor: "Realtor.com", industry: "Real Estate", category: "Lead Source", tier: "plug-and-play", apiType: "Email + Webhook", shipTime: "Day 2", notes: "Lead emails parsed reliably." },

  // Dental / Optometry
  { vendor: "Dentrix", industry: "Dental", category: "PMS", tier: "middleware", apiType: "On-prem DB", shipTime: "Day 5–10", notes: "Requires DentalIntel, Modento, or Dental Whale middleware. Add license + bridge install." },
  { vendor: "Eaglesoft", industry: "Dental", category: "PMS", tier: "middleware", apiType: "On-prem DB", shipTime: "Day 5–10", notes: "Same as Dentrix — middleware connector required for read/write." },
  { vendor: "Open Dental", industry: "Dental", category: "PMS", tier: "plug-and-play", apiType: "REST API", shipTime: "Day 2", notes: "Open-source API. Fastest dental PMS to ship." },
  { vendor: "Curve Dental", industry: "Dental", category: "PMS", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "Cloud-native. Modern API." },
  { vendor: "Weave", industry: "Dental", category: "Comms", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "If practice already uses Weave, layer on top." },

  // Roofing
  { vendor: "JobNimbus", industry: "Roofing", category: "CRM", tier: "plug-and-play", apiType: "REST", shipTime: "Day 2", notes: "Excellent API. Job, contact, task, and document sync." },
  { vendor: "AccuLynx", industry: "Roofing", category: "CRM", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "Standard REST. Good for storm response workflows." },
  { vendor: "Roofr", industry: "Roofing", category: "Estimating", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "Modern API. Estimate-to-CRM flow." },
  { vendor: "EagleView", industry: "Roofing", category: "Measurement", tier: "plug-and-play", apiType: "REST", shipTime: "Day 4", notes: "Pull measurement reports into estimates automatically." },
  { vendor: "CompanyCam", industry: "Roofing", category: "Photos", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 3", notes: "Project photos auto-attached to insurance packets." },

  // Auto Repair
  { vendor: "Shop-Ware", industry: "Auto Repair", category: "Shop Mgmt", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "Modern cloud SMS. Strong API." },
  { vendor: "Tekmetric", industry: "Auto Repair", category: "Shop Mgmt", tier: "plug-and-play", apiType: "REST", shipTime: "Day 3", notes: "Full DVI, RO, and customer sync." },
  { vendor: "Mitchell 1", industry: "Auto Repair", category: "Shop Mgmt", tier: "scoping", apiType: "Limited", shipTime: "Day 5–7", notes: "Partner program required. Read-only in many cases." },
  { vendor: "AutoVitals", industry: "Auto Repair", category: "DVI", tier: "plug-and-play", apiType: "REST", shipTime: "Day 4", notes: "Inspection data flows into recall agent." },
  { vendor: "Shopmonkey", industry: "Auto Repair", category: "Shop Mgmt", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 2", notes: "Best-in-class developer experience." },

  // Salon / Spa
  { vendor: "Vagaro", industry: "Salon/Spa", category: "Booking", tier: "plug-and-play", apiType: "OAuth REST", shipTime: "Day 3–5", notes: "OAuth approval adds 2 days. After that, full appt + client sync." },
  { vendor: "Mindbody", industry: "Salon/Spa", category: "Booking", tier: "plug-and-play", apiType: "OAuth REST", shipTime: "Day 3–5", notes: "Public API key + site activation. Reliable once live." },
  { vendor: "Boulevard", industry: "Salon/Spa", category: "Booking", tier: "plug-and-play", apiType: "GraphQL", shipTime: "Day 3", notes: "Modern GraphQL API. Excellent docs." },
  { vendor: "Square Appointments", industry: "Salon/Spa", category: "Booking", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 2", notes: "Easiest to integrate. Includes payments." },
  { vendor: "Booker (Mindbody)", industry: "Salon/Spa", category: "Booking", tier: "scoping", apiType: "Legacy SOAP", shipTime: "Day 5–8", notes: "Older API. Recommend migration to Mindbody core." },

  // Universal
  { vendor: "Twilio", industry: "Universal", category: "SMS/Voice", tier: "plug-and-play", apiType: "REST", shipTime: "Day 1", notes: "Outbound SMS, AI voice, call recording." },
  { vendor: "Resend", industry: "Universal", category: "Email", tier: "plug-and-play", apiType: "REST", shipTime: "Day 1", notes: "Transactional + marketing email." },
  { vendor: "Google Calendar", industry: "Universal", category: "Calendar", tier: "plug-and-play", apiType: "OAuth REST", shipTime: "Day 4", notes: "Bidirectional sync, free/busy queries." },
  { vendor: "Microsoft 365 / Outlook", industry: "Universal", category: "Calendar", tier: "plug-and-play", apiType: "Graph API", shipTime: "Day 4", notes: "Same as Google. Enterprise-friendly." },
  { vendor: "Stripe", industry: "Universal", category: "Payments", tier: "plug-and-play", apiType: "REST + Webhooks", shipTime: "Day 2", notes: "Deposits, subscriptions, invoicing." },
];

const TIER_CONFIG: Record<Tier, { label: string; icon: typeof CheckCircle2; color: string; bg: string }> = {
  "plug-and-play": { label: "Plug & Play", icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
  scoping: { label: "Needs Scoping", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
  middleware: { label: "Middleware Required", icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
};

const INDUSTRIES = ["All", "Real Estate", "Dental", "Roofing", "Auto Repair", "Salon/Spa", "Universal"];

const Integrations = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  const filtered = INTEGRATIONS.filter((i) => {
    const matchSearch = i.vendor.toLowerCase().includes(search.toLowerCase()) ||
      i.category.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = industry === "All" || i.industry === industry;
    return matchSearch && matchIndustry;
  });

  const counts = {
    "plug-and-play": INTEGRATIONS.filter((i) => i.tier === "plug-and-play").length,
    scoping: INTEGRATIONS.filter((i) => i.tier === "scoping").length,
    middleware: INTEGRATIONS.filter((i) => i.tier === "middleware").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 border-b border-border bg-surface-sunken">
        <div className="container">
          <Badge variant="outline" className="mb-4 rounded-sm border-primary/30 bg-primary/5">
            <Plug className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
            Vendor Integration Matrix
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 max-w-3xl">
            Know what ships in 2 days vs. 2 weeks — before you sign.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-6">
            Every CRM, PMS, and booking system tier-rated by integration speed. Use this in discovery
            calls to set realistic timelines and price middleware add-ons up front.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
            {(Object.keys(TIER_CONFIG) as Tier[]).map((t) => {
              const cfg = TIER_CONFIG[t];
              const Icon = cfg.icon;
              return (
                <div key={t} className={`rounded-sm border border-border ${cfg.bg} p-3`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${cfg.color}`} strokeWidth={1.5} />
                    <span className="text-xs font-semibold text-foreground">{cfg.label}</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{counts[t]}</p>
                  <p className="text-xs text-muted-foreground">vendors</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-14 bg-background/95 backdrop-blur-sm z-40">
        <div className="container flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search vendor or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 rounded-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <Button
                key={i}
                size="sm"
                variant={industry === i ? "default" : "outline"}
                onClick={() => setIndustry(i)}
                className="rounded-sm text-xs"
              >
                {i}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section className="py-12">
        <div className="container">
          <Card className="duck-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-3 font-semibold text-foreground">Vendor</th>
                    <th className="text-left p-3 font-semibold text-foreground">Industry</th>
                    <th className="text-left p-3 font-semibold text-foreground">Category</th>
                    <th className="text-left p-3 font-semibold text-foreground">Tier</th>
                    <th className="text-left p-3 font-semibold text-foreground">API</th>
                    <th className="text-left p-3 font-semibold text-foreground">Ship Time</th>
                    <th className="text-left p-3 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, i) => {
                    const cfg = TIER_CONFIG[row.tier];
                    const Icon = cfg.icon;
                    return (
                      <tr
                        key={`${row.vendor}-${i}`}
                        className={i !== filtered.length - 1 ? "border-b border-border hover:bg-muted/20" : "hover:bg-muted/20"}
                      >
                        <td className="p-3 font-medium text-foreground">{row.vendor}</td>
                        <td className="p-3 text-muted-foreground text-xs">{row.industry}</td>
                        <td className="p-3 text-muted-foreground text-xs">{row.category}</td>
                        <td className="p-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-medium ${cfg.bg} ${cfg.color}`}>
                            <Icon className="w-3 h-3" strokeWidth={1.5} />
                            {cfg.label}
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground text-xs">{row.apiType}</td>
                        <td className="p-3 text-foreground text-xs font-medium">{row.shipTime}</td>
                        <td className="p-3 text-muted-foreground text-xs max-w-md">{row.notes}</td>
                      </tr>
                    );
                  })}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-muted-foreground text-sm">
                        No vendors match your filter. Try clearing filters or search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="duck-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-success" strokeWidth={1.5} />
                  <h4 className="text-sm font-semibold text-foreground">Plug & Play</h4>
                </div>
                <p className="text-xs text-muted-foreground">Modern REST/GraphQL APIs. Live within Week 1 deployment window. Included in standard onboarding.</p>
              </CardContent>
            </Card>
            <Card className="duck-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-warning" strokeWidth={1.5} />
                  <h4 className="text-sm font-semibold text-foreground">Needs Scoping</h4>
                </div>
                <p className="text-xs text-muted-foreground">Partner approval, OAuth review, or limited APIs. Add 3–7 days. Confirm in discovery call.</p>
              </CardContent>
            </Card>
            <Card className="duck-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-destructive" strokeWidth={1.5} />
                  <h4 className="text-sm font-semibold text-foreground">Middleware Required</h4>
                </div>
                <p className="text-xs text-muted-foreground">On-prem or legacy systems. Requires 3rd-party bridge ($150–$400/mo) — priced into proposal.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="rounded-sm">
              <a href="/roi-calculator">
                Calculate your ROI <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
