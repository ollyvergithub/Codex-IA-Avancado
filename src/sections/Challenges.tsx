import { CircleCheck } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { challenges } from '../data/content'

export function Challenges() {
  return (
    <Section id="desafios" className="challenges">
      <div className="challenges__intro">
        <Reveal>
          <SectionHeading eyebrow="Você não precisa dar conta sozinha" title={<>Cuidar da alimentação <em>não deveria pesar.</em></>} />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="body-copy challenges__lead">Se as tentativas parecem sempre recomeçar do zero, talvez não falte força de vontade. Talvez falte um plano feito para a sua vida.</p>
        </Reveal>
      </div>
      <div className="challenges__list">
        {challenges.map((challenge, index) => (
          <Reveal key={challenge} delay={index * 0.045}>
            <div className="challenge-item"><CircleCheck size={19} strokeWidth={1.7} /><p>{challenge}</p></div>
          </Reveal>
        ))}
      </div>
      <div className="challenges__footnote">A alimentação pode ser mais simples quando você tem orientação e espaço para construir seu próprio caminho.</div>
    </Section>
  )
}
