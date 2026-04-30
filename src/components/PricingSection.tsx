import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PRICING_TIERS, type PricingTier } from "@/data/pricing";
import { Check } from "lucide-react";

function PricingCard({ tier, price, meals, features, featured }: PricingTier) {
  return (
    <div
      className={cn(
        "flex w-[240px] flex-col gap-3 rounded-card-lg px-5 py-7 transition-ambient hover:scale-[1.02]",
        featured
          ? "shadow-card-lg"
          : "shadow-card"
      )}
      style={{
        background: "var(--card-bg)",
        border: featured
          ? "2px solid var(--orange)"
          : "1px solid var(--card-border)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--ink-muted)" }}>
          {tier}
        </span>
        {featured && (
          <span
            className="rounded-full px-2.5 py-0.5 text-[0.6875rem] font-bold tracking-wide text-white"
            style={{ background: "var(--orange)" }}
          >
            Popular
          </span>
        )}
      </div>

      {/* Price */}
      <div className="font-display text-4xl font-bold leading-none"
           style={{ color: "var(--ink)" }}>
        ${price}
        <span className="text-sm font-normal" style={{ color: "var(--ink-dim)" }}>
          {" "}/ week
        </span>
      </div>

      <p className="text-[0.8125rem]" style={{ color: "var(--ink-dim)" }}>
        {meals}
      </p>

      {/* Divider */}
      <div className="h-px" style={{ background: "var(--card-border)" }} />

      {/* Features */}
      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-start gap-1.5 text-[0.8125rem]"
          style={{ color: "var(--ink-dim)" }}
        >
          <Check
            size={14}
            className="mt-0.5 shrink-0"
            style={{ color: "var(--orange)" }}
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
          featured ? "btn-orange" : "border-[1.5px] bg-transparent hover:opacity-80"
        )}
        style={
          featured
            ? {}
            : { borderColor: "var(--hero-bg)", color: "var(--hero-bg)" }
        }
      >
        Select plan
      </Link>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      className="mx-auto max-w-[900px] px-5 py-16 md:px-10"
      style={{ background: "var(--page-bg)" }}
    >
      <div className="mb-10 text-center">
        <span
          className="mb-2 block text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--orange)" }}
        >
          Pricing
        </span>
        <h2
          className="font-display text-3xl font-bold"
          style={{ color: "var(--ink)" }}
        >
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