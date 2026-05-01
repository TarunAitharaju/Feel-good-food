import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Utensils, Layers, LayoutDashboard, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/menu",      label: "Menu",      icon: Utensils },
  { to: "/subscribe", label: "Plans",     icon: Layers },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
] as const;

export function Nav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-500">
      <div className="absolute inset-0 glass-card border-b border-white/[0.08]" />

      <div className="relative z-10 mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative font-display text-3xl font-bold tracking-tight">
            <span className="text-cream transition-colors duration-300 group-hover:text-gold">annam</span>
            <span className="text-terracotta">.</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-terracotta to-gold transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop pill nav with icons */}
        <div className="hidden items-center gap-1 rounded-full nav-pill px-3 py-1.5 md:flex">
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                location.pathname === to
                  ? "bg-white/10 text-cream"
                  : "text-cream/80 hover:bg-white/5 hover:text-cream"
              )}
            >
              <Icon size={15} strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors duration-300 hover:bg-white/5 hover:text-cream"
          >
            Sign in
          </Link>
          <Link
            to="/subscribe"
            className="btn-primary group relative flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold"
          >
            Join waitlist
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="glass-card border-t border-white/[0.08] px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-cream/80 transition-all hover:bg-white/5 hover:text-cream"
              >
                <Icon size={15} strokeWidth={1.75} />
                {label}
              </Link>
            ))}
            <Link
              to="/subscribe"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            >
              Join waitlist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}