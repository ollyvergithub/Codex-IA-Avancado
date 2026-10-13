import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { benefits, whatsappUrl } from '../data/content'

export function Benefits() {
  return (
    <Section className="benefits">
      <Reveal className="benefits__copy">
        <SectionHeading eyebrow="O que muda com acompanhamento" title={<>Mais clareza no prato. <em>Mais leveza na rotina.</em></>} description="Não existe mudança igual para todo mundo. Existe o próximo passo que faz sentido para você — e apoio para chegar até ele." />
        <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="outline">Veja se o acompanhamento combina com você</Button>
      </Reveal>
      <Reveal className="benefits__list" delay={0.1}>
        {benefits.map((benefit) => (
          <div className="benefit-row" key={benefit}><span><Check size={15} strokeWidth={2.4} /></span><p>{benefit}</p><ArrowUpRight size={16} aria-hidden="true" /></div>
        ))}
      </Reveal>
    </Section>
  )
}
