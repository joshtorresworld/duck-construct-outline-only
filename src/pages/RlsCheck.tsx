import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Result = {
  name: string;
  expected: string;
  outcome: "pass" | "fail" | "pending";
  detail: string;
};

const RlsCheck = () => {
  const { user, loading } = useAuth();
  const [results, setResults] = useState<Result[]>([]);
  const [running, setRunning] = useState(false);

  const run = async () => {
    if (!user) return;
    setRunning(true);
    const out: Result[] = [];

    // 1. tenants insert — should fail RLS
    {
      const { data, error } = await supabase
        .from("tenants")
        .insert({ name: "EXPLOIT TEST", industry: "salon_spa" as any })
        .select();
      const blocked = !!error;
      out.push({
        name: "tenants.insert (exploit)",
        expected: "RLS violation",
        outcome: blocked ? "pass" : "fail",
        detail: blocked
          ? `blocked: ${error!.code ?? ""} ${error!.message}`
          : `UNEXPECTEDLY INSERTED: ${JSON.stringify(data)}`,
      });
    }

    // 2. tenant_members insert — should fail RLS
    {
      const { data, error } = await supabase
        .from("tenant_members")
        .insert({
          tenant_id: "00000000-0000-0000-0000-000000000000",
          user_id: user.id,
          role: "owner" as any,
        })
        .select();
      const blocked = !!error;
      out.push({
        name: "tenant_members.insert (exploit)",
        expected: "RLS violation",
        outcome: blocked ? "pass" : "fail",
        detail: blocked
          ? `blocked: ${error!.code ?? ""} ${error!.message}`
          : `UNEXPECTEDLY INSERTED: ${JSON.stringify(data)}`,
      });
    }

    // 3. integrations select — admin should get [] (no error)
    {
      const { data, error } = await supabase.from("integrations").select("*");
      const ok = !error;
      out.push({
        name: "integrations.select (admin)",
        expected: "success, [] for new tenant",
        outcome: ok ? "pass" : "fail",
        detail: ok
          ? `returned ${data?.length ?? 0} row(s): ${JSON.stringify(data)}`
          : `error: ${error!.code ?? ""} ${error!.message}`,
      });
    }

    // 4. tenant_billing select — admin should get [] or rows (no error)
    {
      const { data, error } = await supabase.from("tenant_billing").select("*");
      const ok = !error;
      out.push({
        name: "tenant_billing.select (admin)",
        expected: "success, [] or own row",
        outcome: ok ? "pass" : "fail",
        detail: ok
          ? `returned ${data?.length ?? 0} row(s): ${JSON.stringify(data)}`
          : `error: ${error!.code ?? ""} ${error!.message}`,
      });
    }

    setResults(out);
    setRunning(false);
  };

  useEffect(() => {
    if (!loading && user) run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  if (loading) return <div className="p-8">Loading auth…</div>;
  if (!user)
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold mb-2">RLS Verification</h1>
        <p>You must be signed in. Go to /login first.</p>
      </div>
    );

  return (
    <div className="p-8 max-w-3xl mx-auto font-mono text-sm">
      <h1 className="text-xl font-bold mb-1">RLS Verification</h1>
      <p className="mb-4 text-muted-foreground">
        Signed in as {user.email} ({user.id})
      </p>
      {running && <p>Running…</p>}
      <div className="space-y-3">
        {results.map((r) => (
          <div
            key={r.name}
            className={`border rounded p-3 ${
              r.outcome === "pass"
                ? "border-green-600 bg-green-50"
                : "border-red-600 bg-red-50"
            }`}
          >
            <div className="font-bold">
              [{r.outcome.toUpperCase()}] {r.name}
            </div>
            <div className="text-xs">expected: {r.expected}</div>
            <div className="text-xs mt-1 break-all">{r.detail}</div>
          </div>
        ))}
      </div>
      <button
        onClick={run}
        disabled={running}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Re-run
      </button>
    </div>
  );
};

export default RlsCheck;
