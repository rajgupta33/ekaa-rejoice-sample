import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { getOrganizationJsonLd, SITE_CONFIG } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFDF9",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Ekaa Rejoice | Birthday & Corporate Event Styling in Dubai",
  description:
    "Explore personalized birthday celebrations, signature balloon styling, immersive lighting and corporate events in Dubai with Ekaa Rejoice. Enquire on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: SITE_CONFIG.name,
    title: "Ekaa Rejoice — The Art of Rejoicing",
    description:
      "Signature celebrations, creative decor and unforgettable events in Dubai.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekaa Rejoice — Signature celebrations and event styling in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekaa Rejoice — The Art of Rejoicing",
    description:
      "Signature celebrations, creative decor and unforgettable events in Dubai.",
    images: ["/brand/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationJsonLd();

  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-[#F5B56A]/35 selection:text-[#241D28]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
