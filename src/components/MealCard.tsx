import { cn } from "@/lib/utils";
import type { DayMeal, DishTag } from "@/data/menu";

const TAG_STYLES: Record<string, string> = {
  veg:        "border-forest-light/40 bg-forest-light/10 text-forest-light",
  spicy:      "border-terracotta/40 bg-terracotta/10 text-terracotta",
  mild:       "border-gold/40 bg-gold/10 text-gold",
  "egg-free": "border-white/10 bg-white/5 text-cream/50",
  jain:       "border-white/10 bg-white/5 text-cream/50",
};

interface MealCardProps {
  dish: string;
  telugu?: string;
  tags?: DishTag[];
  image?: string;
  accent?: string;
}

export function MealCard({ dish, telugu, tags, image, accent = "#1a3828" }: MealCardProps) {
  return (
    <div className="group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.08] shadow-glass transition-all duration-300 hover:border-white/20 hover:scale-[1.02]">
      <div className="relative h-[140px] w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={dish}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ background: `linear-gradient(to top, ${accent}, #0a1a14)` }}
          />
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}ee)` }}
        />
      </div>

      <div
        className="relative p-4"
        style={{
          background: `linear-gradient(to bottom, ${accent}cc 0%, #12121288 60%, transparent 100%)`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <h3 className="font-display text-base font-semibold text-cream">{dish}</h3>
        {telugu && (
          <p className="mt-0.5 font-telugu text-sm italic text-gold/80">{telugu}</p>
        )}
        {/* cook name intentionally omitted */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
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
  );
}