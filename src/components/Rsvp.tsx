import { useState, type FormEvent } from 'react'
import { RSVP_DEADLINE_TEXT, RSVP_ENDPOINT } from '../config'
import { useReveal } from '../lib/useReveal'
import { Diamond } from './ui/Diamond'

const inputClass =
  'w-full box-border border border-linen bg-porcelain px-4 py-3.5 font-sans text-sm text-ink outline-none transition-colors focus:border-gold'

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.22em] text-forest'

export function Rsvp() {
  const reveal = useReveal<HTMLDivElement>()
  const [done, setDone] = useState(false)
  const [firstName, setFirstName] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const payload = JSON.stringify({
      fullName: name,
      attending: String(data.get('attendance') ?? ''),
      guestCount: String(data.get('guests') ?? ''),
      dietary: String(data.get('dietary') ?? ''),
      songRequest: String(data.get('song') ?? ''),
    })
    // Google Apps Script web apps don't send CORS headers, so this is a
    // fire-and-forget opaque request — the response can't be read.
    fetch(RSVP_ENDPOINT, { method: 'POST', mode: 'no-cors', body: payload }).catch(() => {})
    setFirstName(name.split(' ')[0] ?? '')
    setDone(true)
  }

  return (
    <section id="rsvp" className="relative overflow-hidden bg-pine px-8 py-[110px] max-sm:px-[22px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-6"
      >
        <span className="whitespace-nowrap font-script text-[clamp(160px,28vw,320px)] text-parchment">
          Love
        </span>
      </div>

      <div ref={reveal} className="reveal relative z-2 mx-auto max-w-[680px]">
        <div className="mb-12 text-center">
          <p className="m-0 font-script text-[34px] text-gold-bright">join the celebration</p>
          <h2 className="mt-2 mb-0 font-serif text-[clamp(36px,5vw,52px)] font-medium text-parchment">
            R.S.V.P.
          </h2>
          <div className="mx-auto mt-[22px] h-px w-14 bg-gold-bright" />
          <p className="mt-[26px] mb-0 text-[15px] leading-[1.9] text-parchment/85">
            Please let us know if you will share in our special day.
            <br />
            Kindly respond by{' '}
            <strong className="font-medium text-gold-bright">{RSVP_DEADLINE_TEXT}</strong>.
          </p>
        </div>

        {!done ? (
          <form
            onSubmit={submit}
            className="flex flex-col gap-[22px] bg-parchment p-[clamp(28px,5vw,52px)] shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="rsvp-name" className={labelClass}>
                Full name(s)
              </label>
              <input
                id="rsvp-name"
                name="name"
                required
                placeholder="e.g. Thandi & Sipho Dlamini"
                className={inputClass}
              />
            </div>

            <fieldset className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-0">
              <legend className={`${labelClass} p-0`}>Will you be attending?</legend>
              <div className="flex flex-wrap gap-3">
                {['Joyfully accepts', 'Regretfully declines'].map((choice, i) => (
                  <label
                    key={choice}
                    className="flex min-w-[200px] flex-1 cursor-pointer items-center gap-2.5 border border-linen bg-porcelain px-4 py-3.5 text-sm text-ink transition-colors hover:border-gold"
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={choice}
                      required={i === 0}
                      className="accent-forest"
                    />
                    {choice}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[22px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="rsvp-guests" className={labelClass}>
                  Number of guests
                </label>
                <select id="rsvp-guests" name="guests" className={inputClass}>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="rsvp-dietary" className={labelClass}>
                  Dietary requirements
                </label>
                <input
                  id="rsvp-dietary"
                  name="dietary"
                  placeholder="Vegetarian, halaal, allergies…"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="rsvp-song" className={labelClass}>
                Song that will get you dancing
              </label>
              <input
                id="rsvp-song"
                name="song"
                placeholder="Artist and song title"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="mt-2 cursor-pointer border-none bg-forest p-[17px] font-sans text-xs font-medium uppercase tracking-[0.28em] text-parchment transition-colors hover:bg-gold"
            >
              Send Our Response
            </button>
          </form>
        ) : (
          <div className="bg-parchment px-10 py-16 text-center shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)]">
            <p className="m-0 font-script text-[44px] text-gold">
              thank you{firstName ? `, ${firstName}` : ''}
            </p>
            <p className="mt-[18px] mb-0 text-[15px] leading-[1.9] text-body">
              Your response has been received with love.
              <br />
              We cannot wait to celebrate with you.
            </p>
            <div className="mt-[26px] flex items-center justify-center gap-3.5">
              <div className="h-px w-11 bg-gold/60" />
              <Diamond className="bg-gold" />
              <div className="h-px w-11 bg-gold/60" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
