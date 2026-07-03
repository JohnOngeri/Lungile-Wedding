import { COUPLE, resolveSiteUrl } from '../config'
import { useQrCode } from '../lib/useQrCode'

export function IvoryCard() {
  const qr = useQrCode(resolveSiteUrl(), 10)

  return (
    <div className="print-stage flex min-h-screen flex-col items-center justify-center gap-[26px] bg-sage px-4 py-12 font-sans">
      <div className="no-print flex items-center gap-[18px]">
        <a
          href="/"
          className="border-b border-pine/40 pb-[3px] text-[11px] uppercase tracking-[0.2em] text-pine no-underline"
        >
          ← Back to Website
        </a>
        <a
          href="/qr-card-emerald/"
          className="border-b border-pine/40 pb-[3px] text-[11px] uppercase tracking-[0.2em] text-pine no-underline"
        >
          View Option 2 (Emerald)
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer border-none bg-pine px-[26px] py-3 font-sans text-[11px] uppercase tracking-[0.24em] text-parchment transition-colors hover:bg-gold"
        >
          Print This Card
        </button>
      </div>

      <div className="print-card box-border h-[7in] w-[5in] shrink-0 bg-parchment p-[0.32in] shadow-[0_36px_72px_-30px_rgba(20,36,28,0.6)]">
        <div className="box-border h-full w-full border border-gold p-1.5">
          <div className="box-border flex h-full w-full flex-col items-center justify-between border border-gold/45 px-[0.3in] py-[0.34in] text-center">
            <div>
              <p className="m-0 text-[9px] uppercase tracking-[0.42em] text-gold">
                You are warmly invited
              </p>
              <p className="mt-3.5 mb-0 font-script text-[30px] leading-none text-gold">
                to the wedding of
              </p>
            </div>

            <div>
              <h1 className="m-0 font-serif text-[35px] font-medium leading-[1.15] tracking-[0.02em] text-pine">
                {COUPLE.partner1Full}
              </h1>
              <div className="my-0.5 font-script text-[26px] text-gold">&amp;</div>
              <h1 className="m-0 font-serif text-[35px] font-medium leading-[1.15] tracking-[0.02em] text-pine">
                {COUPLE.partner2Full}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px w-11 bg-gold/70" />
              <div className="size-1.5 rotate-45 bg-gold" />
              <div className="h-px w-11 bg-gold/70" />
            </div>

            <div>
              <p className="m-0 font-serif text-lg tracking-[0.1em] text-ink">
                SATURDAY &middot; 3RD APRIL 2027 &middot;{' '}
                <span className="whitespace-nowrap">8:00 AM</span>
              </p>
              <p className="mt-2 mb-0 text-[11px] uppercase tracking-[0.16em] text-muted">
                The Gallery &middot; Nottingham Road &middot; Midlands
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              {qr ? (
                <div className="border border-gold/50 bg-white p-2.5">
                  <img
                    src={qr}
                    alt="QR code linking to the wedding website"
                    className="block size-[1.55in] [image-rendering:pixelated]"
                  />
                </div>
              ) : (
                <div className="flex size-[1.55in] items-center justify-center border border-dashed border-gold/70 text-[10px] text-faint">
                  QR loading…
                </div>
              )}
              <p className="m-0 text-[9.5px] uppercase tracking-[0.3em] text-pine">
                Scan for details &amp; RSVP
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="no-print m-0 max-w-[420px] text-center text-xs leading-[1.7] text-pine/75">
        A 5&times;7&Prime; insert for your invitations. The QR code points to the wedding website
        automatically. Once the site has its final address, set it in src/config.ts.
      </p>
    </div>
  )
}
