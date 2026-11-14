export type HeroSlide = {
  id: "celebrations" | "styling" | "corporate";
  indexLabel: string;
  storyName: string;
  eyebrow: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  ctaLabel: string;
  ctaService: string;
  ctaHref?: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "celebrations",
    indexLabel: "01",
    storyName: "Signature Celebrations",
    eyebrow: "EKAA REJOICE • DUBAI",
    title: "The Art of Rejoicing.",
    description:
      "From intimate birthdays to unforgettable milestones, we turn your moments into beautifully designed experiences.",
    desktopImage: "/imagery/hero/hero-1-desktop.webp",
    mobileImage: "/imagery/hero/hero-1-mobile.webp",
    imageAlt:
      "Warm ivory, blush coral, and champagne gold sculptural balloon arch framing a milestone celebration cake display in Dubai at golden hour",
    ctaLabel: "Plan a Celebration",
    ctaService: "Birthday Celebrations / Private Celebration",
    secondaryLabel: "Explore Our Work",
    secondaryHref: "#work",
  },
  {
    id: "styling",
    indexLabel: "02",
    storyName: "Immersive Decor & Styling",
    eyebrow: "EKAA REJOICE • DUBAI",
    title: "Every Detail. A Little Magic.",
    description:
      "Signature balloon styling, immersive light and thoughtful decor that transform a space into a feeling.",
    desktopImage: "/imagery/hero/hero-2-desktop.webp",
    mobileImage: "/imagery/hero/hero-2-mobile.webp",
    imageAlt:
      "Sculptural organic balloon installation in matte pearl ivory, apricot, coral, terracotta, and soft lavender with cascading satin ribbons",
    ctaLabel: "Enquire About Balloon Styling",
    ctaService: "Balloon Art & Styling",
    secondaryLabel: "Explore Experiences",
    secondaryHref: "#services",
  },
  {
    id: "corporate",
    indexLabel: "03",
    storyName: "Corporate & Brand Experiences",
    eyebrow: "EKAA REJOICE • DUBAI",
    title: "Make Your Brand the Moment.",
    description:
      "Thoughtfully designed corporate experiences that bring people together—and leave a lasting impression.",
    desktopImage: "/imagery/hero/hero-3-desktop.webp",
    mobileImage: "/imagery/hero/hero-3-mobile.webp",
    imageAlt:
      "Contemporary Dubai corporate event lounge styled with warm amber architectural lighting, copper backdrop accents, and tailored seating",
    ctaLabel: "Discuss a Corporate Event",
    ctaService: "Corporate Events",
    secondaryLabel: "Explore Our Work",
    secondaryHref: "#work",
  },
];
