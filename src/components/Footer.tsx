import { COUPLE } from '../config'

export function Footer() {
  return (
    <footer className="bg-evergreen px-6 py-14 text-center text-parchment/55">
      <p className="m-0 font-script text-[40px] text-gold-bright">
        {COUPLE.partner1} &amp; {COUPLE.partner2}
      </p>
      <p className="mt-3.5 mb-0 text-xs tracking-[0.4em]">
        03 &middot; 04 &middot; 2027 &nbsp;&middot;&nbsp; NOTTINGHAM ROAD
      </p>
      <p className="mt-[22px] mb-0 font-serif text-base italic text-parchment/40">
        made with love, for the people we love
      </p>
    </footer>
  )
}
