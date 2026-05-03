import gsap from 'gsap'

const easePage = 'power2.out'

/**
 * Page shell: staggered fade/slide for `.fade-in` descendants.
 */
export function fadeInStagger(
  root,
  {
    selector = '.fade-in',
    y = 28,
    duration = 0.55,
    stagger = 0.08,
    ease = easePage,
  } = {}
) {
  const els = root.querySelectorAll(selector)
  if (!els.length) return null
  return gsap.fromTo(
    els,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, ease }
  )
}

/**
 * Subtle opacity ramp on the scroll container.
 */
export function containerFade(
  root,
  { duration = 0.35, ease = 'power1.out' } = {}
) {
  return gsap.fromTo(root, { opacity: 0.85 }, { opacity: 1, duration, ease })
}

/**
 * Project grid cards (initial mount).
 */
export function revealProjectCards(root, { stagger = 0.1 } = {}) {
  const cards = root.querySelectorAll('.project-card')
  if (!cards.length) return null
  return gsap.fromTo(
    cards,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.5, stagger, ease: easePage }
  )
}

/**
 * Story sections on project detail.
 */
export function revealStorySections(
  root,
  { selector = '.story-section', stagger = 0.14 } = {}
) {
  const sections = root.querySelectorAll(selector)
  if (!sections.length) return null
  return gsap.fromTo(
    sections,
    { opacity: 0, x: 36 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger,
      ease: easePage,
    }
  )
}

/**
 * Skill tree / chip nodes.
 */
export function revealSkillNodes(
  root,
  { selector = '.skill-node', stagger = 0.06 } = {}
) {
  const nodes = root.querySelectorAll(selector)
  if (!nodes.length) return null
  return gsap.fromTo(
    nodes,
    { opacity: 0, scale: 0.92 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger,
      ease: 'back.out(1.4)',
    }
  )
}
