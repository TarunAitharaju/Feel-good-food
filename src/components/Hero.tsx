import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AVATARS = [
  { initials: "PR", bg: "bg-terracotta/70" },
  { initials: "SK", bg: "bg-gold/70" },
  { initials: "ML", bg: "bg-forest-light/70" },
];

const HERO_DISHES = [
  {
    id: "main",
    dish: "Gutti Vankaya Kura",
    subtitle: "Stuffed Eggplant Curry",
    badge: "Authentic",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    accent: "#7c3a1e",
  },
  {
    id: "left",
    dish: "Mudda Pappu",
    subtitle: "Thick Yellow Dal",
    badge: null,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
    accent: "#7a5c00",
  },
  {
    id: "right",
    dish: "Kodi Vepudu",
    subtitle: "Andhra Chicken Fry",
    badge: null,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    accent: "#6b3d00",
  },
];

export function Hero() {
  const [main, left, right] = HERO_DISHES;

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pb-32 pt-40">
      <div className="glow-forest pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px]" />
      <div className="glow-terra pointer-events-none absolute bottom-1/4 right-1/4 h-[600px] w-[600px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* ── Left: Content ── */}
        <div className="max-w-xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-card border border-white/10 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="text-xs font-medium text-cream/70">
              Richardson, TX · Andhra Home Food
            </span>
          </div>

          <h1 className="text-shadow-hero mb-6 font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            <span className="text-terracotta">Home food,</span>
            <br />
            <em className="italic text-cream">made simple.</em>
          </h1>

          <p className="mb-10 max-w-[440px] text-lg leading-relaxed text-cream/60">
            Daily home-cooked Andhra meals from a curated network of home cooks
            in Richardson, TX. Subscribe weekly — we handle the rest.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/subscribe"
              className="btn-primary group flex items-center gap-2 rounded-full px-8 py-4 font-semibold"
            >
              Join the waitlist
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/menu"
              className="btn-ghost flex items-center justify-center rounded-full px-8 py-4 font-medium"
            >
              Browse this week's menu
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-cream/50">
            <div className="flex -space-x-2">
              {AVATARS.map((av) => (
                <div
                  key={av.initials}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-forest text-xs font-bold text-white ${av.bg}`}
                >
                  {av.initials}
                </div>
              ))}
            </div>
            <p>127 families signed up in Richardson · Starting at $65/week</p>
          </div>
        </div>

        {/* ── Right: Food card collage ── */}
        {/* Taller container so cards have room to breathe */}
        <div className="relative hidden h-[560px] lg:block">

          {/* Left tilted card */}
          <div
            className="absolute z-10 opacity-80"
            style={{
              width: "224px",   /* w-56 */
              top: "15%",
              left: "-16px",
              transform: "rotate(-6deg) translateZ(0)",
            }}
          >
            <HeroFoodCard dish={left} imgHeight={160} />
          </div>

          {/* Main center card — largest */}
          <div
            className="absolute z-20"
            style={{
              width: "288px",   /* w-72 */
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) translateZ(0)",
            }}
          >
            <HeroFoodCard dish={main} imgHeight={260} showBadge />
          </div>

          {/* Right tilted card */}
          <div
            className="absolute z-10 opacity-90"
            style={{
              width: "240px",   /* w-60 */
              bottom: "10%",
              right: "-16px",
              transform: "rotate(6deg) translateZ(0)",
            }}
          >
            <HeroFoodCard dish={right} imgHeight={192} />
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroFoodCard({
  dish,
  imgHeight,
  showBadge = false,
}: {
  dish: (typeof HERO_DISHES)[number];
  imgHeight: number;
  showBadge?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.08]"
      style={{
        boxShadow: `0 16px 48px ${dish.accent}77, 0 4px 16px rgba(0,0,0,0.6)`,
        isolation: "isolate",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div className="relative w-full" style={{ height: `${imgHeight}px` }}>

        {/* Food image */}
        <img
          src={dish.image}
          alt={dish.dish}
          className="h-full w-full object-cover"
        />

        {/* Gradient — dark top fading to accent color at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.08) 0%,
              transparent 28%,
              ${dish.accent}99 62%,
              ${dish.accent}ff 100%
            )`,
          }}
        />

        {/* Badge */}
        {showBadge && dish.badge && (
          <div className="absolute right-3 top-3 rounded-md glass-card px-2.5 py-1 text-xs font-bold text-gold backdrop-blur-md">
            {dish.badge}
          </div>
        )}

        {/* Text — absolutely at bottom, inside same container, zero seam */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2">
          <h3
            className="font-display font-bold leading-tight text-white"
            style={{
              fontSize: imgHeight >= 240 ? "1.125rem" : "0.875rem",
              textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)",
            }}
          >
            {dish.dish}
          </h3>
          {imgHeight >= 240 && dish.subtitle && (
            <p
              className="mt-1 font-display text-sm italic text-white/75"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              {dish.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}