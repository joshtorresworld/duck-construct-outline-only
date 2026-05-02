// Shared check runner: same assertions as src/lib/industry-config.test.ts,
// but callable from the browser so the QA dashboard can show live pass/fail
// per industry without needing to spawn Vitest.

import {
  INDUSTRY_CONFIG,
  type IndustryConfig,
  type IndustryKey,
} from "./industry-config";

export type CheckResult = {
  id: string;
  label: string;
  pass: boolean;
  detail?: string;
};

export type IndustryCheckReport = {
  key: IndustryKey;
  label: string;
  results: CheckResult[];
  passCount: number;
  failCount: number;
  allPassed: boolean;
};

export const INDUSTRY_KEYS: IndustryKey[] = [
  "real_estate",
  "dental",
  "roofing",
  "auto_repair",
  "salon_spa",
];

// Industry-specific tokens we expect somewhere in the copy. Mirrors the test.
const EXPECTED_TOKENS: Record<IndustryKey, string[]> = {
  real_estate: ["Zillow", "Realtor.com", "showing"],
  dental: ["Dentrix", "chairs"],
  roofing: ["Angi", "estimate"],
  auto_repair: ["Shopmonkey", "bays"],
  salon_spa: ["Vagaro", "Instagram", "rebook"],
};

const haystack = (cfg: IndustryConfig) =>
  [
    cfg.label,
    cfg.serviceNoun,
    cfg.serviceNounPlural,
    cfg.leadSources.join(" "),
    cfg.defaultGreetingTemplate,
    cfg.liteModeBlurb,
    cfg.setupBannerSubtext,
    cfg.liveEmptyState.headline,
    cfg.liveEmptyState.subtext,
    cfg.pendingEmptyState.headline,
    cfg.pendingEmptyState.subtext,
  ]
    .join(" ")
    .toLowerCase();

export const runIndustryChecks = (key: IndustryKey): IndustryCheckReport => {
  const cfg = INDUSTRY_CONFIG[key];
  const results: CheckResult[] = [];

  const add = (id: string, label: string, pass: boolean, detail?: string) =>
    results.push({ id, label, pass, detail });

  add("config-exists", "Config is defined", !!cfg);
  add("label", "Has a human label", !!cfg?.label && cfg.label.length > 0, cfg?.label);
  add(
    "service-noun",
    "Has a service noun (singular + plural)",
    !!cfg?.serviceNoun && !!cfg?.serviceNounPlural,
    `${cfg?.serviceNoun} / ${cfg?.serviceNounPlural}`
  );
  add(
    "lead-sources",
    "≥ 4 lead sources defined",
    (cfg?.leadSources?.length ?? 0) >= 4,
    cfg?.leadSources?.join(", ")
  );
  add(
    "greeting-vars",
    "Default greeting has both placeholders",
    !!cfg?.defaultGreetingTemplate &&
      cfg.defaultGreetingTemplate.includes("{{lead_first_name}}") &&
      cfg.defaultGreetingTemplate.includes("{{tenant_name}}")
  );
  add(
    "lite-blurb",
    "Lite Mode blurb is meaningful (>20 chars)",
    (cfg?.liteModeBlurb?.length ?? 0) > 20
  );
  add(
    "banner-subtext",
    "Setup banner subtext is meaningful (>20 chars)",
    (cfg?.setupBannerSubtext?.length ?? 0) > 20
  );
  add(
    "live-empty",
    "Live empty state has headline + subtext",
    !!cfg?.liveEmptyState?.headline && (cfg?.liveEmptyState?.subtext?.length ?? 0) > 20
  );
  add(
    "pending-empty",
    "Pending empty state has headline + subtext",
    !!cfg?.pendingEmptyState?.headline &&
      (cfg?.pendingEmptyState?.subtext?.length ?? 0) > 20
  );

  // Industry-specific token check
  if (cfg) {
    const hay = haystack(cfg);
    for (const token of EXPECTED_TOKENS[key]) {
      add(
        `token-${token}`,
        `Mentions "${token}"`,
        hay.includes(token.toLowerCase()),
        token
      );
    }
  }

  const passCount = results.filter((r) => r.pass).length;
  const failCount = results.length - passCount;

  return {
    key,
    label: cfg?.label ?? key,
    results,
    passCount,
    failCount,
    allPassed: failCount === 0,
  };
};

export const runAllIndustryChecks = (): IndustryCheckReport[] =>
  INDUSTRY_KEYS.map(runIndustryChecks);
