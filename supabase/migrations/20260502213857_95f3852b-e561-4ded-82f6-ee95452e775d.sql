-- Lock tenant creation to the service role (provision-workspace edge function).
DROP POLICY IF EXISTS "Authenticated users can create tenants" ON public.tenants;