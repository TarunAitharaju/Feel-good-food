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
    <footer className="mx-auto mt-16 max-w-[960px] border-t border-black/[0.08] px-5 pb-8 pt-12 md:px-10">
      <div className="flex flex-wrap justify-between gap-8">
        <div>
          <Link to="/" className="font-display text-xl font-bold text-ink">
            annam<span className="text-orange">.</span>
          </Link>
          <p className="mt-2 max-w-[240px] text-[0.8125rem] leading-relaxed text-ink-dim">
            Home-cooked Andhra meals, delivered to your neighborhood.
            Richardson, TX.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-2.5 text-[0.6875rem] font-bold uppercase tracking-widest text-ink-muted">
                {col.title}
              </h4>
              <div className="flex flex-col gap-1.5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-[0.8125rem] text-ink-dim transition-ambient hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-black/[0.08] pt-5 text-xs text-ink-muted">
        Texas Cottage Food compliant · Every cook personally vetted
      </div>
    </footer>
  );
}
