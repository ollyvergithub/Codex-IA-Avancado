import { ArrowUpRight, Leaf } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Button } from '../components/Button'
import { whatsappUrl } from '../data/content'

export function Approach() {
  return (
    <Section className="approach section--dark">
      <Reveal className="approach__visual">
        <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=88" alt="Refeição colorida preparada com ingredientes frescos" width={1100} height={733} loading="lazy" decoding="async" />
        <span className="approach__image-caption"><Leaf size={15} /> Equilíbrio começa no cotidiano</span>
      </Reveal>
      <Reveal className="approach__copy" delay={0.08}>
        <p className="eyebrow">O diferencial está na conversa</p>
        <h2>Nutrição de verdade precisa <em>caber na sua vida.</em></h2>
        <p>Seu plano não nasce de uma lista pronta. Ele é construído considerando seus horários, gostos, objetivos e desafios, para que você consiga colocar as orientações em prática de um jeito sustentável.</p>
        <ul>
          <li><span>01</span> Sem cardápio genérico</li>
          <li><span>02</span> Sem excluir o que você gosta</li>
          <li><span>03</span> Com espaço para adaptar e aprender</li>
        </ul>
        <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="light">Vamos conversar</Button>
        <ArrowUpRight className="approach__mark" size={42} strokeWidth={1} aria-hidden="true" />
      </Reveal>
    </Section>
  )
}
