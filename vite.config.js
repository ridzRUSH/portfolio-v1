import { copyFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Dev (`vite`): base `/` so http://localhost:5173 works.
// Production build (`vite build`): subpath for GitHub Pages project site.
// Must match repo name: https://<user>.github.io/<repo>/
const GH_PAGES_BASE = '/portfolio-v1/'

/** GitHub Pages returns 404 for unknown paths; copy SPA shell so client routing works. */
function ghPagesSpaFallback() {
  return {
    name: 'gh-pages-spa-fallback',
    closeBundle() {
      const index = resolve(__dirname, 'dist/index.html')
      const fallback = resolve(__dirname, 'dist/404.html')
      if (existsSync(index)) {
        copyFileSync(index, fallback)
      }
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(command === 'build' ? [ghPagesSpaFallback()] : []),
  ],
  base: command === 'build' ? GH_PAGES_BASE : '/',
  /** After `npm run build`, `vite preview` opens the app under the GitHub Pages subpath (not `/`). */
  preview: {
    open: GH_PAGES_BASE,
  },
}))
