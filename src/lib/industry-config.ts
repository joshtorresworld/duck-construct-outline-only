// Industry-aware copy + config for the 5 industries in the 30-Day Revenue Playbook.
// Used by /setup and /dashboard so a real estate team and a dental practice see
// the right lead sources, opening SMS, and banner copy — without forking pages.

export type IndustryKey = "real_estate" | "dental" | "roofing" | "auto_repair" | "salon_spa";

export type IndustryConfig = {
  label: string;
  serviceNoun: string; // e.g. "showing", "appointment", "estimate"
  serviceNounPlural: string;
  leadSources: string[];
  /** Opening SMS the AI sends a brand-new lead. {{lead_first_name}} and {{tenant_name}} get substituted. */
  defaultGreetingTemplate: string;
  /** One-line promise shown on the Lite Mode card on /setup. */
  liteModeBlurb: string;
  /** Subtext under the dashboard "Finish setup to go live" banner. */
  setupBannerSubtext: string;
  /** Headline + subtext for the dashboard empty state once setup is complete. */
  liveEmptyState: { headline: string; subtext: string };
  /** Headline + subtext for the dashboard empty state when setup is incomplete. */
  pendingEmptyState: { headline: string; subtext: string };
};

const FALLBACK: IndustryConfig = {
  label: "Business",
  serviceNoun: "appointment",
  serviceNounPlural: "appointments",
  leadSources: ["Web form", "Google", "Phone calls", "Referrals"],
  defaultGreetingTemplate:
    "Hi {{lead_first_name}}, this is the team at {{tenant_name}}. Thanks for reaching out — I can get you on the calendar in the next 24 hours. What time works best?",
  liteModeBlurb:
    "No phone, CRM, or calendar accounts? Skip integrations. We'll provision a hosted phone number and run everything inside Row of Ducks. You can connect external tools later.",
  setupBannerSubtext: "Connect your phone, calendar, and CRM to start capturing leads.",
  liveEmptyState: {
    headline: "You're live — waiting on the first lead",
    subtext:
      "Setup is complete. The next inquiry from any of your sources will get a sub-60-second AI response automatically.",
  },
  pendingEmptyState: {
    headline: "Your agents are ready",
    subtext:
      "Once you connect your phone number and lead sources, every new inquiry will get a sub-60-second response — automatically.",
  },
};

export const INDUSTRY_CONFIG: Record<IndustryKey, IndustryConfig> = {
  real_estate: {
    label: "Real Estate & Property Management",
    serviceNoun: "showing",
    serviceNounPlural: "showings",
    leadSources: ["Web form", "Zillow", "Realtor.com", "Google LSA", "Facebook Lead Ads", "Phone calls"],
    defaultGreetingTemplate:
      "Hi {{lead_first_name}}, this is {{tenant_name}} — saw you were looking at the property. I can get you in for a showing in the next 24 hours. What time works best, today or tomorrow?",
    liteModeBlurb:
      "No Twilio, kvCORE, or Follow Up Boss yet? Skip integrations. We'll provision a hosted number and start texting Zillow/Realtor.com leads in under 60 seconds. Connect your CRM later.",
    setupBannerSubtext:
      "Connect your phone, calendar, and CRM (Follow Up Boss / kvCORE / Sierra) to start booking showings automatically.",
    liveEmptyState: {
      headline: "You're live — waiting on the first lead",
      subtext:
        "The next Zillow, Realtor.com, or web form lead gets a text in under 60 seconds. 78% of buyers hire whichever agent calls first — that's now you.",
    },
    pendingEmptyState: {
      headline: "Ready to win the speed-to-lead race",
      subtext:
        "Once you connect your phone and lead sources, every new Zillow/Realtor.com inquiry gets a sub-60-second response — automatically.",
    },
  },
  dental: {
    label: "Dental & Optometry Practice",
    serviceNoun: "appointment",
    serviceNounPlural: "appointments",
    leadSources: ["Web form", "Google", "Yelp", "Healthgrades", "Phone calls", "Patient referrals"],
    defaultGreetingTemplate:
      "Hi {{lead_first_name}}, this is {{tenant_name}}. Thanks for reaching out — we have openings this week. Are you looking for a cleaning, exam, or something specific?",
    liteModeBlurb:
      "No SMS provider or calendar wired up? Skip integrations. We'll provision a hosted number and start filling chairs from your waitlist immediately. Connect your PMS later.",
    setupBannerSubtext:
      "Connect your phone, calendar, and PMS (Dentrix / Eaglesoft / Open Dental) to fill empty chairs and run recall.",
    liveEmptyState: {
      headline: "You're live — chairs ready to fill",
      subtext:
        "New patient inquiries get a text in under 60 seconds. Cancellations get filled from the waitlist. Overdue patients get reactivated.",
    },
    pendingEmptyState: {
      headline: "Ready to fill empty chairs",
      subtext:
        "Once you connect your phone and patient sources, every inquiry gets a sub-60-second response and overdue patients get auto-reactivated.",
    },
  },
  roofing: {
    label: "Roofing Contractor",
    serviceNoun: "estimate",
    serviceNounPlural: "estimates",
    leadSources: [
      "Web form",
      "Google LSA",
      "Angi",
      "Facebook Lead Ads",
      "Storm leads",
      "Phone calls",
      "Door-knock leads",
    ],
    defaultGreetingTemplate:
      "Hi {{lead_first_name}}, this is {{tenant_name}}. Got your request — I can have someone out for a free estimate as early as tomorrow. What's the address and is the damage from a recent storm?",
    liteModeBlurb:
      "No CRM or calendar yet? Skip integrations. We'll provision a hosted number and start texting Angi / Google LSA / storm leads in under 60 seconds. Connect JobNimbus or AccuLynx later.",
    setupBannerSubtext:
      "Connect your phone, calendar, and CRM (JobNimbus / AccuLynx / Roofr) to book estimates automatically.",
    liveEmptyState: {
      headline: "You're live — first estimate is one lead away",
      subtext:
        "Storm leads, Angi, Google LSA — every new inquiry gets a text in under 60 seconds and an estimate slot offered before the competition replies.",
    },
    pendingEmptyState: {
      headline: "Ready to lock in estimates first",
      subtext:
        "Once you connect your phone and lead sources, every new roofing inquiry gets a sub-60-second response and an estimate slot offered automatically.",
    },
  },
  auto_repair: {
    label: "Auto Repair Shop",
    serviceNoun: "service appointment",
    serviceNounPlural: "service appointments",
    leadSources: ["Web form", "Google", "Yelp", "Phone calls", "Repeat customers", "Tow-in referrals"],
    defaultGreetingTemplate:
      "Hi {{lead_first_name}}, this is {{tenant_name}}. Got your request — what's going on with the vehicle and when do you need it back? I can usually get you in within 24–48 hours.",
    liteModeBlurb:
      "No shop management software wired up? Skip integrations. We'll provision a hosted number and start booking service appointments from web/Google/Yelp leads immediately.",
    setupBannerSubtext:
      "Connect your phone, calendar, and shop management software (Shopmonkey / Mitchell1 / Tekmetric) to book service appointments automatically.",
    liveEmptyState: {
      headline: "You're live — bays ready to book",
      subtext:
        "Web, Google, and Yelp inquiries get a text in under 60 seconds. Bays stay booked and customers stop ghosting for the cheaper shop down the street.",
    },
    pendingEmptyState: {
      headline: "Ready to keep the bays full",
      subtext:
        "Once you connect your phone and lead sources, every new repair inquiry gets a sub-60-second response and a service slot offered automatically.",
    },
  },
  salon_spa: {
    label: "Salon & Spa",
    serviceNoun: "appointment",
    serviceNounPlural: "appointments",
    leadSources: ["Web form", "Instagram DMs", "Google", "Yelp", "Walk-ins", "Phone calls", "Repeat clients"],
    defaultGreetingTemplate:
      "Hi {{lead_first_name}}, this is {{tenant_name}}. Thanks for reaching out — what service were you thinking and which day works best? I can usually get you in this week.",
    liteModeBlurb:
      "No booking software or SMS provider wired up? Skip integrations. We'll provision a hosted number and start booking appointments and rebooks immediately. Connect Vagaro / Mindbody / Boulevard later.",
    setupBannerSubtext:
      "Connect your phone, calendar, and booking software (Vagaro / Mindbody / Boulevard) to book appointments and run rebook campaigns.",
    liveEmptyState: {
      headline: "You're live — chairs ready to book",
      subtext:
        "Instagram DMs, Google, and web inquiries get a text in under 60 seconds. 60% of clients normally don't rebook — yours now will.",
    },
    pendingEmptyState: {
      headline: "Ready to keep the books full",
      subtext:
        "Once you connect your phone and lead sources, every new inquiry gets a sub-60-second response and rebook reminders run automatically.",
    },
  },
};

/** Resolve a tenant.industry value (any string) to its config, with a safe fallback. */
export const getIndustryConfig = (industry: string | null | undefined): IndustryConfig => {
  if (!industry) return FALLBACK;
  const key = industry as IndustryKey;
  return INDUSTRY_CONFIG[key] ?? FALLBACK;
};

/**
 * Substitute {{tenant_name}} and {{lead_first_name}} placeholders in a greeting template.
 * Leaves unknown placeholders untouched (useful for preview/draft mode).
 */
export const renderGreeting = (
  template: string,
  vars: { tenantName: string; leadFirstName?: string },
): string => {
  let out = template.split("{{tenant_name}}").join(vars.tenantName);
  if (vars.leadFirstName !== undefined) {
    out = out.split("{{lead_first_name}}").join(vars.leadFirstName);
  }
  return out;
};

