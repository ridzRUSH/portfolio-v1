import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { usePageTransition } from '../hooks/usePageTransition'

export default function PageWrapper({ children, className = '' }) {
  const wrapRef = useRef(null)
  const location = useLocation()

  usePageTransition(wrapRef, location.pathname)

  return (
    <div
      ref={wrapRef}
      className={`min-h-0 bg-cyber-bg text-slate-100 ${className}`}
    >
      {children}
    </div>
  )
}
