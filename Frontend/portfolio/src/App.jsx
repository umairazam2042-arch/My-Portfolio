import { lazy, Suspense, useState } from 'react'
import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CvSection from './components/CvSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Reveal from './components/effects/Reveal'
import Ambient from './components/effects/Ambient'
import PageLoader from './components/effects/PageLoader'

// Desktop-only effect, loaded only when it will be used.
const CustomCursor = lazy(() => import('./components/effects/CustomCursor'))

const useCanUseCustomCursor = () => {
  const [canUse] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  return canUse
}

const App = () => {
  const canUseCursor = useCanUseCustomCursor()

  return (
    // "user" respects prefers-reduced-motion for transform and layout animations.
    <MotionConfig reducedMotion="user">
      <PageLoader />
      <Ambient />
      <a href="#hero-title" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main className="page-content">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Skills />
        <Projects />
        <Certifications />
        <Reveal>
          <CvSection />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <ScrollToTop />
      {canUseCursor && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
    </MotionConfig>
  )
}

export default App
