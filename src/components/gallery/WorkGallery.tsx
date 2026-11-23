"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
} from "@/content/portfolio";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";

type WorkGalleryProps = {
  activeFilter: PortfolioCategory;
  onSelectFilter: (filter: PortfolioCategory) => void;
  onDialogOpenChange?: (open: boolean) => void;
};

export function WorkGallery({
  activeFilter,
  onSelectFilter,
  onDialogOpenChange,
}: WorkGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const visibleItems = PORTFOLIO_ITEMS.filter(
    (item) =>
      item.approvedForPublicDisplay &&
      (activeFilter === "all" || item.category === activeFilter)
  );

  const activeItem: PortfolioItem | null =
    selectedIndex !== null ? visibleItems[selectedIndex] ?? null : null;

  useEffect(() => {
    const isOpen = activeItem !== null;
    onDialogOpenChange?.(isOpen);

    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % visibleItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + visibleItems.length) % visibleItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeItem, visibleItems.length, onDialogOpenChange]);

  const openModal = (index: number, triggerEl: HTMLButtonElement) => {
    triggerRef.current = triggerEl;
    setSelectedIndex(index);
  };

  return (
    <section
      id="work"
      className="bg-[#F8F0E7]/65 py-16 sm:py-20 lg:py-28"
    >
      <div className="container-atelier">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
              Ekaa Rejoice
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(2.2rem,6vw,4.35rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#241D28]">
              Our work
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-[#5D5260]">
            Explore photos from our celebrations and event setups. Select a photo to see the details or plan something similar.
          </p>
        </div>

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filter visual gallery"
          className="no-scrollbar -mx-3.5 mt-7 flex snap-x gap-2 overflow-x-auto px-3.5 pb-2 sm:mx-0 sm:mt-8 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {PORTFOLIO_FILTERS.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  onSelectFilter(tab.id);
                  setSelectedIndex(null);
                }}
                className={`min-h-[44px] shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-[#A65336] text-[#FFFDF9] shadow-sm"
                    : "border border-[#EBDDD6] bg-[#FFFDF9] text-[#241D28] hover:border-[#A65336]/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Grid: lead full-width on mobile, 2-up below; varied ratios on desktop */}
        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          {visibleItems.map((item, idx) => {
            const isLeadMobile = idx === 0;
            const desktopColSpan =
              item.aspect === "wide"
                ? "lg:col-span-6"
                : idx % 3 === 0
                  ? "lg:col-span-4"
                  : "lg:col-span-4";
            const aspectClass =
              isLeadMobile
                ? "aspect-[4/4.2] lg:aspect-[4/4.8]"
                : item.aspect === "wide"
                  ? "aspect-[4/4.6] lg:aspect-[16/10.5]"
                  : "aspect-[3/4] lg:aspect-[4/5]";

            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => openModal(idx, e.currentTarget)}
                className={`group relative overflow-hidden rounded-[20px] border border-[#EBDDD6] bg-[#FFFDF9] text-left shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(36,29,40,0.28)] focus:outline-none sm:rounded-[26px] ${
                  isLeadMobile ? "col-span-2 lg:col-span-4" : "col-span-1"
                } ${desktopColSpan}`}
              >
                <div className={`relative w-full overflow-hidden ${aspectClass}`}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Bottom subtle gradient for legible caption without obscuring photo */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#241D28]/88 via-[#241D28]/45 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-3.5 text-[#FFFDF9] sm:p-5">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5B56A] sm:text-[11px]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-medium leading-snug text-[#FFFDF9] sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible Lightbox Dialog */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241D28]/80 p-3 backdrop-blur-md sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedIndex(null);
          }}
        >
          <div className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] border border-[#EBDDD6]/30 bg-[#FFFDF9] shadow-2xl md:grid md:grid-cols-12">
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close project preview"
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#EBDDD6] bg-[#FFFDF9]/95 text-[#241D28] shadow-sm transition-colors hover:bg-[#F8F0E7]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Image Panel */}
            <div className="relative aspect-[16/10] w-full shrink-0 bg-[#241D28] sm:aspect-[4/3] md:col-span-7 md:aspect-auto md:min-h-[460px]">
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain"
              />
            </div>

            {/* Story & Action Panel */}
            <div className="flex flex-col justify-between overflow-y-auto p-5 sm:p-7 md:col-span-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A65336]">
                  {activeItem.categoryLabel}
                </p>
                <h3
                  id="gallery-dialog-title"
                  className="mt-2 font-display text-2xl font-medium leading-tight text-[#241D28] sm:text-3xl"
                >
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5D5260] sm:text-[15px]">
                  {activeItem.description}
                </p>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#EBDDD6] pt-5">
                <a
                  href={buildWhatsAppEnquiry({
                    service: activeItem.relatedService,
                    idea: `Inspired by "${activeItem.title}"`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-sunset-silk px-5 py-3 text-sm font-semibold text-[#241D28] shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{activeItem.ctaLabel}</span>
                </a>

                {/* Next / Prev inside dialog */}
                {visibleItems.length > 1 && (
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((prev) =>
                          prev !== null
                            ? (prev - 1 + visibleItems.length) %
                              visibleItems.length
                            : 0
                        )
                      }
                      className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-[#EBDDD6] px-4 py-2 text-xs font-semibold text-[#241D28] hover:bg-[#F8F0E7]"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      <span>Previous</span>
                    </button>
                    <span className="font-mono text-xs text-[#5D5260]">
                      {(selectedIndex ?? 0) + 1} / {visibleItems.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((prev) =>
                          prev !== null
                            ? (prev + 1) % visibleItems.length
                            : 0
                        )
                      }
                      className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-[#EBDDD6] px-4 py-2 text-xs font-semibold text-[#241D28] hover:bg-[#F8F0E7]"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
