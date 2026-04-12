
import { Competition, Project, SkillCategory } from './types';

export const HERO_STATS = [
  { label: 'GPA', value: '3.94', sub: '5.18 Weighted' },
  { label: 'Honor Roll', value: 'Consistent A', sub: 'On Track for 2026' },
  { label: 'AP Mastery', value: '5/5', sub: 'Human Geo & CSP' },
  { label: 'Rank', value: '6/141', sub: 'Academic Elite' }
];

export const COMPETITIONS: Competition[] = [
  { year: 2025, rank: '3rd Place in State (2024-2025)', category: 'UIL Website Team (Captain)' },
  { year: 2025, rank: '1st Place in District (2024-2025)', category: 'UIL Website Development' },
  { year: 2026, rank: 'District Runner-up (2nd Place)', category: 'UIL Mathematics Team' },
  { year: 2025, rank: 'District Runner-up (2nd Place)', category: 'UIL Mathematics Team' },
  { year: 2024, rank: '3rd Place in District', category: 'UIL Robotics Team' },
  { year: 2025, rank: '2nd Place in District', category: 'UIL Robotics Team' },
  { year: 2025, rank: '6th Place in District', category: 'UIL CX Debate' }
];

export const CLUBS = [
  {
    id: 'deca-business-operations',
    title: 'DECA',
    full: 'Distributive Education Clubs of America',
    role: 'Member',
    desc: 'Preparing emerging leaders and entrepreneurs in marketing, finance, hospitality and management in high schools and colleges around the globe.',
    image: '/deca.jpeg',
    icon: '💼'
  },
  {
    id: 'rotary-club',
    title: 'Rotary Club',
    full: 'Rotary International',
    role: 'Member (2 Years)',
    desc: 'A global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change.',
    image: '/rotary.jpg',
    icon: '⚙️'
  }
];

export const EXTRACURRICULARS = [
  {
    id: 'community-service-logistics',
    title: 'Community Service & Logistics',
    role: 'Event Coordinator',
    desc: 'Coordinating large-scale community events with 1,000+ attendees, managing complex food logistics and financial transaction integrity.',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Service', 'Logistics', 'Leadership'],
    metrics: [
      { label: 'Hours Dedicated', value: '100+' },
      { label: 'Event Scale', value: '1,000+ People' }
    ]
  },
  {
    id: 'code-4-change',
    title: 'Code 4 Change',
    role: 'Treasurer & Intern',
    desc: 'Empowering the next generation with critical problem-solving skills through global data science initiatives.',
    icon: '🌐',
    image: '/online_class.jpg',
    tags: ['Teaching', 'Data Science', 'Internship'],
    metrics: [
      { label: 'Students Impacted', value: '25+' },
      { label: 'Global Reach', value: 'Worldwide' }
    ]
  },
  {
    id: 'telugu-teaching',
    title: 'Telugu Teaching',
    role: 'Instructor',
    desc: 'Preserving cultural heritage through linguistic education and effective knowledge transfer.',
    icon: '📜',
    image: '/learning.jpeg',
    tags: ['Culture', 'Education', 'Language'],
    metrics: [
      { label: 'Years Dedicated', value: '5+' },
      { label: 'Active Students', value: '10+' }
    ]
  },
  {
    id: 'karate-excellence',
    title: 'Karate Excellence',
    role: '3rd Gup Student',
    desc: 'Building physical resilience, strategic patience, and mental fortitude through rigorous martial arts.',
    icon: '🥋',
    image: '/karate.jpg',
    tags: ['Athletic', 'Discipline', 'Martial Arts'],
    metrics: [
      { label: 'Years Training', value: '3+' },
      { label: 'Current Rank', value: '3rd Gup' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Summer Business Operations',
    description: 'Strategic oversight and operational management of a high-volume General Store and Supermarket enterprise. I led a diverse team of employees, reporting directly to executive leadership. My responsibilities encompassed sophisticated warehouse management and inventory control, financial transaction integrity, and the implementation of employee welfare initiatives to ensure peak organizational performance and workplace satisfaction.',
    tags: ['Operations', 'Leadership', 'Inventory Control', 'Global Business'],
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1200&h=800'
  },
  {
    title: 'UIL Website Development',
    description: 'As Captain of the Gateway College Prep UIL Website team, I led the group to a District Championship and a 3rd Place finish at the State level. The project involved designing and developing a comprehensive full-stack web application evaluated on technical complexity, accessibility standards, and user experience design. I managed the entire development lifecycle, from initial wireframing to final deployment.',
    tags: ['Full-stack', 'Leadership', 'UIL State', 'UI/UX'],
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Technical Core',
    skills: [
      { name: 'C++', link: 'https://www.credly.com/users/dwijesh-gontla' },
      { name: 'Python', link: 'https://www.credly.com/users/dwijesh-gontla' },
      { name: 'HTML', link: 'https://coursera.org/share/5f1fe0883d09ba267dfd25feac301448' },
      { name: 'CSS', link: 'https://coursera.org/share/c241c78ad3b690f2d96fd229fa8b2545' },
      { name: 'JavaScript', link: 'https://coursera.org/share/68da5cfa89be5ff9cf1bc10a5c5c9f43' },
      'Git'
    ]
  },
  {
    title: 'Infrastructure & Security',
    skills: ['Cloudflare']
  },
  {
    title: 'Professional & Business',
    skills: ['Finance']
  }
];

export const PROFESSIONAL_PHILOSOPHY = `"It is not about how you start life, but how you end it and if you left a cumulative impact on your society and community."`;

export const UIL_PHILOSOPHY = `"Competition is not just about the rank; it's about the discipline of preparation and the resilience required to perform under pressure. As a team captain and individual competitor, I strive to elevate not only my own standards but also the collective ambition of my peers."`;

export const BIO_SUMMARY = `Dwijesh Gontla is a 15-year-old cybersecurity researcher and student scholar at Gateway College Prep and Austin Community College. As the Founder of Defensive Grid Labs, he specializes in Zero-Knowledge Architecture and Digital Sovereignty. He maintains a 3.94 unweighted GPA, is a UIL Website Development State Finalist, and is an AP Scholar with perfect 5s in Human Geography and Computer Science Principles.`;

export const BIO_HIGHLIGHTS = [
  { label: 'Academic', value: '3.94 GPA', sub: 'Rank 6 / 141' },
  { label: 'Technical', value: 'Zero-Knowledge', sub: 'Architecture Founder' },
  { label: 'Leadership', value: 'State Finalist', sub: 'UIL Website Captain' }
];

export const PERSONAL_VALUES = [
  { title: 'Self-Integrity', desc: 'Maintaining consistency between actions and core principles.' },
  { title: 'Autonomy', desc: 'Valuing independence in thought and self-directed growth.' },
  { title: 'Intellectual Growth', desc: 'A relentless pursuit of knowledge and cognitive expansion.' }
];


