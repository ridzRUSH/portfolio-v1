import { NavLink } from 'react-router-dom'

const variants = {
  primary:
    'border-l-[6px] border-cyber-yellow bg-gradient-to-r from-cyber-blue/90 via-blue-600 to-slate-900 text-white shadow-[4px_4px_0_rgba(0,0,0,0.5)]',
  dark:
    'border-l-[6px] border-slate-600 bg-[#0a1228]/95 text-slate-100 shadow-[4px_4px_0_rgba(0,0,0,0.45)] ring-1 ring-white/5',
  danger:
    'border-l-[6px] border-red-800 bg-red-600 text-white shadow-[4px_4px_0_rgba(0,0,0,0.45)]',
}

/**
 * Slanted “game menu” row — skew container, counter-skew content.
 */
export default function CyberMenuButton({
  to,
  variant = 'dark',
  icon: Icon,
  label,
  end,
}) {
  const panel = variants[variant] ?? variants.dark

  return (
    <NavLink
      to={to}
      end={end}
      className="group block w-full overflow-visible fade-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-yellow focus-visible:outline-offset-2"
    >
      <div className="-skew-x-[10deg] transition-transform duration-200 ease-out group-hover:translate-x-2">
        <div
          className={`relative overflow-hidden rounded-sm py-3.5 pl-5 pr-4 group-focus-visible:ring-2 group-focus-visible:ring-cyber-yellow group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-cyber-bg ${panel}`}
        >
          <div className="skew-x-[10deg] flex items-center justify-between gap-3">
            <span className="font-black italic uppercase tracking-wide">
              {label}
            </span>
            {Icon ? (
              <Icon className="h-6 w-6 shrink-0 opacity-95" aria-hidden />
            ) : null}
          </div>
        </div>
      </div>
    </NavLink>
  )
}
