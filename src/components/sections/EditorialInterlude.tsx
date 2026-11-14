import { SculptedOrbCluster } from "@/components/shared/SculptedAccent";

export function EditorialInterlude() {
  return (
    <section
      aria-label="Design philosophy"
      className="bg-pearl-glow editorial-grain relative overflow-hidden border-y border-[#EBDDD6]/80 py-20 sm:py-28 lg:py-36"
    >
      <div className="container-atelier relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A65336] sm:text-xs">
            Sculpted Joy
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.35rem,7vw,4.9rem)] font-medium leading-[1.04] tracking-[-0.015em] text-[#241D28]">
            We don&apos;t just set the scene.
            <br />
            <span className="italic text-[#A65336]">We create the feeling.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5D5260] sm:text-lg">
            Every color, every detail, every moment is considered—so your
            celebration feels unmistakably yours.
          </p>
        </div>

        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <SculptedOrbCluster
            variant="interlude"
            className="animate-sculpted h-56 w-64 sm:h-72 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
}
