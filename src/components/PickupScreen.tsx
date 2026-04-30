import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";

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
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-16">
      <div className="glass-dark grain relative w-full max-w-[320px] overflow-hidden rounded-card-xl p-9 shadow-pickup">
        {pickedUp ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <CheckCircle2 size={48} className="text-forest-light" />
            <h2 className="font-display text-2xl font-medium text-cream">
              Picked up!
            </h2>
            <p className="text-sm text-cream/50">
              Enjoy your Gongura Chicken tonight.
            </p>
            <Link
              to="/dashboard"
              className="mt-2 w-full rounded-full border-[1.5px] border-cream/20 bg-transparent py-3.5 text-center text-[0.9rem] font-semibold text-cream transition-ambient hover:border-cream/30"
            >
              Back to dashboard
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cream/45">
              Your pickup code
            </span>

            <div className="font-display text-[5rem] font-semibold leading-none tracking-[0.12em] text-cream">
              7291
            </div>

            <p className="text-[0.8125rem] text-cream/50">
              Show this to the attendant
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-cream/8" />

            {/* Location */}
            <p className="text-sm leading-relaxed text-cream/70">
              Sai Krupa Community Center
              <br />
              Richardson, TX 75080
            </p>

            {/* Countdown pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-terra/30 bg-terra/18 px-4 py-2 text-[0.8125rem] font-semibold text-terra-lifted">
              Window closes in {timeLeft} min
            </div>

            {/* Mark as picked up */}
            <button
              onClick={() => setPickedUp(true)}
              className="w-full rounded-full bg-terra-lifted py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_8px_24px_rgba(212,98,58,0.30)] transition-ambient hover:shadow-[0_12px_32px_rgba(212,98,58,0.40)]"
            >
              Mark as picked up
            </button>
          </div>
        )}
      </div>

      <Link
        to="/dashboard"
        className="text-ink-dim mt-5 flex items-center gap-1.5 rounded-full border-[1.5px] border-ink/15 px-5 py-2.5 text-[0.8125rem] font-semibold transition-ambient hover:border-ink/25 hover:text-ink"
      >
        <ArrowLeft size={14} />
        Back to dashboard
      </Link>
    </section>
  );
}
