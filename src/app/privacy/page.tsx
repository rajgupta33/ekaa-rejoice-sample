import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Ekaa Rejoice",
  description:
    "How Ekaa Rejoice handles enquiries and respects visitor privacy.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[#5D5260]">
          {SITE_CONFIG.name} • {SITE_CONFIG.locationLabel}
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#5D5260]">
          <section>
            <h2 className="font-display text-2xl font-medium text-[#241D28]">
              1. Information You Share
            </h2>
            <p className="mt-2">
              This website does not store personal enquiry form submissions on a
              website database. When you use the optional WhatsApp brief builder
              or click an enquiry button, your selections are assembled locally
              in your browser to open a message in WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-[#241D28]">
              2. WhatsApp &amp; External Services
            </h2>
            <p className="mt-2">
              When you choose to continue to WhatsApp or visit Instagram (
              {SITE_CONFIG.instagramHandle}), your communication is subject to
              those platforms&apos; respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-[#241D28]">
              3. Contact Us
            </h2>
            <p className="mt-2">
              For privacy questions or updates regarding an event enquiry,
              contact {SITE_CONFIG.name} on {SITE_CONFIG.telephoneDisplay} or
              visit{" "}
              <a
                href={SITE_CONFIG.parentBrandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#A65336]"
              >
                {SITE_CONFIG.parentBrandName}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
