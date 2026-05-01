import { CustomerDashboard } from "@/components/CustomerDashboard";
import { Footer } from "@/components/Footer";

export function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-forest pointer-events-none absolute left-1/3 top-0 h-[500px] w-[500px]" />
      <div className="glow-terra pointer-events-none absolute right-1/4 bottom-1/3 h-[400px] w-[400px]" />
      <CustomerDashboard />
      <Footer />
    </div>
  );
}