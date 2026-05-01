const STEPS = [
  {
    num: "1",
    icon: "📅",
    iconBg: "bg-terracotta/20 border-terracotta/30",
    iconColor: "text-terracotta",
    title: "Subscribe weekly",
    desc: "Pick your meal plan (Lite, Standard, or Family). We handle the logistics so you don't have to worry about daily ordering.",
  },
  {
    num: "2",
    icon: "🔥",
    iconBg: "bg-gold/20 border-gold/30",
    iconColor: "text-gold",
    title: "We match your meals",
    desc: "Each day, a different verified home cook prepares a fresh, authentic Telugu meal. Enjoy variety without the repetition.",
  },
  {
    num: "3",
    icon: "📦",
    iconBg: "bg-forest-light/30 border-forest-light/50",
    iconColor: "text-cream",
    title: "Pickup daily",
    desc: "Grab your meal at a nearby designated secure pickup point using your unique daily access code. Safe, private, and easy.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-cream lg:text-5xl">
            How it <em className="italic text-gold">works</em>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-cream/60">
            A simple weekly subscription that brings authentic Telugu home
            cooking to your table without the hassle.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="glass-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/5 p-8 shadow-glass backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              {/* Background number */}
              <div className="pointer-events-none absolute -right-4 -top-4 font-display text-9xl font-bold text-white/[0.03] transition-transform duration-500 group-hover:scale-110">
                {step.num}
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon circle */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full border text-2xl ${step.iconBg}`}
                >
                  {step.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-cream">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
