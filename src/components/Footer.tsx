import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", to: "/#how-it-works" },
      { label: "This week's menu", to: "/menu" },
      { label: "Pricing", to: "/subscribe" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "#" },
      { label: "For cooks", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "#" },
      { label: "Terms", to: "#" },
      { label: "Cottage food", to: "#" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-8 max-w-7xl border-t border-white/[0.08] px-6 pb-10 pt-16">
      <div className="flex flex-wrap justify-between gap-10">
        <div>
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-cream">annam</span>
            <span className="text-terracotta">.</span>
          </Link>
          <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-cream/50">
            Home-cooked Andhra meals, curated for your neighborhood.
            Richardson, TX.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-cream/40">
                {col.title}
              </h4>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-cream/60 transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-white/[0.06] pt-6 text-xs text-cream/30">
        Texas Cottage Food compliant · Every cook personally vetted
      </div>
    </footer>
  );
}
