The Settings button in the dashboard header has no `onClick` handler, so clicking it does nothing.

Fix: wire the Settings button in `src/pages/Dashboard.tsx` to navigate to `/setup` (the page that holds all setup/configuration — phone, calendar, CRM, script, Lite Mode toggle).

Single change in `src/pages/Dashboard.tsx`:
- Add `onClick={() => navigate("/setup")}` to the Settings button in the dashboard header.

No other files need to change. After this, clicking Settings from the dashboard will open the setup/configuration page where you can edit your phone number, script, calendar, and Lite Mode preference.