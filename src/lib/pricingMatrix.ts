/* ────────────────────────────────────────────────────────
   DataPulse — Pricing Matrix (Single Source of Truth)
   
   ALL pricing values live here. Components import
   `getPrice()` and tier metadata — never hardcode
   numbers in JSX.
   ──────────────────────────────────────────────────────── */

// ── Types ────────────────────────────────────────────────

export type TierId = "starter" | "growth" | "enterprise";
export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

export interface TierMeta {
  id: TierId;
  name: string;
  tagline: string;
  cta: string;
  highlighted: boolean;
  features: string[];
}

export interface CurrencyConfig {
  symbol: string;
  locale: string;
  /** Regional tariff multiplier applied to the INR base price */
  tariffMultiplier: number;
}

// ── Constants ────────────────────────────────────────────

/** Annual billing discount: 20% off monthly */
export const ANNUAL_MULTIPLIER = 0.8;

// ── Currency Configuration ───────────────────────────────

export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    symbol: "₹",
    locale: "en-IN",
    tariffMultiplier: 1, // base currency
  },
  USD: {
    symbol: "$",
    locale: "en-US",
    tariffMultiplier: 1 / 83, // INR / 83
  },
  EUR: {
    symbol: "€",
    locale: "de-DE",
    tariffMultiplier: 1 / 90, // INR / 90
  },
};

// ── Base Prices (INR / month) ────────────────────────────

const basePricesINR: Record<TierId, number> = {
  starter: 1499,
  growth: 4999,
  enterprise: 14999,
};

// ── Tier Metadata ────────────────────────────────────────

export const tiers: TierMeta[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For solo founders & side projects",
    cta: "Start Free Trial",
    highlighted: false,
    features: [
      "5 data pipelines",
      "10 000 records / month",
      "3 integrations",
      "Community support",
      "Basic analytics dashboard",
      "CSV & JSON export",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For scaling teams & startups",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "Unlimited pipelines",
      "500 000 records / month",
      "25+ integrations",
      "Priority email support",
      "Advanced AI transformations",
      "Webhook & API access",
      "Team collaboration (5 seats)",
      "Custom scheduling",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For orgs with mission-critical data",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Unlimited records",
      "SSO & RBAC",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "Custom integrations",
      "On-prem deployment option",
      "SOC 2 & HIPAA compliance",
      "Unlimited seats",
    ],
  },
];

// ── Price Computation ────────────────────────────────────

/**
 * Computes the display price for a given tier, currency, and billing cycle.
 *
 * Formula:
 *   price = basePriceINR × currencyTariff × (annual ? 0.8 : 1)
 *
 * @returns A formatted string like "$59.99" or "₹4,999"
 */
export function getPrice(
  tier: TierId,
  currency: CurrencyCode,
  billing: BillingCycle
): string {
  const base = basePricesINR[tier];
  const config = currencies[currency];

  let price = base * config.tariffMultiplier;

  if (billing === "annual") {
    price *= ANNUAL_MULTIPLIER;
  }

  // Format with locale-aware number formatting
  const formatted = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: currency === "INR" ? 0 : 2,
    maximumFractionDigits: currency === "INR" ? 0 : 2,
  }).format(price);

  return `${config.symbol}${formatted}`;
}

/**
 * Returns the annual savings amount as a formatted string.
 */
export function getAnnualSavings(
  tier: TierId,
  currency: CurrencyCode
): string {
  const base = basePricesINR[tier];
  const config = currencies[currency];

  const monthlyPrice = base * config.tariffMultiplier;
  const annualMonthly = monthlyPrice * ANNUAL_MULTIPLIER;
  const savings = (monthlyPrice - annualMonthly) * 12;

  const formatted = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: currency === "INR" ? 0 : 2,
    maximumFractionDigits: currency === "INR" ? 0 : 2,
  }).format(savings);

  return `${config.symbol}${formatted}`;
}

// ── Full Pricing Matrix (precomputed for reference) ──────

export type PricingMatrix = Record<
  TierId,
  Record<CurrencyCode, Record<BillingCycle, string>>
>;

/**
 * Generates the complete pricing matrix — every combination
 * of tier × currency × billing cycle.
 */
export function buildPricingMatrix(): PricingMatrix {
  const tierIds: TierId[] = ["starter", "growth", "enterprise"];
  const currencyCodes: CurrencyCode[] = ["INR", "USD", "EUR"];
  const billingCycles: BillingCycle[] = ["monthly", "annual"];

  const matrix = {} as PricingMatrix;

  for (const tier of tierIds) {
    matrix[tier] = {} as Record<CurrencyCode, Record<BillingCycle, string>>;
    for (const currency of currencyCodes) {
      matrix[tier][currency] = {} as Record<BillingCycle, string>;
      for (const billing of billingCycles) {
        matrix[tier][currency][billing] = getPrice(tier, currency, billing);
      }
    }
  }

  return matrix;
}
