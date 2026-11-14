"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/header/SiteHeader";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { QuickServiceStrip } from "@/components/sections/QuickServiceStrip";
import { ExperienceSection } from "@/components/services/ExperienceSection";
import { EditorialInterlude } from "@/components/sections/EditorialInterlude";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import { AboutSection } from "@/components/sections/AboutSection";
import { BehindDetailsStrip } from "@/components/sections/BehindDetailsStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactSection } from "@/components/contact/ContactSection";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { StickyMobileConversionBar } from "@/components/shared/StickyMobileConversionBar";
import { ServiceCategory } from "@/content/services";
import { PortfolioCategory } from "@/content/portfolio";

export function EkaaRejoicePage() {
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>("all");
  const [workFilter, setWorkFilter] = useState<PortfolioCategory>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);

  const handleJumpToWork = (filter: string) => {
    const valid: PortfolioCategory[] = [
      "all",
      "birthdays",
      "styling",
      "corporate",
      "details",
    ];
    if (valid.includes(filter as PortfolioCategory)) {
      setWorkFilter(filter as PortfolioCategory);
    }
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#241D28]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#241D28] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#FFFDF9]"
      >
        Skip to content
      </a>

      <SiteHeader onMenuOpenChange={setMenuOpen} />

      <main id="main-content">
        <CinematicHero />
        <QuickServiceStrip onSelectCategory={setServiceCategory} />
        <ExperienceSection
          activeCategory={serviceCategory}
          onSelectCategory={setServiceCategory}
          onJumpToWork={handleJumpToWork}
        />
        <EditorialInterlude />
        <WorkGallery
          activeFilter={workFilter}
          onSelectFilter={setWorkFilter}
          onDialogOpenChange={setGalleryDialogOpen}
        />
        <AboutSection />
        <BehindDetailsStrip />
        <ProcessTimeline />
        <FAQAccordion />
        <ContactSection />
      </main>

      <SiteFooter />

      <StickyMobileConversionBar
        suppressed={menuOpen || galleryDialogOpen}
      />
    </div>
  );
}
