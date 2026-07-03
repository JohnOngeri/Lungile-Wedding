import { COUPLE } from '../config'
import { Diamond } from './ui/Diamond'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <img
        src={HERO_IMAGE}
        alt="Wedding ceremony arch"
        className="absolute inset-0 h-full w-full animate-kenburns object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,36,28,0.62),rgba(20,36,28,0.32)_45%,rgba(20,36,28,0.68))]" />

      <div className="relative z-2 max-w-[880px] animate-fade-up px-8 pt-[120px] pb-10 text-parchment max-sm:px-[22px]">
        <p className="mb-[22px] text-xs uppercase tracking-[0.42em] text-gold-bright">
          Together with their families
        </p>
        <h1 className="m-0 font-serif text-[clamp(54px,9vw,104px)] font-medium leading-[1.04] tracking-[0.02em]">
          {COUPLE.partner1}
        </h1>
        <div className="my-1.5 font-script text-[clamp(40px,6vw,68px)] leading-[1.1] text-gold-bright">
          &amp;
        </div>
        <h1 className="m-0 font-serif text-[clamp(54px,9vw,104px)] font-medium leading-[1.04] tracking-[0.02em]">
          {COUPLE.partner2}
        </h1>

        <div className="mt-[34px] mb-3.5 flex items-center justify-center gap-[18px]">
          <div className="h-px w-16 bg-gold-bright/70" />
          <Diamond />
          <div className="h-px w-16 bg-gold-bright/70" />
        </div>

        <p className="m-0 font-serif text-[clamp(20px,3vw,27px)] italic tracking-[0.06em]">
          Saturday, 3rd April 2027 &nbsp;&middot;&nbsp; The Gallery, Nottingham Road
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <a
            href="#rsvp"
            className="inline-block border border-gold-bright bg-gold-bright px-9 py-3.5 text-xs font-medium uppercase tracking-[0.26em] text-[#142018] no-underline transition-colors hover:bg-transparent hover:text-gold-bright"
          >
            RSVP Now
          </a>
          <a
            href="#venue"
            className="inline-block border border-parchment/70 px-9 py-3.5 text-xs uppercase tracking-[0.26em] text-parchment no-underline transition-colors hover:border-gold-bright hover:text-gold-bright"
          >
            Our Day
          </a>
        </div>
      </div>

      <a
        href="#countdown"
        aria-label="Scroll to countdown"
        className="absolute bottom-[26px] left-1/2 z-2 -translate-x-1/2 animate-bob text-[22px] text-parchment/75 no-underline"
      >
        ↓
      </a>
    </section>
  )
}
