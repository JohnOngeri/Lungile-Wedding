import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal driven by IntersectionObserver: pairs with the `.reveal`
 * class in global.css. The element rises into view once, the first time
 * it enters the viewport. Respects prefers-reduced-motion via CSS.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
