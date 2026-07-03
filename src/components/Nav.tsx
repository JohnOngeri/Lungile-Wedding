import { useState } from 'react'
import type { Music } from '../lib/useMusic'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#venue', label: 'Venue' },
  { href: '#schedule', label: 'The Day' },
  { href: '#stay', label: 'Stay' },
  { href: '#gifts', label: 'Gifts' },
]

interface NavProps {
  music: Music
}

export function Nav({ music }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-60 border-b border-gold/25 bg-[rgba(249,247,242,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4 px-7">
        <a href="#home" className="font-script text-[30px] leading-none text-forest no-underline">
          S &amp; L
        </a>

        <div className="hidden items-center gap-[34px] min-[881px]:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11.5px] uppercase tracking-[0.22em] text-slate-olive no-underline transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className="bg-forest px-[22px] py-2.5 text-[11.5px] uppercase tracking-[0.22em] text-ivory no-underline transition-colors hover:bg-gold"
          >
            RSVP
          </a>
        </div>

        <div className="flex items-center gap-3.5">
          {music.available && (
            <button
              type="button"
              onClick={music.toggle}
              aria-pressed={music.playing}
              className="cursor-pointer border border-forest/35 bg-transparent px-3.5 py-2 font-sans text-[11px] uppercase tracking-[0.18em] text-forest transition-colors hover:border-gold hover:text-gold"
            >
              {music.playing ? '❚❚ Music' : '♪ Music'}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            className="hidden cursor-pointer items-center border-none bg-transparent px-1 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-forest max-[880px]:inline-flex"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col border-t border-gold/25 bg-parchment min-[881px]:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-forest/8 p-4 text-center text-xs uppercase tracking-[0.24em] text-slate-olive no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={closeMenu}
            className="p-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-forest no-underline"
          >
            RSVP
          </a>
        </div>
      )}
    </nav>
  )
}
