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
        <h2 className="font-display text-ink mb-3 text-3xl font-normal">
          You're on the list!
        </h2>
        <p className="text-ink-dim text-base leading-relaxed">
          We'll let you know as soon as we're live in your area. Get ready for
          meals that taste like home.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[440px] px-5 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-ink mb-2 text-2xl font-normal">
          Are we in your neighborhood?
        </h2>
        <p className="text-ink-dim text-[0.9rem]">
          Enter your zip code to check — and join the waitlist.
        </p>
      </div>

      <div className="glass flex flex-col gap-3.5 rounded-card-lg p-6 shadow-glass-md">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-ink-dim text-[0.8125rem] font-semibold">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-forest/15 bg-cream/55 px-4 py-3 text-[0.9375rem] text-ink outline-none transition-ambient placeholder:text-ink-muted focus:border-forest/40 focus:ring-2 focus:ring-forest/10"
          />
        </div>

        {/* Zip */}
        <div className="flex flex-col gap-1.5">
          <label className="text-ink-dim text-[0.8125rem] font-semibold">
            ZIP code
          </label>
          <input
            type="text"
            placeholder="75080"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-forest/15 bg-cream/55 px-4 py-3 text-[0.9375rem] text-ink outline-none transition-ambient placeholder:text-ink-muted focus:border-forest/40 focus:ring-2 focus:ring-forest/10"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="rounded-full bg-forest px-5 py-3.5 text-base font-semibold text-white shadow-forest transition-ambient hover:shadow-[0_12px_40px_rgba(61,89,38,0.32)]"
        >
          Join the waitlist →
        </button>

        <div className="text-ink-muted flex items-center justify-center gap-1 text-xs">
          <MapPin size={12} />
          Currently serving Richardson TX 75080/75081
        </div>
      </div>
    </section>
  );
}
