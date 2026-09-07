import { useLang } from '../providers'
import { useT, Reveal } from '../hooks'
import { Heart } from './icons'

const MATCHES = [
  { name: 'نگار، ۲۷', msg: 'سلام! حالت چطوره؟' },
  { name: 'آرش، ۲۹', msg: 'یه سوال دارم 🙂' },
  { name: 'النا، ۲۵', msg: 'کتاب بعدیت چیه؟' },
]

const MATCHES_EN = [
  { name: 'Negar, 27', msg: 'Hey! How are you?' },
  { name: 'Arash, 29', msg: 'I have a question 🙂' },
  { name: 'Elena, 25', msg: 'What’s your next book?' },
]

const CHAT = [
  { me: false, text: 'سلام، فیلم همون شب عالی بود!' },
  { me: true, text: 'آره ممنونم! این آخر هفته دوباره می‌ریم؟' },
  { me: false, text: 'به به، من که آماده‌ام 🎬' },
]

const CHAT_EN = [
  { me: false, text: 'Hey, that movie last night was great!' },
  { me: true, text: 'Right?! Should we go again this weekend?' },
  { me: false, text: 'Sounds perfect, I’m in 🎬' },
]

export default function Screens() {
  const t = useT()
  const { lang } = useLang()
  const fa = lang === 'fa'
  const matches = fa ? MATCHES : MATCHES_EN
  const chat = fa ? CHAT : CHAT_EN
  const chatNames = fa ? ['ملیکا', 'بنده'] : ['Melika', 'Me']

  return (
    <section className="section" id="screens">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="overline">{t.screens.kicker}</span>
            <h2>{t.screens.title}</h2>
            <p>{t.screens.sub}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="screens">
            {/* Discover screen */}
            <div className="screen">
              <div className="screen-topbar">
                <span className="tab on">{t.screens.discover}</span>
                <span style={{ color: 'var(--brand-start)', fontSize: 14 }}>✦</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 18 }}>
                  <div className="phone-avatar" style={{ width: 130, height: 150, borderRadius: 18 }} />
                </div>
                <div style={{ textAlign: 'center', paddingTop: 6 }}>
                  <div style={{ fontWeight: 800, fontSize: 17 }}>{fa ? 'سارا، ۲۴' : 'Sara, 24'}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 2 }}>
                    {fa ? '☕ قهوه، کتاب، طبیعت' : '☕ Coffee · Books · Nature'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', paddingTop: 8 }}>
                  <span className="s-heart-badge">
                    <Heart size={12} />
                  </span>
                </div>
              </div>
            </div>

            {/* Chat screen */}
            <div className="screen">
              <div className="screen-topbar">
                <span>{chatNames[0]}</span>
                <span style={{ color: '#4caf7d', fontSize: 9 }}>● {fa ? 'آنلاین' : 'online'}</span>
              </div>
              <div className="screen-body">
                <div style={{ textAlign: 'center', color: 'var(--text-soft)', fontSize: 10, fontWeight: 700 }}>
                  {fa ? 'امروز' : 'Today'}
                </div>
                {chat.map((m, i) => (
                  <div key={i} className={`s-bubble ${m.me ? 'me' : 'them'}`}>
                    {m.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Likes screen */}
            <div className="screen">
              <div className="screen-topbar">
                <span style={{ color: 'var(--brand-start)' }}>
                  <span style={{ display: 'inline-flex', verticalAlign: '-2px' }}>
                    <Heart size={12} />
                  </span>{' '}
                  {t.screens.likes}
                </span>
                <span>+12</span>
              </div>
              <div className="screen-body s-matches">
                {matches.map((m) => (
                  <div key={m.name} className="s-match">
                    <span className="av" style={{ background: 'linear-gradient(135deg,#ff6b6b,#ffa751)' }} />
                    <div className="row">
                      <span style={{ fontWeight: 800, fontSize: 12 }}>{m.name}</span>
                      <span className="s-line" style={{ width: '70%' }} />
                    </div>
                    <span className="s-heart-badge">
                      <Heart size={11} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
