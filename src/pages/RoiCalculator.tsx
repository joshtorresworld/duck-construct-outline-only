import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Home,
  Smile,
  Hammer,
  Wrench,
  Scissors,
  TrendingUp,
  DollarSign,
  ArrowRight,
} from "lucide-react";

type IndustryConfig = {
  id: string;
  name: string;
  icon: typeof Home;
  inputs: { key: string; label: string; default: number; suffix?: string; helper?: string }[];
  monthlyCost: number;
  calculate: (v: Record<string, number>) => {
    breakdown: { label: string; value: number; detail: string }[];
    monthlyGain: number;
  };
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const INDUSTRIES: IndustryConfig[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Home,
    monthlyCost: 4000,
    inputs: [
      { key: "agents", label: "Number of agents", default: 5 },
      { key: "leadsPerMonth", label: "Leads per agent / month", default: 40 },
      { key: "currentConv", label: "Current conversion %", default: 2, suffix: "%" },
      { key: "avgCommission", label: "Average commission", default: 9000, suffix: "$" },
    ],
    calculate: (v) => {
      const totalLeads = v.agents * v.leadsPerMonth;
      const currentClosings = (totalLeads * v.currentConv) / 100;
      const newConv = Math.min(v.currentConv * 3, 8); // 3x conversion, capped
      const newClosings = (totalLeads * newConv) / 100;
      const extraClosings = newClosings - currentClosings;
      const extraRevenue = extraClosings * v.avgCommission;
      return {
        monthlyGain: extraRevenue,
        breakdown: [
          { label: "Current closings / month", value: currentClosings, detail: `${totalLeads} leads × ${v.currentConv}% conv` },
          { label: "Closings with sub-60s response", value: newClosings, detail: `${totalLeads} leads × ${newConv.toFixed(1)}% conv (3× lift, industry-validated)` },
          { label: "Extra closings / month", value: extraClosings, detail: "Net new deals from speed-to-lead" },
          { label: "Extra revenue / month", value: extraRevenue, detail: `${extraClosings.toFixed(1)} × ${fmt(v.avgCommission)}` },
        ],
      };
    },
  },
  {
    id: "dental",
    name: "Dental / Optometry",
    icon: Smile,
    monthlyCost: 5000,
    inputs: [
      { key: "appts", label: "Appointments / week", default: 80 },
      { key: "avgProduction", label: "Avg production / appt", default: 250, suffix: "$" },
      { key: "noShowPct", label: "Current no-show %", default: 15, suffix: "%" },
      { key: "inactivePatients", label: "Inactive patients (12+ mo)", default: 600 },
    ],
    calculate: (v) => {
      const weeklyLost = (v.appts * v.noShowPct / 100) * v.avgProduction;
      const monthlyLost = weeklyLost * 4.33;
      const noShowRecovery = monthlyLost * ((v.noShowPct - 3) / v.noShowPct); // drop to 3%
      const reactivationRate = 0.17; // 17% midpoint of 15-20%
      const reactivationRev = v.inactivePatients * reactivationRate * v.avgProduction;
      const total = noShowRecovery + reactivationRev;
      return {
        monthlyGain: total,
        breakdown: [
          { label: "Current no-show loss / month", value: monthlyLost, detail: `${v.appts}/wk × ${v.noShowPct}% × ${fmt(v.avgProduction)} × 4.33` },
          { label: "Recovered (drop to 3% no-show)", value: noShowRecovery, detail: "Smart reminders + waitlist auto-fill" },
          { label: "Reactivation revenue", value: reactivationRev, detail: `${v.inactivePatients} inactive × 17% win-back × ${fmt(v.avgProduction)}` },
          { label: "Total monthly gain", value: total, detail: "Combined recovery + reactivation" },
        ],
      };
    },
  },
  {
    id: "roofing",
    name: "Roofing",
    icon: Hammer,
    monthlyCost: 5000,
    inputs: [
      { key: "leadsPerMonth", label: "Storm/web leads / month", default: 80 },
      { key: "currentBookRate", label: "Current inspection book rate %", default: 25, suffix: "%" },
      { key: "closeRate", label: "Inspection-to-job close %", default: 35, suffix: "%" },
      { key: "avgJob", label: "Average job value", default: 12000, suffix: "$" },
    ],
    calculate: (v) => {
      const currentInspections = (v.leadsPerMonth * v.currentBookRate) / 100;
      const newBookRate = Math.min(v.currentBookRate * 1.4, 70); // 40% lift
      const newInspections = (v.leadsPerMonth * newBookRate) / 100;
      const extraInspections = newInspections - currentInspections;
      const extraJobs = extraInspections * (v.closeRate / 100);
      const extraRevenue = extraJobs * v.avgJob;
      return {
        monthlyGain: extraRevenue,
        breakdown: [
          { label: "Current inspections / month", value: currentInspections, detail: `${v.leadsPerMonth} leads × ${v.currentBookRate}%` },
          { label: "Inspections w/ 60-sec response", value: newInspections, detail: `${v.leadsPerMonth} × ${newBookRate.toFixed(0)}% (40% lift)` },
          { label: "Extra jobs closed", value: extraJobs, detail: `${extraInspections.toFixed(1)} extra inspections × ${v.closeRate}% close` },
          { label: "Extra revenue / month", value: extraRevenue, detail: `${extraJobs.toFixed(1)} jobs × ${fmt(v.avgJob)}` },
        ],
      };
    },
  },
  {
    id: "auto-repair",
    name: "Auto Repair",
    icon: Wrench,
    monthlyCost: 2750,
    inputs: [
      { key: "bays", label: "Number of bays", default: 4 },
      { key: "currentUtil", label: "Current bay utilization %", default: 65, suffix: "%" },
      { key: "revPerBayDay", label: "Revenue per bay-day at 100%", default: 1200, suffix: "$" },
      { key: "declinedRO", label: "Declined service $/month", default: 4000, suffix: "$" },
    ],
    calculate: (v) => {
      const workDays = 22;
      const currentRev = v.bays * workDays * v.revPerBayDay * (v.currentUtil / 100);
      const newUtil = Math.min(v.currentUtil + 20, 90);
      const newRev = v.bays * workDays * v.revPerBayDay * (newUtil / 100);
      const utilGain = newRev - currentRev;
      const declinedRecovery = v.declinedRO * 0.25; // 25% recovery
      const total = utilGain + declinedRecovery;
      return {
        monthlyGain: total,
        breakdown: [
          { label: "Current monthly revenue", value: currentRev, detail: `${v.bays} bays × 22 days × ${fmt(v.revPerBayDay)} × ${v.currentUtil}%` },
          { label: "Revenue at ${newUtil}% utilization", value: newRev, detail: `Bay management agent fills morning slots` },
          { label: "Utilization gain", value: utilGain, detail: `+${(newUtil - v.currentUtil).toFixed(0)}% utilization` },
          { label: "Declined service recovery (25%)", value: declinedRecovery, detail: `30/60/90-day follow-up on ${fmt(v.declinedRO)}/mo declined` },
          { label: "Total monthly gain", value: total, detail: "Utilization + recovery" },
        ],
      };
    },
  },
  {
    id: "salon",
    name: "Salon / Spa",
    icon: Scissors,
    monthlyCost: 1000,
    inputs: [
      { key: "stylists", label: "Number of stylists", default: 5 },
      { key: "clientsPerWeek", label: "Clients per stylist / week", default: 25 },
      { key: "avgTicket", label: "Average ticket", default: 80, suffix: "$" },
      { key: "noShowPct", label: "Current no-show %", default: 12, suffix: "%" },
      { key: "rebookPct", label: "Current rebook rate %", default: 40, suffix: "%" },
    ],
    calculate: (v) => {
      const totalClients = v.stylists * v.clientsPerWeek * 4.33;
      const noShowLoss = totalClients * (v.noShowPct / 100) * v.avgTicket;
      const noShowRecovery = noShowLoss * ((v.noShowPct - 2) / v.noShowPct);
      const newRebook = Math.min(v.rebookPct + 25, 90);
      const rebookGain = totalClients * ((newRebook - v.rebookPct) / 100) * v.avgTicket * 0.4; // 40% materialize as extra visits in window
      const total = noShowRecovery + rebookGain;
      return {
        monthlyGain: total,
        breakdown: [
          { label: "Current no-show loss / month", value: noShowLoss, detail: `${totalClients.toFixed(0)} clients × ${v.noShowPct}% × ${fmt(v.avgTicket)}` },
          { label: "Recovered (drop to 2% no-show)", value: noShowRecovery, detail: "Smart reminders + waitlist" },
          { label: "Rebook lift gain", value: rebookGain, detail: `Rebook ${v.rebookPct}% → ${newRebook}% — extra visits in 30-day window` },
          { label: "Total monthly gain", value: total, detail: "No-show recovery + rebook lift" },
        ],
      };
    },
  },
];

const RoiCalculator = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 border-b border-border bg-surface-sunken">
        <div className="container">
          <Badge variant="outline" className="mb-4 rounded-sm border-primary/30 bg-primary/5">
            <Calculator className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
            ROI Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 max-w-3xl">
            Plug in your numbers. See your monthly revenue lift.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Industry-tuned models based on real outcomes from the 5 quick-win blueprints. Default
            values are conservative — your actuals usually beat them.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-5 gap-1 h-auto p-1 mb-8">
              {INDUSTRIES.map((ind) => (
                <TabsTrigger key={ind.id} value={ind.id} className="text-xs gap-1.5 py-2">
                  <ind.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span className="hidden sm:inline">{ind.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {INDUSTRIES.map((ind) => (
              <TabsContent key={ind.id} value={ind.id}>
                <CalculatorCard config={ind} />
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Want this tied directly to your CRM / PMS data?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="rounded-sm">
                <a href="mailto:patrick@rowofducks.ai?subject=ROI%20Discovery%20Call">
                  Book a discovery call <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-sm">
                <a href="/week-1-ship">See what ships in Week 1</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CalculatorCard = ({ config }: { config: IndustryConfig }) => {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(config.inputs.map((i) => [i.key, i.default]))
  );

  const result = useMemo(() => config.calculate(values), [values, config]);
  const annualGain = result.monthlyGain * 12;
  const monthlyNet = result.monthlyGain - config.monthlyCost;
  const roi = config.monthlyCost > 0 ? (monthlyNet / config.monthlyCost) * 100 : 0;
  const paybackDays = result.monthlyGain > 0 ? Math.ceil((config.monthlyCost / result.monthlyGain) * 30) : 0;

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
      {/* Inputs */}
      <Card className="duck-card">
        <CardContent className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Your numbers
          </h3>
          <div className="space-y-4">
            {config.inputs.map((input) => (
              <div key={input.key}>
                <Label htmlFor={input.key} className="text-sm text-foreground mb-1.5 block">
                  {input.label}
                  {input.suffix && <span className="text-muted-foreground ml-1">({input.suffix})</span>}
                </Label>
                <Input
                  id={input.key}
                  type="number"
                  value={values[input.key]}
                  onChange={(e) =>
                    setValues({ ...values, [input.key]: parseFloat(e.target.value) || 0 })
                  }
                  className="rounded-sm"
                />
                {input.helper && (
                  <p className="text-xs text-muted-foreground mt-1">{input.helper}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <Card className="duck-card bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Monthly revenue lift
                </p>
                <p className="text-3xl font-semibold text-foreground">{fmt(result.monthlyGain)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Annualized
                </p>
                <p className="text-3xl font-semibold text-primary">{fmt(annualGain)}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Investment</p>
                <p className="text-sm font-semibold text-foreground">{fmt(config.monthlyCost)}/mo</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Net monthly</p>
                <p className="text-sm font-semibold text-success">{fmt(monthlyNet)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Payback</p>
                <p className="text-sm font-semibold text-foreground">
                  {paybackDays > 0 && paybackDays < 90 ? `${paybackDays} days` : "—"}
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-sm bg-success/10 border border-success/20 px-3 py-2">
              <p className="text-xs text-foreground">
                <TrendingUp className="w-3 h-3 inline mr-1 text-success" strokeWidth={1.5} />
                <span className="font-semibold text-success">{roi.toFixed(0)}% ROI</span> on monthly
                investment.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="duck-card">
          <CardContent className="p-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">How we got there</h4>
            <div className="space-y-2.5">
              {result.breakdown.map((b) => (
                <div key={b.label} className="flex items-start justify-between gap-3 pb-2.5 border-b border-border last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{b.label}</p>
                    <p className="text-xs text-muted-foreground">{b.detail}</p>
                  </div>
                  <p className="text-sm font-semibold text-foreground tabular-nums whitespace-nowrap">
                    {b.value >= 100 ? fmt(b.value) : b.value.toFixed(1)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoiCalculator;
