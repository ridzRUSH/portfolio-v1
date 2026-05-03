import { Outlet } from 'react-router-dom'
import PageWrapper from './PageWrapper'
import CyberHeader from './CyberHeader'
import CyberBottomNav from './CyberBottomNav'

export default function HudLayout() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-cyber-bg text-slate-100 antialiased">
      <div
        className="pointer-events-none fixed inset-0 cyber-hud-grid opacity-50"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 cyber-scanlines opacity-35" aria-hidden />
      <CyberHeader />
      <main className="relative flex min-h-0 flex-1 flex-col pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
        <PageWrapper className="flex-1 overflow-y-auto px-4 py-6 md:px-6">
          <Outlet />
        </PageWrapper>
      </main>
      <CyberBottomNav />
    </div>
  )
}
