import CyberPanel from './CyberPanel'

/**
 * @param {'left' | 'right' | 'yellow'} accent — thick HUD border side
 * @param {string} [watermark] — faint background glyph (e.g. EDU)
 */
export default function HudCard({
  children,
  className = '',
  accent = 'left',
  watermark,
}) {
  return (
    <CyberPanel
      accent={accent}
      watermark={watermark}
      className={className}
    >
      {children}
    </CyberPanel>
  )
}
