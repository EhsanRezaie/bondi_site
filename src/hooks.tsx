import { useEffect, useRef, type ReactNode } from 'react'
import { useLang } from './providers'
import { dictionaries } from './i18n'

export function useT() {
  const { lang } = useLang()
  return dictionaries[lang]
}

/** Renders text, wrapping the part between *asterisks* in the brand gradient. */
export function GradientTitle({ text }: { text: string }) {
  const [before, gradient = '', after = ''] = text.split('*')
  return (
    <h1>
      {before}
      <span className="gradient-text">{gradient}</span>
      {after}
    </h1>
  )
}

/** Reveals children once scrolled into view. */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
