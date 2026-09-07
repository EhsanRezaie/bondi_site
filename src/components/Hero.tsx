import { useLang } from '../providers'
import { useT, GradientTitle } from '../hooks'
import { DOWNLOADS } from '../config'
import { AndroidIcon, AppleIcon, Globe, Shield, Heart, Check, MessageHeart } from './icons'

function PhoneMockup() {
  const { lang } = useLang()
  const name = lang === 'fa' ? 'سارا، ۲۴' : 'Sara, 24'
  const near = lang === 'fa' ? '۳ کیلومتر دورتر' : '3 km away'

  return (
    <div className="phone-stage">
      <div className="float-card match">
        <span className="ico" style={{ background: 'linear-gradient(135deg,#ff4f81,#ff7a59)' }}>
          <Heart size={16} />
        </span>
        {lang === 'fa' ? 'لایک جدید گرفتی' : "You've got a like"}
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-photo">
          <div className="badge-row">
            <span className="chip">✦ {lang === 'fa' ? 'احرازشده' : 'Verified'}</span>
            <span className="chip">❤ {lang === 'fa' ? 'آنلاین' : 'Online'}</span>
          </div>
          <div>
            <div className="phone-avatar" />
            <div className="name">{name}</div>
            <div className="meta">{near}</div>
          </div>
        </div>
        <div className="phone-actions">
          <button className="action-btn star" aria-label="Superlike">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
            </svg>
          </button>
          <button className="action-btn reject" aria-label="Pass">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <button className="action-btn like" aria-label="Like">
            <Heart size={24} />
          </button>
        </div>
      </div>

      <div className="float-card chat">
        <span className="ico" style={{ background: 'linear-gradient(135deg,#ff6b6b,#ffa751)' }}>
          <MessageHeart size={16} />
        </span>
        {lang === 'fa' ? 'پیام جدید' : 'New message'}
      </div>
    </div>
  )
}

const NOTE_ICONS = [Shield, Check, Check]

export default function Hero() {
  const t = useT()

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">
            <span className="dot" />
            {t.hero.badge}
          </span>

          <GradientTitle text={t.hero.title} />

          <p className="lead">{t.hero.lead}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href={DOWNLOADS.android}>
              <AndroidIcon size={20} />
              {t.hero.android}
            </a>
            <a className="btn btn-ghost" href={DOWNLOADS.ios}>
              <AppleIcon size={20} />
              {t.hero.ios}
            </a>
            <a className="btn btn-ghost" href={DOWNLOADS.web}>
              <Globe size={20} />
              {t.hero.web}
            </a>
          </div>

          <div className="hero-note">
            {t.hero.notes.map((note, i) => {
              const Icon = NOTE_ICONS[i % NOTE_ICONS.length]
              return (
                <span key={note}>
                  <Icon size={16} />
                  {note}
                </span>
              )
            })}
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}
