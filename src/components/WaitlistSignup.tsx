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
      <section className="mx-auto max-w-[500px] px-5 py-20 text-center">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="mb-3 font-display text-3xl font-bold text-ink">
          You're on the list!
        </h2>
        <p className="text-base leading-relaxed text-ink-dim">
          We'll let you know as soon as we're live in your area. Get ready for
          meals that taste like home.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[440px] px-5 py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-display text-2xl font-bold text-ink">
          Are we in your neighborhood?
        </h2>
        <p className="text-[0.9rem] text-ink-dim">
          Enter your zip code to check — and join the waitlist.
        </p>
      </div>

      <div className="flex flex-col gap-3.5 rounded-card-lg border border-black/[0.08] bg-white p-6 shadow-card">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8125rem] font-semibold text-ink-dim">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-black/10 bg-white px-4 py-3 text-[0.9375rem] text-ink outline-none transition-ambient placeholder:text-ink-muted focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.8125rem] font-semibold text-ink-dim">
            ZIP code
          </label>
          <input
            type="text"
            placeholder="75080"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-black/10 bg-white px-4 py-3 text-[0.9375rem] text-ink outline-none transition-ambient placeholder:text-ink-muted focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="btn-orange rounded-full px-5 py-3.5 text-base font-semibold"
        >
          Join the waitlist →
        </button>

        <div className="flex items-center justify-center gap-1 text-xs text-ink-muted">
          <MapPin size={12} />
          Currently serving Richardson TX 75080/75081
        </div>
      </div>
    </section>
  );
}
