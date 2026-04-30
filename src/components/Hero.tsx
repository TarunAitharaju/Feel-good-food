import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-5 pb-16 pt-20 md:px-10">
      {/* Background gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(61,89,38,0.10) 0%, rgba(252,143,0,0.06) 40%, rgba(138,171,110,0.08) 100%)",
        }}
      />
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.035] pointer-events-none" />

      {/* Glass content panel */}
      <div className="glass grain relative z-10 mx-auto max-w-[640px] rounded-card-lg px-8 py-12 text-center shadow-glass-lg md:px-11">
        <h1 className="font-display text-ink mb-4 text-[clamp(2.2rem,5vw,3.5rem)] font-light italic leading-[1.1] tracking-tight">
          Home food,
          <br />
          <span className="text-forest">made simple.</span>
        </h1>

        <p className="text-ink-dim mx-auto mb-7 max-w-[460px] text-lg leading-relaxed">
          Daily home-cooked Andhra meals from a curated network of home cooks in
          Richardson, TX. Subscribe weekly — we handle the rest.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/subscribe"
            className="rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-forest transition-ambient hover:shadow-[0_12px_40px_rgba(61,89,38,0.32)]"
          >
            Join the waitlist →
          </Link>
          <Link
            to="/menu"
            className="rounded-full border-[1.5px] border-forest bg-transparent px-8 py-3.5 text-base font-semibold text-forest transition-ambient hover:bg-forest/5"
          >
            Browse this week's menu
          </Link>
        </div>

        <p className="text-ink-muted mt-5 text-[0.8125rem]">
          127 families signed up in Richardson · Starting at $65/week
        </p>
      </div>
    </section>
  );
}
