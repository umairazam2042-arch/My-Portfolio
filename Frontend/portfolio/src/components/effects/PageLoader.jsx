import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../../data/profile'
import './PageLoader.css'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

// Shows a short branded loading animation until the page is ready.
// Hides itself after the window loads (minimum 900ms) and never blocks for more than 3s.
const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const start = performance.now()
    let timer

    const finish = () => {
      const elapsed = performance.now() - start
      timer = setTimeout(() => setIsLoading(false), Math.max(0, 900 - elapsed))
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    const safety = setTimeout(() => setIsLoading(false), 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(safety)
      window.removeEventListener('load', finish)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="page-loader"
          role="status"
          aria-label="Loading portfolio"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <div className="page-loader__content">
            <div className="page-loader__logo" aria-hidden="true">
              {initials.split('').map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="page-loader__bar">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
