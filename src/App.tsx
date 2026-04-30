import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/Nav";
import { LandingPage } from "@/pages/Landing";
import { MenuPage } from "@/pages/Menu";
import { SubscribePage } from "@/pages/Subscribe";
import { DashboardPage } from "@/pages/Dashboard";
import { PickupPage } from "@/pages/Pickup";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pickup" element={<PickupPage />} />
      </Routes>
    </>
  );
}
