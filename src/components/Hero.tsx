const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/></svg>
              </span>
              <span>Promoção de Inauguração - Vagas Limitadas!</span>
            </div>

            <h1 className="hero-title">
              Studio<br />
              <span className="gradient-text">P7 Criativo</span>
            </h1>

            <p className="hero-subtitle">
              Studio de Podcast completo<br />
              Espaço para gravação de vídeo aula<br />
              Espaço Chroma Key<br />
              Espaço para transmissão ao vivo
            </p>

            <div className="hero-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                  </div>
                  <span>Estúdio Completo</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/></svg>
                  </div>
                  <span>3 Câmeras Simultâneas</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>
                  </div>
                  <span>Iluminação LED Profissional</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>
                  </div>
                  <span>Áudio Alta Qualidade</span>
                </div>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#planos" className="btn btn-primary btn-lg">
                <span>Ver Planos Promocionais</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#sobre" className="btn btn-secondary">Saiba Mais</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <img src="/images/IMG_6394.jpg" alt="Studio P7 Criativo" className="hero-image" />
              <div className="image-overlay">
                <div className="overlay-info">
                  <div className="location-badge">24º Andar - P7 Criativo</div>
                  <div className="stats-overlay">
                    <div className="stat-overlay">
                      <div className="stat-number">3</div>
                      <div className="stat-label">CÂMERAS</div>
                    </div>
                    <div className="stat-overlay">
                      <div className="stat-number">4K</div>
                      <div className="stat-label">QUALIDADE</div>
                    </div>
                    <div className="stat-overlay">
                      <div className="stat-number">LED</div>
                      <div className="stat-label">ILUMINAÇÃO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default Hero;
