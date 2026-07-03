import { useCallback, useEffect, useRef, useState } from 'react'
import { MUSIC_SOURCES } from '../config'

export interface Music {
  audioRef: React.RefObject<HTMLAudioElement | null>
  available: boolean
  playing: boolean
  toggle: () => void
}

const START_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'wheel'] as const

/**
 * Background music with graceful degradation: sources are tried in order,
 * and the control hides itself entirely if none of them load.
 *
 * Browsers block audio-with-sound from autoplaying until the visitor has
 * interacted with the page, so this starts playback on the *first* tap,
 * click, key press, or scroll anywhere on the page — the closest thing to
 * "plays automatically" that's actually allowed. The toggle button remains
 * for pausing/resuming afterwards.
 */
export function useMusic(): Music {
  const audioRef = useRef<HTMLAudioElement>(null)
  const indexRef = useRef(0)
  const playingRef = useRef(false)
  const userPausedRef = useRef(false)
  const [available, setAvailable] = useState(MUSIC_SOURCES.length > 0)
  const [playing, setPlaying] = useState(false)

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.32
    audio
      .play()
      .then(() => {
        playingRef.current = true
        setPlaying(true)
      })
      .catch(() => {
        playingRef.current = false
        setPlaying(false)
      })
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || MUSIC_SOURCES.length === 0) return

    const advance = () => {
      indexRef.current += 1
      const next = MUSIC_SOURCES[indexRef.current]
      if (next) {
        audio.src = next
        if (playingRef.current) audio.play().catch(() => {})
      } else {
        playingRef.current = false
        setAvailable(false)
        setPlaying(false)
      }
    }

    audio.addEventListener('error', advance)
    audio.src = MUSIC_SOURCES[0]
    return () => audio.removeEventListener('error', advance)
  }, [])

  useEffect(() => {
    if (MUSIC_SOURCES.length === 0) return

    const startOnFirstInteraction = () => {
      if (!userPausedRef.current) play()
      START_EVENTS.forEach((type) => window.removeEventListener(type, startOnFirstInteraction))
    }

    START_EVENTS.forEach((type) =>
      window.addEventListener(type, startOnFirstInteraction, { once: true, passive: true }),
    )
    return () => START_EVENTS.forEach((type) => window.removeEventListener(type, startOnFirstInteraction))
  }, [play])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playingRef.current) {
      audio.pause()
      playingRef.current = false
      userPausedRef.current = true
      setPlaying(false)
    } else {
      userPausedRef.current = false
      play()
    }
  }, [play])

  return { audioRef, available, playing, toggle }
}
