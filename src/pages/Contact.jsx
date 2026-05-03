import HudCard from '../components/HudCard'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl">
      <header className="fade-in mb-6 border-l-[5px] border-cyber-yellow pl-4">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyber-yellow">
          Terminal
        </p>
        <h1 className="mt-1 text-xl font-black italic uppercase tracking-[0.15em] text-white">
          UPLINK
        </h1>
      </header>
      <HudCard className="fade-in" accent="left">
        <p className="text-sm text-slate-400">
          Wire your preferred channel — email, form, or social.
        </p>
        <p className="mt-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-semibold uppercase tracking-wider text-cyber-yellow underline decoration-cyber-yellow/40 underline-offset-4 hover:text-cyber-gold"
          >
            {profile.email}
          </a>
        </p>
      </HudCard>
    </div>
  )
}
