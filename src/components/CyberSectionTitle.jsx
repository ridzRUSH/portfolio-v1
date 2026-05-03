/** Italic uppercase section label with optional icon (lightning, cap, etc.) */
export default function CyberSectionTitle({ icon: Icon, children, className = '' }) {
  return (
    <div className={['mb-3 flex items-center gap-2', className].join(' ')}>
      {Icon ? (
        <Icon className="h-5 w-5 shrink-0 text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,215,0,0.45)]" />
      ) : null}
      <h2 className="text-[11px] font-black italic uppercase tracking-[0.35em] text-white">
        {children}
      </h2>
    </div>
  )
}
