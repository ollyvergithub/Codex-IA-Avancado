import { CalendarDays, ClipboardList, SlidersHorizontal } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { steps } from '../data/content'

const stepIcons = [CalendarDays, ClipboardList, SlidersHorizontal]

export function Process() {
  return (
    <Section id="acompanhamento" className="process section--soft">
      <Reveal>
        <SectionHeading eyebrow="Como funciona" title={<>Um processo leve, pensado <em>junto com você.</em></>} description="Cada etapa tem um propósito: ajudar você a transformar intenção em escolhas que fazem sentido no cotidiano." />
      </Reveal>
      <div className="process__grid">
        {steps.map((step, index) => {
          const Icon = stepIcons[index]
          return (
            <Reveal key={step.number} delay={index * 0.08}>
              <article className="process-step">
                <div className="process-step__top"><span>{step.number}</span>{Icon && <Icon size={21} strokeWidth={1.6} aria-hidden="true" />}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
