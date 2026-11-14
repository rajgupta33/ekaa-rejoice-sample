"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "@/content/hero";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";
import { SculptedOrbCluster } from "@/components/shared/SculptedAccent";

const SLIDE_DURATION_MS = 6800;

export function CinematicHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goToSlide = useCallback((index: number) => {
    const next = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    setActiveIndex(next);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance timer (pauses on hover, focus, hidden tab, or reduced motion)
  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const handleVisibility = () => {
      if (document.hidden) setIsPaused(true);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [isPaused, reducedMotion, activeIndex]);

  // Touch swipe handler (only horizontal swipes; never blocks vertical scroll)
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (!touchStartRef.current || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    }
  };

  const activeSlide = HERO_SLIDES[activeIndex];
  const primaryHref = buildWhatsAppEnquiry({
    service: activeSlide.ctaService,
  });

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured Ekaa Rejoice event experiences"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative flex min-h-[88svh] w-full flex-col justify-end overflow-hidden bg-[#241D28] text-[#FFFDF9] focus:outline-none md:min-h-[640px] md:h-[min(92svh,920px)]"
    >
      {/* Background Slides with art-directed desktop + mobile imagery */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <picture className="block h-full w-full">
                <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.desktopImage}
                  alt={slide.imageAlt}
                  fetchPriority={index === 0 ? "high" : "low"}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  className={`h-full w-full object-cover object-center ${
                    isActive && !reducedMotion ? "hero-ken-burns" : ""
                  }`}
                />
              </picture>
            </div>
          );
        })}

        {/* Nuanced multi-directional contrast scrims (mobile bottom-up, desktop left-to-right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#241D28] via-[#241D28]/78 to-[#241D28]/30 md:bg-gradient-to-r md:from-[#241D28]/92 md:via-[#241D28]/58 md:to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-[#241D28]/55 to-transparent"
        />
      </div>

      {/* Subtle 3D-inspired floating sculptural accent (desktop far right edge only) */}
      {!reducedMotion && (
        <SculptedOrbCluster
          variant="hero"
          className="animate-sculpted absolute right-6 top-24 z-20 hidden h-52 w-44 opacity-75 xl:block"
        />
      )}

      {/* Hero Foreground Content */}
      <div className="container-atelier relative z-30 flex flex-1 flex-col justify-end pb-7 pt-24 sm:pb-10 md:justify-center md:pb-16 md:pt-28">
        <div className="max-w-xl md:max-w-[46%] lg:max-w-[44%]">
          {/* Live slide region */}
          <div key={activeSlide.id} aria-live="polite">
            <p className="hero-reveal mb-3 inline-flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5B56A] sm:text-xs">
              <span>{activeSlide.eyebrow}</span>
              <span aria-hidden="true" className="text-[#FFFDF9]/40">
                •
              </span>
              <span className="text-[#FFFDF9]/85">
                Event Styling &amp; Celebrations
              </span>
            </p>

            {activeIndex === 0 ? (
              <h1 className="hero-reveal font-display text-[clamp(2.65rem,9vw,3.85rem)] font-medium leading-[1.02] tracking-[-0.015em] text-[#FFFDF9] md:text-[clamp(3.6rem,5.5vw,5.5rem)]">
                {activeSlide.title}
              </h1>
            ) : (
              <h2 className="hero-reveal font-display text-[clamp(2.65rem,9vw,3.85rem)] font-medium leading-[1.02] tracking-[-0.015em] text-[#FFFDF9] md:text-[clamp(3.6rem,5.5vw,5.5rem)]">
                {activeSlide.title}
              </h2>
            )}

            <p className="hero-reveal-delay-1 mt-4 max-w-md text-[15px] leading-relaxed text-[#FFFDF9]/88 sm:text-base md:mt-5 md:text-[18px]">
              {activeSlide.description}
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="hero-reveal-delay-2 mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-5">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-sunset-silk px-6 py-3 text-sm font-semibold text-[#241D28] shadow-[0_12px_30px_-8px_rgba(242,124,117,0.55)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-7 sm:text-[15px]"
            >
              <span>{activeSlide.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={activeSlide.secondaryHref}
              className="inline-flex min-h-[44px] items-center gap-1.5 border-b border-[#FFFDF9]/45 pb-0.5 text-sm font-medium text-[#FFFDF9] transition-colors hover:border-[#F5B56A] hover:text-[#F5B56A]"
            >
              <span>{activeSlide.secondaryLabel}</span>
            </a>
          </div>
        </div>

        {/* Bottom Progress Track & Carousel Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#FFFDF9]/15 pt-4 md:mt-0 md:border-t-0 md:pt-0 md:absolute md:inset-x-0 md:bottom-7">
          <div className="flex flex-1 items-center gap-3 sm:max-w-md md:max-w-lg">
            <span className="font-mono text-xs font-medium tracking-widest text-[#FFFDF9]/85">
              {activeSlide.indexLabel} / 0{HERO_SLIDES.length}
            </span>

            <div
              role="tablist"
              aria-label="Choose a hero story"
              className="flex flex-1 items-center gap-2"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    aria-label={`Go to slide ${idx + 1} of ${HERO_SLIDES.length}: ${slide.storyName}`}
                    onClick={() => goToSlide(idx)}
                    className="group relative flex h-11 flex-1 items-center focus:outline-none"
                  >
                    <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-[#FFFDF9]/25">
                      <span
                        className={`block h-full rounded-full bg-[#F5B56A] transition-all ${
                          isCurrent ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                        style={
                          isCurrent && !isPaused && !reducedMotion
                            ? {
                                transitionDuration: `${SLIDE_DURATION_MS}ms`,
                                transitionTimingFunction: "linear",
                              }
                            : { transitionDuration: "300ms" }
                        }
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? "Resume hero slideshow" : "Pause hero slideshow"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFFDF9]/25 bg-[#241D28]/45 text-[#FFFDF9] backdrop-blur-sm transition-colors hover:border-[#F5B56A] hover:text-[#F5B56A]"
            >
              {isPaused ? (
                <Play className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Pause className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFFDF9]/25 bg-[#241D28]/45 text-[#FFFDF9] backdrop-blur-sm transition-colors hover:border-[#F5B56A] hover:text-[#F5B56A]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFFDF9]/25 bg-[#241D28]/45 text-[#FFFDF9] backdrop-blur-sm transition-colors hover:border-[#F5B56A] hover:text-[#F5B56A]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a
              href="#services"
              className="ml-3 hidden text-xs font-medium uppercase tracking-[0.18em] text-[#FFFDF9]/75 transition-colors hover:text-[#F5B56A] lg:inline-block"
            >
              Scroll to Explore ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
