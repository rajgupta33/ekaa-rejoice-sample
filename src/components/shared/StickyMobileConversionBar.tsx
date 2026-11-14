"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";

type StickyMobileConversionBarProps = {
  suppressed?: boolean;
};

export function StickyMobileConversionBar({
  suppressed = false,
}: StickyMobileConversionBarProps) {
  const [pastHero, setPastHero] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("home");
    const contactEl = document.getElementById("contact");

    const onScroll = () => {
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setPastHero(rect.bottom < window.innerHeight * 0.35);
      } else {
        setPastHero(window.scrollY > 520);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let contactObserver: IntersectionObserver | null = null;
    if (contactEl) {
      contactObserver = new IntersectionObserver(
        ([entry]) => {
          setNearContact(entry.isIntersecting);
        },
        { threshold: 0.15 }
      );
      contactObserver.observe(contactEl);
    }

    const handleFocusIn = (e: FocusEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        setInputFocused(true);
      }
    };
    const handleFocusOut = () => {
      setInputFocused(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("scroll", onScroll);
      contactObserver?.disconnect();
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const visible = pastHero && !nearContact && !inputFocused && !suppressed;
  const whatsappHref = buildWhatsAppEnquiry({
    service: "Event Styling & Celebrations",
  });

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-[#EBDDD6]/90 bg-[#FFFDF9]/94 px-3.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-10px_30px_-14px_rgba(36,29,40,0.2)] backdrop-blur-md transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a
          href="#services"
          tabIndex={visible ? 0 : -1}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-[#EBDDD6] bg-[#F8F0E7] px-3 text-xs font-semibold text-[#241D28] transition-colors hover:border-[#A65336]"
        >
          Explore Services
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex min-h-[44px] flex-[1.3] items-center justify-center gap-1.5 rounded-full bg-sunset-silk px-4 text-xs font-semibold text-[#241D28] shadow-xs"
        >
          <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Plan on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
