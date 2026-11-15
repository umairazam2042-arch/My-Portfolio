import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import ThemeToggle from './ThemeToggle'
import { CloseIcon, MenuIcon } from './Icons'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))

  // Add a background once the user scrolls away from the top.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          {profile.name.split(' ').map((part) => part[0]).join('')}
          <span className="navbar__brand-dot" aria-hidden="true" />
        </a>

        <ul
          id="primary-menu"
          className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="navbar__indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar__menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
