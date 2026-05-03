import HudCard from '../components/HudCard'
import { profile } from '../data/profile'

export default function Resume() {
  return (
    <div className="mx-auto max-w-xl">
      <header className="fade-in mb-6 border-l-[5px] border-cyber-yellow pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Save file
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          RESUME_ARCHIVE
        </h1>
      </header>
      <HudCard className="fade-in" accent="yellow">
        <p className="text-sm text-slate-300">
          {profile.displayName} — {profile.roleLine}
        </p>
        <p className="mt-4 text-xs leading-relaxed text-cyber-muted">
          Source: <code className="text-cyber-blue">public/Adarsh_resume.pdf</code>
        </p>
        <a
          href={profile.resumePdfUrl}
          download
          className="mt-6 inline-block border border-red-600 bg-red-600/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-[4px_4px_0_rgba(0,0,0,0.35)] hover:bg-red-500"
        >
          Download PDF
        </a>
      </HudCard>
    </div>
  )
}
