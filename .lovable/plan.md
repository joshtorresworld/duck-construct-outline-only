## What I confirmed

The 5 industries in the 30-Day Revenue Playbook (`/quick-wins`) are:
1. Real Estate & Property Management
2. Dental & Optometry
3. Roofing
4. Auto Repair
5. Salon & Spa

These are also the only 5 values allowed in the database (`tenant_industry` enum) and the only 5 shown during onboarding. **Every tenant app screen (`/dashboard`, `/setup`) is shared across all 5** — so the recent fixes (Lite Mode toggle, hosted phone provisioning, refresh-safe setup-complete detection, working Settings button) already apply to all 5 today. No duplication needed there.

## What's still generic and should be industry-aware

The fixes work, but the **content** inside `/setup` and `/dashboard` is one-size-fits-all. A roofer and a dentist see the exact same lead-source list, the exact same script greeting placeholder, and the exact same banner copy. That's the real "apply to all 5 industries" work.

## Plan

### 1. Create one shared industry config
New file `src/lib/industry-config.ts` keyed by the 5 enum values. For each industry, define:
- `label` (e.g. "Real Estate", "Dental Practice")
- `leadSources` — the relevant ones (real estate gets Zillow / Realtor.com / Google LSA; dental gets web form / Google / Yelp / Healthgrades; roofing gets Google LSA / Angi / Facebook Lead Ads / storm leads; auto repair gets Google / Yelp / web form / phone calls; salon/spa gets Instagram / web form / Google / walk-ins)
- `defaultGreeting` — opening SMS tuned to that industry (mirrors the playbook tone in `/quick-wins`)
- `serviceNoun` — "showing", "appointment", "estimate", "service appointment", "appointment"
- `dashboardEmptyCopy` — "waiting on the first lead" tuned per industry
- `liteModeBlurb` — what the hosted-number flow promises for that industry

### 2. Wire `/setup` to the config
- `SourcesDialog` reads `industryConfig[tenant.industry].leadSources` instead of the hardcoded `SOURCE_OPTIONS`.
- `ScriptDialog`'s `defaultGreeting` uses the industry-specific opener.
- The "Connect phone & SMS" / "Get a hosted phone number" descriptions reference the right service noun.
- The Lite Mode card blurb uses the industry-tuned promise.

### 3. Wire `/dashboard` to the config
- The "Finish setup to go live" banner subtext reflects the right service noun (e.g. "start booking showings" vs "fill empty chairs" vs "book estimates").
- The "You're live — waiting on the first lead" empty state uses the industry-tuned copy.
- The Connect phone / calendar / CRM CTAs stay the same; only copy changes.

### 4. Keep all existing fixes intact
- Lite Mode toggle, hosted phone provisioning, refresh-safe `setupComplete`, and the Settings button → `/setup` all remain — they now work **and** speak the right language for whichever of the 5 industries the tenant picked at onboarding.

### 5. Verify per industry
Manually walk through `/setup` and `/dashboard` for a tenant set to each of the 5 industries (DB update only — no UI to switch industry post-onboarding) and confirm the copy and lead-source list change appropriately, while the Lite Mode flow and refresh behavior stay identical.

### Out of scope
- The marketing/blueprint pages under `/industries`, `/quick-wins`, etc. — these are public sales surfaces, not the logged-in product.
- Adding industries beyond the 5 in the playbook.
- Real Twilio/Google Calendar/CRM wiring (still simulated; that was already noted as a separate future task).