import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const THEMES = ['dark', 'light']

// Reads the saved choice safely (storage can be blocked in private windows).
const getSavedTheme = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return THEMES.includes(saved) ? saved : null
  } catch {
    return null
  }
}

const getSystemTheme = () =>
  window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

const getInitialTheme = () => getSavedTheme() ?? getSystemTheme()

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignore: the theme still works for this visit.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
