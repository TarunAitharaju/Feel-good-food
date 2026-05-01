import { useState } from "react";
import { MapPin } from "lucide-react";

export function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && zip) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative z-10 mx-auto max-w-[500px] px-6 py-24 text-center">
        <div className="mb-6 text-6xl">🎉</div>
        <h2 className="mb-4 font-display text-3xl font-bold text-cream">
          You're on the list!
        </h2>
        <p className="text-lg leading-relaxed text-cream/60">
          We'll let you know as soon as we're live in your area. Get ready for
          meals that taste like home.
        </p>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-24">
      {/* Glow */}
      <div className="glow-terra pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-[480px] px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-4xl font-bold text-cream">
            Are we in your{" "}
            <em className="italic text-gold">neighborhood?</em>
          </h2>
          <p className="text-cream/60">
            Enter your zip code to check — and join the waitlist.
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-white/[0.08] p-8 shadow-glass backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-cream/70">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none transition-all duration-200 placeholder:text-cream/30 focus:border-terracotta/50 focus:ring-1 focus:ring-terracotta/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-cream/70">
                ZIP code
              </label>
              <input
                type="text"
                placeholder="75080"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none transition-all duration-200 placeholder:text-cream/30 focus:border-terracotta/50 focus:ring-1 focus:ring-terracotta/30"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="btn-primary mt-2 rounded-full py-4 text-base font-semibold"
            >
              Join the waitlist →
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-cream/40">
              <MapPin size={12} />
              Currently serving Richardson TX 75080/75081
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
