import { BadgeCheck, HeartHandshake, NotebookPen } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { whatsappUrl } from '../data/content'

const principles = [
  { icon: HeartHandshake, label: 'Escuta sem julgamentos' },
  { icon: NotebookPen, label: 'Plano feito com você' },
  { icon: BadgeCheck, label: 'Cuidado baseado em evidências' },
]

export function About() {
  return (
    <Section id="sobre" className="about">
      <Reveal className="about__portrait-wrap">
        <div className="about__portrait-frame">
          <img src="/images/mari-consulta.png" alt="Imagem ilustrativa de nutricionista em um consultório" width={1448} height={1086} loading="lazy" decoding="async" />
          <div className="about__portrait-label"><span>Mari Nutricionista</span><small>Um cuidado de pessoa para pessoa</small></div>
        </div>
        <span className="about__portrait-stamp" aria-hidden="true">Cuidado<br />com calma</span>
      </Reveal>
      <Reveal className="about__content" delay={0.1}>
        <SectionHeading eyebrow="Prazer, eu sou a Mari" title={<>Nutrição com escuta, ciência e <em>vida real.</em></>} />
        <p className="body-copy">Acredito que alimentação saudável não precisa vir acompanhada de culpa ou de regras impossíveis. Meu trabalho começa entendendo quem você é, como vive e o que deseja transformar.</p>
        <p className="body-copy">Juntas, vamos construir estratégias individualizadas para seus objetivos, suas preferências e o seu momento — com acolhimento, conhecimento e espaço para ajustar a rota.</p>
        <ul className="about__principles">
          {principles.map(({ icon: Icon, label }) => <li key={label}><Icon size={18} strokeWidth={1.8} /><span>{label}</span></li>)}
        </ul>
        <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="outline">Quero conversar com a Mari</Button>
      </Reveal>
    </Section>
  )
}
