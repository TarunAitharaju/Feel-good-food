import { PricingSection } from "@/components/PricingSection";
import { WaitlistSignup } from "@/components/WaitlistSignup";
import { Footer } from "@/components/Footer";

export function SubscribePage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      {/* Ambient glows — same as landing */}
      <div className="glow-forest pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px]" />
      <div className="glow-terra pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px]" />
      <PricingSection />
      <WaitlistSignup />
      <Footer />
    </div>
  );
}