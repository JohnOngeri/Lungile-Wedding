import { COUPLE, resolveSiteUrl } from '../config'
import { useQrCode } from '../lib/useQrCode'
import { ProteaArt } from './ProteaArt'

const QR_COLORS = { dark: '#14301F', light: '#F6EDD8' }

/** Emerald gem accent pinned to one edge of the QR frame. */
function Gem({ position }: { position: string }) {
  return (
    <div
      aria-hidden
      className={`absolute size-2 border border-gold-glow shadow-[0_1px_3px_rgba(0,0,0,0.5)] ${position}`}
      style={{ background: 'radial-gradient(circle at 35% 30%, #4FA876, #1E5C3C 70%)' }}
    />
  )
}

export function EmeraldCard() {
  const qr = useQrCode(resolveSiteUrl(), 10, QR_COLORS)

  return (
    <div className="print-stage flex min-h-screen flex-col items-center justify-center gap-[26px] bg-[#2E2420] px-4 py-12 font-sans">
      <div className="no-print flex flex-wrap items-center justify-center gap-[18px]">
        <a
          href="/"
          className="border-b border-gold-bright/40 pb-[3px] text-[11px] uppercase tracking-[0.2em] text-gold-bright no-underline"
        >
          ← Back to Website
        </a>
        <a
          href="/qr-card/"
          className="border-b border-gold-bright/40 pb-[3px] text-[11px] uppercase tracking-[0.2em] text-gold-bright no-underline"
        >
          View Option 1 (Ivory)
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer border-none bg-gold-bright px-[26px] py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1B3A2A] transition-colors hover:bg-parchment"
        >
          Print This Card
        </button>
      </div>

      <div
        className="print-card relative box-border h-[7in] w-[5in] shrink-0 overflow-hidden shadow-[0_36px_72px_-30px_rgba(0,0,0,0.8)]"
        style={{
          background:
            'radial-gradient(ellipse 120% 90% at 50% 30%, #234A36 0%, #1B3A2A 55%, #132A1E 100%)',
        }}
      >
        {/* velvet sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(118deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 28%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0.22) 100%)',
          }}
        />

        {/* protea line-art borders */}
        <div className="pointer-events-none absolute top-[0.55in] bottom-[0.55in] left-[0.16in] w-[0.62in] opacity-75">
          <ProteaArt />
        </div>
        <div className="pointer-events-none absolute top-[0.55in] bottom-[0.55in] right-[0.16in] w-[0.62in] -scale-x-100 opacity-75">
          <ProteaArt />
        </div>

        {/* gold frame */}
        <div className="pointer-events-none absolute inset-[0.22in] border-[1.5px] border-gold-bright/85" />
        <div className="pointer-events-none absolute inset-[0.28in] border-[0.5px] border-gold-bright/45" />

        {/* content */}
        <div className="absolute inset-[0.28in] box-border flex flex-col items-center justify-between px-[0.45in] pt-[0.18in] pb-[0.26in] text-center">
          {/* wax seal */}
          <div
            className="relative -mt-[0.04in] flex size-[0.62in] shrink-0 items-center justify-center rounded-full"
            style={{
              background:
                'radial-gradient(circle at 36% 30%, #D9A864 0%, #B07D3E 42%, #8A5E2B 75%, #6E4920 100%)',
              boxShadow:
                '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,235,200,0.55), inset 0 -2px 4px rgba(0,0,0,0.35)',
            }}
          >
            <div className="flex size-[0.46in] items-center justify-center rounded-full border border-[rgba(60,38,12,0.5)]">
              <span className="font-script text-[21px] leading-none text-[#4A3010] [text-shadow:0_1px_1px_rgba(255,230,190,0.45)]">
                S&amp;L
              </span>
            </div>
          </div>

          <div>
            <p className="m-0 text-[9.5px] uppercase tracking-[0.4em] text-gold-pale [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              You Are Warmly Invited
            </p>
            <p className="mt-2 mb-0 font-script text-[27px] leading-none text-gold-bright [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
              to the wedding of
            </p>
          </div>

          <div>
            <h1 className="m-0 font-serif text-[31px] font-medium leading-[1.18] tracking-[0.03em] text-gold-glow [text-shadow:0_1px_1px_rgba(0,0,0,0.6),0_0_14px_rgba(217,188,116,0.25)]">
              {COUPLE.partner1Full}
            </h1>
            <div className="my-px font-script text-2xl text-gold-bright">&amp;</div>
            <h1 className="m-0 font-serif text-[31px] font-medium leading-[1.18] tracking-[0.03em] text-gold-glow [text-shadow:0_1px_1px_rgba(0,0,0,0.6),0_0_14px_rgba(217,188,116,0.25)]">
              {COUPLE.partner2Full}
            </h1>
          </div>

          <div className="flex items-center gap-[11px]">
            <div className="h-px w-10 bg-gold-bright/70" />
            <div className="size-[5px] rotate-45 bg-gold-bright" />
            <div className="h-px w-10 bg-gold-bright/70" />
          </div>

          <div>
            <p className="m-0 font-serif text-[16.5px] tracking-[0.12em] text-gold-glow">
              SATURDAY &middot; 3RD APRIL 2027 &middot;{' '}
              <span className="whitespace-nowrap">8:00 AM</span>
            </p>
            <p className="mt-[7px] mb-0 text-[9.5px] uppercase tracking-[0.18em] text-gold-pale/85">
              The Gallery &middot; Nottingham Road &middot; Midlands
            </p>
          </div>

          {/* ornate QR */}
          <div className="flex flex-col items-center gap-[9px]">
            <div
              className="relative p-[9px] shadow-[0_6px_18px_rgba(0,0,0,0.55)]"
              style={{
                background:
                  'linear-gradient(135deg, #E6CC8B 0%, #B8965A 30%, #EAD296 50%, #A8854A 72%, #D9BC74 100%)',
              }}
            >
              <Gem position="-top-1 left-1/2 -translate-x-1/2 rotate-45" />
              <Gem position="-bottom-1 left-1/2 -translate-x-1/2 rotate-45" />
              <Gem position="-left-1 top-1/2 -translate-y-1/2 rotate-45" />
              <Gem position="-right-1 top-1/2 -translate-y-1/2 rotate-45" />
              <div className="flex bg-[#F6EDD8] p-1.5">
                {qr ? (
                  <img
                    src={qr}
                    alt="QR code linking to the wedding website"
                    className="block size-[1.28in] [image-rendering:pixelated]"
                  />
                ) : (
                  <div className="flex size-[1.28in] items-center justify-center text-[10px] text-[#8A7A55]">
                    QR loading…
                  </div>
                )}
              </div>
            </div>
            <p className="m-0 text-[8.5px] uppercase tracking-[0.32em] text-gold-pale">
              Scan For Details &amp; RSVP
            </p>
          </div>
        </div>
      </div>

      <p className="no-print m-0 max-w-[440px] text-center text-xs leading-[1.7] text-gold-pale/80">
        Option 2: emerald velvet &amp; gold foil, 5&times;7&Prime;. The QR code is real and
        scannable, in deep green on cream so phone cameras read it instantly. For true velvet and
        foil, hand this page to your printer as a reference and ask for emerald suede stock with
        gold foil stamping.
      </p>
    </div>
  )
}
