import { describe, it, expect } from "vitest";
import { getIndustryConfig } from "./industry-config";
import { INDUSTRY_KEYS, runIndustryChecks } from "./industry-checks";

describe("INDUSTRY_CONFIG — 30-Day Revenue Playbook coverage", () => {
  it.each(INDUSTRY_KEYS)("all checks pass for %s", (key) => {
    const report = runIndustryChecks(key);
    const failed = report.results.filter((r) => !r.pass);
    expect(
      failed,
      `Failed checks for ${key}:\n` +
        failed.map((f) => ` - ${f.label}${f.detail ? ` (${f.detail})` : ""}`).join("\n")
    ).toEqual([]);
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
