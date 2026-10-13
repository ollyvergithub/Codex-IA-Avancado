import { ArrowUpRight, Sprout } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { whatsappUrl } from '../data/content'

export function FinalCTA() {
  return (
    <Section className="final-cta">
      <Reveal className="final-cta__inner">
        <span className="final-cta__icon"><Sprout size={23} /></span>
        <p className="eyebrow">Um passo de cada vez</p>
        <h2>Sua alimentação não precisa ser complicada.</h2>
        <p>Com orientação e um plano possível, você pode construir uma rotina mais saudável no seu tempo.</p>
        <Button href={whatsappUrl} target="_blank" rel="noreferrer">Agendar minha consulta</Button>
        <ArrowUpRight className="final-cta__spark" size={24} aria-hidden="true" />
      </Reveal>
    </Section>
  )
}
