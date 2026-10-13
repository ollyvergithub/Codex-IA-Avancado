import { Apple, Dumbbell, HeartPulse, Salad, Sparkles, Timer } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { areas } from '../data/content'

const areaIcons = [Apple, Dumbbell, Salad, HeartPulse, Sparkles, Timer]

export function Areas() {
  return (
    <Section id="para-quem" className="areas">
      <Reveal>
        <SectionHeading eyebrow="Um acompanhamento para diferentes momentos" title={<>Seu objetivo também merece <em>um plano só seu.</em></>} description="O ponto de partida muda de pessoa para pessoa. O cuidado acompanha o que você precisa agora." />
      </Reveal>
      <div className="areas__grid">
        {areas.map((area, index) => {
          const Icon = areaIcons[index]
          return (
            <Reveal key={area.number} delay={(index % 3) * 0.06}>
              <article className="area-item">
                <div className="area-item__head"><span>{area.number}</span>{Icon && <Icon size={20} strokeWidth={1.65} aria-hidden="true" />}</div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
