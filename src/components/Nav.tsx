import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "This week's menu" },
  { to: "/menu", label: "Browse menu" },
  { to: "/dashboard", label: "Dashboard" },
] as const;

export function Nav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 border-t-0 border-x-0 border-b border-forest/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-7">
        {/* Wordmark */}
        <Link
          to="/"
          className="font-display text-2xl font-normal italic tracking-tight text-ink"
        >
          ann<span className="text-forest">am</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm transition-ambient",
                location.pathname === link.to
                  ? "font-semibold text-ink"
                  : "font-medium text-ink-dim hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/subscribe"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-forest-sm transition-ambient hover:shadow-forest md:inline-flex"
        >
          Join waitlist
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-ink-dim transition-ambient hover:text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-heavy border-t border-forest/10 px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-sm transition-ambient",
                  location.pathname === link.to
                    ? "bg-forest/10 font-semibold text-ink"
                    : "font-medium text-ink-dim"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/subscribe"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white shadow-forest-sm"
            >
              Join waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
