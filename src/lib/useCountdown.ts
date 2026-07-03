import { useEffect, useState } from 'react'

export interface Countdown {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const ZERO: Countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' }

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`
}

function remaining(target: number): Countdown {
  const dist = target - Date.now()
  if (dist <= 0) return ZERO
  return {
    days: pad(Math.floor(dist / 86_400_000)),
    hours: pad(Math.floor((dist % 86_400_000) / 3_600_000)),
    minutes: pad(Math.floor((dist % 3_600_000) / 60_000)),
    seconds: pad(Math.floor((dist % 60_000) / 1_000)),
  }
}

/** Live countdown to the given ISO date, ticking once per second. */
export function useCountdown(targetIso: string): Countdown {
  const [value, setValue] = useState<Countdown>(() => remaining(new Date(targetIso).getTime()))

  useEffect(() => {
    const target = new Date(targetIso).getTime()
    const timer = setInterval(() => {
      const next = remaining(target)
      setValue(next)
      if (next === ZERO) clearInterval(timer)
    }, 1000)
    return () => clearInterval(timer)
  }, [targetIso])

  return value
}
