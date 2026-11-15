import { useEffect, useRef } from 'react'

// 3D tilt that follows the pointer. Writes CSS variables directly on the element
// (no React re-render), so it stays smooth. Disabled on touch devices and when
// the user prefers reduced motion.
export function useTilt(maxAngle = 8) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const canTilt =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canTilt) return

    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-x', `${(-y * maxAngle * 2).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(x * maxAngle * 2).toFixed(2)}deg`)
        el.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`)
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [maxAngle])

  return ref
}
