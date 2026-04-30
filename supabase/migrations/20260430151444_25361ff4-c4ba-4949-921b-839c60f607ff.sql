-- ============================================================
-- ROLE ENUM
-- ============================================================
CREATE TYPE public.app_role AS ENUM ('owner', 'admin', 'operator', 'viewer');

CREATE TYPE public.tenant_industry AS ENUM (
  'real_estate',
  'dental',
  'roofing',
  'auto_repair',
  'salon_spa'
);

CREATE TYPE public.tenant_status AS ENUM ('trial', 'active', 'past_due', 'canceled', 'suspended');

CREATE TYPE public.lead_status AS ENUM ('new', 'contacted', 'qualified', 'booked', 'closed_won', 'closed_lost', 'nurture');

CREATE TYPE public.appointment_status AS ENUM ('scheduled', 'confirmed', 'completed', 'no_show', 'canceled');

CREATE TYPE public.message_channel AS ENUM ('sms', 'email', 'voice');

CREATE TYPE public.message_direction AS ENUM ('inbound', 'outbound');

-- ============================================================
-- TENANTS (one per customer workspace)
-- ============================================================
CREATE TABLE public.tenants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  industry public.tenant_industry NOT NULL,
  status public.tenant_status NOT NULL DEFAULT 'trial',
  trial_ends_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '14 days'),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  monthly_price_cents INTEGER,
  timezone TEXT NOT NULL DEFAULT 'America/New_York',
  business_phone TEXT,
  business_email TEXT,
  settings JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_tenants_status ON public.tenants(status);
CREATE INDEX idx_tenants_stripe_customer ON public.tenants(stripe_customer_id);

-- ============================================================
-- TENANT MEMBERS (users -> tenants with role)
-- ============================================================
CREATE TABLE public.tenant_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL DEFAULT 'operator',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(tenant_id, user_id)
);

CREATE INDEX idx_tenant_members_user ON public.tenant_members(user_id);
CREATE INDEX idx_tenant_members_tenant ON public.tenant_members(tenant_id);

-- ============================================================
-- SECURITY DEFINER HELPERS (avoid RLS recursion)
-- ============================================================
CREATE OR REPLACE FUNCTION public.has_tenant_access(_user_id UUID, _tenant_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.tenant_members
    WHERE user_id = _user_id AND tenant_id = _tenant_id
  );
$$;

CREATE OR REPLACE FUNCTION public.has_tenant_role(_user_id UUID, _tenant_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.tenant_members
    WHERE user_id = _user_id AND tenant_id = _tenant_id AND role = _role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_tenant_admin(_user_id UUID, _tenant_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.tenant_members
    WHERE user_id = _user_id AND tenant_id = _tenant_id AND role IN ('owner', 'admin')
  );
$$;

-- ============================================================
-- LEADS
-- ============================================================
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  source TEXT NOT NULL,
  status public.lead_status NOT NULL DEFAULT 'new',
  score INTEGER,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  notes TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  assigned_to UUID REFERENCES auth.users(id),
  responded_at TIMESTAMPTZ,
  response_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_leads_tenant_created ON public.leads(tenant_id, created_at DESC);
CREATE INDEX idx_leads_tenant_status ON public.leads(tenant_id, status);

-- ============================================================
-- APPOINTMENTS
-- ============================================================
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  status public.appointment_status NOT NULL DEFAULT 'scheduled',
  service_type TEXT,
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  assigned_to UUID REFERENCES auth.users(id),
  external_calendar_id TEXT,
  external_event_id TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_appointments_tenant_scheduled ON public.appointments(tenant_id, scheduled_at);

-- ============================================================
-- MESSAGES (every SMS/email/voice in or out)
-- ============================================================
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  channel public.message_channel NOT NULL,
  direction public.message_direction NOT NULL,
  to_address TEXT,
  from_address TEXT,
  subject TEXT,
  body TEXT NOT NULL,
  ai_generated BOOLEAN NOT NULL DEFAULT false,
  external_id TEXT,
  delivery_status TEXT,
  cost_cents INTEGER,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_messages_tenant_created ON public.messages(tenant_id, created_at DESC);
CREATE INDEX idx_messages_lead ON public.messages(lead_id);

-- ============================================================
-- REVENUE EVENTS (feeds ROI dashboard)
-- ============================================================
CREATE TABLE public.revenue_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  amount_cents INTEGER NOT NULL,
  description TEXT,
  attribution TEXT,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_revenue_tenant_occurred ON public.revenue_events(tenant_id, occurred_at DESC);

-- ============================================================
-- INTEGRATIONS (per-tenant CRM / calendar / phone tokens)
-- ============================================================
CREATE TABLE public.integrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  external_account_id TEXT,
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  encrypted_credentials JSONB,
  last_sync_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(tenant_id, provider)
);

CREATE INDEX idx_integrations_tenant ON public.integrations(tenant_id);

-- ============================================================
-- ENABLE RLS
-- ============================================================
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tenant_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revenue_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS POLICIES — TENANTS
-- ============================================================
CREATE POLICY "Members can view their tenants"
ON public.tenants FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), id));

CREATE POLICY "Admins can update their tenant"
ON public.tenants FOR UPDATE TO authenticated
USING (public.is_tenant_admin(auth.uid(), id));

CREATE POLICY "Authenticated users can create tenants"
ON public.tenants FOR INSERT TO authenticated
WITH CHECK (true);

-- ============================================================
-- RLS POLICIES — TENANT MEMBERS
-- ============================================================
CREATE POLICY "Members can view co-members"
ON public.tenant_members FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Admins can manage members"
ON public.tenant_members FOR ALL TO authenticated
USING (public.is_tenant_admin(auth.uid(), tenant_id))
WITH CHECK (public.is_tenant_admin(auth.uid(), tenant_id));

CREATE POLICY "Users can insert themselves as owner of new tenants"
ON public.tenant_members FOR INSERT TO authenticated
WITH CHECK (user_id = auth.uid());

-- ============================================================
-- RLS POLICIES — LEADS
-- ============================================================
CREATE POLICY "Members can view tenant leads"
ON public.leads FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Members can insert tenant leads"
ON public.leads FOR INSERT TO authenticated
WITH CHECK (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Members can update tenant leads"
ON public.leads FOR UPDATE TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Admins can delete leads"
ON public.leads FOR DELETE TO authenticated
USING (public.is_tenant_admin(auth.uid(), tenant_id));

-- ============================================================
-- RLS POLICIES — APPOINTMENTS
-- ============================================================
CREATE POLICY "Members can view tenant appointments"
ON public.appointments FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Members can manage tenant appointments"
ON public.appointments FOR ALL TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id))
WITH CHECK (public.has_tenant_access(auth.uid(), tenant_id));

-- ============================================================
-- RLS POLICIES — MESSAGES
-- ============================================================
CREATE POLICY "Members can view tenant messages"
ON public.messages FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Members can insert tenant messages"
ON public.messages FOR INSERT TO authenticated
WITH CHECK (public.has_tenant_access(auth.uid(), tenant_id));

-- ============================================================
-- RLS POLICIES — REVENUE EVENTS
-- ============================================================
CREATE POLICY "Members can view tenant revenue"
ON public.revenue_events FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Members can insert tenant revenue events"
ON public.revenue_events FOR INSERT TO authenticated
WITH CHECK (public.has_tenant_access(auth.uid(), tenant_id));

-- ============================================================
-- RLS POLICIES — INTEGRATIONS
-- ============================================================
CREATE POLICY "Members can view tenant integrations"
ON public.integrations FOR SELECT TO authenticated
USING (public.has_tenant_access(auth.uid(), tenant_id));

CREATE POLICY "Admins can manage tenant integrations"
ON public.integrations FOR ALL TO authenticated
USING (public.is_tenant_admin(auth.uid(), tenant_id))
WITH CHECK (public.is_tenant_admin(auth.uid(), tenant_id));

-- ============================================================
-- TRIGGERS — updated_at
-- ============================================================
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_tenants_updated BEFORE UPDATE ON public.tenants
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER trg_leads_updated BEFORE UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER trg_appointments_updated BEFORE UPDATE ON public.appointments
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER trg_integrations_updated BEFORE UPDATE ON public.integrations
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();