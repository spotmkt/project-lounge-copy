import { P7Topbar, P7Benefits, P7Testimonials, P7Footer, useP7Seo, p7TrackConversion } from '../components/p7/P7Shared';
import { P7Image } from '../components/p7/P7Image';
import { P7Video } from '../components/p7/P7Video';
import '../styles/p7-pages.css';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=553196905648&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20Salas%20de%20Reuni%C3%A3o%20do%20P7%20Criativo.';

const salas = [
  {
    name: 'Sala de Reunião',
    sub: '(4º andar)',
    lugares: '4 Lugares',
    precos: [
      ['Hora Avulsa', 'R$65,00'],
      ['2 Horas', 'R$105,00'],
      ['4 Horas', 'R$190,00'],
    ],
    featured: false,
  },
  {
    name: 'Sala de Reunião',
    sub: '(18º andar)',
    lugares: '6 Lugares',
    precos: [
      ['Hora Avulsa', 'R$75,00'],
      ['2 Horas', 'R$126,00'],
      ['4 Horas', 'R$240,00'],
    ],
    featured: true,
  },
  {
    name: 'Sala de Reunião',
    sub: '(4º, 23º e 24º andar)',
    lugares: '8 Lugares',
    precos: [
      ['Hora Avulsa', 'R$85,00'],
      ['2 Horas', 'R$146,00'],
      ['4 Horas', 'R$260,00'],
    ],
    featured: false,
  },
  {
    name: 'Sala de Reunião',
    sub: '(24º andar)',
    lugares: '10 Lugares',
    precos: [
      ['Hora Avulsa', 'R$125,00'],
      ['2 Horas', 'R$230,00'],
      ['4 Horas', 'R$315,00'],
    ],
    featured: false,
  },
];

const SalaDeReuniao = () => {
  useP7Seo(
    '/saladereuniao',
    'Salas de Reunião no Centro de BH | P7 Criativo',
    'Salas de reunião no P7 Criativo, na Praça Sete em Belo Horizonte: tecnologia, privacidade e suporte de TI incluso. Valores por hora a partir de R$65.'
  );

  return (
    <div className="p7">
      <P7Topbar />

      <section className="p7-hero">
        <div className="p7-hero-bg" />
        <div className="p7-hero-stripes" />
        <div className="p7-container p7-hero-inner">
          <h1>
            Ambientes modernos para <em>encontros</em> que geram <em>resultados</em>.
          </h1>
          <p className="p7-hero-lead">
            Espaços planejados para reuniões, apresentações e videoconferências com total conforto, tecnologia e
            privacidade.
            <br />
            <strong>
              Perfeitas para quem busca impressionar clientes e trabalhar com foco em um ambiente inspirador.
            </strong>
          </p>
          <a href="#planos" className="p7-btn">Entrar em contato</a>
        </div>
      </section>

      <div className="p7-container">
        <div className="p7-media">
          <P7Video videoId="9a70c87c-3e64-4af6-a7de-def4092fe495" title="Apresentação do P7 Criativo" />
        </div>
      </div>

      <P7Benefits />

      <P7Testimonials ctaHref={WHATSAPP} ctaOnClick={p7TrackConversion} />

      <section className="p7-section p7-section-alt">
        <div className="p7-container">
          <h2 className="p7-title">Salas de Reuniões</h2>
          <div className="p7-title-rule" />
          <div className="p7-video-grid">
            <P7Video videoId="ea413141-4063-4399-b6d3-6cf2afa6a52f" title="Tour pela sala de reunião São Paulo" vertical />
            <P7Video videoId="43c6f87b-a591-488f-afde-156c235242e7" title="Tour pela sala de reunião Tópis" vertical />
            <P7Video videoId="6f2851be-0972-4bf5-8d01-98e2d02afc56" title="Tour por uma sala de reunião do P7 Criativo" vertical />
            <P7Video videoId="2e96302e-cb62-451a-a135-81e535cb36da" title="Tour por outra sala de reunião do P7 Criativo" vertical />
          </div>
        </div>
      </section>

      <section className="p7-section" id="planos">
        <div className="p7-container">
          <h2 className="p7-title">Conheça Nosso Espaço</h2>
          <div className="p7-title-rule" />
          <p className="p7-subtitle">
            Escolha o plano ideal para você e aproveite a infraestrutura do P7 Criativo.
          </p>
          <div className="p7-plans">
            {salas.map((s) => (
              <div className={`p7-plan ${s.featured ? 'p7-plan-featured' : ''}`} key={s.sub}>
                {s.featured && <span className="p7-plan-tag">MAIS PROCURADA</span>}
                <h3>{s.name}</h3>
                <p className="p7-plan-sub">{s.sub}</p>
                <div className="p7-plan-price">{s.lugares}</div>
                <p className="p7-plan-period">Capacidade da sala</p>
                <ul>
                  {s.precos.map(([label, valor]) => (
                    <li key={label}>
                      {label}: <strong>&nbsp;{valor}</strong>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="p7-btn" onClick={p7TrackConversion}>
                  Entrar em contato
                </a>
              </div>
            ))}
          </div>
          <div className="p7-plan-notes">
            <strong>Observação:</strong> consulte a taxa de fornecimento de kit café e água.
          </div>
        </div>
      </section>

      <P7Footer />
    </div>
  );
};

export default SalaDeReuniao;
