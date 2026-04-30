import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Pause, SkipForward, ArrowRightLeft, MessageCircle } from "lucide-react";
import { SAMPLE_MENU } from "@/data/menu";
import { cn } from "@/lib/utils";

const TODAY_INDEX = 1; // Tuesday

const QUICK_ACTIONS = [
  { label: "Skip tomorrow", icon: SkipForward },
  { label: "Pause next week", icon: Pause },
  { label: "Change plan", icon: ArrowRightLeft },
  { label: "Contact support", icon: MessageCircle },
] as const;

export function CustomerDashboard() {
  const [rating, setRating] = useState(0);
  const todayMeal = SAMPLE_MENU[TODAY_INDEX];

  if (!todayMeal) return null;

  return (
    <section className="mx-auto max-w-[800px] px-5 py-8 md:px-10">
      {/* Greeting */}
      <h1 className="font-display text-ink mb-6 text-2xl font-normal">
        Good evening, Priya.
      </h1>

      {/* Today's Meal Hero */}
      <div className="glass mb-6 overflow-hidden rounded-card-lg shadow-glass-lg">
        <div className="flex flex-wrap">
          {/* Photo placeholder */}
          <div
            className={cn(
              "relative h-[200px] w-full bg-gradient-to-br sm:w-[240px]",
              todayMeal.gradient
            )}
          >
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-white/40">
              food photo
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-2 p-6 md:p-7">
            <span className="text-ink-muted text-[0.6875rem] font-bold uppercase tracking-widest">
              Today's Meal · {todayMeal.day}
            </span>
            <h2 className="font-display text-ink text-2xl font-medium">
              {todayMeal.dish}
            </h2>
            <p className="font-telugu text-[0.9375rem] text-forest">
              {todayMeal.telugu}
            </p>
            <p className="text-ink-dim text-[0.8125rem]">
              Prepared by {todayMeal.cook}
            </p>

            <div className="mt-2 flex items-center gap-3">
              <Link
                to="/pickup"
                className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-forest-sm transition-ambient hover:shadow-forest"
              >
                View pickup code
              </Link>
              <span className="text-ink-dim text-[0.8125rem]">
                6:30–7:30 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Week mini calendar */}
      <div className="mb-6 flex flex-wrap gap-2.5">
        {SAMPLE_MENU.map((meal, i) => (
          <div
            key={meal.day}
            className={cn(
              "glass flex min-w-[100px] flex-1 flex-col rounded-card p-3.5 shadow-glass",
              i < TODAY_INDEX && "opacity-50",
              i === TODAY_INDEX
                ? "border-[1.5px] border-forest"
                : "border border-forest/12"
            )}
          >
            <span className="text-ink-muted text-[0.6875rem] font-bold uppercase tracking-widest">
              {meal.dayShort}
            </span>
            <span className="font-display text-ink mt-1 text-sm font-medium">
              {meal.dish}
            </span>
            <span className="text-ink-dim mt-0.5 text-[0.6875rem]">
              {meal.cook}
            </span>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="glass mb-6 rounded-card p-5 shadow-glass">
        <p className="text-ink-dim mb-2.5 text-[0.8125rem] font-semibold">
          Rate yesterday's meal
        </p>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setRating(s)}
              className="transition-ambient"
              aria-label={`Rate ${s} stars`}
            >
              <Star
                size={24}
                className={cn(
                  s <= rating ? "fill-gold text-gold" : "text-ink-muted"
                )}
                strokeWidth={s <= rating ? 2.5 : 1.5}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="text-ink-dim flex items-center gap-2 rounded-full border-[1.5px] border-ink/15 bg-transparent px-4 py-2.5 text-[0.8125rem] font-semibold transition-ambient hover:border-ink/25 hover:text-ink"
          >
            <action.icon size={14} strokeWidth={1.5} />
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
