import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { revealProjectCards } from '../utils/animations'

export default function Projects() {
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const root = gridRef.current
    if (!root) return
    const ctx = gsap.context(() => {
      revealProjectCards(root)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="mx-auto flex max-w-5xl flex-col">
      <header className="fade-in mb-8 border-l-[5px] border-cyber-yellow pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Missions
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          LEVEL_SELECT
        </h1>
        <p className="mt-2 max-w-lg text-xs text-cyber-muted">
          Story mode per build —{' '}
          <code className="text-cyber-blue">projects.js</code>
        </p>
      </header>

      <div
        ref={gridRef}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
