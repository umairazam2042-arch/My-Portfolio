import { lazy, Suspense } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { profile } from '../data/profile'
import profileImage from '../assets/profile.jpg'
import { ArrowRightIcon, DownloadIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from './Icons'
import './Hero.css'

// Heavy canvas effect is loaded only when the hero renders.
const ParticlesBackground = lazy(() => import('./effects/ParticlesBackground'))

const nameLetters = profile.name.split('')

const Hero = () => {
  const reduceMotion = useReducedMotion()

  // Glow that follows the pointer, smoothed with a spring.
  const pointerX = useMotionValue(-500)
  const pointerY = useMotionValue(-500)
  const glowX = useSpring(pointerX, { stiffness: 120, damping: 20 })
  const glowY = useSpring(pointerY, { stiffness: 120, damping: 20 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set(e.clientX - rect.left)
    pointerY.set(e.clientY - rect.top)
  }

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
    >
      <div className="hero__glow" aria-hidden="true" />
      {!reduceMotion && (
        <motion.div className="hero__mouse-glow" style={{ x: glowX, y: glowY }} aria-hidden="true" />
      )}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      <div className="container hero__inner">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I am
          </motion.p>

          <h1 id="hero-title" className="hero__name" aria-label={profile.name}>
            <span aria-hidden="true" className="hero__name-letters">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  className="hero__letter"
                  initial={{ opacity: 0, y: '0.6em', rotateX: -70 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.15 + i * 0.045, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter === ' ' ? ' ' : letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="hero__title text-gradient text-gradient--animated"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowRightIcon />
            </a>
            <a href={profile.cvPath} download className="btn btn--outline">
              <DownloadIcon />
              Download My CV
            </a>
            <a href="#contact" className="btn btn--ghost">
              <MailIcon />
              Contact Me
            </a>
          </motion.div>

          <motion.ul
            className="hero__socials"
            aria-label="Social profiles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero__social">
                <GithubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social">
                <LinkedinIcon /> LinkedIn
              </a>
            </li>
            {profile.instagram && (
              <li>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="hero__social">
                  <InstagramIcon /> Instagram
                </a>
              </li>
            )}
          </motion.ul>
        </div>

        <motion.div
          className="hero__visual"
          initial={reduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, scale: 1.06 }}
          // Final clip is larger than the element so the photo glow is not cut off.
          animate={{ clipPath: 'inset(-40% -40% -40% -40%)', opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__media">
            <span className="hero__ring" aria-hidden="true" />
            <div className="hero__frame">
              <img
                src={profileImage}
                alt={`${profile.name}, ${profile.title}`}
                width="800"
                height="1000"
                fetchPriority="high"
                className="hero__photo"
              />
            </div>
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Available for work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
