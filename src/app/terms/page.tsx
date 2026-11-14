import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use | Ekaa Rejoice",
  description: "Website terms of use for Ekaa Rejoice in Dubai, UAE.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] px-4 py-12 text-[#241D28] sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-medium text-[#5D5260] transition-colors hover:text-[#A65336]"
        >
          <BrandLogo variant="ivory" size="sm" />
          <span>← Back to Ekaa Rejoice</span>
        </Link>

        <h1 className="mt-8 font-display text-4xl font-medium sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-[#5D5260]">
          {SITE_CONFIG.name} • {SITE_CONFIG.locationLabel}
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#5D5260]">
          <section>
            <h2 className="font-display text-2xl font-medium text-[#241D28]">
              1. Enquiries &amp; Availability
            </h2>
            <p className="mt-2">
              Sending a WhatsApp message or using the prefill enquiry builder on
              this website initiates a conversation with {SITE_CONFIG.name} and
              does not constitute a confirmed booking, quote, or availability
              guarantee until confirmed directly in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-[#241D28]">
              2. Brand &amp; Visual Content
            </h2>
            <p className="mt-2">
              All {SITE_CONFIG.name} brand marks, editorial copy, and curated
              assets displayed on this site belong to {SITE_CONFIG.name} and the{" "}
              {SITE_CONFIG.parentBrandName} brand family and may not be reused
              without permission.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
