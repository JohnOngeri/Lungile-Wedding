import { GIFT_BANK_DETAILS } from '../config'
import { useReveal } from '../lib/useReveal'
import { SectionHeading } from './ui/SectionHeading'

const rowClass = 'flex items-baseline justify-between gap-4 border-b border-gold/15 py-3 last:border-0'
const labelClass = 'text-[11px] uppercase tracking-[0.2em] text-muted'
const valueClass = 'font-serif text-lg text-forest'

export function Gifts() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="gifts" className="bg-ivory px-8 py-[110px] max-sm:px-[22px]">
      <div ref={reveal} className="reveal mx-auto max-w-[620px] text-center">
        <SectionHeading script="with love" title="Gifts" />
        <p className="mt-7 mb-9 text-[15px] leading-[1.9] text-body">
          Your presence at our wedding is the greatest gift of all. However, if you do wish to
          give a gift, a cash contribution for our future would be greatly appreciated.
        </p>

        <div className="border border-gold/30 bg-parchment px-8 py-9 text-left">
          <div className={rowClass}>
            <span className={labelClass}>Bank</span>
            <span className={valueClass}>{GIFT_BANK_DETAILS.bank}</span>
          </div>
          <div className={rowClass}>
            <span className={labelClass}>Account Name</span>
            <span className={valueClass}>{GIFT_BANK_DETAILS.accountName}</span>
          </div>
          <div className={rowClass}>
            <span className={labelClass}>Account No.</span>
            <span className={valueClass}>{GIFT_BANK_DETAILS.accountNumber}</span>
          </div>
        </div>

        <p className="mt-7 mb-0 text-sm leading-[1.8] text-muted">
          Prefer to send directly via phone? You're welcome to send to{' '}
          <span className="font-medium text-forest">{GIFT_BANK_DETAILS.phoneNumbers[0]}</span> or{' '}
          <span className="font-medium text-forest">{GIFT_BANK_DETAILS.phoneNumbers[1]}</span>.
        </p>
      </div>
    </section>
  )
}
