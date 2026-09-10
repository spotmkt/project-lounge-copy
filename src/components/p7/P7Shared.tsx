export const P7Topbar = () => (
  <div className="p7-topbar">
    <a href="/" className="p7-logo" aria-label="P7 Criativo">P<span>7</span></a>
  </div>
);

const benefits = [
  {
    title: 'Suporte TI',
    text: 'Todo suporte de TI incluso',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
  {
    title: 'Localização',
    text: 'Praça Sete, Centro de BH',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
  {
    title: 'Estrutura',
    text: 'Prédio projetado por Oscar Niemeyer',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>
    ),
  },
  {
    title: 'Apoio Garantido',
    text: 'Hub de Inovação e Economia Criativa',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    title: 'Ambiente Inspirador',
    text: 'Acesso a conexões empresariais e parcerias',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>
    ),
  },
];

export const P7Benefits = () => (
  <section className="p7-section">
    <div className="p7-container">
      <h2 className="p7-title">Benefícios</h2>
      <div className="p7-title-rule" />
      <div className="p7-benefits">
        {benefits.map((b) => (
          <div className="p7-benefit" key={b.title}>
            <div className="p7-benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const P7Testimonials = ({ ctaHref = '#contato' }: { ctaHref?: string }) => (
  <section className="p7-section p7-section-alt">
    <div className="p7-container">
      <h2 className="p7-title">Depoimentos</h2>
      <div className="p7-title-rule" />
      <p className="p7-subtitle">Veja os depoimentos de empresas que fizeram seus eventos no P7</p>
      <div className="p7-testimonials">
        <div className="p7-testimonial">
          <p>
            "Quero expressar minha profunda gratidão pela parceria e profissionalismo demonstrados no evento CONEX 2025.
            Desde o primeiro contato, Graziela e Bruno Gouvea foram extremamente atenciosos, eficientes e gentis,
            oferecendo assessoria técnica essencial para o sucesso do evento. A equipe do P7 Criativo superou minhas
            expectativas, tornando essa experiência excepcional. Espero poder contar novamente com essa colaboração e
            agradeço pela dedicação e competência."
          </p>
          <div className="p7-testimonial-name">Renildo Dias</div>
          <div className="p7-testimonial-company">Empresa: CONTMEDI</div>
        </div>
        <div className="p7-testimonial">
          <p>
            "Já utilizei diversos espaços do P7 Criativo para eventos e sempre tive uma experiência excelente. O
            atendimento da equipe é impecável: todos são atenciosos e prestativos. O mobiliário e a estrutura facilitam
            muito a organização, transmitindo segurança e qualidade em cada evento."
          </p>
          <div className="p7-testimonial-name">Thamis Mattos</div>
          <div className="p7-testimonial-company">Empresa: NEO VENTURES</div>
        </div>
      </div>
      <div className="p7-center">
        <a href={ctaHref} className="p7-btn">Entrar em contato</a>
      </div>
    </div>
  </section>
);

export const P7Footer = () => (
  <footer className="p7-footer">
    <div className="p7-container p7-footer-inner">
      <div>
        R. Rio de Janeiro, 471 -<br />
        Centro, Belo Horizonte - MG,<br />
        30160-040
      </div>
      <div>
        Telefone: <a href="tel:+553196905648">(31) 9 9690-5648</a><br />
        E-mail: <a href="mailto:contato@p7criativo.com.br">contato@p7criativo.com.br</a>
      </div>
      <div>
        <strong>Copyright © P7 Criativo</strong> | Todos os direitos reservados
      </div>
    </div>
  </footer>
);
