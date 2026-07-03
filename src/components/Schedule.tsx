import { TIMELINE } from '../content'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

export function Schedule() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="schedule" className="bg-ivory px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[640px]">
        <div className="mb-16">
          <SectionHeading script="order of the day" title="Our Wedding Day" />
        </div>

        <div className="flex flex-col">
          {TIMELINE.map((item) => (
            <div key={item.time} className="grid grid-cols-[86px_40px_1fr] items-start">
              <div className="pt-0 text-right font-serif text-[22px] font-semibold leading-[1.2] text-forest">
                {item.time}
              </div>
              <div className="flex flex-col items-center self-stretch">
                <div className="mt-[7px] size-[9px] rotate-45 bg-gold" />
                <div className="mt-1.5 w-px flex-1 bg-gold/40" />
              </div>
              <div className="pb-[42px]">
                <h3 className="m-0 font-serif text-[23px] font-semibold leading-[1.2] text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 mb-0 text-sm leading-[1.7] text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
