import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SITE_CONFIG } from "@/lib/seo";

const FOOTER_LINKS = [
  { label: "Experiences", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EBDDD6] bg-[#F8F0E7]/70 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-12 md:pb-12">
      <div className="container-atelier">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3.5">
            <BrandLogo variant="ivory" size="md" />
            <div>
              <p className="font-display text-xl font-semibold text-[#241D28]">
                {SITE_CONFIG.name}
              </p>
              <p className="text-xs text-[#5D5260]">{SITE_CONFIG.tagline}</p>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm font-medium text-[#241D28]"
          >
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#A65336]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#EBDDD6] pt-6 text-xs text-[#5D5260] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              © {year} {SITE_CONFIG.name}. All rights reserved.
            </span>
            <span>{SITE_CONFIG.locationLabel}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#241D28] transition-colors hover:text-[#A65336]"
            >
              Instagram ({SITE_CONFIG.instagramHandle})
            </a>
            <a
              href={SITE_CONFIG.parentBrandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#241D28] transition-colors hover:text-[#A65336]"
            >
              Ekaa Family
            </a>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#A65336]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#A65336]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
