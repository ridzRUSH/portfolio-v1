import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Production builds use `base: '/portfolio-v1/'`. Opening only the origin
 * (e.g. http://localhost:4173/) leaves pathname `/`, which does not match
 * React Router's basename — the app renders blank. Send users to the base path.
 */
const baseUrl = import.meta.env.BASE_URL
if (baseUrl !== '/') {
  const rootPath = baseUrl.replace(/\/$/, '')
  const { pathname, search, hash } = window.location

  /** `/protfolio-v1` (missing “o”) → correct `/portfolio-v1` */
  const typoPrefix = '/protfolio-v1'
  if (pathname === typoPrefix || pathname.startsWith(`${typoPrefix}/`)) {
    window.location.replace(
      `${window.location.origin}${pathname.replace(typoPrefix, rootPath)}${search}${hash}`,
    )
  } else {
    const inside =
      pathname === rootPath || pathname.startsWith(`${rootPath}/`)
    if (!inside) {
      window.location.replace(`${window.location.origin}${baseUrl}`)
    }
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
