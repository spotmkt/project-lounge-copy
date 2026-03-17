const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const plans = [
  {
    badge: 'Conteúdo Rápido',
    price: '499',
    subtitle: 'Fakecast / Vídeos',
    heading: 'O que está incluído:',
    features: [
      { bold: '1 hora de estúdio', desc: '1 câmera' },
      { bold: 'Até 10 vídeos editados', desc: 'de 1 minuto cada' },
      { bold: 'Entrega rápida', desc: 'em até 7 dias' },
      { bold: 'Vinheta de abertura', desc: 'assinatura da logomarca animada' },
    ],
    cta: 'Quero este plano',
  },
  {
    badge: 'Popular',
    price: '2.500',
    subtitle: 'Plano Duo',
    heading: 'O que está incluído:',
    features: [
      { bold: '2 horas de estúdio', desc: '3 câmeras' },
      { bold: '2 episódios editados', desc: '25-45 minutos cada' },
      { bold: '8 cortes (reels)', desc: '4 cortes por episódio' },
      { bold: 'Vinheta de abertura', desc: 'assinatura da logomarca animada' },
    ],
    cta: 'Quero este plano',
  },
  {
    badge: 'Recomendado',
    price: '3.200',
    subtitle: 'Plano Mensal',
    heading: 'O que está incluído:',
    features: [
      { bold: '4 horas de estúdio', desc: '3 câmeras' },
      { bold: '4 episódios editados', desc: '25-45 minutos cada' },
      { bold: '16 cortes (reels)', desc: '4 cortes por episódio' },
      { bold: 'Vinheta de abertura', desc: 'assinatura da logomarca animada' },
    ],
    cta: 'Quero este plano',
  },
  {
    badge: 'Mais Completo',
    price: '5.820',
    subtitle: '3 Meses de Conteúdo',
    heading: 'O que está incluído:',
    features: [
      { bold: '12 horas de estúdio', desc: '3 câmeras' },
      { bold: '12 episódios editados', desc: '25-45 minutos cada' },
      { bold: '48 cortes (reels)', desc: '4 cortes por episódio' },
      { bold: 'Vinheta de abertura', desc: 'assinatura da logomarca animada' },
    ],
    cta: 'Quero este plano',
  },
  {
    badge: 'Flexível',
    price: '399',
    subtitle: 'Por serviço (a partir de)',
    heading: 'Opções disponíveis:',
    features: [
      { bold: 'Gravação Avulsa - R$ 399', desc: '1h estúdio, 3 câmeras, Entrega sem edição' },
      { bold: 'Edição Avulsa - R$ 399', desc: '1 ep (25-45min) + Vinheta' },
      { bold: 'Cortes Editados', desc: 'R$ 199 (1 un) ou R$ 149 (acima de 4)' },
    ],
    cta: 'Consultar Disponibilidade',
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="pricing section-padding">
      <div className="container">
        <div className="pricing-header">
          <div className="promo-badge">
            <span className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/></svg>
            </span>
            <span>Promoção de Inauguração – Vagas Limitadas!</span>
          </div>
          <h2 className="section-title">
            Ofertas <span className="gradient-text">Especiais</span>
          </h2>
          <p className="section-subtitle centered">
            Aproveite a oferta especial de lançamento para gravar sua primeira temporada com a gente!
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className="pricing-container">
              <div className="pricing-card">
                <div className="pricing-header-card">
                  <div className="price-badge">{plan.badge}</div>
                  <div className="price-section">
                    <div className="price">
                      <span className="currency">R$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">,00</span>
                    </div>
                    <div className="price-subtitle">{plan.subtitle}</div>
                  </div>
                </div>

                <div className="pricing-content">
                  <div className="features-section">
                    <h3>{plan.heading}</h3>
                    <div className="features-list">
                      {plan.features.map((f, j) => (
                        <div key={j} className="feature-item">
                          <div className="feature-icon"><CheckIcon /></div>
                          <div className="feature-text">
                            <strong>{f.bold}</strong>
                            <span>{f.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="cta-section">
                    <a href="#contato" className="btn btn-primary btn-lg cta-button">
                      <span>{plan.cta}</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose">
          <h3>Por que gravar no Studio P7 Criativo?</h3>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h4>Localização Privilegiada</h4>
              <p>No centro de BH, fácil acesso e ambiente inspirador no 24º andar</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7.5C12.5 9.98528 10.4853 12 8 12C5.51472 12 3.5 9.98528 3.5 7.5C3.5 5.01472 5.51472 3 8 3C10.4853 3 12.5 5.01472 12.5 7.5ZM20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4>Parceria de Excelência</h4>
              <p>4Nexus, uma das principais produtoras de conteúdo do país</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4>Ambiente Moderno</h4>
              <p>Profissional e inspirador para seu melhor conteúdo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
