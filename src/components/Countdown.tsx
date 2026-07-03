import { Fragment } from 'react'
import { WEDDING_DATE_ISO } from '../config'
import { useCountdown } from '../lib/useCountdown'

const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE_ISO)
  const values = [days, hours, minutes, seconds]

  return (
    <section
      id="countdown"
      className="border-b border-gold-bright/30 bg-pine px-6 py-16 text-center text-parchment"
    >
      <p className="mb-1.5 font-script text-[34px] text-gold-bright">until we say I do</p>
      <div className="mt-[26px] flex flex-wrap items-start justify-center gap-[clamp(18px,5vw,56px)]">
        {UNITS.map((unit, i) => (
          <Fragment key={unit}>
            {i > 0 && (
              <span
                aria-hidden
                className="font-serif text-[clamp(36px,5vw,52px)] leading-[1.1] text-gold-bright/60"
              >
                :
              </span>
            )}
            <div className="flex min-w-[72px] flex-col items-center">
              <span
                className={`font-serif text-[clamp(44px,6vw,64px)] font-medium leading-none ${
                  unit === 'Seconds' ? 'text-gold-bright' : 'text-parchment'
                }`}
              >
                {values[i]}
              </span>
              <span className="mt-3 text-[10.5px] uppercase tracking-[0.3em] text-sage">
                {unit}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
