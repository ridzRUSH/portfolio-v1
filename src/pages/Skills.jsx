import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import CyberPanel from '../components/CyberPanel'
import CyberSectionTitle from '../components/CyberSectionTitle'
import TechIcon from '../components/TechIcon'
import { getSkillTreeNodes } from '../data/profile'
import { revealSkillNodes } from '../utils/animations'

function IconSwords(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M8 4l12 12M10 6l8 8M6 10l8 8M4 14l8 8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 4l4 4M6 18l4 4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

export default function Skills() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ctx = gsap.context(() => {
      revealSkillNodes(root)
    }, root)
    return () => ctx.revert()
  }, [])

  const nodes = getSkillTreeNodes()

  return (
    <div className="mx-auto max-w-3xl">
      <header className="fade-in mb-8 border-l-[5px] border-cyber-yellow pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Arsenal
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          ALLOCATED_POINTS
        </h1>
        <p className="mt-2 text-xs text-cyber-muted">
          From <code className="text-cyber-blue">src/data/profile.js</code>
        </p>
      </header>

      <CyberPanel accent="yellow" className="fade-in">
        <CyberSectionTitle icon={IconSwords}>Full Arsenal</CyberSectionTitle>
        <div ref={rootRef} className="flex flex-wrap gap-3">
          {nodes.map((s) => (
            <div
              key={s.id}
              className="skill-node flex min-w-[120px] flex-col border border-cyber-blue/35 bg-black/50 px-3 py-2"
            >
              <span className="text-[10px] text-cyber-muted">TIER_{s.tier}</span>
              <span className="mt-2 flex items-center gap-2">
                <TechIcon label={s.name} className="h-6 w-6 shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-[0.12em] text-cyber-blue">
                  {s.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </CyberPanel>
    </div>
  )
}
