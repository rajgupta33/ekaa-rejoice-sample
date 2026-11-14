export type PortfolioCategory = "all" | "birthdays" | "styling" | "corporate" | "details";

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  description: string;
  relatedService: string;
  ctaLabel: string;
  aspect: "wide" | "portrait" | "square";
  approvedForPublicDisplay: boolean;
};

export const PORTFOLIO_FILTERS: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All Frames" },
  { id: "birthdays", label: "Birthdays" },
  { id: "styling", label: "Balloon Styling" },
  { id: "corporate", label: "Corporate" },
  { id: "details", label: "Details" },
];

// Curated concept & style frames ready for client event photography replacement without changing layout
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "celebration-full-color",
    title: "A Birthday in Full Color",
    category: "birthdays",
    categoryLabel: "Birthday Celebrations",
    image: "/imagery/projects/celebration-full-color.webp",
    imageAlt:
      "Terrace milestone birthday centerpiece featuring a tiered cake on fluted stone and coral-champagne balloons",
    description:
      "Warm champagne gold, coral, and sunlit ivory paired with tailored floral styling for an intimate golden-hour celebration.",
    relatedService: "Birthday Celebrations",
    ctaLabel: "Plan Something Similar",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "art-of-the-balloon",
    title: "The Art of the Balloon",
    category: "styling",
    categoryLabel: "Balloon Styling",
    image: "/imagery/projects/art-of-balloon.webp",
    imageAlt:
      "Sculptural organic balloon wall with cascading silk ribbons in ivory, apricot, and brushed terracotta",
    description:
      "Layered matte textures, sculptural scale, and trailing satin ribbons arranged to frame the room with quiet drama.",
    relatedService: "Balloon Art & Styling",
    ctaLabel: "Plan Something Similar",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "elevated-gathering",
    title: "An Elevated Gathering",
    category: "corporate",
    categoryLabel: "Corporate Events",
    image: "/imagery/projects/elevated-gathering.webp",
    imageAlt:
      "Evening corporate gathering lounge with warm copper backdrop lighting and tailored conversation seating",
    description:
      "Architectural lighting and curated lounge seating designed to create a poised, welcoming setting for teams and guests.",
    relatedService: "Corporate Events",
    ctaLabel: "Discuss a Corporate Event",
    aspect: "wide",
    approvedForPublicDisplay: true,
  },
  {
    id: "milestone-night",
    title: "A Night to Remember",
    category: "birthdays",
    categoryLabel: "Milestone Celebrations",
    image: "/imagery/projects/milestone-night.webp",
    imageAlt:
      "Evening private dining celebration overlooking Dubai with warm candlelight and champagne-coral balloon arch",
    description:
      "Candlelit tablescape styling and overhead organic balloon framing designed for effortless conversation after dusk.",
    relatedService: "Birthday Celebrations",
    ctaLabel: "Plan Something Similar",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "little-details-tablescape",
    title: "Little Details, Lasting Joy",
    category: "details",
    categoryLabel: "Tablescape & Details",
    image: "/imagery/projects/detail-tablescape.webp",
    imageAlt:
      "Close-up of linen table runner, brass candlesticks, ceramic dinnerware, and floral composition in warm daylight",
    description:
      "Tactile linen drapery, slender brass tapers, and soft tonal florals composed so every seat feels personally considered.",
    relatedService: "Birthday Celebrations",
    ctaLabel: "Enquire About Styling",
    aspect: "square",
    approvedForPublicDisplay: true,
  },
  {
    id: "sculptural-ribbon-study",
    title: "Celebration, Reimagined",
    category: "details",
    categoryLabel: "Textures & Ribbons",
    image: "/imagery/projects/detail-ribbons.webp",
    imageAlt:
      "Macro study of matte ivory, terracotta, and iridescent lavender balloons finished with trailing satin ribbons",
    description:
      "Thoughtful color pairings and hand-finished ribbon accents that elevate balloon art into sculptural room decor.",
    relatedService: "Balloon Art & Styling",
    ctaLabel: "Enquire About Balloon Styling",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
];

export const BEHIND_DETAILS_STRIP = [
  {
    id: "detail-1",
    caption: "Tactile palettes & ribbon movement",
    image: "/imagery/projects/detail-ribbons.webp",
    alt: "Matte ivory, copper, and lavender sculptural balloons with satin ribbon accents",
  },
  {
    id: "detail-2",
    caption: "Candlelit warmth & layered tables",
    image: "/imagery/projects/detail-tablescape.webp",
    alt: "Draped linen table setting with brass candlesticks and floral styling",
  },
  {
    id: "detail-3",
    caption: "Atmosphere shaped by light & sound",
    image: "/imagery/services/sound-lighting.webp",
    alt: "Evening venue illuminated with warm architectural uplights and overhead light strands",
  },
];
