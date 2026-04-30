import { Link } from "react-router-dom";

// Free-to-use food image — swap with your own later
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden px-5 pb-20 pt-16 md:px-10"
    >
      {/* Dark green base */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-bg)" }}
      />

      {/* Food background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* Gradient overlay — darkens edges, keeps center readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,56,40,0.40) 0%, rgba(26,56,40,0.85) 100%)",
        }}
      />

      {/* Frosted glass content card */}
      <div className="glass-card relative z-10 mx-auto w-full max-w-[600px] rounded-card-xl px-8 py-12 text-center md:px-12">
        <p
          className="mb-3 text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--orange)" }}
        >
          Richardson, TX · Andhra Home Food
        </p>

        <h1
          className="mb-5 text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Home food,
          <br />
          made simple.
        </h1>

        <p
          className="mx-auto mb-8 max-w-[440px] text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
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

        <p
          className="mt-6 text-[0.8125rem]"
          style={{ color: "rgba(255,255,255,0.40)" }}
        >
          127 families signed up in Richardson · Starting at $65/week
        </p>
      </div>
    </section>
  );
}