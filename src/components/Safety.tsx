import { useT, Reveal } from '../hooks'
import { BadgeCheck, Flag, Lock, Pin } from './icons'

const SAFETY_ICONS = [BadgeCheck, Flag, Lock, Pin]

export default function Safety() {
  const t = useT()

  return (
    <section className="section section-alt" id="safety">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="overline">{t.safety.kicker}</span>
            <h2>{t.safety.title}</h2>
            <p>{t.safety.sub}</p>
          </Reveal>
        </div>

        <div className="safety-grid">
          {t.safety.items.map((item, i) => {
            const Icon = SAFETY_ICONS[i % SAFETY_ICONS.length]
            return (
              <div key={item.name}>
                <Reveal delay={(i % 2) * 100}>
                  <div className="safety-card">
                    <span className="s-ico">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
