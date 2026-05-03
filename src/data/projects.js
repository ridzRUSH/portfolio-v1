/**
 * Project catalog — UI reads only from this file.
 */
export const projects = [
  {
    id: 'hotel-booking',
    title: 'Hotel Booking App',
    tagline:
      'Full-stack hotel booking platform with authentication and dynamic listings',

    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],

    links: {
      github: '',
      live: '',
    },

    story: {
      overview:
        'A full-stack hotel booking platform built to simplify reservations with authentication and dynamic listings.',

      why: [
        'Existing booking platforms were complex and cluttered',
        'Wanted to build a clean and scalable full-stack system',
      ],

      what: [
        'Built a MERN-based booking platform',
        'Implemented JWT authentication',
        'Dynamic hotel listings with filtering',
        'Integrated React Query for API state management',
      ],

      challenges: [
        'Managing authentication securely',
        'Handling async data efficiently',
        'Optimizing backend performance',
      ],

      learnings: [
        'Improved full-stack architecture skills',
        'Learned scalable API integration patterns',
      ],

      future: [
        'Add payment integration',
        'Improve recommendation system',
      ],
    },
  },
  {
    id: 'task-manager-api',
    title: 'Task Manager REST API',
    tagline:
      'Scalable backend system with authentication and optimized queries',

    tech: ['Node.js', 'Express.js', 'MongoDB'],

    links: {
      github: '',
      live: '',
    },

    story: {
      overview:
        'A backend-focused project to build a scalable task management API.',

      why: [
        'Needed a robust backend system for managing tasks',
        'Wanted to strengthen API design skills',
      ],

      what: [
        'Built REST API with authentication',
        'Implemented pagination and search',
        'Used Multer for file uploads',
        'Optimized MongoDB queries',
      ],

      challenges: [
        'Designing scalable API structure',
        'Handling file uploads securely',
        'Query optimization',
      ],

      learnings: [
        'Deep understanding of REST APIs',
        'Improved backend optimization techniques',
      ],

      future: [
        'Add real-time updates',
        'Convert into full-stack app',
      ],
    },
  },
  {
    id: 'patience-game',
    title: 'Patience Game',
    tagline: 'Interactive timer-based React game',

    tech: ['React'],

    links: {
      github: '',
      live: '',
    },

    story: {
      overview:
        'A simple interactive game focused on timing and user interaction.',

      why: [
        'Wanted to explore interactive UI logic in React',
        'Practice hooks like useState and useRef',
      ],

      what: [
        'Built timer-based gameplay',
        'Managed state using React hooks',
        'Ensured responsive UI',
      ],

      challenges: [
        'Managing precise timing logic',
        'Handling re-renders efficiently',
      ],

      learnings: [
        'Better understanding of React hooks',
        'Improved UI responsiveness handling',
      ],

      future: [
        'Add levels and difficulty modes',
        'Enhance UI with animations',
      ],
    },
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
