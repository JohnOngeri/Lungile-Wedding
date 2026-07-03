import { GOOGLE_CALENDAR_URL, resolveSiteUrl } from '../config'
import { downloadIcs } from '../lib/downloadIcs'
import { useQrCode } from '../lib/useQrCode'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

const cardClass =
  'border border-gold/30 bg-ivory px-[38px] py-12 text-center flex flex-col justify-center gap-[18px]'

export function CalendarQr() {
  const reveal = useReveal<HTMLDivElement>()
  const qr = useQrCode(resolveSiteUrl(), 8)

  return (
    <section id="calendar" className="bg-porcelain px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[1000px]">
        <div className="mb-16">
          <SectionHeading script="save the date" title="Keep It Close" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-8">
          <div className={cardClass}>
            <h3 className="m-0 font-serif text-[27px] font-semibold text-forest">
              Add to Your Calendar
            </h3>
            <p className="m-0 text-sm leading-[1.7] text-muted">
              One tap, and the 3rd of April 2027 is safely in your diary.
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <a
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noreferrer"
                className="block bg-forest p-3.5 text-[11.5px] uppercase tracking-[0.24em] text-parchment no-underline transition-colors hover:bg-gold"
              >
                Google Calendar
              </a>
              <button
                type="button"
                onClick={downloadIcs}
                className="block w-full cursor-pointer border border-forest bg-transparent p-3.5 font-sans text-[11.5px] uppercase tracking-[0.24em] text-forest transition-colors hover:bg-forest hover:text-parchment"
              >
                Apple / Outlook (.ics)
              </button>
            </div>
          </div>

          <div className={`${cardClass} items-center`}>
            <h3 className="m-0 font-serif text-[27px] font-semibold text-forest">
              Share Our Website
            </h3>
            {qr ? (
              <div className="border border-gold/40 bg-white p-3.5">
                <img
                  src={qr}
                  alt="QR code linking to this wedding website"
                  className="block size-[168px] [image-rendering:pixelated]"
                />
              </div>
            ) : (
              <div className="flex size-[196px] items-center justify-center border border-dashed border-gold/60 text-xs text-faint">
                QR loading…
              </div>
            )}
            <p className="m-0 text-sm leading-[1.7] text-muted">
              Scan to open this website. Perfect for sharing with family and friends.
            </p>
            <a
              href="/qr-card/"
              className="border-b border-gold/50 pb-[3px] text-[11px] uppercase tracking-[0.2em] text-gold no-underline transition-colors hover:border-forest hover:text-forest"
            >
              Open Printable QR Card →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
