I found the dashboard banner is still controlled by a fragile client-side check that only reads the currently cached `tenant.settings` object. Your database row does show Lite Mode is on and both Lite steps are saved, so the app should be treating setup as complete.

Plan:

1. Centralize setup completion logic
   - Add a small shared helper that determines:
     - whether Lite Mode is enabled
     - which setup steps are required
     - whether setup is complete
   - Use the same helper in both `/setup` and `/dashboard` so they cannot disagree.

2. Make the dashboard refresh-safe
   - In `Dashboard.tsx`, fetch the latest tenant settings directly when the dashboard loads or refreshes, instead of relying only on the auth context’s cached tenant object.
   - Use the freshly loaded settings to hide the “Finish setup to go live” banner immediately after refresh.

3. Make Lite Mode completion tolerant of saved data shape
   - Treat the Lite Mode setup as complete when:
     - `settings.lite_mode === true`
     - `settings.phone.number` exists
     - `settings.script.greeting` exists
   - Normalize values so numeric-looking phone values or slightly different stored shapes do not cause false incomplete states.

4. Update dashboard messaging
   - If setup is complete, remove the warning banner and show the live/waiting-for-first-lead dashboard state.
   - If setup is incomplete, keep the existing setup CTA.

5. Verify the exact refresh case
   - Check `/setup` shows 2/2 complete.
   - Navigate to `/dashboard` and confirm no setup banner.
   - Refresh `/dashboard` and confirm the banner stays hidden.