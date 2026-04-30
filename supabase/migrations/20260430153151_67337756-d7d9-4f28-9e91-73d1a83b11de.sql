CREATE OR REPLACE FUNCTION public.provision_tenant_workspace(
  _name TEXT,
  _industry public.tenant_industry,
  _business_phone TEXT DEFAULT NULL,
  _business_email TEXT DEFAULT NULL,
  _timezone TEXT DEFAULT 'America/New_York',
  _monthly_price_cents INTEGER DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  industry public.tenant_industry,
  status public.tenant_status,
  trial_ends_at TIMESTAMPTZ,
  business_phone TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _current_user UUID := auth.uid();
  _new_tenant_id UUID;
BEGIN
  IF _current_user IS NULL THEN
    RAISE EXCEPTION 'You must be signed in to create a workspace.';
  END IF;

  INSERT INTO public.tenants (
    name,
    industry,
    business_phone,
    business_email,
    timezone,
    monthly_price_cents
  ) VALUES (
    NULLIF(BTRIM(_name), ''),
    _industry,
    NULLIF(BTRIM(_business_phone), ''),
    NULLIF(BTRIM(_business_email), ''),
    COALESCE(NULLIF(BTRIM(_timezone), ''), 'America/New_York'),
    _monthly_price_cents
  )
  RETURNING tenants.id INTO _new_tenant_id;

  INSERT INTO public.tenant_members (tenant_id, user_id, role)
  VALUES (_new_tenant_id, _current_user, 'owner')
  ON CONFLICT (tenant_id, user_id) DO UPDATE SET role = 'owner';

  RETURN QUERY
  SELECT
    t.id,
    t.name,
    t.industry,
    t.status,
    t.trial_ends_at,
    t.business_phone
  FROM public.tenants t
  WHERE t.id = _new_tenant_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.provision_tenant_workspace(TEXT, public.tenant_industry, TEXT, TEXT, TEXT, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.provision_tenant_workspace(TEXT, public.tenant_industry, TEXT, TEXT, TEXT, INTEGER) TO authenticated;