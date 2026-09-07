import { useT, Reveal } from '../hooks'
import { DOWNLOADS } from '../config'
import { AndroidIcon, AppleIcon, Globe } from './icons'

export default function DownloadCta() {
  const t = useT()

  return (
    <section className="section" id="download">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.sub}</p>
            <div className="cta-actions">
              <a className="btn btn-light" href={DOWNLOADS.android}>
                <AndroidIcon size={20} />
                {t.hero.android}
              </a>
              <a className="btn btn-light" href={DOWNLOADS.ios}>
                <AppleIcon size={20} />
                {t.hero.ios}
              </a>
              <a
                className="btn"
                style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)' }}
                href={DOWNLOADS.web}
              >
                <Globe size={20} />
                {t.hero.web}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
