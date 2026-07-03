import { VENUE } from '../config'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

export function Venue() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="venue" className="bg-porcelain px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[1100px]">
        <div className="mb-16">
          <SectionHeading script="when & where" title="The Celebration" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] items-center gap-14">
          <div className="flex flex-col gap-7">
            <div>
              <h3 className="m-0 font-serif text-[26px] font-semibold text-forest">The Date</h3>
              <p className="mt-2.5 mb-0 text-[15px] leading-[1.8] text-body">
                Saturday, 3rd April 2027
                <br />
                Ceremony begins at 8:00 AM. Please be seated by 7:45 AM
              </p>
            </div>
            <div>
              <h3 className="m-0 font-serif text-[26px] font-semibold text-forest">The Venue</h3>
              <p className="mt-2.5 mb-0 text-[15px] leading-[1.8] text-body">
                <strong className="font-semibold text-ink">{VENUE.name}</strong>
                <br />
                {VENUE.area}
                <br />
                {VENUE.country}
              </p>
              <a
                href={VENUE.website}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block border-b border-gold/50 pb-[3px] text-[11.5px] uppercase tracking-[0.2em] text-gold no-underline transition-colors hover:border-forest hover:text-forest"
              >
                Visit Venue Website
              </a>
            </div>
            <p className="m-0 border-t border-forest/12 pt-6 font-serif text-[19px] italic leading-[1.7] text-muted">
              Nestled among the rolling green hills of the Midlands, we cannot wait to celebrate
              our love story with you at this elegant and romantic estate.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-3.5 -left-3.5 right-3.5 bottom-3.5 z-2 border border-gold/50" />
            <img
              src="/images/venue-courtyard.jpg"
              alt="The Gallery's stone courtyard set for a wedding feast with flowers and fairy lights"
              loading="lazy"
              className="block h-[400px] w-full object-cover shadow-[0_24px_48px_-20px_rgba(34,56,45,0.35)]"
            />
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-[18px] text-center text-[11px] uppercase tracking-[0.26em] text-muted">
            Find your way to us
          </p>
          <iframe
            src={VENUE.mapEmbedSrc}
            title="Map to The Gallery Wedding Venue"
            className="block h-[340px] w-full border-0 shadow-[0_24px_48px_-20px_rgba(34,56,45,0.35)]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
