import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import './CustomCursor.css'

// Custom cursor for desktop mouse users only. Mounted lazily from App.
const CustomCursor = () => {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.4 })

  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      document.documentElement.classList.add('cursor-visible')
    }
    const onOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"]')
      document.documentElement.classList.toggle('cursor-hover', Boolean(target))
    }
    const onLeaveWindow = () => document.documentElement.classList.remove('cursor-visible')

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor', 'cursor-visible', 'cursor-hover')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow)
    }
  }, [x, y])

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} aria-hidden="true" />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} aria-hidden="true" />
    </>
  )
}

export default CustomCursor
