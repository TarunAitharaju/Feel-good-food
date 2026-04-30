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
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "var(--hero-bg)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-7">
        {/* Wordmark */}
        <Link to="/" className="text-xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}>
          annam<span style={{ color: "var(--orange)" }}>.</span>
        </Link>

        {/* Desktop links — all white */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium transition-ambient"
              style={{
                color: location.pathname === link.to
                  ? "#ffffff"
                  : "rgba(255,255,255,0.70)",
                fontWeight: location.pathname === link.to ? 600 : 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — orange, NO shadow */}
        <Link
          to="/subscribe"
          className="btn-orange hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex"
        >
          Join waitlist
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="px-5 pb-5 pt-3 md:hidden"
          style={{ background: "var(--hero-bg-deep)" }}
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.75)" }}
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