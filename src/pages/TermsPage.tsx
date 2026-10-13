import { ArrowLeft, Sprout } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router'

export function TermsPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Privacidade | Mari Nutricionista'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="terms-header">
        <div className="container terms-header__inner">
          <Link className="brand terms-brand" to="/" aria-label="Mari Nutricionista, página inicial">
            <span className="brand__mark"><Sprout size={21} strokeWidth={2.1} aria-hidden="true" /></span>
            <span className="brand__name">mari<span>.</span><small>nutricionista</small></span>
          </Link>
          <Link className="terms-back" to="/"><ArrowLeft size={16} aria-hidden="true" /> Voltar ao site</Link>
        </div>
      </header>

      <main className="terms-page" id="conteudo">
        <article className="terms-document">
          <p className="eyebrow">Mari Nutricionista · Privacidade</p>
          <h1>Aviso de privacidade</h1>
          <p className="terms-intro">Este aviso explica como o site apresenta os serviços e o que acontece quando você inicia uma conversa para saber mais ou agendar um atendimento.</p>

          <section>
            <h2>1. Sobre este site</h2>
            <p>O site é uma página informativa sobre acompanhamento nutricional. Ele não oferece cadastro, formulário de contato ou envio de documentos. Os botões de agendamento direcionam você ao WhatsApp para conversar com a profissional.</p>
          </section>

          <section>
            <h2>2. Dados tratados neste acesso</h2>
            <p>O site não solicita diretamente dados pessoais ou informações de saúde. Ao clicar para conversar pelo WhatsApp, você escolhe quais informações enviar. A conversa passa a ser tratada pelo WhatsApp e pela profissional responsável pelo atendimento, conforme as regras aplicáveis a cada serviço.</p>
            <p>Como em qualquer acesso a um site, a infraestrutura que o disponibiliza pode processar dados técnicos de conexão e navegação para entregar, proteger e manter o serviço. Este projeto não implementa formulário próprio de coleta.</p>
          </section>

          <section>
            <h2>3. Informações de saúde</h2>
            <p>Não envie informações clínicas pelo site, que não possui um canal de envio. Se decidir compartilhar informações de saúde durante o contato ou atendimento, a profissional deverá explicar como elas serão usadas, protegidas e mantidas no contexto do serviço nutricional.</p>
          </section>

          <section>
            <h2>4. Serviços de terceiros</h2>
            <p>O link de agendamento abre o WhatsApp, um serviço de terceiros com termos e práticas de privacidade próprios. O uso desse serviço fica sujeito às condições publicadas pelo próprio WhatsApp. O site não controla o tratamento feito pela plataforma.</p>
          </section>

          <section>
            <h2>5. Seus direitos e contato</h2>
            <p>A legislação de proteção de dados pode garantir direitos sobre seus dados pessoais, como confirmação de tratamento, acesso e correção. Para pedidos relacionados às conversas ou ao atendimento, fale com a profissional pelo canal oficial de contato informado por ela.</p>
          </section>

          <section>
            <h2>6. Atualizações</h2>
            <p>Este aviso pode ser atualizado quando o site ou as formas de atendimento mudarem. A versão disponível nesta página é a que deve ser consultada.</p>
          </section>

          <p className="terms-review-note">Antes de publicar, confirme os dados de identificação da responsável pelo tratamento e o canal oficial para solicitações de privacidade.</p>
          <Link className="terms-home-link" to="/"><ArrowLeft size={16} aria-hidden="true" /> Voltar para a página inicial</Link>
        </article>
      </main>
    </>
  )
}
