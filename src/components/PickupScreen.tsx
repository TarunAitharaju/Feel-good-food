import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, MapPin, Clock } from "lucide-react";

export function PickupScreen() {
  const [pickedUp, setPickedUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(42);

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft((prev) => Math.max(0, prev - 1)),
      60_000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows — same as other pages */}
      <div className="glow-forest pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px]" />
      <div className="glow-terra pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px]" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-[360px]">

          {pickedUp ? (
            /* ── Success state ── */
            <div className="glass-card overflow-hidden rounded-2xl border border-white/[0.08] p-10 shadow-glass text-center">
              {/* Glow ring around icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 border border-gold/20">
                <CheckCircle2 size={40} className="text-gold" />
              </div>
              <h2 className="font-display text-3xl font-bold text-cream mb-2">
                Picked up!
              </h2>
              <p className="text-cream/50 mb-8">
                Enjoy your Gongura Chicken tonight.
              </p>
              <Link
                to="/dashboard"
                className="btn-ghost flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
              >
                <ArrowLeft size={14} />
                Back to dashboard
              </Link>
            </div>

          ) : (
            /* ── Code state ── */
            <div className="glass-card overflow-hidden rounded-2xl border border-white/[0.08] shadow-glass">

              {/* Header bar */}
              <div className="border-b border-white/[0.06] px-8 py-5 text-center">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cream/40">
                  Your pickup code
                </span>
              </div>

              <div className="flex flex-col items-center gap-5 px-8 py-8 text-center">

                {/* Big code */}
                <div className="text-shadow-hero font-display text-[6rem] font-bold leading-none tracking-[0.14em] text-cream">
                  7291
                </div>

                <p className="text-sm text-cream/50">
                  Show this to the attendant at pickup
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/[0.06]" />

                {/* Location */}
                <div className="flex items-start gap-2.5 text-left">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta" />
                  <div>
                    <p className="text-sm font-semibold text-cream">
                      Sai Krupa Community Center
                    </p>
                    <p className="text-xs text-cream/50">Richardson, TX 75080</p>
                  </div>
                </div>

                {/* Countdown pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-2">
                  <Clock size={13} className="text-terracotta" />
                  <span className="text-sm font-semibold text-terracotta">
                    Window closes in {timeLeft} min
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setPickedUp(true)}
                  className="btn-primary w-full rounded-full py-4 text-base font-semibold"
                >
                  Mark as picked up
                </button>

              </div>
            </div>
          )}

          {/* Back link — always shown in code state */}
          {!pickedUp && (
            <Link
              to="/dashboard"
              className="btn-ghost mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-cream/60 hover:text-cream"
            >
              <ArrowLeft size={14} />
              Back to dashboard
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}