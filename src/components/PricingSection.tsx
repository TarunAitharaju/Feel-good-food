import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PRICING_TIERS, type PricingTier } from "@/data/pricing";
import { Check } from "lucide-react";

function PricingCard({ tier, price, meals, features, featured }: PricingTier) {
  return (
    <div
      className={cn(
        "flex w-[240px] flex-col gap-3 rounded-card-lg bg-white px-5 py-7 transition-ambient hover:scale-[1.02]",
        featured
          ? "border-2 border-orange shadow-card-lg"
          : "border border-black/[0.08] shadow-card"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-ink-muted">
          {tier}
        </span>
        {featured && (
          <span className="rounded-full bg-orange px-2.5 py-0.5 text-[0.6875rem] font-bold tracking-wide text-white">
            Popular
          </span>
        )}
      </div>

      <div className="font-display text-4xl font-bold leading-none text-ink">
        ${price}
        <span className="text-sm font-normal text-ink-dim"> / week</span>
      </div>

      <p className="text-[0.8125rem] text-ink-dim">{meals}</p>

      <div className="h-px bg-black/[0.08]" />

      {features.map((feature) => (
        <div key={feature} className="flex items-start gap-1.5 text-[0.8125rem] text-ink-dim">
          <Check size={14} className="mt-0.5 shrink-0 text-orange" strokeWidth={2.5} />
          {feature}
        </div>
      ))}

      <Link
        to="/subscribe"
        className={cn(
          "mt-2 rounded-full py-3 text-center text-[0.9rem] font-semibold transition-ambient",
          featured
            ? "btn-orange"
            : "border-[1.5px] border-forest bg-transparent text-forest hover:bg-forest/5"
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
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-orange">
          Pricing
        </span>
        <h2 className="font-display text-3xl font-bold text-ink">
          Simple weekly plans
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {PRICING_TIERS.map((t) => (
          <PricingCard key={t.tier} {...t} />
        ))}
      </div>
    </section>
  );
}
