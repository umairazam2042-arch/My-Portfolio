import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import './Stats.css'

// Numbers are counted from the project data files, so they are always accurate.
const stats = [
  { label: 'Projects built', value: projects.length },
  { label: 'Live demos deployed', value: projects.filter((p) => p.live).length },
  { label: 'Technologies used', value: skillGroups.reduce((total, group) => total + group.skills.length, 0) },
]

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Counts from 0 to `target` once the element scrolls into view.
const CountUp = ({ target, duration = 1400 }) => {
  const ref = useRef(null)
  // Users who prefer reduced motion, or browsers without IntersectionObserver, see the final number right away.
  const [value, setValue] = useState(() =>
    prefersReducedMotion() || typeof IntersectionObserver === 'undefined' ? target : 0,
  )

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return (
    <span ref={ref} className="stat__value">
      {value}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="stats" aria-label="Portfolio at a glance">
      <div className="container">
        <ul className="stats__list">
          {stats.map((item) => (
            <li key={item.label} className="stat">
              <CountUp target={item.value} />
              <span className="stat__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Stats
