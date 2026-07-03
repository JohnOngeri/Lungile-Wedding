/** Builds and downloads the wedding .ics calendar file (Apple / Outlook). */
export function downloadIcs(): void {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//S&L Wedding//EN',
    'BEGIN:VEVENT',
    'UID:senzesihle-lungile-20270403@wedding',
    'DTSTAMP:20260612T120000Z',
    'DTSTART:20270403T060000Z',
    'DTEND:20270403T160000Z',
    "SUMMARY:Senzesihle & Lungile's Wedding",
    'LOCATION:The Gallery Wedding Venue\\, Nottingham Road\\, KwaZulu-Natal Midlands',
    'DESCRIPTION:Join us to celebrate our wedding day! Ceremony begins at 8:00 AM.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Senzesihle-Lungile-Wedding.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 4000)
}
