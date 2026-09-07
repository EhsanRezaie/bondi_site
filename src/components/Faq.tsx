import { useState } from 'react'
import { useT, Reveal } from '../hooks'
import { Chevron } from './icons'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <Chevron className="chev" />
      </button>
      <div className="faq-a">
        <p className="faq-a-inner">{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const t = useT()

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="overline">{t.faq.kicker}</span>
            <h2>{t.faq.title}</h2>
            <p>{t.faq.sub}</p>
          </Reveal>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <FaqItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
