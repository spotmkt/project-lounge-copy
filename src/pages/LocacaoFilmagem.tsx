import { P7Topbar, P7Benefits, P7Testimonials, P7Footer, useP7Seo } from '../components/p7/P7Shared';
import { P7Image } from '../components/p7/P7Image';
import { P7Video } from '../components/p7/P7Video';
import '../styles/p7-pages.css';

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=553196905648&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20espa%C3%A7o%20para%20filmagem%20no%20P7%20Criativo.';

const valores = [
  ['4 horas', 'R$ 1.200,00'],
  ['6 horas', 'R$ 1.800,00'],
  ['8 horas', 'R$ 2.400,00'],
];

const LocacaoFilmagem = () => {
  useP7Seo(
    '/locacao-filmagem',
    'Locação de Espaço para Filmagem em BH | P7 Criativo',
    'Ambientes modernos e bem iluminados para gravações, ensaios e produções audiovisuais no Centro de Belo Horizonte. Locação a partir de R$ 1.200 por 4 horas.'
  );

  return (
    <div className="p7">
      <P7Topbar />

      <section className="p7-hero">
        <div className="p7-hero-bg" />
        <div className="p7-hero-stripes" />
        <div className="p7-container p7-hero-inner">
          <h1>
            O <em>Cenário Perfeito</em> para dar vida às suas produções
          </h1>
          <p className="p7-hero-lead">
            Ambientes modernos, bem iluminados e com estrutura completa para gravações, ensaios e produções
            audiovisuais.
          </p>
          <a href="#valores" className="p7-btn">Entrar em contato</a>
        </div>
      </section>

      <div className="p7-container">
        <div className="p7-media">
          <P7Video videoId="9a70c87c-3e64-4af6-a7de-def4092fe495" title="Apresentação do P7 Criativo" />
        </div>
      </div>

      <P7Benefits />

      <P7Testimonials ctaHref={WHATSAPP} />

      <section className="p7-section p7-section-alt" id="valores">
        <div className="p7-container">
          <h2 className="p7-title">Conheça Nosso Espaço</h2>
          <div className="p7-title-rule" />
          <div className="p7-video-grid p7-video-grid-landscape">
            <P7Video videoId="f9346973-2157-4d98-b8d7-148280b1353a" title="Espaço para filmagens do P7 Criativo" />
            <P7Video videoId="51465c33-828d-4d9b-849c-c7743124a4a8" title="Ambiente para produções audiovisuais do P7 Criativo" />
          </div>
          <p className="p7-subtitle">
            Escolha o plano ideal para você e aproveite a infraestrutura do P7 Criativo.
          </p>
          <div className="p7-table-wrap">
            <table className="p7-table">
              <caption>Tabela de Valores de Locação</caption>
              <thead>
                <tr>
                  <th scope="col">Duração</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                {valores.map(([d, v]) => (
                  <tr key={d}>
                    <td>{d}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p7-plan-notes p7-plan-notes-wide">
            <strong>Observações:</strong>
            <ul>
              <li>Os valores de locação para filmagens/ensaios são fixos independente do espaço escolhido.</li>
              <li>As reservas serão realizadas mediante consulta das disponibilidades dos espaços na agenda do P7 Criativo.</li>
            </ul>
          </div>
          <div className="p7-center">
            <p className="p7-closing">
              Transforme seu projeto em uma <strong>experiência visual inesquecível.</strong>
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="p7-btn">
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      <P7Footer />
    </div>
  );
};

export default LocacaoFilmagem;
