import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'fa' | 'en'
export type Theme = 'light' | 'dark'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

interface ThemeCtx {
  theme: Theme
  toggleTheme: () => void
}

const LangContext = createContext<LangCtx>({ lang: 'fa', setLang: () => {} })
const ThemeContext = createContext<ThemeCtx>({
  theme: 'dark',
  toggleTheme: () => {},
})

function getInitialLang(): Lang {
  const stored = localStorage.getItem('bondi-lang')
  if (stored === 'fa' || stored === 'en') return stored
  return 'fa'
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('bondi-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'fa' ? 'rtl' : 'ltr'
    localStorage.setItem('bondi-lang', lang)
  }, [lang])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#15131a' : '#fff8f3')
    localStorage.setItem('bondi-theme', theme)
  }, [theme])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider
        value={{ theme, toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }}
      >
        {children}
      </ThemeContext.Provider>
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
export const useTheme = () => useContext(ThemeContext)
