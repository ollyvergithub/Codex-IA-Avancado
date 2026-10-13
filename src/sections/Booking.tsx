import { ArrowDownRight, CalendarCheck2, Video } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { whatsappUrl } from '../data/content'

export function Booking() {
  return (
    <Section className="booking section--dark">
      <Reveal className="booking__copy">
        <p className="eyebrow">Seu próximo passo pode ser simples</p>
        <h2>Comece hoje a cuidar da sua alimentação <em>com orientação profissional.</em></h2>
        <p>Conte para a Mari o que você está buscando. Juntas, vocês podem encontrar o formato de acompanhamento que faz sentido para sua rotina.</p>
        <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="light">Agendar uma conversa</Button>
      </Reveal>
      <Reveal className="booking__options" delay={0.1}>
        <div><CalendarCheck2 size={21} /><span><strong>Consulta presencial</strong><small>Atendimento acolhedor no consultório</small></span></div>
        <div><Video size={21} /><span><strong>Consulta online</strong><small>De onde você estiver, com privacidade</small></span></div>
        <span className="booking__arrow"><ArrowDownRight size={58} strokeWidth={1} aria-hidden="true" /></span>
      </Reveal>
    </Section>
  )
}
