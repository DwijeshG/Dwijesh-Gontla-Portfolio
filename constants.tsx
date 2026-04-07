
import { Competition, Project, SkillCategory } from './types';

export const HERO_STATS = [
  { label: 'GPA', value: '3.94', sub: '5.18 Weighted' },
  { label: 'Honor Roll', value: 'Consistent A', sub: 'On Track for 2026' },
  { label: 'AP Mastery', value: '5/5', sub: 'Human Geo & CSP' },
  { label: 'Rank', value: '6/141', sub: 'Academic Elite' },
  { label: 'Recruitment', value: '50+', sub: 'Top Tier Universities' }
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
    id: 'piano-performance',
    title: 'Piano Performance',
    role: 'Classical Pianist',
    desc: 'Translating complex musical structures into enhanced analytical thinking and cognitive discipline.',
    icon: '🎹',
    image: '/piano.jpg',
    tags: ['Arts', 'Discipline', 'Performance'],
    metrics: [
      { label: 'Years Training', value: '5+' },
      { label: 'Compositions', value: '15+' }
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
    title: 'Defensive Grid Labs',
    description: 'An elite cybersecurity firm focused on Digital Sovereignty and Zero-Knowledge Architecture. Founded by Dwijesh Gontla, who serves as the official Founder and 100% stakeholder, the company operates on the principle that security should be "Built with purpose and protected with intent." This project showcases a system where privacy is absolute, with 90% of processing happening locally and 10% using elite cloud intelligence for global threat analysis.',
    tags: ['Zero-Knowledge', 'Cyber Sovereignty', 'Hybrid Intelligence', 'Nexus SOC'],
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=800',
    websiteUrl: 'https://denfensivegridlabs.netlify.app/',
    githubUrl: 'https://github.com/defensivegridlabs'
  },
  {
    title: 'Summer Business Operations',
    description: 'Strategic oversight and operational management of a high-volume General Store and Supermarket enterprise. I led a diverse team of employees, reporting directly to the CEO, CFO, Founder, and Managing Director. My responsibilities encompassed sophisticated warehouse management and inventory control, financial transaction integrity, and the implementation of employee welfare initiatives to ensure peak organizational performance and workplace satisfaction.',
    tags: ['Operations', 'Leadership', 'Inventory Control', 'Global Business'],
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1200&h=800'
  },
  {
    title: 'Enterprise Network Architectures',
    description: 'Advanced architecture of multi-site network topologies using industry-standard Cisco protocols. I self-learned these complex systems through the Cisco Networking Academy (NetAcad), engaging in hundreds of hours of hands-on experimentation. This project involves the implementation of robust VLAN segmentation, OSPF routing, and multi-layered security protocols to ensure high availability and data integrity across distributed enterprise environments.',
    tags: ['Cisco Networking', 'NetAcad', 'VLAN', 'OSPF'],
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200&h=800'
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
    skills: ['Cisco Networking', 'Cloudflare', 'VLAN/OSPF']
  },
  {
    title: 'Professional & Business',
    skills: ['Finance', 'Strategic Planning', 'System Analysis']
  }
];

export const PROFESSIONAL_PHILOSOPHY = `"It is not about how you start life, but how you end it and if you left a cumulative impact on your society and community."`;

export const UIL_PHILOSOPHY = `"Competition is not just about the rank; it's about the discipline of preparation and the resilience required to perform under pressure. As a team captain and individual competitor, I strive to elevate not only my own standards but also the collective ambition of my peers."`;

export const BIO_SUMMARY = `A 15-year-old scholar and technical architect at Gateway College Prep and ACC, maintaining a 3.94 unweighted GPA. A consistent A Honor Roll student and AP scholar with perfect 5s on Human Geography and CSP. Currently on track to complete an Associate's Degree in high school through strategic Computer Science coursework at ACC.`;

export const BIO_HIGHLIGHTS = [
  { label: 'Academic', value: 'Pursuing ACC', sub: 'Associate Degree' },
  { label: 'Recruitment', value: '50+ Colleges', sub: 'National Outreach' },
  { label: 'Technical', value: 'Python & C++', sub: 'Official Certifications' },
  { label: 'Leadership', value: 'Captain', sub: 'UIL State Finalist' }
];

export const PERSONAL_VALUES = [
  { title: 'Self-Integrity', desc: 'Maintaining consistency between actions and core principles.' },
  { title: 'Autonomy', desc: 'Valuing independence in thought and self-directed growth.' },
  { title: 'Intellectual Growth', desc: 'A relentless pursuit of knowledge and cognitive expansion.' }
];

export const RECRUITMENT_OUTREACH = [
  {
    id: 'americorps',
    sender: "Melissa O'Donnell",
    role: "Program Specialist, Recruitment · AmeriCorps",
    date: "Aug 14, 2024",
    messages: [
      {
        sender: "Melissa O'Donnell",
        time: "Inquiry",
        content: "I'm a recruiter with AmeriCorps NCCC and I would like to invite you to our upcoming webinar event. This winter you can choose to serve in one of two NCCC programs - Traditional Corps or FEMA Corps. These programs are unique service opportunities that will allow you to meet new people, acquire essential skills, and earn money for college."
      },
      {
        sender: "Melissa O'Donnell",
        time: "Future Approval",
        content: "Perhaps our program is something to consider for when you are 18. Our program covers all program-related travel, housing, and meals. We look forward to potentially working with you in the future!"
      }
    ]
  },
  {
    id: 'florida-financial',
    sender: "Jason Mickool",
    role: "President · Florida Financial Advisors",
    date: "Jul 23, 2024",
    messages: [
      {
        sender: "Jason Mickool",
        time: "Inquiry",
        content: "I help identify top students for our full-time opportunities and was excited to come across your profile. I believe that with your interests in Customer Success Manager/Sales Representative that you could make a great addition to the team at Tristate Financial Advisors!"
      },
      {
        sender: "Jason Mickool",
        time: "Future Approval",
        content: "Best of luck with your future endeavors! Please keep us in mind if anything changes in the future. We would be excited to have you on the team when the time is right."
      }
    ]
  }
];

export const OTHER_RESPONSES = [
  { sender: "Mhelody Cadelina", role: "Senior Recruiter · Brains & Motion Education", category: "Academic Alignment", reason: "Focused on academic dual-credit completion." },
  { sender: "Sri Narayanan", role: "Co-founder & CEO · Kodely", category: "Strategic Focus", reason: "Prioritizing Python & C++ certification track." },
  { sender: "Malcolm Davis", role: "Executive Director · School District", category: "Academic Priority", reason: "Conflict with UIL State competition schedule." },
  { sender: "Russell Calvan", role: "Recruitment Analyst", category: "Geographic Constraint", reason: "Relocation requirements not feasible during high school." },
  { sender: "Courtney Carr", role: "Internship Coordinator · NJ TRANSIT", category: "Strategic Alignment", reason: "Geographic constraints; seeking local Texas opportunities." },
  { sender: "Amit Singh", role: "Sourcer Recruiter · Amazon", category: "Future Consideration", reason: "Age requirement (18+) for current operational roles." }
];

export const NATIONAL_OUTREACH = [
  { name: "Columbia University", initials: "C", color: "#75AADB", textColor: "#0033A0", location: "New York, NY", type: "Ivy League", specialty: "Global Research & Arts", featured: true, whySpecial: "Ivy League institution renowned for its core curriculum and global leadership in research and arts." },
  { name: "Brown University", initials: "B", color: "#4E3629", textColor: "#FFFFFF", location: "Providence, RI", type: "Ivy League", specialty: "Open Curriculum", featured: true, whySpecial: "Ivy League university famous for its open curriculum and commitment to student-centered learning." },
  { name: "Vanderbilt University", initials: "V", color: "#000000", textColor: "#D4AF37", location: "Nashville, TN", type: "National University", specialty: "Data Science & Leadership", featured: true, whySpecial: "Top-tier research university known for its collaborative culture and world-class data science programs." },
  { name: "Johns Hopkins University", initials: "JHU", color: "#002D72", textColor: "#68ACE5", location: "Baltimore, MD", type: "National University", specialty: "Medicine & Engineering", featured: true, whySpecial: "America's first research university, leading the world in medicine, public health, and engineering." },
  { name: "University of Texas at Austin", initials: "UT", color: "#BF5700", textColor: "#FFFFFF", location: "Austin, TX", type: "National University", specialty: "Top-Tier Computer Science", featured: true, whySpecial: "A public ivy with one of the world's most prestigious computer science and engineering programs." },
  { name: "University of Notre Dame", initials: "ND", color: "#0C2340", textColor: "#C99700", location: "Notre Dame, IN", type: "National University", specialty: "Academic Prestige", featured: true, whySpecial: "A premier global university combining rigorous academics with a strong commitment to ethical leadership." },
  { name: "University of Chicago", initials: "C", color: "#800000", textColor: "#FFFFFF", location: "Chicago, IL", type: "Elite University", specialty: "Economics & Research", featured: true, whySpecial: "One of the world's leading research universities, known for its commitment to free and open inquiry." },
  { name: "University of Texas at Dallas", initials: "UTD", color: "#E87500", textColor: "#154734", location: "Richardson, TX", type: "National University", specialty: "Technology & Innovation", featured: false },
  { name: "Texas A&M University", initials: "A&M", color: "#500000", textColor: "#FFFFFF", location: "College Station, TX", type: "National University", specialty: "Engineering & Research", featured: false },
  { name: "Baylor University", initials: "B", color: "#154734", textColor: "#FFB81C", location: "Waco, TX", type: "National University", specialty: "Research & Excellence", featured: false },
  { name: "Southern Methodist University", initials: "SMU", color: "#354A8E", textColor: "#FFFFFF", location: "Dallas, TX", type: "National University", specialty: "Business & Engineering", featured: false },
  { name: "University of Florida", initials: "UF", color: "#0021A5", textColor: "#FA4616", location: "Gainesville, FL", type: "National University", specialty: "Research & Innovation", featured: false },
  { name: "Drexel University", initials: "D", color: "#07294D", textColor: "#FFC600", location: "Philadelphia, PA", type: "National University", specialty: "Co-op & Technology", featured: false },
  { name: "Bucknell University", initials: "B", color: "#003865", textColor: "#E87722", location: "Lewisburg, PA", type: "National Liberal Arts", specialty: "Undergraduate Research", featured: false },
  { name: "Oxford College of Emory University", initials: "OE", color: "#002855", textColor: "#B58500", location: "Oxford, GA", type: "National University", specialty: "Liberal Arts & Research", featured: true, whySpecial: "A unique campus of Emory University offering a world-class liberal arts education within a major research institution." },
  { name: "Stanford University", initials: "S", color: "#8C1515", textColor: "#FFFFFF", location: "Stanford, CA", type: "Elite University", specialty: "Computer Science & AI", featured: false },
  { name: "Texas Tech University", initials: "TTU", color: "#CC0000", textColor: "#000000", location: "Lubbock, TX", type: "National University", specialty: "Innovation & Research", featured: false },
  { name: "Texas Christian University", initials: "TCU", color: "#4D1979", textColor: "#FFFFFF", location: "Fort Worth, TX", type: "National University", specialty: "Leadership & Community", featured: false },
  { name: "Swarthmore College", initials: "S", color: "#990000", textColor: "#FFFFFF", location: "Swarthmore, PA", type: "Top Liberal Arts", specialty: "Academic Rigor", featured: false },
  { name: "Northeastern University", initials: "NEU", color: "#C8102E", textColor: "#FFFFFF", location: "Boston, MA", type: "National University", specialty: "Co-op & Research", featured: false },
  { name: "United States Naval Academy", initials: "⚓", color: "#000040", textColor: "#FFFFFF", location: "Annapolis, MD", type: "Military Excellence", specialty: "Leadership & Strategy", featured: false, isNavy: true, whySpecial: "A prestigious federal service academy that prepares midshipmen for service in the officer corps of the United States Navy and Marine Corps. Renowned for its rigorous academic program, physical training, and character development, producing global leaders in strategy and maritime operations." }
];
