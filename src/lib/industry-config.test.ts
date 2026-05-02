import { describe, it, expect } from "vitest";
import { INDUSTRY_CONFIG, getIndustryConfig, type IndustryKey } from "./industry-config";

const KEYS: IndustryKey[] = [
  "real_estate",
  "dental",
  "roofing",
  "auto_repair",
  "salon_spa",
];

// Industry-specific tokens we expect to appear somewhere in that industry's
// copy. If any of these go missing we've regressed the per-industry tuning.
const EXPECTED_TOKENS: Record<IndustryKey, string[]> = {
  real_estate: ["Zillow", "Realtor.com", "showing"],
  dental: ["Dentrix", "chairs"],
  roofing: ["Angi", "estimate"],
  auto_repair: ["Shopmonkey", "bays"],
  salon_spa: ["Vagaro", "Instagram", "rebook"],
};

describe("INDUSTRY_CONFIG — 30-Day Revenue Playbook coverage", () => {
  it.each(KEYS)("has a complete config for %s", (key) => {
    const cfg = INDUSTRY_CONFIG[key];
    expect(cfg).toBeDefined();
    expect(cfg.label.length).toBeGreaterThan(0);
    expect(cfg.serviceNoun.length).toBeGreaterThan(0);
    expect(cfg.serviceNounPlural.length).toBeGreaterThan(0);
    expect(cfg.leadSources.length).toBeGreaterThanOrEqual(4);
    expect(cfg.defaultGreetingTemplate).toContain("{{lead_first_name}}");
    expect(cfg.defaultGreetingTemplate).toContain("{{tenant_name}}");
    expect(cfg.liteModeBlurb.length).toBeGreaterThan(20);
    expect(cfg.setupBannerSubtext.length).toBeGreaterThan(20);
    expect(cfg.liveEmptyState.headline.length).toBeGreaterThan(0);
    expect(cfg.liveEmptyState.subtext.length).toBeGreaterThan(20);
    expect(cfg.pendingEmptyState.headline.length).toBeGreaterThan(0);
    expect(cfg.pendingEmptyState.subtext.length).toBeGreaterThan(20);
  });

  it.each(KEYS)("contains industry-specific tokens for %s", (key) => {
    const cfg = INDUSTRY_CONFIG[key];
    const haystack = [
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
    for (const token of EXPECTED_TOKENS[key]) {
      expect(haystack).toContain(token.toLowerCase());
    }
  });
});

describe("getIndustryConfig", () => {
  it("returns the matching config for known keys", () => {
    expect(getIndustryConfig("real_estate").serviceNoun).toBe("showing");
    expect(getIndustryConfig("dental").serviceNounPlural).toBe("appointments");
  });

  it("falls back safely for unknown / null industries", () => {
    expect(getIndustryConfig(null).label).toBe("Business");
    expect(getIndustryConfig("not_a_real_industry").serviceNoun).toBe("appointment");
  });
});
