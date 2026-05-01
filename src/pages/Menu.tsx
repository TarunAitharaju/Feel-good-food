import { WeeklyMenu } from "@/components/WeeklyMenu";
import { Footer } from "@/components/Footer";

export function MenuPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-forest pointer-events-none absolute left-0 top-0 h-[500px] w-[500px]" />
      <div className="glow-terra pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px]" />
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-4">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full glass-card border border-white/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          <span className="text-xs font-medium text-cream/60 uppercase tracking-widest">Richardson, TX</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold text-cream">
          This week's <em className="italic text-gold">menu</em>
        </h1>
        <p className="mt-2 text-cream/60">
          Curated daily from our network of home cooks in Richardson, TX.
        </p>
      </div>
      <WeeklyMenu />
      <Footer />
    </div>
  );
}