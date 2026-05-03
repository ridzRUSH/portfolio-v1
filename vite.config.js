import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Dev (`vite`): base `/` so http://localhost:5173 works.
// Production build (`vite build`): subpath for GitHub Pages project site.
const GH_PAGES_BASE = '/portfolio-v1/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? GH_PAGES_BASE : '/',
}))
