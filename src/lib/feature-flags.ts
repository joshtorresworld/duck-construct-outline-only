/**
 * Centralized feature flags for integrations that aren't fully wired yet.
 *
 * When a flag is `false` (the default), the corresponding UI surfaces a
 * "Preview mode" banner so users know the integration is simulated — they
 * won't think their phone, calendar, or CRM is actually live.
 *
 * To enable an integration in production, set the matching env var to "true"
 * in your Lovable project settings (or .env.production).
 */
const flag = (key: string): boolean => {
  const val = (import.meta.env as Record<string, unknown>)[key];
  return val === "true" || val === true || val === "1";
};

export const FEATURE_FLAGS = {
  twilio: flag("VITE_TWILIO_ENABLED"),
  googleCalendar: flag("VITE_GOOGLE_CALENDAR_ENABLED"),
  outlookCalendar: flag("VITE_OUTLOOK_CALENDAR_ENABLED"),
  crm: flag("VITE_CRM_ENABLED"),
} as const;

export const anyCalendarEnabled = (): boolean =>
  FEATURE_FLAGS.googleCalendar || FEATURE_FLAGS.outlookCalendar;
