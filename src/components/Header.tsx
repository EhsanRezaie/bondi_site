import { useState } from 'react'
import { useLang, useTheme } from '../providers'
import { useT } from '../hooks'
import { DOWNLOADS } from '../config'
import { BondiMark, Menu, Moon, Sun, X } from './icons'

const NAV = [
  { key: 'features', id: 'features' },
  { key: 'how', id: 'how' },
  { key: 'safety', id: 'safety' },
  { key: 'faq', id: 'faq' },
  { key: 'contact', id: 'contact' },
] as const

export default function Header() {
  const t = useT()
  const { lang, setLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const toggleLang = () => setLang(lang === 'fa' ? 'en' : 'fa')

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <BondiMark size={32} />
          <span dir="auto">{t.brand}</span>
        </a>

        <nav className="nav" aria-label="primary">
          {NAV.map((n) => (
            <a key={n.key} className="nav-link" href={`#${n.id}`}>
              {t.nav[n.key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-btn" onClick={toggleLang} aria-label="Switch language">
            {lang === 'fa' ? 'EN' : 'فا'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn btn-primary btn-sm" href={DOWNLOADS.android}>
            {t.nav.download}
          </a>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV.map((n) => (
            <a key={n.key} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {t.nav[n.key]}
            </a>
          ))}
          <button className="lang-btn" onClick={toggleLang}>
            {lang === 'fa' ? 'English' : 'فارسی'}
          </button>
          <a className="btn btn-primary" href={DOWNLOADS.android} onClick={() => setOpen(false)}>
            {t.nav.download}
          </a>
        </div>
      )}
    </header>
  )
}
