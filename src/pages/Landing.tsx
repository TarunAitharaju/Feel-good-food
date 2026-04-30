import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WeeklyMenu } from "@/components/WeeklyMenu";
import { PricingSection } from "@/components/PricingSection";
import { WaitlistSignup } from "@/components/WaitlistSignup";
import { Footer } from "@/components/Footer";

export function LandingPage() {
  return (
    <>
      <Hero />
      <div className="bg-white">
        <HowItWorks />
        <WeeklyMenu />
        <PricingSection />
        <WaitlistSignup />
        <Footer />
      </div>
    </>
  );
}
