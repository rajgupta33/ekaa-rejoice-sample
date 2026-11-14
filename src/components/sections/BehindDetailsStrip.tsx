import Image from "next/image";
import { BEHIND_DETAILS_STRIP } from "@/content/portfolio";

export function BehindDetailsStrip() {
  return (
    <section
      aria-label="Behind the styling details"
      className="border-y border-[#EBDDD6]/80 bg-[#F8F0E7]/50 py-14 sm:py-18"
    >
      <div className="container-atelier">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
              Behind the Details
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-medium text-[#241D28] sm:text-4xl">
              Crafted in texture, light, and color.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#5D5260]">
            Quiet attention to finishes ensures every corner of your room feels
            intentional from arrival to last toast.
          </p>
        </div>

        <div className="no-scrollbar -mx-3.5 mt-7 flex snap-x gap-4 overflow-x-auto px-3.5 pb-1 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {BEHIND_DETAILS_STRIP.map((item) => (
            <figure
              key={item.id}
              className="w-[76vw] max-w-[300px] shrink-0 snap-start md:w-auto md:max-w-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#EBDDD6] bg-[#FFFDF9]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 78vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-sm font-medium text-[#241D28]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
