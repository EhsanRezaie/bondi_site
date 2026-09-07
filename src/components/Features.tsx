import { useT, Reveal } from '../hooks'
import { Compass, Chat, BadgeCheck, Pin, Crown, Gift } from './icons'

const FEATURE_ICONS = [Compass, Chat, BadgeCheck, Pin, Crown, Gift]

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="overline">{kicker}</span>
        <h2>{title}</h2>
        <p>{sub}</p>
      </Reveal>
    </div>
  )
}

export default function Features() {
  const t = useT()
  const { kicker, title, sub, items } = t.features

  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead kicker={kicker} title={title} sub={sub} />
        <div className="bento">
          {items.map((item, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length]
            return (
              <div key={item.name} className="cell span3">
                <Reveal delay={(i % 3) * 90}>
                  <article className="feature-card">
                    <div className="f-glow" />
                    <span className="f-ico">
                      <Icon size={24} />
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
