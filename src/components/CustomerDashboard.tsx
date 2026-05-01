import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Pause, SkipForward, ArrowRightLeft, MessageCircle } from "lucide-react";
import { SAMPLE_MENU } from "@/data/menu";
import { cn } from "@/lib/utils";

const TODAY_INDEX = 1;

const QUICK_ACTIONS = [
  { label: "Skip tomorrow",   icon: SkipForward },
  { label: "Pause next week", icon: Pause },
  { label: "Change plan",     icon: ArrowRightLeft },
  { label: "Contact support", icon: MessageCircle },
] as const;

export function CustomerDashboard() {
  const [rating, setRating] = useState(0);
  const todayMeal = SAMPLE_MENU[TODAY_INDEX];
  if (!todayMeal) return null;

  return (
    <section className="mx-auto max-w-[860px] px-6 pb-16 pt-36">

      {/* Page header */}
      <div className="mb-8">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cream/40">
          Welcome back
        </p>
        <h1 className="font-display text-4xl font-bold text-cream">
          Good evening, <em className="italic text-gold">Priya.</em>
        </h1>
      </div>

      {/* Today's meal hero card */}
      <div className="glass-card mb-6 overflow-hidden rounded-2xl border border-white/[0.08] shadow-glass">
        <div className="flex flex-wrap">
          <div className={cn(
            "relative h-[220px] w-full bg-gradient-to-br sm:w-[260px]",
            todayMeal.gradient
          )}>
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-white/30">
              food photo
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full glass-card-md border border-white/10 px-2.5 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-cream/50">
                Today's Meal · {todayMeal.day}
              </span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-semibold text-cream">
              {todayMeal.dish}
            </h2>
            <p className="font-telugu text-sm italic text-gold/80">{todayMeal.telugu}</p>
            <p className="text-sm text-cream/50">Prepared by {todayMeal.cook}</p>
            <div className="mt-3 flex items-center gap-3">
              <Link
                to="/pickup"
                className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                View pickup code
              </Link>
              <span className="text-sm text-cream/40">6:30–7:30 PM</span>
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
              "glass-card flex min-w-[100px] flex-1 flex-col rounded-xl p-3.5 transition-all",
              i < TODAY_INDEX && "opacity-40",
              i === TODAY_INDEX
                ? "border border-terracotta/50 bg-terracotta/5"
                : "border border-white/[0.06] hover:border-white/[0.12]"
            )}
          >
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-cream/40">
              {meal.dayShort}
            </span>
            <span className="mt-1 font-display text-sm font-semibold text-cream">
              {meal.dish}
            </span>
            <span className="mt-0.5 text-[0.6rem] text-cream/40">{meal.cook}</span>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="glass-card mb-6 rounded-2xl border border-white/[0.08] p-6 shadow-glass">
        <p className="mb-3 text-sm font-semibold text-cream/60">
          Rate yesterday's meal
        </p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setRating(s)}
              className="transition-all"
              aria-label={`Rate ${s} stars`}
            >
              <Star
                size={26}
                className={cn(
                  s <= rating ? "fill-gold text-gold" : "text-cream/20"
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
            className="btn-ghost flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-cream/70 transition-all hover:text-cream"
          >
            <action.icon size={14} strokeWidth={1.5} />
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}