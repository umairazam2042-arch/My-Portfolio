import { useTheme } from '../hooks/useTheme'

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
  </svg>
)

// Pill-shaped theme switch. The knob slides to the moon side in dark mode and to the sun side in light mode.
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className={`theme-switch ${isDark ? 'theme-switch--dark' : 'theme-switch--light'}`}
    >
      <span className="theme-switch__track" aria-hidden="true">
        <span className="theme-switch__icon theme-switch__icon--sun">
          <SunIcon />
        </span>
        <span className="theme-switch__icon theme-switch__icon--moon">
          <MoonIcon />
        </span>
        <span className="theme-switch__knob">{isDark ? <MoonIcon /> : <SunIcon />}</span>
      </span>
    </button>
  )
}

export default ThemeToggle
