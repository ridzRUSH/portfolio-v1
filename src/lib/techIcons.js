/**
 * Map display labels to Simple Icons (brand-accurate SVG in getTechIcon).
 * @see https://github.com/simple-icons/simple-icons
 */

import {
  siCplusplus,
  siDjango,
  siDocker,
  siExpress,
  siFramer,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siOwasp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siReactquery,
  siTailwindcss,
  siTypescript,
  siCss,
} from 'simple-icons'

/**
 * Lowercase keys → SimpleIcon. Keys come from labelToKey().
 */
export const ICON_BY_KEY = {
  cpp: siCplusplus,
  javascript: siJavascript,
  typescript: siTypescript,
  python: siPython,
  java: siOpenjdk,
  sql: siMysql,
  mysql: siMysql,
  react: siReact,
  nodejs: siNodedotjs,
  express: siExpress,
  django: siDjango,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  postgres: siPostgresql,
  git: siGit,
  github: siGithub,
  docker: siDocker,
  postman: siPostman,
  html5: siHtml5,
  css3: siCss,
  css: siCss,
  tailwindcss: siTailwindcss,
  reactquery: siReactquery,
  framer: siFramer,
  cybersecurity: siOwasp,
}

const SKIP = new Set([
  'restapis',
  'performanceoptimization',
  'multer',
  'jwt',
])

const EXACT = {
  'c++': 'cpp',
  'node.js': 'nodejs',
  'react.js': 'react',
  'express.js': 'express',
  'django rest framework': 'django',
  'html5': 'html5',
  'css3': 'css3',
  'tailwind css': 'tailwindcss',
  'tailwind': 'tailwindcss',
  react: 'react',
  node: 'nodejs',
  express: 'express',
  django: 'django',
  'react query': 'reactquery',
  'framer motion': 'framer',
  'cyber security': 'cybersecurity',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mysql: 'mysql',
  sql: 'mysql',
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  java: 'java',
  git: 'git',
  github: 'github',
  docker: 'docker',
  postman: 'postman',
}

/**
 * @param {string} label
 * @returns {string | null}
 */
export function labelToKey(label) {
  if (!label || typeof label !== 'string') return null
  const s = label.trim().toLowerCase()

  if (SKIP.has(s.replace(/\s+/g, ''))) return null

  if (EXACT[s] !== undefined) return EXACT[s]

  const noJs = s.replace(/\.js$/i, '').trim()
  if (EXACT[noJs] !== undefined) return EXACT[noJs]

  const compact = s.replace(/\s+/g, '').replace(/\.js$/i, '')
  if (SKIP.has(compact)) return null

  if (compact === 'reactjs' || compact === 'react') return 'react'
  if (compact === 'nodejs' || compact === 'node') return 'nodejs'
  if (compact === 'expressjs' || compact === 'express') return 'express'
  if (compact === 'mongodb' || compact === 'mongo') return 'mongodb'
  if (compact === 'postgresql' || compact === 'postgres') return 'postgresql'
  if (compact === 'mysql' || compact === 'sql') return 'mysql'
  if (compact === 'cplusplus' || compact === 'cpp') return 'cpp'
  if (ICON_BY_KEY[compact]) return compact

  const nospace = s.replace(/\s+/g, '')
  if (ICON_BY_KEY[nospace]) return nospace
  return null
}

/**
 * @param {string} label
 * @returns {import('simple-icons').SimpleIcon | null}
 */
export function getTechIcon(label) {
  const key = labelToKey(label)
  if (!key) return null
  const icon = ICON_BY_KEY[key]
  return icon ?? null
}
