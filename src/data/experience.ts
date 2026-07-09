export interface Role {
  org: string;
  title: string;
  dates: string;
  blurb: string;
  logo?: string;
  brand?: 'meta' | 'amazon' | 'instagram' | 'alexa';
}

// Most recent first. TODO markers flag entries to confirm/fill.
export const experience: Role[] = [
  {
    org: 'Meta',
    title: 'Data Scientist, Instagram Reels Monetization',
    dates: 'Sep 2023 — present',
    blurb: 'Informing product decisions at scale for Instagram Reels Monetization — ranking, product, experimentation, and large-scale evaluation.',
    brand: 'meta',
  },
  {
    org: 'Amazon',
    title: 'Software Engineering Intern — DevOps Guru',
    dates: 'Sep 2022 — Dec 2022',
    blurb: 'Creating and testing end to end CloudFormation resources for Amazon DevOps Guru, the log anomaly detection service for AWS.',
    brand: 'amazon',
  },
  {
    org: 'Instagram',
    title: 'Data Science Intern — Sharing Relevance',
    dates: 'Jun 2022 — Sep 2022',
    blurb: 'Building and improving story reshare labels used by the organic MTML (Multi Task Multi Label) ranking model.',
    brand: 'instagram',
  },
  {
    org: 'Alexa Prize Challenge',
    title: 'Student Researcher',
    dates: 'May 2021 — Apr 2022',
    blurb: 'Competing with a team of researchers to build the next generation of conversational taskbots in the Alexa Prize Challenge.',
    brand: 'alexa',
  },
  {
    org: 'SmugMug & Flickr',
    title: 'Data Science Intern',
    dates: 'May 2021 — Aug 2021',
    blurb: 'Led an independent project to discover clickstream features that drive subscription.',
    logo: '/images/smugmug_flickr.png',
  },
  {
    org: 'TAMU Datathon',
    title: 'President',
    dates: 'Nov 2020 — Dec 2021',
    blurb: "Led the student organization hosting Texas A&M's flagship data science hackathon.",
    logo: '/images/tamudatathon_logo.png',
  },
  {
    org: 'Deephaven Data Labs',
    title: 'Data Science Intern',
    dates: 'May 2020 — Aug 2020',
    blurb: "Built performant, real-time quantitative financial models on Deephaven's end-to-end data platform.",
    logo: '/images/deephaven_logo.jpeg',
  },
];
