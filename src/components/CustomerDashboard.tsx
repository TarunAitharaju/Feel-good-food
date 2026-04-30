import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Pause, SkipForward, ArrowRightLeft, MessageCircle } from "lucide-react";
import { SAMPLE_MENU } from "@/data/menu";
import { cn } from "@/lib/utils";

const TODAY_INDEX = 1;

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
      <h1 className="mb-6 font-display text-2xl font-bold text-ink">
        Good evening, Priya.
      </h1>

      <div className="mb-6 overflow-hidden rounded-card-lg border border-black/[0.08] bg-white shadow-card-lg">
        <div className="flex flex-wrap">
          <div className={cn("relative h-[200px] w-full bg-gradient-to-br sm:w-[240px]", todayMeal.gradient)}>
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-white/40">
              food photo
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6 md:p-7">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-ink-muted">
              Today's Meal · {todayMeal.day}
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">{todayMeal.dish}</h2>
            <p className="font-telugu text-[0.9375rem] text-forest">{todayMeal.telugu}</p>
            <p className="text-[0.8125rem] text-ink-dim">Prepared by {todayMeal.cook}</p>
            <div className="mt-2 flex items-center gap-3">
              <Link to="/pickup" className="btn-orange rounded-full px-5 py-2.5 text-sm font-semibold">
                View pickup code
              </Link>
              <span className="text-[0.8125rem] text-ink-dim">6:30–7:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2.5">
        {SAMPLE_MENU.map((meal, i) => (
          <div
            key={meal.day}
            className={cn(
              "flex min-w-[100px] flex-1 flex-col rounded-card bg-white p-3.5 shadow-card",
              i < TODAY_INDEX && "opacity-50",
              i === TODAY_INDEX ? "border-2 border-orange" : "border border-black/[0.08]"
            )}
          >
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-ink-muted">{meal.dayShort}</span>
            <span className="mt-1 font-display text-sm font-semibold text-ink">{meal.dish}</span>
            <span className="mt-0.5 text-[0.6875rem] text-ink-dim">{meal.cook}</span>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-card border border-black/[0.08] bg-white p-5 shadow-card">
        <p className="mb-2.5 text-[0.8125rem] font-semibold text-ink-dim">Rate yesterday's meal</p>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <button key={s} onClick={() => setRating(s)} className="transition-ambient" aria-label={`Rate ${s} stars`}>
              <Star
                size={24}
                className={cn(s <= rating ? "fill-orange text-orange" : "text-ink-muted")}
                strokeWidth={s <= rating ? 2.5 : 1.5}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-2 rounded-full border-[1.5px] border-black/15 bg-transparent px-4 py-2.5 text-[0.8125rem] font-semibold text-ink-dim transition-ambient hover:border-black/25 hover:text-ink"
          >
            <action.icon size={14} strokeWidth={1.5} />
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
