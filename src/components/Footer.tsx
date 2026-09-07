import { useT } from '../hooks'
import { CONTACT } from '../config'
import { BondiMark, Instagram, Telegram, Twitter, Mail } from './icons'

export default function Footer() {
  const t = useT()

  const productLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.how, href: '#how' },
    { label: t.footer.webApp, href: CONTACT.socials.telegram, external: true },
    { label: t.nav.download, href: '#download' },
  ]
  const companyLinks = [
    { label: t.footer.aboutUs, href: '#' },
    { label: t.footer.contactUs, href: '#contact' },
  ]
  const legalLinks = [
    { label: t.footer.terms, href: '#' },
    { label: t.footer.privacy, href: '#' },
    { label: t.footer.safetyPage, href: '#safety' },
  ]

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <BondiMark size={30} />
              <span dir="auto">{t.brand}</span>
            </a>
            <p className="footer-about">{t.footer.about}</p>
            <div className="social-row">
              <a className="social-btn" href={CONTACT.socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram size={18} />
              </a>
              <a className="social-btn" href={CONTACT.socials.telegram} aria-label="Telegram" target="_blank" rel="noreferrer">
                <Telegram size={18} />
              </a>
              <a className="social-btn" href={CONTACT.socials.twitter} aria-label="Twitter" target="_blank" rel="noreferrer">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.product}</h4>
            {productLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t.footer.company}</h4>
            {companyLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t.footer.legal}</h4>
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600 }}
          >
            <Mail size={16} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
