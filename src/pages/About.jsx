import CyberMenuButton from '../components/CyberMenuButton'
import CyberSectionTitle from '../components/CyberSectionTitle'
import HudCard from '../components/HudCard'
import SkillTreeBars from '../components/SkillTreeBars'
import TechIcon from '../components/TechIcon'
import { profile } from '../data/profile'

function IconGrad(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M4 10l8-4 8 4-8 4-8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 10v6l8 4M12 20v-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

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

function IconLayers(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  databases: 'Databases',
  tools: 'Tools',
  frontend: 'Frontend',
}

export default function About() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="fade-in border-l-[5px] border-cyber-yellow pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Intel
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white drop-shadow-[0_0_12px_rgba(255,215,0,0.15)]">
          DOSSIER_SUMMARY
        </h1>
        <p className="mt-2 text-xs leading-relaxed text-cyber-muted">
          {profile.displayName} — {profile.roleLine}
        </p>
      </header>

      <SkillTreeBars />

      <section className="fade-in space-y-4">
        <CyberSectionTitle icon={IconLayers}>Skills</CyberSectionTitle>
        {Object.entries(profile.skillsByCategory).map(([key, items]) => (
          <HudCard key={key} accent="left">
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-cyber-muted">
              {categoryLabels[key] ?? key}
            </p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 border border-cyber-blue/35 bg-black/50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyber-blue"
                >
                  <TechIcon label={item} className="h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </HudCard>
        ))}
      </section>

      <section className="fade-in space-y-3">
        <CyberSectionTitle>Records</CyberSectionTitle>
        <p className="text-xs text-cyber-muted">
          Separate screens — data in{' '}
          <code className="text-cyber-blue">education.js</code> &{' '}
          <code className="text-cyber-blue">internship.js</code>.
        </p>
        <CyberMenuButton
          to="/education"
          variant="dark"
          label="Education"
          icon={IconGrad}
        />
        <CyberMenuButton
          to="/internship"
          variant="dark"
          label="Internship"
          icon={IconBrief}
        />
      </section>
    </div>
  )
}
