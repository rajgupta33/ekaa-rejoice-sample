"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { buildWhatsAppEnquiry } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/seo";
import { SculptedOrbCluster } from "@/components/shared/SculptedAccent";

const EVENT_TYPE_OPTIONS = [
  "Birthday Celebrations",
  "Balloon Art & Styling",
  "Corporate Events",
  "Sound & Lighting",
  "Entertainment",
  "Event Furniture",
  "Private Celebration",
];

const BUDGET_OPTIONS = [
  "Prefer not to say",
  "Under AED 3,000",
  "AED 3,000 – AED 7,500",
  "AED 7,500 – AED 15,000",
  "AED 15,000+",
];

export function ContactSection() {
  const [eventType, setEventType] = useState(EVENT_TYPE_OPTIONS[0]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = buildWhatsAppEnquiry({
      service: eventType,
      eventType,
      date,
      location,
      guests,
      budget: budget === "Prefer not to say" ? "" : budget,
      idea,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const finalCtaHref = buildWhatsAppEnquiry({
    service: "Event Styling & Celebrations",
  });

  return (
    <>
      {/* Section I: Final Emotional CTA */}
      <section className="bg-pearl-glow editorial-grain relative overflow-hidden border-t border-[#EBDDD6] py-20 sm:py-28">
        <SculptedOrbCluster
          variant="cta"
          className="animate-sculpted pointer-events-none absolute -right-12 top-6 h-52 w-52 opacity-70 sm:right-10 sm:top-10 sm:h-64 sm:w-64"
        />

        <div className="container-atelier relative z-10 max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
            Begin Your Celebration
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.35rem,6.5vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#241D28]">
            Something wonderful starts with a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5D5260] sm:text-lg">
            Tell us what you&apos;re celebrating. We&apos;d love to hear your
            idea.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={finalCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-sunset-silk px-7 py-3.5 text-sm font-semibold text-[#241D28] shadow-[0_14px_30px_-10px_rgba(242,124,117,0.55)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-[15px]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Let&apos;s Plan Something Beautiful</span>
            </a>

            <a
              href="#work"
              className="inline-flex min-h-[48px] items-center gap-1.5 rounded-full border border-[#EBDDD6] bg-[#FFFDF9]/90 px-6 py-3 text-sm font-semibold text-[#241D28] transition-colors hover:border-[#A65336]"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Section J: Contact Details & Guided WhatsApp Builder */}
      <section
        id="contact"
        className="border-t border-[#EBDDD6] bg-[#FFFDF9] py-16 sm:py-20 lg:py-28"
      >
        <div className="container-atelier grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
              Get in Touch
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-medium leading-[1.07] tracking-[-0.015em] text-[#241D28]">
              Let&apos;s make it memorable.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5D5260]">
              Reach out directly via WhatsApp or assemble a quick event brief on
              this page to start your enquiry in seconds.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={finalCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-[#EBDDD6] bg-[#F8F0E7]/50 p-4 transition-colors hover:border-[#A65336]/55"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#A65336] shadow-xs">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5D5260]">
                    WhatsApp / Call
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-[#241D28]">
                    {SITE_CONFIG.telephoneDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EBDDD6] bg-[#F8F0E7]/50 p-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#A65336] shadow-xs">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5D5260]">
                    Location
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-[#241D28]">
                    {SITE_CONFIG.locationLabel}
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-[#EBDDD6] bg-[#F8F0E7]/50 p-4 transition-colors hover:border-[#A65336]/55"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFFDF9] text-[#A65336] shadow-xs">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5D5260]">
                    Instagram
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-base font-semibold text-[#241D28]">
                    <span>{SITE_CONFIG.instagramHandle}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#5D5260]" aria-hidden="true" />
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Local Guided WhatsApp Builder */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] border border-[#EBDDD6] bg-[#F8F0E7]/45 p-5 shadow-xs sm:rounded-[30px] sm:p-8"
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl font-medium text-[#241D28] sm:text-3xl">
                  Quick WhatsApp Brief
                </h3>
                <p className="mt-1 text-sm text-[#5D5260]">
                  Share a few details below to prefill your WhatsApp message.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-event-type"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Event or Service Type <span className="text-[#A65336]">*</span>
                  </label>
                  <select
                    id="enquiry-event-type"
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-2.5 text-base text-[#241D28] focus:border-[#A65336] focus:outline-none sm:text-sm"
                  >
                    {EVENT_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-date"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="enquiry-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-2.5 text-base text-[#241D28] focus:border-[#A65336] focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-location"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Location / Area
                  </label>
                  <input
                    id="enquiry-location"
                    type="text"
                    placeholder="e.g. Downtown Dubai, Jumeirah"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-2.5 text-base text-[#241D28] placeholder:text-[#5D5260]/60 focus:border-[#A65336] focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-guests"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Estimated Guest Count
                  </label>
                  <input
                    id="enquiry-guests"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 35"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-2.5 text-base text-[#241D28] placeholder:text-[#5D5260]/60 focus:border-[#A65336] focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-budget"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Approximate Budget
                  </label>
                  <select
                    id="enquiry-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-2.5 text-base text-[#241D28] focus:border-[#A65336] focus:outline-none sm:text-sm"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-idea"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#241D28]"
                  >
                    Your Idea / Theme
                  </label>
                  <textarea
                    id="enquiry-idea"
                    rows={3}
                    placeholder="Colors, atmosphere, or inspiration you have in mind..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="w-full rounded-xl border border-[#EBDDD6] bg-[#FFFDF9] px-3.5 py-3 text-base text-[#241D28] placeholder:text-[#5D5260]/60 focus:border-[#A65336] focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-sunset-silk px-7 py-3 text-sm font-semibold text-[#241D28] shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-[15px]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Continue on WhatsApp</span>
                </button>
                <p className="text-xs leading-relaxed text-[#5D5260]">
                  Opens WhatsApp directly—does not store details on this site or
                  confirm a booking automatically.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
