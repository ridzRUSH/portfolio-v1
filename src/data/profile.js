/**
 * Resume-backed identity — edit here to update HUD + About + Skills.
 */
export const profile = {
  displayName: 'Adarsh Kumar Pandey',
  handle: 'ADARSH_KUMAR',
  /** Main screen headline */
  subjectDisplay: 'ADARSH KUMAR PANDEY',
  roleLine: 'FULL STACK / MERN DEVELOPER',
  levelTitle: 'MERN_STACK_OPERATOR',
  location: 'HYDERABAD — INDIA',
  email: '12adarshpandey12@gmail.com',
  status: 'ACTIVE',

  /** Cyber-game UI copy */
  playerId: 'PLAYER_01',
  heroTagline:
    'NAVIGATING THE METAVERSE OF CODE AND DESIGN. LEVEL 99 ARCHITECT DETECTED.',
  statusHud: 'READY',
  statLevel: 'LVL. 99',
  statRole: 'ARCHITECT',
  statArchetype: 'CREATOR',

  /** Skill tree progress bars (Intel / HUD) */
  skillTreeBars: [
    { id: 'mern', label: 'MERN_CORE', percent: 100, max: true },
    { id: 'sys', label: 'SYSTEM_DESIGN', percent: 92 },
    { id: 'proto', label: 'RAPID_PROTOTYPING', percent: 88 },
  ],

  /** Optional: set to `/avatar.jpg` after adding file under `public/` */
  avatarUrl: null,

  /** Resume PDF — file lives in `public/` (served at this URL) */
  resumePdfUrl: '/Adarsh_resume.pdf',

  /** Grouped skills — About + Skill Tree screen */
  skillsByCategory: {
    languages: ['C++', 'JavaScript', 'Python', 'SQL', 'Java'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Django REST Framework'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Playwright'],
    frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'React Query', 'Framer Motion'],
  },

  /** Ordered timeline */
  education: [
    {
      id: 'mca',
      credential: 'MCA',
      institution: 'University of Hyderabad',
      period: '2025–Present',
      detail: null,
    },
    {
      id: 'bca',
      credential: 'BCA',
      institution: 'Jharkhand Raksha Shakti University',
      period: null,
      detail: '9 SGPA',
    },
    {
      id: 'intermediate',
      credential: 'Intermediate',
      institution: "St. Xavier's College, Ranchi",
      period: null,
      detail: '87%',
    },
    {
      id: 'matric',
      credential: 'Matric',
      institution: 'Divine Sainik School',
      period: null,
      detail: '82.5%',
    },
  ],

  internship: {
    company: 'Suvidha Foundation',
    role: 'Web Developer',
    highlights: [
      'Optimized React website performance',
      'Improved UI/UX using Tailwind',
      'Reduced bundle size by 35%',
    ],
  },
}

/** Flat list for skill-tree tiers (visual weight). */
const tierByCategory = {
  languages: 3,
  frameworks: 3,
  databases: 2,
  tools: 2,
  frontend: 2,
}

export function getSkillTreeNodes() {
  const nodes = []
  for (const [category, items] of Object.entries(profile.skillsByCategory)) {
    const tier = tierByCategory[category] ?? 2
    for (const label of items) {
      const id = `${category}-${label}`.replace(/\s+/g, '-').toLowerCase()
      nodes.push({
        id,
        name: label,
        label: label.toUpperCase(),
        tier,
        category,
      })
    }
  }
  return nodes
}
