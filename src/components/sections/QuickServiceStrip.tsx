"use client";

import { QUICK_OFFER_STRIP, ServiceCategory } from "@/content/services";

type QuickServiceStripProps = {
  onSelectCategory?: (category: ServiceCategory) => void;
};

export function QuickServiceStrip({ onSelectCategory }: QuickServiceStripProps) {
  const handleSelect = (category: ServiceCategory) => {
    onSelectCategory?.(category);
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Signature event offerings"
      className="border-b border-[#EBDDD6] bg-[#FFFDF9] py-5 sm:py-7"
    >
      <div className="container-atelier">
        <div className="mb-3 flex items-center justify-between lg:hidden">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A65336]">
            Thoughtful Celebrations • Signature Styling
          </p>
        </div>

        {/* Mobile: horizontally scrollable swipe chips; Desktop: 4-column hairline row */}
        <div className="no-scrollbar -mx-3.5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3.5 pb-1 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
          {QUICK_OFFER_STRIP.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.filter)}
              className={`group flex min-w-[215px] shrink-0 snap-start flex-col items-start rounded-2xl border border-[#EBDDD6] bg-[#F8F0E7]/55 px-4 py-3.5 text-left transition-colors hover:border-[#A65336]/50 hover:bg-[#F8F0E7] lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:py-2 lg:hover:bg-transparent ${
                idx !== 0 ? "lg:border-l lg:border-[#EBDDD6]" : "lg:pl-0"
              }`}
            >
              <span className="font-display text-xl font-medium text-[#241D28] transition-colors group-hover:text-[#A65336]">
                {item.title}
              </span>
              <span className="mt-0.5 text-xs text-[#5D5260]">
                {item.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
