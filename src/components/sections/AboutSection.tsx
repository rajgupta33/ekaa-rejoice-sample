import Image from "next/image";
import { ABOUT_CONTENT } from "@/content/sections";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#FFFDF9] py-16 sm:py-20 lg:py-28"
    >
      <div className="container-atelier grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Editorial Image Pair */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[22px] border border-[#EBDDD6] bg-[#F8F0E7] shadow-sm sm:rounded-[30px]">
            <Image
              src={ABOUT_CONTENT.wideImage}
              alt={ABOUT_CONTENT.wideAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Offset detail image on tablet/desktop + clean stacked rhythm on small mobile */}
          <div className="mt-4 flex items-end gap-4 sm:mt-0 sm:block">
            <div className="relative aspect-[4/3] w-44 shrink-0 overflow-hidden rounded-[18px] border-2 border-[#FFFDF9] bg-[#F8F0E7] shadow-lg sm:absolute sm:-bottom-8 sm:right-6 sm:w-56 sm:rounded-[24px] lg:right-8 lg:w-64">
              <Image
                src={ABOUT_CONTENT.detailImage}
                alt={ABOUT_CONTENT.detailAlt}
                fill
                sizes="(max-width: 640px) 180px, 260px"
                className="object-cover"
              />
            </div>
            <p className="font-display text-lg italic text-[#A65336] sm:mt-4 sm:pl-1 sm:text-xl">
              {ABOUT_CONTENT.caption}
            </p>
          </div>
        </div>

        {/* Copy Column */}
        <div className="lg:col-span-6 lg:pl-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
            {ABOUT_CONTENT.eyebrow}
          </p>
          <h2 className="mt-2.5 font-display text-[clamp(2.2rem,5.5vw,3.9rem)] font-medium leading-[1.07] tracking-[-0.015em] text-[#241D28]">
            {ABOUT_CONTENT.heading}
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-[#5D5260] sm:text-[17px]">
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#EBDDD6] pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#241D28]">
            <span>Part of the Ekaa family</span>
            <span aria-hidden="true" className="text-[#A65336]">
              •
            </span>
            <span>Dubai, UAE</span>
            <span aria-hidden="true" className="text-[#A65336]">
              •
            </span>
            <span>@ekaa_rejoice</span>
          </div>
        </div>
      </div>
    </section>
  );
}
