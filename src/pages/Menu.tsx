import { WeeklyMenu } from "@/components/WeeklyMenu";
import { Footer } from "@/components/Footer";

export function MenuPage() {
  return (
    <>
      <div className="mx-auto max-w-[900px] px-5 pt-10 md:px-10">
        <h1 className="font-display text-ink mb-2 text-3xl font-normal">
          This week's menu
        </h1>
        <p className="text-ink-dim text-[0.9rem]">
          Curated daily from our network of home cooks in Richardson, TX.
        </p>
      </div>
      <WeeklyMenu />
      <Footer />
    </>
  );
}
