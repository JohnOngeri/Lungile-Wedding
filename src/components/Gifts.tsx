import { REGISTRY_URL } from '../config'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

export function Gifts() {
  const reveal = useReveal<HTMLDivElement>()
  const hasRegistry = REGISTRY_URL.trim().length > 0

  return (
    <section id="gifts" className="bg-ivory px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[620px] text-center">
        <SectionHeading script="with love" title="Gifts & Registry" />
        <p className="mt-7 mb-9 text-[15px] leading-[1.9] text-body">
          Your presence at our wedding is truly the greatest gift of all. Should you wish to
          honour us with something more, we have created a registry to help us begin our new life
          together.
        </p>
        <a
          href={hasRegistry ? REGISTRY_URL : '#gifts'}
          target={hasRegistry ? '_blank' : undefined}
          rel={hasRegistry ? 'noreferrer' : undefined}
          className="inline-block border border-forest px-[38px] py-[15px] text-xs uppercase tracking-[0.26em] text-forest no-underline transition-colors hover:bg-forest hover:text-parchment"
        >
          View Our Registry
        </a>
        {!hasRegistry && (
          <p className="mt-[18px] mb-0 text-xs italic text-faint">
            Registry link coming soon. Check back closer to the day.
          </p>
        )}
      </div>
    </section>
  )
}
