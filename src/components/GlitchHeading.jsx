/**
 * Stacked display name with lightweight chromatic glitch animation.
 */
export default function GlitchHeading({ text }) {
  const parts = text.split(' ')

  return (
    <div className="cyber-glitch select-none">
      {parts.map((word) => (
        <span
          key={word}
          className="block text-2xl font-black italic uppercase leading-[0.95] tracking-tight text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)] sm:text-3xl md:text-4xl"
        >
          {word}
        </span>
      ))}
    </div>
  )
}
