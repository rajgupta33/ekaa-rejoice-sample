"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import {
  SERVICE_FILTER_TABS,
  SERVICES,
  ServiceCategory,
} from "@/content/services";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";

type ExperienceSectionProps = {
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onJumpToWork?: (filter: string) => void;
};

export function ExperienceSection({
  activeCategory,
  onSelectCategory,
  onJumpToWork,
}: ExperienceSectionProps) {
  const verifiedServices = SERVICES.filter((s) => s.verifiedForPublication);
  const visibleServices =
    activeCategory === "all"
      ? verifiedServices
      : verifiedServices.filter((s) => s.category === activeCategory);

  const isAllMosaic = activeCategory === "all" && visibleServices.length >= 6;

  return (
    <section
      id="services"
      className="bg-[#FFFDF9] py-16 sm:py-20 lg:py-28"
    >
      <div className="container-atelier">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
              What We Create
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(2.2rem,6vw,4.35rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#241D28]">
              Not just an event. Your kind of extraordinary.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-[#5D5260] sm:text-base">
            Every celebration starts with a story. Explore the ways we bring
            yours to life—and message us directly on WhatsApp for any experience.
          </p>
        </div>

        {/* Horizontal Swipeable Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter event experiences"
          className="no-scrollbar -mx-3.5 mt-7 flex snap-x gap-2 overflow-x-auto px-3.5 pb-2 sm:mx-0 sm:mt-9 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {SERVICE_FILTER_TABS.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectCategory(tab.id)}
                className={`min-h-[44px] shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-[#241D28] text-[#FFFDF9] shadow-sm"
                    : "border border-[#EBDDD6] bg-[#F8F0E7]/65 text-[#241D28] hover:border-[#A65336]/50 hover:bg-[#F8F0E7]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Mosaic / Grid */}
        <div
          className={`mt-8 grid gap-5 sm:mt-10 sm:gap-6 ${
            isAllMosaic
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-12"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleServices.map((service, index) => {
            const whatsappHref = buildWhatsAppEnquiry({
              service: service.whatsappService,
            });

            // Editorial desktop proportions when showing all 6 services
            let gridSpan = "";
            let imageAspect = "aspect-[4/5] sm:aspect-[4/4.6]";

            if (isAllMosaic) {
              if (index === 0) {
                gridSpan = "sm:col-span-2 lg:col-span-6 lg:row-span-2";
                imageAspect = "aspect-[4/4.5] lg:aspect-auto lg:h-full lg:min-h-[460px]";
              } else if (index === 1 || index === 2) {
                gridSpan = "lg:col-span-3";
                imageAspect = "aspect-[4/4.6] lg:aspect-[4/5]";
              } else if (index === 3) {
                gridSpan = "lg:col-span-6";
                imageAspect = "aspect-[4/4.2] lg:aspect-[16/10]";
              } else {
                gridSpan = "lg:col-span-4";
                imageAspect = "aspect-[4/4.2] lg:aspect-[5/4]";
              }
            }

            // Rebalance bottom row cleanly on 12-col desktop: index 0 (6x2), 1 (3), 2 (3), 3 (6) -> total row1+row2 = 6+(3+3)+(6)=12 cols, wait:
            // Let's trace 12-col placement cleanly:
            // Row 1 & 2 left: index 0 (col-span-6 row-span-2)
            // Row 1 right: index 1 (col-span-3), index 2 (col-span-3)
            // Row 2 right: index 3 (col-span-6)
            // Row 3: index 4 (col-span-6), index 5 (col-span-6)! That makes a 100% flush, zero-gap 12-column editorial mosaic!
            if (isAllMosaic && (index === 4 || index === 5)) {
              gridSpan = "lg:col-span-6";
              imageAspect = "aspect-[4/3.6] lg:aspect-[16/10]";
            }

            const isLead = isAllMosaic && index === 0;

            return (
              <article
                key={service.id}
                className={`group flex flex-col overflow-hidden rounded-[22px] border border-[#EBDDD6] bg-[#FFFDF9] shadow-[0_14px_40px_-24px_rgba(36,29,40,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(36,29,40,0.22)] sm:rounded-[28px] ${gridSpan}`}
              >
                <div className={`relative w-full overflow-hidden bg-[#F8F0E7] ${imageAspect}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes={
                      isLead
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#241D28]/35 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FFFDF9]/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#241D28] backdrop-blur-sm">
                    {service.categoryLabel}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3
                      className={`font-display font-medium leading-tight text-[#241D28] ${
                        isLead
                          ? "text-[28px] sm:text-[34px]"
                          : "text-[25px] sm:text-[28px]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#5D5260]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EBDDD6]/75 pt-4">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F8F0E7] px-4 py-2 text-sm font-semibold text-[#241D28] transition-colors hover:bg-sunset-silk"
                    >
                      <MessageCircle className="h-4 w-4 text-[#A65336]" aria-hidden="true" />
                      <span>{service.whatsappLabel}</span>
                    </a>

                    {service.relatedWorkFilter && (
                      <button
                        type="button"
                        onClick={() => onJumpToWork?.(service.relatedWorkFilter!)}
                        className="inline-flex min-h-[44px] items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5D5260] transition-colors hover:text-[#A65336]"
                      >
                        <span>View frames</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
