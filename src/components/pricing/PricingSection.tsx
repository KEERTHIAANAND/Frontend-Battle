"use client";

import React, { useEffect } from "react";
import { tiers, getPrice } from "@/lib/pricingMatrix";
import PricingControls from "./PricingControls";
import PriceTierCard from "./PriceTierCard";
import { initPricing, cleanupPricing } from "./pricingController";

function PricingSectionComponent() {
  // Initialize the DOM-based vanilla controller strictly on mount
  useEffect(() => {
    initPricing();
    return () => cleanupPricing();
  }, []);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="reveal-up bg-mystic-mint/40 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="pricing-heading"
          className="text-[length:var(--text-section)] font-bold font-display text-oceanic-noir text-center mb-4 tracking-tight"
        >
          Simple, transparent pricing
        </h2>
        <p className="text-center text-nocturnal/60 font-body max-w-xl mx-auto mb-8 text-lg">
          Start free, scale as you grow. No hidden fees, no surprise charges.
        </p>

        {/* ── Pricing Controls (Vanilla DOM logic inside) ── */}
        <PricingControls />

        {/* ── Tier Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div key={tier.id} className="w-full">
              <PriceTierCard
                tier={tier}
                initialPrice={getPrice(tier.id, "INR", "monthly")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ensure the parent component never re-renders structurally
export default React.memo(PricingSectionComponent, () => true);
