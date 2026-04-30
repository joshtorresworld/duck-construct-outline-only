import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_PUBLISHABLE_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return json({ error: "Workspace provisioning is not configured." }, 500);
    }

    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return json({ error: "Please sign in before creating a workspace." }, 401);
    }

    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });

    const { data: userData, error: userError } = await authClient.auth.getUser(token);
    if (userError || !userData.user) {
      return json({ error: "Your session expired. Please sign in again." }, 401);
    }

    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const industry = String(body.industry ?? "");
    const businessPhone = String(body.business_phone ?? "").trim() || null;
    const businessEmail = String(body.business_email ?? userData.user.email ?? "").trim() || null;
    const timezone = String(body.timezone ?? "America/New_York").trim() || "America/New_York";
    const monthlyPriceCents = Number.isFinite(Number(body.monthly_price_cents))
      ? Number(body.monthly_price_cents)
      : null;

    const allowedIndustries = new Set(["real_estate", "dental", "roofing", "auto_repair", "salon_spa"]);
    if (!name || !allowedIndustries.has(industry)) {
      return json({ error: "Business name and industry are required." }, 400);
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey);

    const { data: existingMember, error: existingError } = await adminClient
      .from("tenant_members")
      .select("tenant_id")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (existingError) throw existingError;

    if (existingMember?.tenant_id) {
      const { data: existingTenant, error: tenantError } = await adminClient
        .from("tenants")
        .select("id, name, industry, status, trial_ends_at, business_phone")
        .eq("id", existingMember.tenant_id)
        .single();

      if (tenantError) throw tenantError;
      return json({ tenant: existingTenant });
    }

    const { data: tenant, error: tenantError } = await adminClient
      .from("tenants")
      .insert({
        name,
        industry,
        business_phone: businessPhone,
        business_email: businessEmail,
        timezone,
        monthly_price_cents: monthlyPriceCents,
      })
      .select("id, name, industry, status, trial_ends_at, business_phone")
      .single();

    if (tenantError) throw tenantError;

    const { error: memberError } = await adminClient.from("tenant_members").insert({
      tenant_id: tenant.id,
      user_id: userData.user.id,
      role: "owner",
    });

    if (memberError) {
      await adminClient.from("tenants").delete().eq("id", tenant.id);
      throw memberError;
    }

    return json({ tenant });
  } catch (error) {
    console.error("Workspace provisioning failed", error);
    return json(
      { error: error instanceof Error ? error.message : "Could not create workspace" },
      500,
    );
  }
});
