import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './Icons'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  )
}

export default ScrollToTop
