import { Link, Navigate, useParams } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { getProjectById } from '../data/projects'
import StorySection from '../components/StorySection'
import TechIcon from '../components/TechIcon'
import { revealStorySections } from '../utils/animations'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = id ? getProjectById(id) : undefined
  const storyRef = useRef(null)

  useLayoutEffect(() => {
    const root = storyRef.current
    if (!root || !project) return
    const ctx = gsap.context(() => {
      revealStorySections(root)
    }, root)
    return () => ctx.revert()
  }, [project, id])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { story, links, tech, title, tagline } = project

  return (
    <div className="mx-auto max-w-3xl">
      <div className="fade-in mb-8 flex flex-wrap items-start justify-between gap-4 border-y border-r border-white/10 border-l-[5px] border-l-cyber-blue bg-cyber-panel/80 p-4 shadow-[0_0_24px_-10px_rgba(51,153,255,0.3)]">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
            Story mode
          </p>
          <h1 className="mt-1 text-xl font-black italic uppercase tracking-tight text-white md:text-2xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">{tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 border border-cyber-blue/40 bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyber-blue"
              >
                <TechIcon label={t} className="h-4 w-4 shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex flex-wrap gap-2">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="border border-cyber-yellow/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyber-yellow hover:bg-cyber-yellow/10"
              >
                GitHub
              </a>
            ) : null}
            {links.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="border border-cyber-blue/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-200 hover:border-cyber-blue"
              >
                Live
              </a>
            ) : null}
          </div>
          <Link
            to="/projects"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyber-muted hover:text-cyber-yellow"
          >
            ← PROJECT_LOGS
          </Link>
        </div>
      </div>

      <div ref={storyRef} className="flex flex-col gap-4">
        <StorySection title="Overview" content={story.overview} />
        <StorySection title="Why I Built This" content={story.why} />
        <StorySection title="What I Built" content={story.what} />
        <StorySection title="Challenges" content={story.challenges} />
        <StorySection title="Learnings" content={story.learnings} />
        <StorySection
          title="Future Improvements"
          content={story.future}
        />
      </div>
    </div>
  )
}
