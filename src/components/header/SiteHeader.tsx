"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/seo";

const NAV_LINKS = [
  { label: "Experiences", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

type SiteHeaderProps = {
  onMenuOpenChange?: (open: boolean) => void;
};

export function SiteHeader({ onMenuOpenChange }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    onMenuOpenChange?.(menuOpen);
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, onMenuOpenChange]);

  const headerWhatsappHref = buildWhatsAppEnquiry({
    service: "Event Styling & Celebrations",
  });

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "border-b border-[#EBDDD6]/85 bg-[#FFFDF9]/94 py-2.5 shadow-[0_8px_30px_-18px_rgba(36,29,40,0.22)] backdrop-blur-md"
            : "bg-gradient-to-b from-[#241D28]/60 via-[#241D28]/25 to-transparent py-3.5 sm:py-4"
        }`}
      >
        <div className="container-atelier flex items-center justify-between gap-1.5 min-[375px]:gap-2.5 sm:gap-3">
          {/* Left: Official Logo + Name */}
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-1.5 rounded-xl focus-visible:outline-2 min-[375px]:gap-2.5"
            aria-label="Ekaa Rejoice home"
          >
            <BrandLogo variant={scrolled ? "ivory" : "hero"} size="sm" />
            <div className="flex flex-col leading-tight">
              <span
                className={`whitespace-nowrap font-display text-[15px] font-semibold tracking-tight min-[375px]:text-lg sm:text-xl ${
                  scrolled ? "text-[#241D28]" : "text-[#FFFDF9]"
                }`}
              >
                {SITE_CONFIG.name}
              </span>
              <span
                className={`hidden text-[10px] font-medium uppercase tracking-[0.18em] sm:block ${
                  scrolled ? "text-[#5D5260]" : "text-[#FFFDF9]/80"
                }`}
              >
                Dubai, UAE
              </span>
            </div>
          </a>

          {/* Center: Desktop Anchor Navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-[#241D28]/85 hover:text-[#A65336]"
                    : "text-[#FFFDF9]/90 hover:text-[#F5B56A]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Desktop CTA & Mobile Menu Controls */}
          <div className="flex shrink-0 items-center gap-1.5 min-[375px]:gap-2">
            <a
              href={headerWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-sunset-silk px-5 py-2.5 text-sm font-semibold text-[#241D28] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md lg:inline-flex"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Plan an Event</span>
            </a>

            {/* Mobile compact WhatsApp shortcut */}
            <a
              href={headerWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[44px] shrink-0 items-center gap-1 rounded-full px-2.5 py-2 text-[11px] font-semibold min-[375px]:gap-1.5 min-[375px]:px-3.5 min-[375px]:text-xs lg:hidden ${
                scrolled
                  ? "bg-sunset-silk text-[#241D28] shadow-sm"
                  : "border border-[#FFFDF9]/35 bg-[#241D28]/50 text-[#FFFDF9] backdrop-blur-md"
              }`}
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled
                  ? "border border-[#EBDDD6] bg-[#FFFDF9] text-[#241D28]"
                  : "border border-[#FFFDF9]/30 bg-[#241D28]/45 text-[#FFFDF9] backdrop-blur-md"
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Height Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-[#FFFDF9] px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4 lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-[#EBDDD6] pb-3.5">
            <div className="flex items-center gap-2.5">
              <BrandLogo variant="ivory" size="sm" />
              <div>
                <p className="font-display text-lg font-semibold text-[#241D28]">
                  {SITE_CONFIG.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#5D5260]">
                  {SITE_CONFIG.brandLine}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#EBDDD6] bg-[#F8F0E7] text-[#241D28]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col justify-center gap-2 py-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center justify-between border-b border-[#EBDDD6]/60 py-2.5 font-display text-3xl font-medium text-[#241D28] transition-colors hover:text-[#A65336]"
              >
                <span>{link.label}</span>
                <span className="text-sm font-sans text-[#A65336]" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-3 border-t border-[#EBDDD6] pt-4">
            <a
              href={headerWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-sunset-silk px-6 py-3.5 text-base font-semibold text-[#241D28] shadow-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Plan an Event on WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#5D5260]">
              {SITE_CONFIG.locationLabel} • {SITE_CONFIG.instagramHandle}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
