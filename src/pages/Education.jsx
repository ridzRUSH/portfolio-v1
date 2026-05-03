import { useState } from 'react'
import { Link } from 'react-router-dom'
import EducationStackChips from '../components/EducationStackChips'
import HudCard from '../components/HudCard'
import { educationEntries } from '../data/education'

function InstitutionLogo({ logoUrl, institution }) {
  const [failed, setFailed] = useState(false)
  if (!logoUrl || failed) {
    const initials = institution
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase()
    return (
      <div
        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-sm border border-cyber-blue/30 bg-black/50 text-[11px] font-black tracking-tight text-cyber-yellow"
        aria-hidden
      >
        {initials || '?'}
      </div>
    )
  }
  return (
    <img
      src={logoUrl}
      alt=""
      width={72}
      height={72}
      className="h-[72px] w-[72px] shrink-0 rounded-sm border border-cyber-blue/30 bg-white object-cover"
      onError={() => setFailed(true)}
    />
  )
}

function DetailBlock({ detail }) {
  if (!detail) return null
  if (Array.isArray(detail)) {
    return (
      <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-slate-300 marker:text-cyber-yellow">
        {detail.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    )
  }
  return (
    <p className="mt-3 text-xs leading-relaxed text-cyber-muted">{detail}</p>
  )
}

export default function Education() {
  const hasEntries = educationEntries.length > 0

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="fade-in border-l-[5px] border-cyber-blue pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Intel
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          EDUCATION
        </h1>
        <p className="mt-2 text-xs text-cyber-muted">
          Academic timeline —{' '}
          <code className="text-cyber-blue">src/data/education.js</code>
        </p>
      </header>

      {!hasEntries ? (
        <HudCard className="fade-in" accent="right" watermark="EDU">
          <p className="text-sm leading-relaxed text-slate-400">
            Add entries to <code className="text-cyber-blue">education.js</code>{' '}
            to populate this screen.
          </p>
        </HudCard>
      ) : (
        <ul className="space-y-5">
          {educationEntries.map((row) => (
            <li key={row.id} className="fade-in">
              <HudCard accent="right" watermark="EDU">
                <div className="flex gap-4">
                  <InstitutionLogo
                    logoUrl={row.logoUrl}
                    institution={row.institution}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold leading-snug text-white">
                      {row.title ?? row.credential}
                    </p>
                    {row.period ? (
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cyber-muted">
                        {row.period}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm text-slate-300">
                      {row.institution}
                    </p>
                  </div>
                </div>
                <DetailBlock detail={row.detail} />
                <EducationStackChips stack={row.stack} />
              </HudCard>
            </li>
          ))}
        </ul>
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
