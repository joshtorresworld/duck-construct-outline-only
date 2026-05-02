import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Calendar,
  MessageSquare,
  TrendingUp,
  Clock,
  Phone,
  Settings,
  LogOut,
  Plug,
  AlertCircle,
} from "lucide-react";

type Stats = {
  leadsThisWeek: number;
  avgResponseSeconds: number | null;
  bookingsThisWeek: number;
  revenueThisMonthCents: number;
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, tenant, signOut } = useAuth();
  const [stats, setStats] = useState<Stats>({
    leadsThisWeek: 0,
    avgResponseSeconds: null,
    bookingsThisWeek: 0,
    revenueThisMonthCents: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tenant) return;
    const load = async () => {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

      const [leadsRes, bookingsRes, revRes, respRes] = await Promise.all([
        supabase
          .from("leads")
          .select("id", { count: "exact", head: true })
          .eq("tenant_id", tenant.id)
          .gte("created_at", weekAgo),
        supabase
          .from("appointments")
          .select("id", { count: "exact", head: true })
          .eq("tenant_id", tenant.id)
          .gte("created_at", weekAgo),
        supabase
          .from("revenue_events")
          .select("amount_cents")
          .eq("tenant_id", tenant.id)
          .gte("occurred_at", monthStart),
        supabase
          .from("leads")
          .select("response_seconds")
          .eq("tenant_id", tenant.id)
          .not("response_seconds", "is", null)
          .gte("created_at", weekAgo),
      ]);

      const revTotal = (revRes.data || []).reduce((sum, r) => sum + (r.amount_cents || 0), 0);
      const respTimes = (respRes.data || []).map((r) => r.response_seconds!).filter(Boolean);
      const avgResp =
        respTimes.length > 0 ? Math.round(respTimes.reduce((a, b) => a + b, 0) / respTimes.length) : null;

      setStats({
        leadsThisWeek: leadsRes.count || 0,
        avgResponseSeconds: avgResp,
        bookingsThisWeek: bookingsRes.count || 0,
        revenueThisMonthCents: revTotal,
      });
      setLoading(false);
    };
    load();
  }, [tenant]);

  if (!tenant) return null;

  const trialDaysLeft = Math.max(
    0,
    Math.ceil((new Date(tenant.trial_ends_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  );

  // Setup completion check — mirrors Setup.tsx logic
  const settings = ((tenant as any).settings || {}) as {
    lite_mode?: boolean;
    phone?: { number?: string };
    calendar?: { email?: string };
    script?: { greeting?: string };
  };
  const liteMode = !!settings.lite_mode;
  const setupComplete = liteMode
    ? !!settings.phone?.number && !!settings.script?.greeting
    : !!settings.phone?.number && !!settings.calendar?.email && !!settings.script?.greeting;

  return (
    <div className="min-h-screen bg-surface-sunken">
      {/* App Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm font-semibold tracking-[0.2em] uppercase">
              Row of Ducks
            </Link>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {tenant.name} · {tenant.industry.replace("_", " ")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {tenant.status === "trial" && (
              <Badge variant="outline" className="rounded-sm text-xs">
                Trial · {trialDaysLeft}d left
              </Badge>
            )}
            <Button variant="ghost" size="sm" className="text-xs">
              <Settings className="w-3.5 h-3.5 mr-1" /> Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-xs">
              <LogOut className="w-3.5 h-3.5 mr-1" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-7xl">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-1">
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(" ")[0]}` : ""}
          </h1>
          <p className="text-sm text-muted-foreground">
            Here's what your AI agents have done in the last 7 days.
          </p>
        </div>

        {/* Setup banner — only when incomplete */}
        {!setupComplete && (
          <Card className="duck-card bg-warning/5 border-warning/20 mb-6">
            <CardContent className="p-4 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground mb-0.5">
                  Finish setup to go live
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  {liteMode
                    ? "Complete your 2-step Lite Mode checklist to start capturing leads."
                    : "Connect your phone, calendar, and CRM to start capturing leads."}
                </p>
                <Button size="sm" className="rounded-sm h-7 text-xs" onClick={() => navigate("/setup")}>
                  <Plug className="w-3 h-3 mr-1" /> Open setup
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* KPI Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            icon={MessageSquare}
            label="Leads this week"
            value={loading ? "—" : stats.leadsThisWeek.toString()}
            sub="From all sources"
          />
          <KpiCard
            icon={Clock}
            label="Avg response time"
            value={
              loading
                ? "—"
                : stats.avgResponseSeconds === null
                ? "—"
                : stats.avgResponseSeconds < 60
                ? `${stats.avgResponseSeconds}s`
                : `${Math.round(stats.avgResponseSeconds / 60)}m`
            }
            sub="Target: < 60s"
            highlight={stats.avgResponseSeconds !== null && stats.avgResponseSeconds < 60}
          />
          <KpiCard
            icon={Calendar}
            label="Bookings this week"
            value={loading ? "—" : stats.bookingsThisWeek.toString()}
            sub="Auto-booked appointments"
          />
          <KpiCard
            icon={TrendingUp}
            label="Revenue this month"
            value={loading ? "—" : fmt(stats.revenueThisMonthCents / 100)}
            sub="Attributed to AI agents"
            highlight
          />
        </div>

        {/* Empty State */}
        <Card className="duck-card">
          <CardContent className="p-12 text-center">
            <div className="inline-flex rounded-full bg-primary/10 p-3 mb-4">
              <Zap className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {setupComplete ? "You're live — waiting on the first lead" : "Your agents are ready"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              {setupComplete
                ? "Setup is complete. The next inquiry from any of your sources will get a sub-60-second AI response automatically."
                : "Once you connect your phone number and lead sources, every new inquiry will get a sub-60-second response — automatically."}
            </p>
            {!setupComplete && (
              <div className="flex flex-wrap gap-2 justify-center">
                <Button className="rounded-sm" onClick={() => navigate("/setup")}>
                  <Phone className="w-4 h-4 mr-1.5" /> Connect phone
                </Button>
                <Button variant="outline" className="rounded-sm" onClick={() => navigate("/setup")}>
                  <Calendar className="w-4 h-4 mr-1.5" /> Connect calendar
                </Button>
                <Button variant="outline" className="rounded-sm" onClick={() => navigate("/setup")}>
                  <Plug className="w-4 h-4 mr-1.5" /> Connect CRM
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const KpiCard = ({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) => (
  <Card className={`duck-card ${highlight ? "border-primary/30 bg-primary/5" : ""}`}>
    <CardContent className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${highlight ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <p className={`text-3xl font-semibold mb-1 ${highlight ? "text-primary" : "text-foreground"}`}>
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </CardContent>
  </Card>
);

export default Dashboard;
