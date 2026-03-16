import ImageCarousel from './ImageCarousel';

const services = [
  {
    title: 'Estúdio Completo',
    description: 'Equipamentos audiovisuais profissionais com gravação e edição simultânea de 3 câmeras para máxima qualidade visual.',
    features: ['3 câmeras profissionais', 'Gravação simultânea', 'Edição em tempo real'],
    featured: true,
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="2"/><path d="M14 15L10 11L4 17H20L16 13L14 15Z" stroke="currentColor" strokeWidth="2"/><rect x="16" y="6" width="4" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    title: 'Iluminação LED Profissional',
    description: 'Sistema completo de iluminação cênica em LED, capaz de criar atmosferas variadas e imersivas para qualquer tipo de conteúdo.',
    features: ['Iluminação cênica', 'Controle de temperatura', 'Cenários customizáveis'],
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>,
  },
  {
    title: 'Áudio de Alta Qualidade',
    description: 'Captação de áudio profissional com equipamentos de última geração para garantir clareza e qualidade sonora excepcional.',
    features: ['Microfones profissionais', 'Tratamento acústico', 'Mixagem ao vivo'],
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 1C18.5 1 23 5.5 23 12S18.5 23 12 23C5.5 23 1 18.5 1 12S5.5 1 12 1Z" stroke="currentColor" strokeWidth="2"/><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Edição e Streaming',
    description: 'Computador dedicado para edição profissional e streaming ao vivo, com software especializado e internet de alta velocidade.',
    features: ['Edição profissional', 'Streaming ao vivo', 'Internet de alta velocidade'],
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Ambiente Climatizado',
    description: 'Sala climatizada no 24º andar do Hub P7 Criativo, proporcionando conforto total e vista panorâmica de Belo Horizonte.',
    features: ['Climatização completa', 'Vista panorâmica', 'Ambiente profissional'],
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Suporte Técnico',
    description: 'Equipe técnica especializada da 4Nexus disponível durante toda a gravação para garantir qualidade e resolver qualquer questão.',
    features: ['Suporte completo', 'Equipe especializada', 'Assistência técnica'],
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M14.7 6.3C16.2 7.8 17 9.8 17 12S16.2 16.2 14.7 17.7M9.3 17.7C7.8 16.2 7 14.2 7 12S7.8 7.8 9.3 6.3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
];

const contentTypes = ['Podcasts', 'Videocasts', 'Cursos Online', 'Entrevistas', 'Conteúdo Corporativo', 'Lives'];

const Services = () => {
  return (
    <section id="servicos" className="services section-padding">
      <div className="container">
        <ImageCarousel />

        <div className="services-header">
          <h2 className="section-title">
            <span className="gradient-text">Estrutura avançada</span><br />
            para seu conteúdo
          </h2>
          <p className="section-subtitle">
            Equipamentos de última geração e ambiente profissional para transformar suas ideias em conteúdo de alta qualidade.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className={`service-card ${service.featured ? 'featured' : ''}`}>
              {service.featured ? (
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="featured-badge">Destaque</div>
                </div>
              ) : (
                <div className="service-icon">{service.icon}</div>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ideal para diversos tipos de conteúdo</h3>
            <div className="content-types">
              {contentTypes.map((type, i) => <span key={i} className="content-tag">{type}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
