/**
 * Site-wide configuration. Everything a non-developer might need to change
 * lives here — deployment URL, endpoints, and headline event details.
 */

/**
 * The site's final public URL, baked into the QR codes.
 * Leave empty to fall back to wherever the site is currently served from
 * (window.location) — set this once the Vercel/Netlify URL is known.
 */
export const SITE_URL = ''

/** Google Apps Script endpoint that receives RSVP submissions. */
export const RSVP_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzFjEO4-a6M1pG06PpaV8t-1d9vxMHdMF8qDERhwGsRkB3kye2WoNi7W9BsMJMJSk6l3Q/exec'

/** Gift registry URL. Leave empty while the registry is still being set up. */
export const REGISTRY_URL = ''

/**
 * Background music sources, tried in order until one loads.
 * "Gymnopédie No. 1" by Kevin MacLeod (incompetech.com), CC BY 4.0.
 */
export const MUSIC_SOURCES = [
  'https://archive.org/download/gymnopedie-no-1-by-kevin-macleod/gymnopedie-no-1-by-kevin-macleod.mp3',
]

/** Ceremony start, South African Standard Time. */
export const WEDDING_DATE_ISO = '2027-04-03T08:00:00+02:00'

export const COUPLE = {
  partner1: 'Senzesihle',
  partner2: 'Lungile',
  partner1Full: 'Senzesihle Zwane',
  partner2Full: 'Lungile Ngcobo',
}

export const VENUE = {
  name: 'The Gallery Wedding Venue',
  area: 'Nottingham Road, KwaZulu-Natal Midlands',
  country: 'South Africa',
  website: 'https://www.thegalleryweddings.co.za/',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.51865910398!2d29.91448821950266!3d-29.38712399226164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef3b6f00db7f9eb%3A0xc3c5448378d384ba!2sThe%20Gallery%20Wedding%20Venue!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza',
}

export const RSVP_DEADLINE_TEXT = '3rd March 2027'

export const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Senzesihle+%26+Lungile%27s+Wedding&dates=20270403T060000Z/20270403T160000Z&details=Join+us+to+celebrate+our+wedding+day!&location=The+Gallery+Wedding+Venue%2C+Nottingham+Road%2C+KwaZulu-Natal'

export const BOOKING_SEARCH_URL =
  'https://www.booking.com/searchresults.html?ss=Nottingham+Road%2C+KwaZulu-Natal%2C+South+Africa'

/** Resolves the URL encoded into QR codes and shared links. */
export function resolveSiteUrl(): string {
  if (SITE_URL.trim().length > 0) return SITE_URL.trim()
  return window.location.origin + '/'
}
