const About = () => {
  return (
    <section id="sobre" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">
                Uma inovação sem<br />
                <span className="gradient-text">precedentes no Brasil</span>
              </h2>
              <p className="section-subtitle">
                A 4Nexus e o P7 Criativo uniram forças para criar um conceito único no país,
                integrando tecnologia de ponta, interatividade e conteúdo de mídia em um ambiente exclusivo.
              </p>
            </div>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-large">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 21L21 21M5 21V7L13 2L21 7V21M9 9H15M9 13H15M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Localização Privilegiada</h3>
                  <p>24º andar do icônico edifício P7 Criativo, no centro de Belo Horizonte, com vista panorâmica da cidade.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon-large">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7.5C12.5 9.98528 10.4853 12 8 12C5.51472 12 3.5 9.98528 3.5 7.5C3.5 5.01472 5.51472 3 8 3C10.4853 3 12.5 5.01472 12.5 7.5ZM20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Parceria Estratégica</h3>
                  <p>União entre a expertise da 4Nexus em produção audiovisual e a inovação do ecossistema P7 Criativo.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon-large">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Foco na Qualidade</h3>
                  <p>Compromisso com excelência em cada projeto, desde podcasts até produções corporativas de grande escala.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <img src="/images/IMG_6401.jpg" alt="Studio P7 Criativo" className="about-image" loading="lazy" />

            <div className="concept-card">
              <div className="concept-header">
                <div className="concept-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>
                </div>
                <h4>CONCEITO ÚNICO</h4>
              </div>
              <div className="concept-content">
                <h3>Inovação sem Paralelos</h3>
                <p>O Studio P7 Criativo representa um conceito inovador e único no Brasil, integrando tecnologia de ponta, interatividade e conteúdo de mídia em um ambiente exclusivo.</p>
                <p>Este espaço é projetado para oferecer uma experiência imersiva aos visitantes, permitindo interações ricas com conteúdos digitais e eventos ao vivo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
