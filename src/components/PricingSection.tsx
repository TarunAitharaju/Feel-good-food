import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PRICING_TIERS, type PricingTier } from "@/data/pricing";
import { Check } from "lucide-react";

function PricingCard({ tier, price, meals, features, featured }: PricingTier) {
  return (
    <div
      className={cn(
        "relative flex w-[260px] flex-col gap-4 overflow-hidden rounded-2xl p-7 transition-all duration-300",
        featured
          ? "border border-terracotta/40 bg-white/[0.06] shadow-terracotta-lg backdrop-blur-xl"
          : "glass-card border border-white/[0.08] bg-white/[0.03] shadow-glass hover:bg-white/[0.06]"
      )}
    >
      {/* Featured glow */}
      {featured && (
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-terracotta/20 blur-3xl" />
      )}

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-cream/50">
          {tier}
        </span>
        {featured && (
          <span className="rounded-full bg-terracotta/20 px-3 py-0.5 text-[0.6875rem] font-bold tracking-wide text-terracotta border border-terracotta/30">
            Popular
          </span>
        )}
      </div>

      {/* Price */}
      <div className="relative z-10 font-display text-5xl font-bold leading-none text-cream">
        ${price}
        <span className="text-base font-normal text-cream/50"> / week</span>
      </div>

      <p className="relative z-10 text-sm text-cream/50">{meals}</p>

      <div className="h-px bg-white/[0.08]" />

      {/* Features */}
      <div className="relative z-10 flex flex-col gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 text-sm text-cream/70">
            <Check size={14} className="shrink-0 text-gold" strokeWidth={2.5} />
            {feature}
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        to="/subscribe"
        className={cn(
          "relative z-10 mt-2 rounded-full py-3 text-center text-sm font-semibold transition-all duration-300",
          featured
            ? "btn-primary"
            : "btn-ghost"
        )}
      >
        Select plan
      </Link>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card border border-white/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium text-cream/60 uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-cream lg:text-5xl">
            Simple <em className="italic text-gold">weekly plans</em>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.tier} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
