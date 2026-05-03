import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { fadeInStagger, containerFade } from '../utils/animations'

/**
 * Route-driven entry motion for a page container ref.
 * Targets `.fade-in` inside the container on pathname change.
 */
export function usePageTransition(wrapRef, pathname) {
  useLayoutEffect(() => {
    const root = wrapRef.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      fadeInStagger(root)
      containerFade(root)
    }, root)

    return () => ctx.revert()
  }, [pathname, wrapRef])
}
