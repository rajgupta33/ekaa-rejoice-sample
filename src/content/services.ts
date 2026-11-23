export type ServiceCategory = "all" | "birthdays" | "styling" | "corporate" | "production";

export type ServiceItem = {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "all">;
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappLabel: string;
  whatsappService: string;
  verifiedForPublication: boolean;
  featured?: boolean;
  relatedWorkFilter?: string;
};

export const SERVICE_FILTER_TABS: { id: ServiceCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "birthdays", label: "Birthdays" },
  { id: "styling", label: "Decor & Balloons" },
  { id: "corporate", label: "Corporate" },
  { id: "production", label: "Entertainment & Setup" },
];

export const QUICK_OFFER_STRIP = [
  {
    id: "strip-birthdays",
    title: "Birthday Celebrations",
    subtitle: "Private milestones & themed gatherings",
    filter: "birthdays" as ServiceCategory,
  },
  {
    id: "strip-balloons",
    title: "Balloon Art & Styling",
    subtitle: "Sculptural installations & backdrops",
    filter: "styling" as ServiceCategory,
  },
  {
    id: "strip-corporate",
    title: "Corporate Events",
    subtitle: "Polished brand & team experiences",
    filter: "corporate" as ServiceCategory,
  },
  {
    id: "strip-production",
    title: "Entertainment & Furniture",
    subtitle: "Sound, lighting & curated settings",
    filter: "production" as ServiceCategory,
  },
];

// Only Verified/Confirmed Ekaa Rejoice offerings are published (`verifiedForPublication: true`).
// Additional `Shown` / `Proposed` entries from the blueprint can be enabled here once confirmed by the business owner.
export const SERVICES: ServiceItem[] = [
  {
    id: "S01",
    title: "Birthday Celebrations",
    category: "birthdays",
    categoryLabel: "Celebrations",
    description:
      "From playful themes to elegant milestones, crafted around your personality.",
    image: "/imagery/services/birthday-celebrations.webp",
    imageAlt:
      "Sunlit luxury birthday tablescape with sculpted cake on travertine plinth, brass candlesticks, and pastel organic balloon arch",
    whatsappLabel: "Plan a Birthday",
    whatsappService: "Birthday Celebrations",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "birthdays",
  },
  {
    id: "S04",
    title: "Signature Balloon Art & Styling",
    category: "styling",
    categoryLabel: "Decor & Styling",
    description:
      "Sculptural installations, styled backdrops and details that command attention.",
    image: "/imagery/services/balloon-art.webp",
    imageAlt:
      "Sculptural balloon installation in matte ivory, terracotta copper, warm apricot, and soft lavender with trailing silk ribbons",
    whatsappLabel: "Enquire About Balloon Styling",
    whatsappService: "Balloon Art & Styling",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "styling",
  },
  {
    id: "S06",
    title: "Corporate Events",
    category: "corporate",
    categoryLabel: "Corporate",
    description:
      "Thoughtful, polished experiences that reflect your brand and purpose.",
    image: "/imagery/services/corporate-events.webp",
    imageAlt:
      "Upscale corporate reception lounge in Dubai featuring warm amber architectural lighting and tailored event seating",
    whatsappLabel: "Discuss a Corporate Event",
    whatsappService: "Corporate Events",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "corporate",
  },
  {
    id: "S05",
    title: "Immersive Sound & Lighting",
    category: "production",
    categoryLabel: "Atmosphere",
    description:
      "Lighting and atmosphere that turn beautiful settings into memorable experiences.",
    image: "/imagery/services/sound-lighting.webp",
    imageAlt:
      "Evening courtyard lit by warm golden architectural uplights, suspended Edison light strands, and a sleek audio console",
    whatsappLabel: "Ask About Sound & Lighting",
    whatsappService: "Sound & Lighting",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "details",
  },
  {
    id: "S07",
    title: "Entertainment Experiences",
    category: "production",
    categoryLabel: "Experiences",
    description:
      "Invite a teddy bear mascot to your party for greetings, dancing and photos with your guests.",
    image: "/imagery/services/entertainment.webp",
    imageAlt:
      "Evening celebration table aglow with candlelight, champagne glasses, and joyful guests beneath festive balloon styling",
    whatsappLabel: "Explore Entertainment",
    whatsappService: "Party entertainment and teddy bear mascots",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "birthdays",
  },
  {
    id: "S08",
    title: "Event Furniture & Setup",
    category: "production",
    categoryLabel: "Settings",
    description:
      "Considered furniture and event settings selected to complete the vision.",
    image: "/imagery/services/event-furniture.webp",
    imageAlt:
      "Curated event lounge furniture with curved armchairs, brass coffee tables, and warm architectural timber paneling",
    whatsappLabel: "Enquire About Event Furniture",
    whatsappService: "Event Furniture",
    verifiedForPublication: true,
    featured: true,
    relatedWorkFilter: "corporate",
  },
];
