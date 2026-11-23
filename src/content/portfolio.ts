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
  { id: "all", label: "All work" },
  { id: "birthdays", label: "Birthdays" },
  { id: "styling", label: "Event styling" },
  { id: "corporate", label: "Storefronts" },
  { id: "details", label: "Details" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "pink-floral-stage",
    title: "A floral stage in pink",
    category: "styling",
    categoryLabel: "Event styling",
    image: "/imagery/work/pink-floral-stage.webp",
    imageAlt: "Pink drapes frame a silver sofa beneath a canopy of roses.",
    description: "Pink drapes frame a silver sofa beneath a canopy of roses.",
    relatedService: "Event styling",
    ctaLabel: "Plan a similar event",
    aspect: "wide",
    approvedForPublicDisplay: true,
  },
  {
    id: "fruit-party",
    title: "A berry birthday",
    category: "birthdays",
    categoryLabel: "Birthdays",
    image: "/imagery/work/fruit-party.webp",
    imageAlt: "A berry-themed birthday backdrop framed by bright pink, orange and mint balloons.",
    description: "A berry-themed birthday backdrop framed by bright pink, orange and mint balloons.",
    relatedService: "Birthdays",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "storefront-balloons",
    title: "A storefront in bloom",
    category: "corporate",
    categoryLabel: "Storefront styling",
    image: "/imagery/work/storefront-balloons.webp",
    imageAlt: "Flower-shaped balloons frame the shop entrance.",
    description: "Flower-shaped balloons frame the shop entrance.",
    relatedService: "Storefront styling",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "red-carpet-sixty",
    title: "Sixty on the red carpet",
    category: "birthdays",
    categoryLabel: "Birthdays",
    image: "/imagery/work/red-carpet-sixty.webp",
    imageAlt: "Illuminated numerals, a sequin wall and velvet ropes mark a sixtieth birthday.",
    description: "Illuminated numerals, a sequin wall and velvet ropes mark a sixtieth birthday.",
    relatedService: "Birthdays",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "k-pop-cake",
    title: "K-pop birthday cake",
    category: "details",
    categoryLabel: "Party details",
    image: "/imagery/work/k-pop-cake.webp",
    imageAlt: "A purple second-birthday cake with K-pop character toppers and silver decorations.",
    description: "A purple second-birthday cake with K-pop character toppers and silver decorations.",
    relatedService: "Party details",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "barbie-backdrop",
    title: "Barbie in pink",
    category: "birthdays",
    categoryLabel: "Birthdays",
    image: "/imagery/work/barbie-backdrop.webp",
    imageAlt: "A Barbie backdrop with clusters of pink balloons and a silver shimmer wall.",
    description: "A Barbie backdrop with clusters of pink balloons and a silver shimmer wall.",
    relatedService: "Birthdays",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "floral-entry",
    title: "Flowers at the entrance",
    category: "styling",
    categoryLabel: "Event styling",
    image: "/imagery/work/floral-entry.webp",
    imageAlt: "White and blush flower arrangements flank an open doorway.",
    description: "White and blush flower arrangements flank an open doorway.",
    relatedService: "Event styling",
    ctaLabel: "Plan a similar event",
    aspect: "wide",
    approvedForPublicDisplay: true,
  },
  {
    id: "mermaid-balloons",
    title: "Under the sea",
    category: "styling",
    categoryLabel: "Event styling",
    image: "/imagery/work/mermaid-balloons.webp",
    imageAlt: "Pastel balloons and shimmering mermaid tails circle a birthday sign.",
    description: "Pastel balloons and shimmering mermaid tails circle a birthday sign.",
    relatedService: "Event styling",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
  {
    id: "pool-party",
    title: "A poolside fiftieth",
    category: "details",
    categoryLabel: "Party details",
    image: "/imagery/work/pool-party.webp",
    imageAlt: "An illuminated number fifty beside the pool after dark.",
    description: "An illuminated number fifty beside the pool after dark.",
    relatedService: "Party details",
    ctaLabel: "Plan a similar event",
    aspect: "wide",
    approvedForPublicDisplay: true,
  },
  {
    id: "ivory-floral-seat",
    title: "An ivory floral arch",
    category: "styling",
    categoryLabel: "Event styling",
    image: "/imagery/work/ivory-floral-seat.webp",
    imageAlt: "An ivory bench framed by pale flowers and white drapery.",
    description: "An ivory bench framed by pale flowers and white drapery.",
    relatedService: "Event styling",
    ctaLabel: "Plan a similar event",
    aspect: "portrait",
    approvedForPublicDisplay: true,
  },
];

export const BEHIND_DETAILS_STRIP = PORTFOLIO_ITEMS
  .filter(item => ["k-pop-cake", "mermaid-balloons", "floral-entry"].includes(item.id))
  .map(item => ({ id: item.id, caption: item.title, image: item.image, alt: item.imageAlt }));
