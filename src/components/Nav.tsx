import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/menu",      label: "Menu" },
  { to: "/subscribe", label: "Plans" },
  { to: "/dashboard", label: "Dashboard" },
] as const;

export function Nav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 nav">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-7">
        <Link to="/" className="font-display text-xl font-bold text-white">
          annam<span className="text-orange">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "font-display text-sm transition-ambient",
                location.pathname === link.to
                  ? "font-semibold text-white"
                  : "font-medium text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/subscribe"
          className="btn-orange hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex"
        >
          Join waitlist
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-forest-deep px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-white/75 transition-ambient hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/subscribe"
              onClick={() => setMobileOpen(false)}
              className="btn-orange mt-1 rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Join waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
