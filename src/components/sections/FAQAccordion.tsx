"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/content/faqs";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="border-t border-[#EBDDD6] bg-[#F8F0E7]/55 py-16 sm:py-20 lg:py-28"
    >
      <div className="container-atelier grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2.5 font-display text-[clamp(2.15rem,5.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.015em] text-[#241D28]">
            Good celebrations begin with good questions.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5D5260]">
            Have something more specific in mind? Message us directly on
            WhatsApp and we will walk through your date, venue, and styling
            options together.
          </p>
        </div>

        <div className="divide-y divide-[#EBDDD6] rounded-[24px] border border-[#EBDDD6] bg-[#FFFDF9] px-5 sm:px-8 lg:col-span-7">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const buttonId = `${faq.id}-button`;

            return (
              <div key={faq.id} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left font-display text-xl font-medium text-[#241D28] transition-colors hover:text-[#A65336] sm:text-2xl"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#A65336] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-[#5D5260]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
