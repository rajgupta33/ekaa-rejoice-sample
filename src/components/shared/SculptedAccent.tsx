export function SculptedOrbCluster({
  variant = "interlude",
  className = "",
}: {
  variant?: "hero" | "interlude" | "cta";
  className?: string;
}) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
      >
        <svg
          viewBox="0 0 220 260"
          className="h-full w-full drop-shadow-[0_24px_40px_rgba(36,29,40,0.28)]"
          fill="none"
        >
          <defs>
            <radialGradient id="heroPearl" cx="32%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.95" />
              <stop offset="38%" stopColor="#F5B56A" stopOpacity="0.58" />
              <stop offset="78%" stopColor="#F27C75" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#BAA5E9" stopOpacity="0.22" />
            </radialGradient>
            <linearGradient id="heroRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#F5B56A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A65336" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path
            d="M126 146C124 180 144 212 118 248"
            stroke="url(#heroRibbon)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="122" cy="96" r="56" fill="url(#heroPearl)" />
          <ellipse
            cx="102"
            cy="72"
            rx="18"
            ry="10"
            transform="rotate(-24 102 72)"
            fill="#FFFDF9"
            fillOpacity="0.55"
          />
          <circle
            cx="54"
            cy="154"
            r="22"
            fill="#BAA5E9"
            fillOpacity="0.32"
            stroke="#FFFDF9"
            strokeOpacity="0.35"
          />
        </svg>
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
      >
        <svg viewBox="0 0 260 260" className="h-full w-full" fill="none">
          <defs>
            <radialGradient id="ctaGlassOrb" cx="30%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.98" />
              <stop offset="40%" stopColor="#F6B2C1" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#BAA5E9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F5B56A" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <circle cx="140" cy="122" r="82" fill="url(#ctaGlassOrb)" />
          <ellipse
            cx="112"
            cy="88"
            rx="24"
            ry="13"
            transform="rotate(-28 112 88)"
            fill="#FFFDF9"
            fillOpacity="0.7"
          />
          <circle cx="62" cy="186" r="24" fill="#5AA7A5" fillOpacity="0.22" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 380 340" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="interludeMain" cx="32%" cy="26%" r="72%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="1" />
            <stop offset="35%" stopColor="#F4D7BD" stopOpacity="0.88" />
            <stop offset="70%" stopColor="#F27C75" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#BAA5E9" stopOpacity="0.36" />
          </radialGradient>
          <radialGradient id="interludeSecondary" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#BAA5E9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5AA7A5" stopOpacity="0.25" />
          </radialGradient>
          <linearGradient id="satinRibbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A65336" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#F5B56A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F27C75" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Sculpted satin ribbon sweep */}
        <path
          d="M26 248C94 198 158 292 232 228C284 182 326 210 356 174"
          stroke="url(#satinRibbon)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M52 270C122 214 188 300 256 242"
          stroke="#A65336"
          strokeOpacity="0.16"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Main sculptural pearl balloon */}
        <circle cx="195" cy="145" r="88" fill="url(#interludeMain)" />
        <ellipse
          cx="162"
          cy="104"
          rx="28"
          ry="15"
          transform="rotate(-26 162 104)"
          fill="#FFFDF9"
          fillOpacity="0.72"
        />

        {/* Secondary glass orb */}
        <circle cx="290" cy="96" r="40" fill="url(#interludeSecondary)" />
        <ellipse
          cx="276"
          cy="79"
          rx="12"
          ry="6.5"
          transform="rotate(-22 276 79)"
          fill="#FFFDF9"
          fillOpacity="0.65"
        />

        {/* Small floating champagne droplet */}
        <circle cx="96" cy="112" r="22" fill="#F5B56A" fillOpacity="0.34" />
      </svg>
    </div>
  );
}
