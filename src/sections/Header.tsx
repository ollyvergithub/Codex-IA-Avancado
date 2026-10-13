import { useState } from 'react'
import { Menu, X, Sprout } from 'lucide-react'
import { navigation, whatsappUrl } from '../data/content'
import { Button } from '../components/Button'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Mari Nutricionista, início" onClick={closeMenu}>
          <span className="brand__mark"><Sprout size={21} strokeWidth={2.1} aria-hidden="true" /></span>
          <span className="brand__name">mari<span>.</span><small>nutricionista</small></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="main-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <Button href={whatsappUrl} target="_blank" rel="noreferrer" className="main-nav__cta">Agendar consulta</Button>
        </nav>
      </div>
    </header>
  )
}
