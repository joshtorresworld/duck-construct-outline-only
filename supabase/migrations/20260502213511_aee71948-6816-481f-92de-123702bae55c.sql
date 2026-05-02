-- Create admin-only tenant_billing table
CREATE TABLE public.tenant_billing (
  tenant_id uuid PRIMARY KEY REFERENCES public.tenants(id) ON DELETE CASCADE,
  stripe_customer_id text,
  stripe_subscription_id text,
  monthly_price_cents integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Move existing data
INSERT INTO public.tenant_billing (tenant_id, stripe_customer_id, stripe_subscription_id, monthly_price_cents)
SELECT id, stripe_customer_id, stripe_subscription_id, monthly_price_cents
FROM public.tenants
WHERE stripe_customer_id IS NOT NULL
   OR stripe_subscription_id IS NOT NULL
   OR monthly_price_cents IS NOT NULL;

-- Drop the columns from tenants
ALTER TABLE public.tenants
  DROP COLUMN stripe_customer_id,
  DROP COLUMN stripe_subscription_id,
  DROP COLUMN monthly_price_cents;

-- Enable RLS and add admin-only policies on the new table
ALTER TABLE public.tenant_billing ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view tenant billing"
  ON public.tenant_billing
  FOR SELECT
  TO authenticated
  USING (public.is_tenant_admin(auth.uid(), tenant_id));

CREATE POLICY "Admins can manage tenant billing"
  ON public.tenant_billing
  FOR ALL
  TO authenticated
  USING (public.is_tenant_admin(auth.uid(), tenant_id))
  WITH CHECK (public.is_tenant_admin(auth.uid(), tenant_id));

-- updated_at trigger using existing touch_updated_at function
CREATE TRIGGER tenant_billing_updated_at
  BEFORE UPDATE ON public.tenant_billing
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();