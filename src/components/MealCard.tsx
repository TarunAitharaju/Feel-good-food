import { cn } from "@/lib/utils";
import type { DishTag } from "@/data/menu";

const TAG_STYLES: Record<string, { bg: string; text: string; border: string }> =
  {
    veg: {
      bg: "bg-forest/10",
      text: "text-forest",
      border: "border-forest/20",
    },
    spicy: {
      bg: "bg-terra/10",
      text: "text-terra",
      border: "border-terra/20",
    },
    mild: {
      bg: "bg-gold/10",
      text: "text-gold-light",
      border: "border-gold/20",
    },
    "egg-free": {
      bg: "bg-gold/10",
      text: "text-ink-dim",
      border: "border-gold/20",
    },
    jain: {
      bg: "bg-forest/10",
      text: "text-forest",
      border: "border-forest/20",
    },
  };

interface MealCardProps {
  dish: string;
  telugu?: string;
  cook: string;
  tags?: DishTag[];
  gradient?: string;
}

export function MealCard({ dish, telugu, cook, tags, gradient }: MealCardProps) {
  const gradientClass = gradient ?? "from-forest/60 to-forest";

  return (
    <div className="glass group w-[220px] cursor-default overflow-hidden rounded-card shadow-glass-md transition-ambient hover:scale-[1.02] hover:shadow-glass-lg">
      {/* Photo placeholder with edge fade */}
      <div
        className={cn(
          "relative h-[130px] w-full overflow-hidden bg-gradient-to-br",
          gradientClass
        )}
      >
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-white/40">
          food photo
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-gradient-to-b from-transparent to-cream/90" />
      </div>

      {/* Content */}
      <div className="px-3.5 pb-4 pt-3">
        <h3 className="font-display text-ink text-base font-medium leading-tight">
          {dish}
        </h3>
        {telugu && (
          <p className="mt-0.5 font-telugu text-[0.8125rem] text-forest">
            {telugu}
          </p>
        )}
        <p className="text-ink-dim mt-1 text-xs">Prepared by {cook}</p>

        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => {
              const style = TAG_STYLES[tag.type] ?? TAG_STYLES["mild"];
              return (
                <span
                  key={tag.label}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide",
                    style?.bg,
                    style?.text,
                    style?.border
                  )}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
