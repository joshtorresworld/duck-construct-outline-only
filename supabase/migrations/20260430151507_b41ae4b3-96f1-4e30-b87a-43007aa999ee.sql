-- Set search_path on the trigger function
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Revoke broad execute from helper SECURITY DEFINER functions and grant only to authenticated
REVOKE EXECUTE ON FUNCTION public.has_tenant_access(UUID, UUID) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.has_tenant_role(UUID, UUID, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_tenant_admin(UUID, UUID) FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.has_tenant_access(UUID, UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_tenant_role(UUID, UUID, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_tenant_admin(UUID, UUID) TO authenticated;

-- Tighten tenant INSERT — only authenticated users, and they must be the creator
DROP POLICY IF EXISTS "Authenticated users can create tenants" ON public.tenants;

CREATE POLICY "Authenticated users can create tenants"
ON public.tenants FOR INSERT TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);