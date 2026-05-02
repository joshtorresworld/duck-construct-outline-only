DO $$
DECLARE
  v_owner uuid := 'b86f2281-ab89-45d6-9f7d-bc997cc144c8';
  v_tenant_id uuid;
  rec RECORD;
BEGIN
  FOR rec IN
    SELECT * FROM (VALUES
      ('Test · Real Estate',  'real_estate'),
      ('Test · Dental',       'dental'),
      ('Test · Roofing',      'roofing'),
      ('Test · Auto Repair',  'auto_repair'),
      ('Test · Salon & Spa',  'salon_spa')
    ) AS t(name, industry)
  LOOP
    SELECT id INTO v_tenant_id FROM public.tenants WHERE name = rec.name LIMIT 1;
    IF v_tenant_id IS NULL THEN
      INSERT INTO public.tenants (name, industry, status)
      VALUES (rec.name, rec.industry::tenant_industry, 'trial')
      RETURNING id INTO v_tenant_id;
    END IF;

    INSERT INTO public.tenant_members (tenant_id, user_id, role)
    VALUES (v_tenant_id, v_owner, 'owner')
    ON CONFLICT DO NOTHING;
  END LOOP;
END $$;