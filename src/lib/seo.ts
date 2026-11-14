import { WHATSAPP_DISPLAY } from "./whatsapp";

export const SITE_CONFIG = {
  name: "Ekaa Rejoice",
  brandLine: "The Art of Rejoicing.",
  tagline: "Beautifully imagined. Thoughtfully brought to life.",
  descriptor: "Event Styling & Celebrations in Dubai",
  // Replace with verified production URL before launch
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ekaa.me/rejoice",
  locationLabel: "Dubai, United Arab Emirates",
  instagramHandle: "@ekaa_rejoice",
  instagramUrl: "https://www.instagram.com/ekaa_rejoice/",
  parentBrandName: "Ekaa",
  parentBrandUrl: "https://ekaa.me/",
  telephoneE164: "+971562046096",
  telephoneDisplay: WHATSAPP_DISPLAY,
} as const;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description:
      "Event styling and celebrations including birthdays, signature balloon art, sound and lighting, entertainment, event furniture, and corporate events in Dubai.",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/brand/official-logo.png`,
    telephone: SITE_CONFIG.telephoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.parentBrandUrl],
  };
}
