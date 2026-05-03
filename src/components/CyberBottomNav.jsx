import { NavLink } from 'react-router-dom'

function IconTarget(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconSwords(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M8 4l12 12M10 6l8 8M6 10l8 8M4 14l8 8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 4l4 4M6 18l4 4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function IconIntel(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 4a5 5 0 015 5v4a5 5 0 01-10 0V9a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
    </svg>
  )
}

function IconTerminal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 10l2 2-2 2M11 14h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

const tabs = [
  { to: '/', label: 'MISSIONS', Icon: IconTarget, end: true },
  { to: '/skills', label: 'ARSENAL', Icon: IconSwords },
  { to: '/about', label: 'INTEL', Icon: IconIntel },
  { to: '/contact', label: 'TERMINAL', Icon: IconTerminal },
]

export default function CyberBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyber-blue/25 bg-cyber-bg-deep/98 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
      aria-label="Quick navigation"
    >
      <div className="mx-auto grid max-w-lg grid-cols-4 gap-1 px-2 py-2">
        {tabs.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'flex flex-col items-center gap-1 rounded-md px-2 py-2 text-[9px] font-black uppercase tracking-[0.12em] transition-colors',
                isActive
                  ? 'bg-cyber-yellow text-slate-950 shadow-[0_0_18px_rgba(255,215,0,0.5)]'
                  : 'text-cyber-muted hover:bg-[#0a1228] hover:text-cyber-yellow',
              ].join(' ')
            }
          >
            <Icon className="h-6 w-6" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
