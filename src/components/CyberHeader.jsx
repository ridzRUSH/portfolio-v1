import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

function IconMixer(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M7 4v16M12 2v20M17 7v10" stroke="currentColor" strokeWidth="2" />
      <circle cx="7" cy="10" r="2" fill="currentColor" />
      <circle cx="12" cy="14" r="2" fill="currentColor" />
      <circle cx="17" cy="11" r="2" fill="currentColor" />
    </svg>
  )
}

export default function CyberHeader() {
  const initials = profile.displayName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  const firstName = profile.displayName.split(' ')[0] ?? profile.handle

  return (
    <header className="sticky top-0 z-30 border-b border-cyber-blue/30 bg-cyber-bg/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="fade-in flex min-w-0 items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border-2 border-cyber-yellow bg-[#0a1228] text-[11px] font-black uppercase tracking-tighter text-cyber-yellow shadow-[0_0_16px_rgba(255,215,0,0.35)]">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt=""
                  className="h-full w-full rounded-sm object-cover"
                />
              ) : (
                initials
              )}
            </div>
            <div className="min-w-0 leading-tight">
              <span className="text-[9px] uppercase tracking-[0.35em] text-cyber-muted">
                User
              </span>
              <p className="truncate font-black italic tracking-wide text-cyber-blue drop-shadow-[0_0_12px_rgba(51,153,255,0.55)]">
                {profile.playerId}
              </p>
            </div>
          </div>

          <Link
            to="/resume"
            className="fade-in shrink-0 rounded-md p-2 text-cyber-blue transition-colors hover:bg-cyber-blue/10 hover:text-cyber-yellow"
            aria-label="Settings / Resume"
          >
            <IconMixer className="h-7 w-7" />
          </Link>
        </div>

        <div className="fade-in flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="-skew-x-[10deg] rounded-sm border border-cyber-yellow bg-cyber-yellow px-3 py-1 shadow-[3px_3px_0_rgba(0,0,0,0.45)]">
            <span className="skew-x-[10deg] block text-[9px] font-black uppercase tracking-[0.28em] text-slate-950">
              STATUS: {profile.status}
            </span>
          </div>
          <div className="flex items-center border-l-[5px] border-cyber-yellow pl-3">
            <span className="text-lg font-black italic uppercase tracking-tight text-white drop-shadow-[1px_2px_0_rgba(0,0,0,0.5)]">
              {firstName}
            </span>
          </div>
          <span className="text-[10px] font-black italic uppercase tracking-[0.2em] text-cyber-blue drop-shadow-[0_0_8px_rgba(51,153,255,0.35)]">
            {profile.statLevel} {profile.statRole}
          </span>
        </div>
      </div>
    </header>
  )
}
