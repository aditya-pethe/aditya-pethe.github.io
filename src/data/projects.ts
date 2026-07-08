export type TagColor = 'blue' | 'pink' | 'lavender' | 'neutral';

export interface Project {
  title: string;
  blurb: string;
  tags: { label: string; color: TagColor }[];
  image?: string;
  imageAlt?: string;
  meta?: string;
  href?: string; // TODO: add repo / writeup links where available
}

export const projects: Project[] = [
  {
    title: 'Lyrec',
    blurb: 'Lyric-based song recommendation over the Million Song Dataset — surfacing songs by what they say, not just how they sound.',
    tags: [
      { label: 'ML', color: 'blue' },
      { label: 'NLP', color: 'lavender' },
    ],
    image: '/images/lyrec.png',
    imageAlt: 'Lyrec song recommendation project',
    meta: 'April 2021',
  },
  {
    title: 'Mathematical Biology',
    blurb: 'Modeling harvesting effects on the spatial synchrony of population change — dynamical-systems research on how localized harvesting propagates across a landscape.',
    tags: [
      { label: 'research', color: 'lavender' },
      { label: 'modeling', color: 'neutral' },
    ],
    image: '/images/math469edit.png',
    imageAlt: 'Mathematical biology research figure',
    meta: 'May 2022',
  },
  {
    title: 'Helping Eye',
    blurb: 'A programmable chatbot assisting the visually impaired, built with React, Node, and Azure LUIS.',
    tags: [
      { label: 'winner · TAMUhack 2020', color: 'pink' },
    ],
    image: '/images/HelpingEye.png',
    imageAlt: 'Helping Eye hackathon project',
  },
  {
    title: 'Autoflow',
    blurb: 'A speech-to-text virtual assistant for smart workflow automation, built with NLTK and stdlib APIs.',
    tags: [
      { label: 'winner · HackPrinceton 2019', color: 'pink' },
    ],
    image: '/images/AutoFlow.png',
    imageAlt: 'Autoflow hackathon project',
  },
  {
    title: 'Fullhouse',
    blurb: 'A full-stack app helping homeless shelters manage inventory, built with React, Express, and MongoDB.',
    tags: [
      { label: 'winner · HackTX 2019', color: 'pink' },
    ],
    image: '/images/FullHouse.png',
    imageAlt: 'Fullhouse hackathon project',
  },
];
