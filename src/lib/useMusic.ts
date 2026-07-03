import { useCallback, useEffect, useRef, useState } from 'react'
import { MUSIC_SOURCES } from '../config'

export interface Music {
  audioRef: React.RefObject<HTMLAudioElement | null>
  available: boolean
  playing: boolean
  toggle: () => void
}

/**
 * Background music with graceful degradation: sources are tried in order,
 * and the control hides itself entirely if none of them load.
 */
export function useMusic(): Music {
  const audioRef = useRef<HTMLAudioElement>(null)
  const indexRef = useRef(0)
  const playingRef = useRef(false)
  const [available, setAvailable] = useState(MUSIC_SOURCES.length > 0)
  const [playing, setPlaying] = useState(false)

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

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playingRef.current) {
      audio.pause()
      playingRef.current = false
      setPlaying(false)
    } else {
      audio.volume = 0.32
      audio.play().catch(() => {
        playingRef.current = false
        setPlaying(false)
      })
      playingRef.current = true
      setPlaying(true)
    }
  }, [])

  return { audioRef, available, playing, toggle }
}
