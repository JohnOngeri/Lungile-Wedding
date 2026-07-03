/** Hand-drawn protea line art for the emerald card's side borders. */
export function ProteaArt() {
  return (
    <svg
      viewBox="0 0 60 520"
      preserveAspectRatio="xMidYMid meet"
      className="block h-full w-full"
      aria-hidden
    >
      <g stroke="#D9BC74" strokeWidth={1.1} fill="none" strokeLinecap="round">
        {/* top protea bloom */}
        <ellipse cx={30} cy={52} rx={16} ry={22} />
        <path d="M30 30 L30 74 M19 38 Q30 52 41 38 M16 52 Q30 64 44 52 M19 66 Q30 74 41 66" />
        <path d="M14 58 Q6 70 10 84 M46 58 Q54 70 50 84" />
        {/* stem */}
        <path d="M30 74 Q28 140 30 200 Q32 280 30 360 Q28 430 30 470" />
        {/* leaves */}
        <path d="M30 130 Q10 138 6 158 Q24 156 30 140 Z" />
        <path d="M30 190 Q50 198 54 218 Q36 216 30 200 Z" />
        <path d="M30 270 Q10 278 6 298 Q24 296 30 280 Z" />
        <path d="M30 340 Q50 348 54 368 Q36 366 30 350 Z" />
        {/* small bud lower */}
        <ellipse cx={30} cy={452} rx={10} ry={14} />
        <path d="M24 444 Q30 454 36 444 M22 454 Q30 462 38 454" />
        {/* base flourish */}
        <path d="M30 470 Q18 488 30 504 Q42 488 30 470" />
      </g>
    </svg>
  )
}
