import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero-bg flex min-h-[600px] items-center justify-center px-5 py-20">
      <div className="mx-auto w-full max-w-[640px] text-center">
        <p className="mb-4 text-xs tracking-widest text-base text-white font-semibold">
          Richardson, TX · Andhra Home Food
        </p>

        <h1 className="mb-6 font-display text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-tight text-orange">
          Home food,
          <br />
          <em className="text-white">made simple.</em>
        </h1>

        <p className="mx-auto mb-10 max-w-[460px] text-base leading-relaxed text-white/65">
          Daily home-cooked Andhra meals from a curated network of home cooks
          in Richardson, TX. Subscribe weekly — we handle the rest.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/subscribe"
            className="btn-orange rounded-full px-8 py-3.5 text-base font-semibold"
          >
            Join the waitlist →
          </Link>
          <Link
            to="/menu"
            className="btn-ghost-white rounded-full px-8 py-3.5 text-base font-semibold"
          >
            Browse this week's menu
          </Link>
        </div>

        <p className="mt-7 text-sm text-white/35">
          127 families signed up in Richardson · Starting at $65/week
        </p>
      </div>
    </section>
  );
}