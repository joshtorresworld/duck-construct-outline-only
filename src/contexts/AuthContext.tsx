import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type Tenant = {
  id: string;
  name: string;
  industry: string;
  status: string;
  trial_ends_at: string;
  business_phone: string | null;
  settings: Record<string, unknown>;
};

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  tenant: Tenant | null;
  loading: boolean;
  refreshTenant: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);

  const loadTenant = async (uid: string) => {
    const { data: memberRow } = await supabase
      .from("tenant_members")
      .select("tenant_id")
      .eq("user_id", uid)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (!memberRow) {
      setTenant(null);
      return;
    }

    const { data: tenantRow } = await supabase
      .from("tenants")
      .select("id, name, industry, status, trial_ends_at, business_phone, settings")
      .eq("id", memberRow.tenant_id)
      .maybeSingle();

    setTenant(tenantRow as Tenant | null);
  };

  useEffect(() => {
    // CRITICAL: subscribe FIRST, then check session
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
      if (newSession?.user) {
        // Defer Supabase calls to avoid deadlock
        setTimeout(() => loadTenant(newSession.user.id), 0);
      } else {
        setTenant(null);
      }
    });

    supabase.auth.getSession().then(({ data: { session: existing } }) => {
      setSession(existing);
      setUser(existing?.user ?? null);
      if (existing?.user) {
        loadTenant(existing.user.id).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const refreshTenant = async () => {
    if (user) await loadTenant(user.id);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setTenant(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, tenant, loading, refreshTenant, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
