import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PRICING_TIERS, type PricingTier } from "@/data/pricing";
import { Check } from "lucide-react";

function PricingCard({ tier, price, meals, features, featured }: PricingTier) {
  return (
    <div
      className={cn(
        "glass flex w-[240px] flex-col gap-3 rounded-card-lg px-5 py-7 transition-ambient hover:scale-[1.02]",
        featured
          ? "border-[1.5px] border-forest/30 shadow-[0_0_0_2px_rgba(52,103,57,0.08),0_4px_16px_rgba(52,103,57,0.12),0_1px_4px_rgba(31,26,21,0.05)]"
          : "border border-forest/10 shadow-glass-md"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-ink-muted text-xs font-bold uppercase tracking-widest">
          {tier}
        </span>
        {featured && (
          <span className="rounded-full bg-forest px-2.5 py-0.5 text-[0.6875rem] font-bold tracking-wide text-white">
            Popular
          </span>
        )}
      </div>

      {/* Price */}
      <div className="font-display text-ink text-depth text-4xl font-medium leading-none">
        ${price}
        <span className="text-ink-dim text-sm font-normal"> / week</span>
      </div>

      <p className="text-ink-dim text-[0.8125rem]">{meals}</p>

      {/* Divider */}
      <div className="h-px bg-forest/8" />

      {/* Features */}
      {features.map((feature) => (
        <div
          key={feature}
          className="text-ink-dim flex items-start gap-1.5 text-[0.8125rem]"
        >
          <Check
            size={14}
            className="mt-0.5 shrink-0 text-forest"
            strokeWidth={2.5}
          />
          {feature}
        </div>
      ))}

      {/* CTA */}
      <Link
        to="/subscribe"
        className={cn(
          "mt-2 rounded-full py-3 text-center text-[0.9rem] font-semibold transition-ambient",
          featured
            ? "bg-forest text-white shadow-forest-sm hover:shadow-forest"
            : "border-[1.5px] border-forest/25 bg-transparent text-forest hover:border-forest/40 hover:bg-forest/5"
        )}
      >
        Select plan
      </Link>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 md:px-10">
      <div className="mb-10 text-center">
        <span className="text-ink-muted mb-2 block text-xs font-bold uppercase tracking-widest">
          Pricing
        </span>
        <h2 className="font-display text-ink text-depth text-3xl font-normal">
          Simple weekly plans
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.tier} {...tier} />
        ))}
      </div>
    </section>
  );
}
