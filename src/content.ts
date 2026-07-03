/** Editorial content for the one-page site. */

export interface TimelineItem {
  time: string
  title: string
  detail: string
}

export const TIMELINE: TimelineItem[] = [
  {
    time: '7:30 AM',
    title: 'Guests Arrive',
    detail: 'Welcome refreshments on the lawn as you find your seats. Kindly be seated by 7:45 AM.',
  },
  {
    time: '8:00 AM',
    title: 'The Ceremony',
    detail: 'We say “I do” surrounded by the people we love most.',
  },
  {
    time: '9:30 AM',
    title: 'Canapés & Celebration',
    detail: 'Bubbly, canapés and lawn games while we steal away for photographs.',
  },
  {
    time: '12:00 PM',
    title: 'Reception & Feast',
    detail: 'Speeches, toasts and a Midlands feast in the hall.',
  },
  {
    time: '2:30 PM',
    title: 'First Dance',
    detail: 'Then the dance floor is all yours. Bring your best moves.',
  },
  {
    time: '5:00 PM',
    title: 'Farewell',
    detail: 'Fond goodbyes as the celebration winds down. Travel safely, with our love.',
  },
]

export interface Stay {
  name: string
  blurb: string
  url: string
}

export const STAYS: Stay[] = [
  {
    name: 'Brahman Hills',
    blurb: 'A beautiful hotel and spa set on a nature reserve, minutes from the venue.',
    url: 'https://www.brahmanhills.co.za/',
  },
  {
    name: 'Fordoun Hotel & Spa',
    blurb: 'Luxury country accommodation and an award-winning spa in the heart of the Midlands.',
    url: 'https://www.fordoun.com/',
  },
  {
    name: 'Nottingham Road Hotel',
    blurb: 'The historic and legendary local, “Notties”, for a characterful, fun stay.',
    url: 'https://nottieshotel.co.za/',
  },
]
