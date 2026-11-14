import Image from "next/image";

type BrandLogoProps = {
  variant?: "hero" | "ivory";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function BrandLogo({
  variant = "ivory",
  size = "md",
  className = "",
}: BrandLogoProps) {
  const dimensions =
    size === "sm"
      ? "h-8 w-8 min-[375px]:h-10 min-[375px]:w-10 sm:h-11 sm:w-11"
      : size === "lg"
        ? "h-14 w-14 sm:h-16 sm:w-16"
        : "h-11 w-11 sm:h-12 sm:w-12";

  if (variant === "hero") {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-[#FFFDF9]/95 p-1 shadow-sm ring-1 ring-[#EBDDD6]/80 backdrop-blur-md transition-all duration-300 min-[375px]:rounded-2xl min-[375px]:p-1.5 ${className}`}
      >
        <Image
          src="/brand/official-logo.png"
          alt="Ekaa Rejoice official logo"
          width={85}
          height={85}
          priority
          className={`${dimensions} object-contain`}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src="/brand/official-logo.png"
        alt="Ekaa Rejoice official logo"
        width={85}
        height={85}
        className={`${dimensions} object-contain`}
      />
    </span>
  );
}
