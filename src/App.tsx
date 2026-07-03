import { CalendarQr } from './components/CalendarQr'
import { Countdown } from './components/Countdown'
import { Footer } from './components/Footer'
import { Gifts } from './components/Gifts'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Rsvp } from './components/Rsvp'
import { Schedule } from './components/Schedule'
import { SeeYouThere } from './components/SeeYouThere'
import { Stays } from './components/Stays'
import { Venue } from './components/Venue'
import { useMusic } from './lib/useMusic'

export default function App() {
  const music = useMusic()

  return (
    <div className="bg-ivory font-sans text-ink">
      <Nav music={music} />
      <audio ref={music.audioRef} loop preload="metadata" className="hidden" />
      <Hero />
      <Countdown />
      <Venue />
      <Schedule />
      <Stays />
      <Gifts />
      <SeeYouThere />
      <Rsvp />
      <CalendarQr />
      <Footer />
    </div>
  )
}
