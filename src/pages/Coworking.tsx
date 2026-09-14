import { P7Topbar, P7Benefits, P7Testimonials, P7Footer, useP7Seo } from '../components/p7/P7Shared';
import { P7Image } from '../components/p7/P7Image';
import '../styles/p7-pages.css';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=553196905648&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Coworking%20do%20P7%20Criativo.';

const plans = [
  {
    name: 'Diária',
    sub: 'Utilização diária avulsa',
    price: 'R$65',
    period: 'por dia',
    items: ['Sem compromisso', 'Acesso imediato', 'Estrutura completa'],
    featured: false,
  },
  {
    name: 'Residente',
    sub: '1 dia por semana',
    price: 'R$292',
    period: 'por mês · Plano Anual',
    items: ['Contrato anual', 'Estações compartilhadas', 'Acesso às áreas comuns'],
    featured: true,
  },
  {
    name: 'Residente',
    sub: '5 dias por semana',
    price: 'R$622',
    period: 'por mês · Plano Trimestral',
    items: ['Contrato trimestral', 'Acesso todos os dias úteis', 'Estações compartilhadas'],
    featured: false,
  },
  {
    name: 'Residente',
    sub: '5 dias por semana',
    price: 'R$599',
    period: 'por mês · Plano Semestral',
    items: ['Contrato semestral', 'Acesso todos os dias úteis', 'Estações compartilhadas'],
    featured: false,
  },
  {
    name: 'Residente',
    sub: '5 dias por semana',
    price: 'R$577',
    period: 'por mês · Plano Anual',
    items: ['Contrato anual', 'Acesso todos os dias úteis', 'Estações compartilhadas'],
    featured: false,
  },
  {
    name: 'Residente Virtual',
    sub: 'Endereço Fiscal',
    price: 'R$122',
    period: 'por mês · Plano Anual',
    items: ['Acesso virtual às ações do P7', 'Utilização presencial do coworking uma vez por mês', 'Endereço fiscal no Centro de BH'],
    featured: false,
  },
];

const Coworking = () => {
  useP7Seo(
    '/coworking',
    'Coworking no Centro de BH | P7 Criativo',
    'Coworking no P7 Criativo, na Praça Sete em Belo Horizonte: estações de trabalho, salas de reunião, suporte de TI e planos a partir de R$65.'
  );

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
          <P7Image image="lounge" alt="Ambiente de coworking do P7 Criativo" fetchPriority="high" />
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
              <P7Image image="estacoes" alt="Estações de trabalho do coworking" loading="lazy" sizes="(max-width: 980px) 100vw, 370px" />
              <div className="p7-space-body">
                <h3>Estações de Trabalho</h3>
                <p>Conforto, funcionalidade e design que estimula a produtividade.</p>
              </div>
            </div>
            <div className="p7-space">
              <P7Image image="transmissao" alt="Salas de reunião do coworking" loading="lazy" sizes="(max-width: 980px) 100vw, 370px" />
              <div className="p7-space-body">
                <h3>Salas de reunião</h3>
                <p>Perfeitas para videoconferências, apresentações e muito mais.</p>
              </div>
            </div>
            <div className="p7-space">
              <P7Image image="networking" alt="P7 Day - café da manhã e networking" loading="lazy" sizes="(max-width: 980px) 100vw, 370px" />
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
              <div className={`p7-plan ${p.featured ? 'p7-plan-featured' : ''}`} key={`${p.name}-${p.period}`}>
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
          <div className="p7-plan-notes">
            <strong>Condições especiais:</strong> de 6 a 10 estações, 5% de desconto na mensalidade. De 11 a 15
            estações, 8% de desconto na mensalidade. Acima de 16 estações (inclusive), 10% de desconto na
            mensalidade. Limite de até 30 estações de trabalho por empresa.
          </div>
        </div>
      </section>

      <P7Footer />
    </div>
  );
};

export default Coworking;
