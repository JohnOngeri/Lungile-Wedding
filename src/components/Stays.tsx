import { BOOKING_SEARCH_URL } from '../config'
import { STAYS } from '../content'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

export function Stays() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="stay" className="bg-porcelain px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[1100px] text-center">
        <SectionHeading script="make a weekend of it" title="Where to Stay" />
        <p className="mx-auto mt-7 mb-14 max-w-[660px] text-[15px] leading-[1.9] text-body">
          The Midlands is a beloved getaway destination, so we warmly encourage you to book your
          accommodation early. Wonderful B&amp;Bs, farm stays and boutique hotels lie just minutes
          from the venue. Here are a few of our favourites.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px] text-left">
          {STAYS.map((stay) => (
            <div
              key={stay.name}
              className="flex flex-col gap-3 border border-gold/30 bg-parchment px-[30px] py-[34px] transition-all hover:border-gold hover:shadow-[0_18px_36px_-22px_rgba(34,56,45,0.3)]"
            >
              <div className="size-[9px] rotate-45 bg-gold" />
              <h3 className="mt-1.5 mb-0 font-serif text-[25px] font-semibold text-forest">
                {stay.name}
              </h3>
              <p className="m-0 flex-1 text-sm leading-[1.7] text-muted">{stay.blurb}</p>
              <a
                href={stay.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-gold no-underline transition-colors hover:text-forest"
              >
                View Website →
              </a>
            </div>
          ))}
        </div>

        <a
          href={BOOKING_SEARCH_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-[52px] inline-block bg-forest px-[38px] py-[15px] text-xs uppercase tracking-[0.26em] text-parchment no-underline transition-colors hover:bg-gold"
        >
          Search All Nearby Stays
        </a>
      </div>
    </section>
  )
}
