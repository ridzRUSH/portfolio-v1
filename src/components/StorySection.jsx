/**
 * @param {object} props
 * @param {string} props.title
 * @param {string | string[]} props.content — paragraph or bullet list
 */
export default function StorySection({ title, content }) {
  const items = Array.isArray(content) ? content : [content]

  return (
    <section className="story-section border-y border-r border-white/10 border-l-[4px] border-l-cyber-yellow bg-cyber-panel/80 p-4 shadow-[0_0_20px_-8px_rgba(255,215,0,0.12)]">
      <h2 className="mb-3 text-[11px] font-black italic uppercase tracking-[0.28em] text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,215,0,0.25)]">
        {title}
      </h2>
      {items.length === 1 && !Array.isArray(content) ? (
        <p className="text-sm leading-relaxed text-slate-300">{items[0]}</p>
      ) : (
        <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-300 marker:text-cyber-blue">
          {items.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
