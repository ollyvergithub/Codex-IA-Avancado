import { Plus } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { questions } from '../data/content'

export function FAQ() {
  return (
    <Section id="duvidas" className="faq">
      <Reveal className="faq__intro">
        <SectionHeading eyebrow="Perguntas frequentes" title={<>Antes de começar, <em>pode perguntar.</em></>} description="O primeiro contato também é um espaço para entender o processo e tirar dúvidas." />
      </Reveal>
      <div className="faq__list">
        {questions.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.025}>
            <details className="faq-item" open={index === 0}>
              <summary><span>{item.question}</span><Plus size={19} strokeWidth={1.7} aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
