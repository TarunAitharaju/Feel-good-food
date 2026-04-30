const STEPS = [
  {
    num: "01",
    title: "Subscribe weekly",
    desc: "Pick your meal plan and dietary preferences. Takes 2 minutes.",
  },
  {
    num: "02",
    title: "We match your meals",
    desc: "Each day, a different cook from our network prepares your meal.",
  },
  {
    num: "03",
    title: "Pickup daily",
    desc: "Grab your meal at a nearby community drop point — code in hand.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 md:px-10">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-ink">
        How it works
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="flex w-full max-w-[280px] min-w-[240px] flex-1 flex-col gap-2.5 rounded-card border border-black/[0.08] bg-white px-6 py-7 shadow-card"
          >
            <span className="font-display text-3xl font-bold leading-none text-orange">
              {step.num}
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-dim">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
