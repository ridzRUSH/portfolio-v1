import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import CyberPanel from './CyberPanel'
import CyberSectionTitle from './CyberSectionTitle'
import { profile } from '../data/profile'

function IconBolt(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
    </svg>
  )
}

export default function SkillTreeBars() {
  const rootRef = useRef(null)
  const bars = profile.skillTreeBars ?? []

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const fills = root.querySelectorAll('[data-bar-fill]')
    if (!fills.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fills,
        { width: '0%' },
        {
          width: (i, el) => el.getAttribute('data-target') || '0%',
          duration: 1.15,
          stagger: 0.12,
          ease: 'power2.out',
        }
      )
    }, root)

    return () => ctx.revert()
  }, [bars.length])

  if (!bars.length) return null

  return (
    <CyberPanel accent="yellow" className="fade-in">
      <CyberSectionTitle icon={IconBolt}>Skill Tree</CyberSectionTitle>
      <div ref={rootRef} className="space-y-3.5">
        {bars.map((b) => (
          <div key={b.id}>
            <div className="mb-1 flex justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">
              <span className="text-slate-300">{b.label}</span>
              <span className="shrink-0 text-cyber-yellow drop-shadow-[0_0_6px_rgba(255,215,0,0.45)]">
                {b.max ? 'MAX' : `${b.percent}%`}
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-sm bg-slate-800/90 ring-1 ring-white/5">
              <div
                data-bar-fill
                data-target={`${b.percent}%`}
                className="h-full w-0 bg-cyber-yellow shadow-[0_0_12px_rgba(255,215,0,0.55)]"
              />
            </div>
          </div>
        ))}
      </div>
    </CyberPanel>
  )
}
