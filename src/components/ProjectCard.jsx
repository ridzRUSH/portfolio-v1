import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import TechIcon from './TechIcon'

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  const onEnter = () => {
    const el = cardRef.current
    if (!el) return
    gsap.to(el, {
      scale: 1.03,
      y: -4,
      duration: 0.35,
      ease: 'power2.out',
    })
    gsap.to(glowRef.current, {
      opacity: 1,
      duration: 0.25,
    })
  }

  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    gsap.to(el, {
      scale: 1,
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
    })
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.25,
    })
  }

  const onDown = () => {
    const el = cardRef.current
    if (!el) return
    gsap.to(el, { scale: 0.98, duration: 0.12, ease: 'power2.in' })
  }

  const onUp = () => {
    const el = cardRef.current
    if (!el) return
    gsap.to(el, { scale: 1.03, duration: 0.15, ease: 'power2.out' })
  }

  return (
    <Link
      to={`/projects/${project.id}`}
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      className="project-card group relative block overflow-hidden border-y border-r border-white/10 border-l-[5px] border-l-cyber-blue bg-cyber-panel/80 p-4 text-left outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-cyber-yellow/90"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_48px_rgba(51,153,255,0.18)]"
        aria-hidden
      />
      <div className="relative">
        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-cyber-muted">
          Level
        </p>
        <h3 className="text-base font-black italic uppercase tracking-wide text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-xs text-slate-400">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 border border-cyber-blue/30 bg-black/50 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-cyber-blue"
            >
              <TechIcon label={t} className="h-3.5 w-3.5 shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
