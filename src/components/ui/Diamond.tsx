interface DiamondProps {
  size?: number
  className?: string
}

/** The recurring rotated-square motif. */
export function Diamond({ size = 7, className = 'bg-gold-bright' }: DiamondProps) {
  return (
    <div
      aria-hidden
      className={`rotate-45 ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

interface DiamondDividerProps {
  lineWidth?: number
  light?: boolean
}

/** Horizontal rule with a centred diamond: line — ◆ — line. */
export function DiamondDivider({ lineWidth = 64, light = true }: DiamondDividerProps) {
  const lineClass = light ? 'bg-gold-bright/70' : 'bg-gold/60'
  const diamondClass = light ? 'bg-gold-bright' : 'bg-gold'
  return (
    <div aria-hidden className="flex items-center justify-center gap-[18px]">
      <div className={`h-px ${lineClass}`} style={{ width: lineWidth }} />
      <Diamond className={diamondClass} />
      <div className={`h-px ${lineClass}`} style={{ width: lineWidth }} />
    </div>
  )
}
