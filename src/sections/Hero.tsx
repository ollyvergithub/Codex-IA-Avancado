import { ArrowDown, Check, Sprout } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/Button'
import { whatsappUrl } from '../data/content'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="inicio" className="hero">
      <div className="container hero__layout">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Nutrição acolhedora, feita para você
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Uma alimentação saudável que <em>cabe na sua vida.</em>
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.14 }}
          >
            Acompanhamento nutricional personalizado para cuidar da sua saúde, respeitar sua rotina e construir mudanças que duram.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <Button href={whatsappUrl} target="_blank" rel="noreferrer">Agendar consulta</Button>
            <a className="text-link" href="#acompanhamento">Conheça o acompanhamento <ArrowDown size={15} aria-hidden="true" /></a>
          </motion.div>
          <div className="hero__trust">
            <span className="hero__trust-icon"><Check size={14} strokeWidth={2.5} /></span>
            <span>Atendimento presencial e online</span>
            <span className="hero__trust-dot" aria-hidden="true" />
            <span>Planos individualizados</span>
          </div>
        </div>

        <motion.div
          className="hero__visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="hero__image"
            src="/images/mari-consulta.png"
            alt="Imagem ilustrativa de nutricionista em ambiente de consulta"
            width={1448}
            height={1086}
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero__image-shade" />
          <div className="hero__image-note">
            <span className="hero__note-mark"><Sprout size={19} /></span>
            <span><strong>Seu cuidado começa</strong><small>com uma conversa.</small></span>
          </div>
          <div className="hero__photo-caption"><span /> Nutrição próxima e sem julgamentos</div>
          <span className="hero__ornament" aria-hidden="true">m</span>
        </motion.div>
      </div>
      <a className="hero__scroll" href="#desafios" aria-label="Continue para conhecer o acompanhamento"><span>Continue explorando</span><ArrowDown size={17} /></a>
    </section>
  )
}
