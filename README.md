# Senzesihle & Lungile — Wedding Website

The wedding website for Senzesihle Zwane & Lungile Ngcobo — Saturday, 3rd April 2027 at The Gallery, Nottingham Road, KwaZulu-Natal Midlands.

Built with **Vite + React + TypeScript + Tailwind CSS 4**.

## Pages

| Route | What it is |
| --- | --- |
| `/` | The main one-page site: hero, live countdown, venue & map, order of the day, accommodation, gifts, RSVP, calendar links and a shareable QR code |
| `/qr-card/` | Printable 5×7″ QR invitation insert — ivory & gold |
| `/qr-card-emerald/` | Printable 5×7″ QR invitation insert — emerald velvet & gold foil |

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Configuration

Everything a non-developer might need to change lives in [`src/config.ts`](src/config.ts):

- **`SITE_URL`** — set this to the final deployed URL once known; it's what the QR codes point to. Until then they fall back to wherever the site is served from.
- **`RSVP_ENDPOINT`** — the Google Apps Script web app that receives RSVP submissions.
- **`REGISTRY_URL`** — paste the gift registry link here when it's ready; the "coming soon" note disappears automatically.
- **`MUSIC_SOURCES`** — background music, tried in order; the control hides itself if none load.

Timeline entries and accommodation picks live in [`src/content.ts`](src/content.ts).

## Deployment

Static output — deploy `dist/` to Vercel or Netlify (both auto-detect Vite). No server, environment variables, or rewrites needed; the QR card pages are real static entries.
