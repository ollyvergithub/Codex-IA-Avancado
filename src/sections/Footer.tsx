import { Sprout } from 'lucide-react'
import { Link } from 'react-router'
import { navigation, whatsappUrl } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <a className="brand brand--inverse" href="#inicio">
              <span className="brand__mark"><Sprout size={21} strokeWidth={2.1} aria-hidden="true" /></span>
              <span className="brand__name">mari<span>.</span><small>nutricionista</small></span>
            </a>
            <p>Nutrição com escuta, ciência e vida real.</p>
          </div>
          <div className="site-footer__links">
            <strong>Explore</strong>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href="#para-quem">Áreas de atendimento</a>
            <Link to="/termos">Privacidade</Link>
          </div>
          <div className="site-footer__contact">
            <strong>Vamos conversar?</strong>
            <p>Atendimento presencial e online, com horários combinados.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Fale com a Mari <span>↗</span></a>
          </div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Mari Nutricionista</span><span>Conteúdo informativo. O atendimento é individualizado.</span><a href="#inicio">Voltar ao início ↑</a></div>
      </div>
    </footer>
  )
}
