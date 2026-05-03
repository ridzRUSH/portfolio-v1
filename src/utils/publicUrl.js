/**
 * Prefix paths to `public/` assets with Vite's `base` (GitHub Pages subpath).
 * External http(s) URLs are returned unchanged.
 */
export function publicUrl(path) {
  if (!path) return path
  if (/^https?:\/\//i.test(path)) return path
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${p}`
}
