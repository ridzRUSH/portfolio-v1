/**
 * Skewed HUD “card” with thick partial border (game UI).
 * @param {'left' | 'right' | 'yellow'} accent
 */
export default function CyberPanel({
  children,
  accent = 'left',
  watermark,
  className = '',
  innerClassName = '',
}) {
  const accentClass =
    accent === 'right'
      ? 'border-r-[5px] border-r-cyber-blue border-y border-l border-white/10'
      : accent === 'yellow'
        ? 'border-l-[5px] border-l-cyber-yellow border-y border-r border-yellow-500/15'
        : 'border-l-[5px] border-l-cyber-blue border-y border-r border-white/10'

  return (
    <div className={['-skew-x-[5deg]', className].filter(Boolean).join(' ')}>
      <div
        className={[
          'skew-x-[5deg] relative overflow-hidden rounded-sm bg-cyber-panel/95 shadow-[0_0_28px_-10px_rgba(51,153,255,0.35)]',
          accentClass,
          innerClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {watermark ? (
          <span
            className="pointer-events-none absolute -bottom-1 -right-1 select-none font-black leading-none text-white/[0.06] sm:text-[5rem] text-[4.5rem]"
            aria-hidden
          >
            {watermark}
          </span>
        ) : null}
        <div className="relative z-10 p-4">{children}</div>
      </div>
    </div>
  )
}
