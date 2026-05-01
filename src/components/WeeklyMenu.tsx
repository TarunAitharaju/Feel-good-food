import { SAMPLE_MENU } from "@/data/menu";
import { cn } from "@/lib/utils";

const TAG_STYLES: Record<string, string> = {
  veg: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  spicy: "border-terracotta/40 bg-terracotta/10 text-terracotta",
  mild: "border-gold/40 bg-gold/10 text-gold",
  "egg-free": "border-white/15 bg-white/5 text-cream/60",
  jain: "border-white/15 bg-white/5 text-cream/60",
};

export function WeeklyMenu() {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card border border-white/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            <span className="text-xs font-medium uppercase tracking-widest text-cream/60">
              This week's menu
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-cream lg:text-5xl">
            Curated for you,{" "}
            <em className="italic text-gold">Mon–Fri</em>
          </h2>
          <p className="mt-3 text-sm text-cream/50">
            A different home cook prepares each day — variety is the product.
          </p>
        </div>

        {/* Day labels */}
        <div className="mb-4 hidden grid-cols-5 gap-5 md:grid">
          {SAMPLE_MENU.map((meal) => (
            <p
              key={meal.day}
              className="text-center text-[0.65rem] font-bold uppercase tracking-widest text-cream/40"
            >
              {meal.day}
            </p>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {SAMPLE_MENU.map((meal) => (
            <MealCard key={meal.day} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MealCard({ meal }: { meal: (typeof SAMPLE_MENU)[number] }) {
  return (
    <div
      className="group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:scale-[1.03] hover:border-white/20"
      style={{
        boxShadow: `0 8px 32px ${meal.accent}55, 0 2px 8px rgba(0,0,0,0.5)`,
        transform: "translateZ(0)",       // always on GPU — never demoted
        isolation: "isolate",             // permanent stacking context
        WebkitMaskImage: "-webkit-radial-gradient(white, black)", // belt-and-suspenders clip fix
      }}
    >
      {/*
        ONE single container — image fills entire card height.
        Description is absolute at bottom — no sibling divs, no seam possible.
      */}
      <div className="relative h-[280px] w-full">

        {/* Food image fills entire card */}
        <img
          src={meal.image}
          alt={meal.dish}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Single gradient overlay — dark top, accent color bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.10) 0%,
              transparent 30%,
              ${meal.accent}88 60%,
              ${meal.accent}ff 100%
            )`,
          }}
        />

        {/* Description overlaid at bottom — same container, zero seam */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2">
          <h3 className="font-display text-[0.95rem] font-bold leading-tight text-white drop-shadow-md">
            {meal.dish}
          </h3>
          {meal.telugu && (
            <p className="mt-0.5 font-telugu text-sm italic text-white/70">
              {meal.telugu}
            </p>
          )}
          {meal.tags && meal.tags.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {meal.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide backdrop-blur-sm",
                    TAG_STYLES[tag.type] ?? TAG_STYLES["mild"]
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}