-- Security hardening — addresses findings from production-readiness scan.

-- Fix 1 (CRITICAL): Privilege escalation on tenant_members
DROP POLICY IF EXISTS "Users can insert themselves as owner of new tenants"
  ON public.tenant_members;

-- Fix 2 (WARNING): Restrict integrations SELECT to admins only
DROP POLICY IF EXISTS "Members can view tenant integrations"
  ON public.integrations;

-- Fix 3 (WARNING): Lock down EXECUTE on SECURITY DEFINER helper functions
REVOKE EXECUTE ON FUNCTION public.has_tenant_access(uuid, uuid)
  FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_tenant_admin(uuid, uuid)
  FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.has_tenant_role(uuid, uuid, public.app_role)
  FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.has_tenant_access(uuid, uuid)
  TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_tenant_admin(uuid, uuid)
  TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_tenant_role(uuid, uuid, public.app_role)
  TO authenticated;