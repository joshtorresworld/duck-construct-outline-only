// Shared helpers for determining setup completion across /setup and /dashboard.
// Keep this file as the single source of truth so the two pages can never disagree.

export type TenantSettings = {
  lite_mode?: boolean;
  phone?: { number?: string | number };
  calendar?: { email?: string };
  script?: { greeting?: string };
  [key: string]: unknown;
};

const hasValue = (v: unknown): boolean => {
  if (v === null || v === undefined) return false;
  if (typeof v === "string") return v.trim().length > 0;
  if (typeof v === "number") return !Number.isNaN(v);
  return true;
};

export const isLiteMode = (settings: TenantSettings | null | undefined): boolean =>
  !!(settings && settings.lite_mode);

export const isSetupComplete = (settings: TenantSettings | null | undefined): boolean => {
  if (!settings) return false;
  const lite = isLiteMode(settings);
  const phoneOk = hasValue(settings.phone?.number);
  const scriptOk = hasValue(settings.script?.greeting);
  if (lite) return phoneOk && scriptOk;
  const calendarOk = hasValue(settings.calendar?.email);
  return phoneOk && scriptOk && calendarOk;
};
