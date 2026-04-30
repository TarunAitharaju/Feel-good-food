import { SAMPLE_MENU } from "@/data/menu";
import { MealCard } from "@/components/MealCard";

export function WeeklyMenu() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-12 md:px-10">
      <div className="mb-10 text-center">
        <span className="text-ink-muted mb-2 block text-xs font-bold uppercase tracking-widest">
          This week's menu
        </span>
        <h2 className="font-display text-ink text-3xl font-normal">
          Curated for you, Mon–Fri
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {SAMPLE_MENU.map((meal) => (
          <div
            key={meal.day}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-ink-muted text-[0.6875rem] font-bold uppercase tracking-widest">
              {meal.day}
            </span>
            <MealCard
              dish={meal.dish}
              telugu={meal.telugu}
              cook={meal.cook}
              tags={meal.tags}
              gradient={meal.gradient}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
