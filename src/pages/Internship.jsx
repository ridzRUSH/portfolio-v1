import { Link } from 'react-router-dom'
import CyberSectionTitle from '../components/CyberSectionTitle'
import HudCard from '../components/HudCard'
import TechIcon from '../components/TechIcon'
import { internshipRecord } from '../data/internship'

function IconBrief(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <rect
        x="5"
        y="8"
        width="14"
        height="11"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Internship() {
  const hasRecord =
    internshipRecord &&
    typeof internshipRecord === 'object' &&
    Object.keys(internshipRecord).length > 0

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="fade-in border-l-[5px] border-cyber-blue pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Intel
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          INTERNSHIP
        </h1>
        <p className="mt-2 text-xs text-cyber-muted">
          Experience log —{' '}
          <code className="text-cyber-blue">src/data/internship.js</code>
        </p>
      </header>

      {!hasRecord ? (
        <HudCard className="fade-in" accent="left">
          <CyberSectionTitle icon={IconBrief}>Internship</CyberSectionTitle>
          <p className="text-sm leading-relaxed text-slate-400">
            Fill in <code className="text-cyber-blue">internship.js</code> to show
            your placement details here.
          </p>
        </HudCard>
      ) : (
        <HudCard className="fade-in" accent="left">
          <CyberSectionTitle icon={IconBrief}>Internship</CyberSectionTitle>

          {internshipRecord.company ? (
            <p className="text-base font-bold leading-snug text-white">
              {internshipRecord.company}
            </p>
          ) : null}

          {internshipRecord.era ? (
            <p className="mt-2 text-[11px] italic text-cyber-blue/90">
              {internshipRecord.era}
            </p>
          ) : null}

          {internshipRecord.role ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              {internshipRecord.role}
            </p>
          ) : null}

          {internshipRecord.summary ? (
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {internshipRecord.summary}
            </p>
          ) : null}

          {Array.isArray(internshipRecord.highlights) &&
          internshipRecord.highlights.length > 0 ? (
            <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-slate-300 marker:text-cyber-yellow">
              {internshipRecord.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}

          {Array.isArray(internshipRecord.techTags) &&
          internshipRecord.techTags.length > 0 ? (
            <div className="mt-5 border-t border-cyber-blue/25 pt-4">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-cyber-muted">
                Stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {internshipRecord.techTags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-2 border border-cyber-blue/40 bg-black/60 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyber-blue"
                  >
                    <TechIcon label={tag} className="h-4 w-4 shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </HudCard>
      )}

      <Link
        to="/about"
        className="fade-in inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-cyber-muted hover:text-cyber-yellow"
      >
        ← Back to Intel summary
      </Link>
    </div>
  )
}
