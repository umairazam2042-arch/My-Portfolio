import { motion, useReducedMotion } from 'motion/react'

// Fades and slides its children in when they enter the viewport.
// Use `delay` to stagger several items in a row.
const Reveal = ({ children, delay = 0, y = 40, className }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
