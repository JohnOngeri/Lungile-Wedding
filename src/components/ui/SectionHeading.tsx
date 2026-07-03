interface SectionHeadingProps {
  script: string
  title: string
  /** Dark variant for sections on deep-green backgrounds. */
  onDark?: boolean
}

/** Script kicker + serif title + gold rule, centred — the section signature. */
export function SectionHeading({ script, title, onDark = false }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <p className={`m-0 font-script text-[34px] ${onDark ? 'text-gold-bright' : 'text-gold'}`}>
        {script}
      </p>
      <h2
        className={`mt-2 mb-0 font-serif font-medium text-[clamp(36px,5vw,52px)] ${
          onDark ? 'text-parchment' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      <div className={`mx-auto mt-[22px] h-px w-14 ${onDark ? 'bg-gold-bright' : 'bg-gold'}`} />
    </div>
  )
}
