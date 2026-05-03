/**
 * Stack chips for education entries — tech icons from Simple Icons via `TechIcon`.
 */

import TechIcon from './TechIcon'

const KIND_LABEL = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Databases',
  tool: 'Tools',
}

const KIND_BORDER = {
  language: 'border-cyber-yellow/40 text-cyber-yellow',
  framework: 'border-cyber-blue/40 text-cyber-blue',
  database: 'border-emerald-500/40 text-emerald-400',
  tool: 'border-slate-500/50 text-slate-300',
}

export default function EducationStackChips({ stack }) {
  if (!Array.isArray(stack) || stack.length === 0) return null

  const byKind = {}
  for (const item of stack) {
    const kind = item.kind || 'tool'
    if (!byKind[kind]) byKind[kind] = []
    byKind[kind].push(item)
  }

  const order = ['language', 'framework', 'database', 'tool']

  return (
    <div className="mt-4 space-y-3 border-t border-cyber-blue/20 pt-4">
      {order.map((kind) => {
        const items = byKind[kind]
        if (!items?.length) return null
        return (
          <div key={kind}>
            <p className="mb-2 text-[9px] font-black uppercase tracking-[0.25em] text-cyber-muted">
              {KIND_LABEL[kind] ?? kind}
            </p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={`${kind}-${item.name}`}
                  className={[
                    'inline-flex items-center gap-2 rounded-sm border bg-black/40 px-2 py-1.5 text-[11px] font-semibold tracking-wide',
                    KIND_BORDER[kind] || KIND_BORDER.tool,
                  ].join(' ')}
                >
                  <TechIcon
                    label={item.name}
                    className="h-5 w-5 shrink-0"
                  />
                  <span className="text-slate-200">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
