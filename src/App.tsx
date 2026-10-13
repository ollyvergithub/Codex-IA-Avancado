import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Challenges } from './sections/Challenges'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Benefits } from './sections/Benefits'
import { Areas } from './sections/Areas'
import { Approach } from './sections/Approach'
import { Booking } from './sections/Booking'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'
import { Navigate, Route, Routes } from 'react-router'
import { TermsPage } from './pages/TermsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termos" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Challenges />
        <About />
        <Process />
        <Benefits />
        <Areas />
        <Approach />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
