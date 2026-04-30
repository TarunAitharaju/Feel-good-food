import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export function PickupScreen() {
  const [pickedUp, setPickedUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-16">
      <div className="glass-dark relative w-full max-w-[320px] overflow-hidden rounded-card-xl p-9 shadow-pickup">
        {pickedUp ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <CheckCircle2 size={48} className="text-forest-light" />
            <h2 className="font-display text-2xl font-semibold text-white">Picked up!</h2>
            <p className="text-sm text-white/50">Enjoy your Gongura Chicken tonight.</p>
            <Link
              to="/dashboard"
              className="btn-ghost-white mt-2 w-full rounded-full py-3.5 text-center text-[0.9rem] font-semibold"
            >
              Back to dashboard
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/45">
              Your pickup code
            </span>
            <div className="font-display text-[5rem] font-bold leading-none tracking-[0.12em] text-white">
              7291
            </div>
            <p className="text-[0.8125rem] text-white/50">Show this to the attendant</p>
            <div className="h-px w-full bg-white/10" />
            <p className="text-sm leading-relaxed text-white/70">
              Sai Krupa Community Center<br />Richardson, TX 75080
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-orange/30 bg-orange/15 px-4 py-2 text-[0.8125rem] font-semibold text-orange-light">
              Window closes in {timeLeft} min
            </div>
            <button
              onClick={() => setPickedUp(true)}
              className="btn-orange w-full rounded-full py-3.5 text-[0.9375rem] font-semibold"
            >
              Mark as picked up
            </button>
          </div>
        )}
      </div>

      <Link
        to="/dashboard"
        className="mt-5 flex items-center gap-1.5 rounded-full border-[1.5px] border-black/15 px-5 py-2.5 text-[0.8125rem] font-semibold text-ink-dim transition-ambient hover:border-black/25 hover:text-ink"
      >
        <ArrowLeft size={14} />
        Back to dashboard
      </Link>
    </section>
  );
}
