import CyberMenuButton from '../components/CyberMenuButton'
import GlitchHeading from '../components/GlitchHeading'
import { profile } from '../data/profile'

function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 20c1.5-4 5-6 6-6s4.5 2 6 6" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function IconGrid(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
    </svg>
  )
}

function IconAt(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M15 10v2a3 3 0 11-6 0 8 8 0 108 8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M12 4v12M8 12l4 4 4-4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M5 19h14" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function IconGrad(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M4 10l8-4 8 4-8 4-8-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M4 10v6l8 4M12 20v-6" stroke="currentColor" strokeWidth="1.75" />
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
        strokeWidth="1.75"
      />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-[85vh] max-w-lg flex-col gap-6">
      <div className="fade-in flex flex-wrap items-center gap-2">
        <div className="-skew-x-[10deg] rounded-sm border border-cyber-yellow bg-cyber-yellow px-3 py-1 shadow-[3px_3px_0_rgba(0,0,0,0.4)]">
          <span className="skew-x-[10deg] block text-[10px] font-black uppercase tracking-[0.35em] text-slate-950">
            STATUS: {profile.statusHud}
          </span>
        </div>
      </div>

      <div className="fade-in space-y-3">
        <GlitchHeading text={profile.subjectDisplay} />
        <blockquote className="border-l-4 border-cyber-blue pl-4 text-xs font-semibold uppercase leading-relaxed tracking-wide text-slate-200 sm:text-sm">
          {profile.heroTagline}
        </blockquote>
      </div>

      <nav
        className="flex flex-col gap-3 pt-2"
        aria-label="Main game menu"
      >
        <CyberMenuButton
          to="/projects"
          variant="primary"
          label="Start Game"
          icon={IconPlay}
        />
        <CyberMenuButton
          to="/about"
          variant="dark"
          label="About Adarsh"
          icon={IconUser}
        />
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
        <CyberMenuButton
          to="/projects"
          variant="dark"
          label="Projects"
          icon={IconGrid}
        />
        <CyberMenuButton
          to="/contact"
          variant="dark"
          label="Contact"
          icon={IconAt}
        />
        <CyberMenuButton
          to="/resume"
          variant="danger"
          label="Download Save File"
          icon={IconDownload}
        />
      </nav>

      <div className="mt-auto flex flex-col items-end gap-2 pt-6">
        <div className="-skew-x-[8deg] border border-cyber-blue/50 bg-gradient-to-r from-blue-900/90 to-cyber-blue/40 px-4 py-2 shadow-[0_0_20px_rgba(51,153,255,0.25)]">
          <span className="skew-x-[8deg] block text-[10px] font-black italic uppercase tracking-[0.2em] text-white">
            {profile.statLevel} {profile.statRole}
          </span>
        </div>
        <div className="-skew-x-[8deg] border border-cyber-yellow bg-cyber-yellow px-4 py-2 shadow-[0_0_18px_rgba(255,215,0,0.35)]">
          <span className="skew-x-[8deg] block text-[10px] font-black uppercase tracking-[0.25em] text-slate-950">
            ARCHETYPE: {profile.statArchetype}
          </span>
        </div>
      </div>
    </div>
  )
}
