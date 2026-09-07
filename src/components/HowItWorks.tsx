import { useT, Reveal } from '../hooks'

export default function HowItWorks() {
  const t = useT()

  return (
    <section className="section section-alt" id="how">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="overline">{t.how.kicker}</span>
            <h2>{t.how.title}</h2>
            <p>{t.how.sub}</p>
          </Reveal>
        </div>

        <div className="steps">
          {t.how.steps.map((step, i) => (
            <div key={step.name}>
              <Reveal delay={i * 120}>
                <div className="step">
                  <span className="step-num">{i + 1}</span>
                  <h3>{step.name}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
