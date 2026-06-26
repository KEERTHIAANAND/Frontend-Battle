import { TierMeta } from "@/lib/pricingMatrix";

interface PriceTierCardProps {
  tier: TierMeta;
  initialPrice: string;
}

export default function PriceTierCard({ tier, initialPrice }: PriceTierCardProps) {
  return (
    <article
      aria-label={`${tier.name} plan`}
      className={`relative p-8 rounded-2xl pricing-glow transition-transform duration-300 hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-nocturnal text-arctic border-2 border-forsythia pricing-pulse md:scale-[1.04]"
          : "bg-white text-oceanic-noir border border-mystic-mint hover:border-forsythia/40"
      }`}
    >
      {tier.highlighted && (
        <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-forsythia text-oceanic-noir text-xs font-bold font-display tracking-wider rounded-full uppercase">
          Most Popular
        </p>
      )}
      
      <h3 className="text-xl font-bold font-display mb-1">{tier.name}</h3>
      
      <p
        className={`text-sm font-body mb-6 ${
          tier.highlighted ? "text-mystic-mint/70" : "text-nocturnal/50"
        }`}
      >
        {tier.tagline}
      </p>

      <p className="mb-6 flex flex-col items-start min-h-[4rem]">
        <span
          data-price-node
          data-tier={tier.id}
          data-currency="INR"
          data-billing="monthly"
          className="text-4xl font-bold font-display"
        >
          {initialPrice}
        </span>
        <span
          data-cycle-node
          className={`text-sm font-body mt-1 ${
            tier.highlighted ? "text-mystic-mint/60" : "text-nocturnal/40"
          }`}
        >
          /month
        </span>
      </p>

      <a
        href="#"
        role="button"
        aria-label={`${tier.cta} — ${tier.name} plan`}
        className={`btn-cta block w-full py-3 rounded-full font-bold font-display text-sm tracking-wide transition-colors mb-8 text-center ${
          tier.highlighted
            ? "bg-forsythia text-oceanic-noir"
            : "bg-nocturnal text-arctic"
        }`}
      >
        {tier.cta}
      </a>

      <ul aria-label={`${tier.name} plan features`} className="space-y-3">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm font-body">
            <span className="text-forsythia mt-0.5 shrink-0" aria-hidden="true">
              ✓
            </span>
            <span
              className={
                tier.highlighted ? "text-mystic-mint/90" : "text-nocturnal/70"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
