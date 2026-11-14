import { PROCESS_STEPS } from "@/content/sections";

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="bg-[#FFFDF9] py-16 sm:py-20 lg:py-28"
    >
      <div className="container-atelier">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
            From the First Idea to the Final Reveal
          </p>
          <h2 className="mt-2.5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#241D28]">
            Your vision. Beautifully unfolded.
          </h2>
        </div>

        {/* Flowing Horizontal Timeline (Desktop) / Clean Vertical Stepper (Mobile) */}
        <div className="relative mt-10 sm:mt-14">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-5 hidden h-px bg-gradient-to-r from-[#EBDDD6] via-[#A65336]/45 to-[#EBDDD6] lg:block"
          />
          {/* Mobile vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-5 w-px bg-gradient-to-b from-[#A65336]/50 via-[#EBDDD6] to-transparent lg:hidden"
          />

          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-7">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.number}
                className="relative pl-14 lg:pl-0 lg:pt-12"
              >
                {/* Pearl Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#EBDDD6] bg-[#FFFDF9] font-mono text-xs font-semibold text-[#A65336] shadow-sm ring-4 ring-[#FFFDF9]"
                >
                  {step.number}
                </span>

                <h3 className="font-display text-2xl font-medium text-[#241D28] sm:text-[26px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5D5260]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
