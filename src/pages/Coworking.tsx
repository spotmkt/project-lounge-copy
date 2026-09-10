import { useEffect } from 'react';
import { P7Topbar, P7Benefits, P7Testimonials, P7Footer } from '../components/p7/P7Shared';
import '../styles/p7-pages.css';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=553196905648&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Coworking%20do%20P7%20Criativo.';

const plans = [
  {
    name: 'Diária',
    sub: 'Flexibilidade Total',
    price: 'R$65',
    period: 'Diária avulsa',
    items: ['Sem compromisso', 'Acesso imediato', 'Estrutura completa'],
    featured: false,
  },
  {
    name: 'Virtual',
    sub: 'Endereço Fiscal',
    price: 'R$122',
    period: 'por mês · Plano Anual',
    items: ['Acesso virtual P7', '1 visita mensal', 'Endereço fiscal no Centro de BH'],
    featured: false,
  },
  {
    name: 'Residente',
    sub: '1x por Semana',
    price: 'R$292',
    period: 'por mês · Trimestral (3 meses)',
    items: ['Economia garantida', 'Estações compartilhadas', 'Acesso às áreas comuns'],
    featured: true,
  },
  {
    name: 'Residente Pro',
    sub: '5x por Semana',
    price: 'R$622',
    period: 'por Residente · Plano Anual',
    items: ['Vaga reservada', 'Acesso todos os dias úteis', 'Salas de reunião inclusas'],
    featured: false,
  },
];

const Coworking = () => {
  useEffect(() => {
    document.title = 'Coworking no Centro de BH | P7 Criativo';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        'content',
        'Coworking no P7 Criativo, na Praça Sete em Belo Horizonte: estações de trabalho, salas de reunião, suporte de TI e planos a partir de R$65.'
      );
    }
  }, []);

  return (
    <div className="p7">
      <P7Topbar />

      <section className="p7-hero">
        <div className="p7-hero-bg" />
        <div className="p7-hero-stripes" />
        <div className="p7-container p7-hero-inner">
          <h1>
            Transforme sua rotina de trabalho no <em>P7 Criativo</em>.
            <br />O coworking que <em>conecta você</em> ao futuro dos negócios.
          </h1>
          <p className="p7-hero-lead">
            Explore um ambiente inovador e inspirador, pensado para empresas e profissionais que buscam mais do que um
            simples espaço para trabalhar.
          </p>
          <a href="#planos" className="p7-btn">Entrar em contato</a>
        </div>
      </section>

      <div className="p7-container">
        <div className="p7-media">
          <img src="/images/lounge.jpg" alt="Ambiente de coworking do P7 Criativo" loading="lazy" />
        </div>
      </div>

      <P7Benefits />

      <P7Testimonials ctaHref={WHATSAPP} />

      <section className="p7-section">
        <div className="p7-container">
          <h2 className="p7-title">Conheça Nosso Espaço</h2>
          <div className="p7-title-rule" />
          <div className="p7-spaces">
            <div className="p7-space">
              <img src="/images/IMG_6401.jpg" alt="Estações de trabalho do coworking" loading="lazy" />
              <div className="p7-space-body">
                <h3>Estações de Trabalho</h3>
                <p>Conforto, funcionalidade e design que estimula a produtividade.</p>
              </div>
            </div>
            <div className="p7-space">
              <img src="/images/transmissao_ao_vivo.jpg" alt="Salas de reunião do coworking" loading="lazy" />
              <div className="p7-space-body">
                <h3>Salas de reunião</h3>
                <p>Perfeitas para videoconferências, apresentações e muito mais.</p>
              </div>
            </div>
            <div className="p7-space">
              <img src="/images/IMG_6394.jpg" alt="P7 Day - café da manhã e networking" loading="lazy" />
              <div className="p7-space-body">
                <h3>P7 Day</h3>
                <p>Café da manhã e networking com a comunidade de inovação do P7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p7-section p7-section-alt" id="planos">
        <div className="p7-container">
          <h2 className="p7-title">Planos</h2>
          <div className="p7-title-rule" />
          <p className="p7-subtitle">
            Escolha o plano ideal para você e aproveite a infraestrutura do P7 Criativo.
          </p>
          <div className="p7-plans">
            {plans.map((p) => (
              <div className={`p7-plan ${p.featured ? 'p7-plan-featured' : ''}`} key={p.name}>
                {p.featured && <span className="p7-plan-tag">MAIS POPULAR</span>}
                <h3>{p.name}</h3>
                <p className="p7-plan-sub">{p.sub}</p>
                <div className="p7-plan-price">{p.price}</div>
                <p className="p7-plan-period">{p.period}</p>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="p7-btn">
                  Entrar em contato
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <P7Footer />
    </div>
  );
};

export default Coworking;
