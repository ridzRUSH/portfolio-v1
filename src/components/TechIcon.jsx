import { getTechIcon } from '../lib/techIcons'

function IconFallback({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9 9l6 6m0-6l-6 6M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

/**
 * Renders a Simple Icon for a tech name, or a neutral placeholder when unmapped.
 * @param {{ label: string, className?: string }} props
 */
export function TechIcon({ label, className = 'h-4 w-4' }) {
  const icon = getTechIcon(label)
  if (!icon) {
    return <IconFallback className={className} />
  }
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} aria-hidden>
      <title>{icon.title}</title>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  )
}

export default TechIcon
