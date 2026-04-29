import { useState, useEffect, useCallback } from 'react';

const heroSlides = [
{
  img: '/images/edificio_externo.jpg',
  alt: 'Edifício P7 Criativo - Praça Sete',
  overlay:
  <div className="hero-slide-label">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        <span>Praça Sete | Belo Horizonte</span>
      </div>

},
{
  img: '/images/IMG_6394.jpg',
  alt: 'Studio P7 Criativo',
  overlay: null
},
{
  img: '/images/chroma_key.jpg',
  alt: 'Espaço Chroma Key',
  overlay:
  <div className="hero-slide-label">
        <span>Espaço Chroma Key</span>
      </div>

},
{
  img: '/images/transmissao_ao_vivo.jpg',
  alt: 'Transmissões ao Vivo',
  overlay:
  <div className="hero-slide-label">
        <span>Transmissões ao Vivo</span>
      </div>

},
{
  img: '/images/lounge.jpg',
  alt: 'Lounge P7 Criativo',
  overlay: null
}];


const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-pricing hero-pricing-mobile gradient-text">Gravação + Edição à partir de R$485</p>

          <div className="hero-text">
            <div className="hero-badge hero-badge-desktop">
              <span className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" /></svg>
              </span>
              <span>Promoção de Inauguração - Vagas Limitadas!</span>
            </div>

            <h1 className="hero-title">
              Studio de gravações<br />
              <span className="gradient-text">P7 Criativo</span>
            </h1>

            <div className="hero-subtitle-list">
              <div className="hero-subtitle-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(14, 90%, 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                <span>Studio de Podcast completo</span>
              </div>
              <div className="hero-subtitle-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(14, 90%, 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7L16 12L23 17V7Z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                <span>Espaço para gravação de vídeo aula</span>
              </div>
              <div className="hero-subtitle-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(14, 90%, 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                <span>Espaço Chroma Key</span>
              </div>
              <div className="hero-subtitle-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(14, 90%, 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>
                <span>Espaço para transmissão ao vivo</span>
              </div>
            </div>

            <p className="hero-pricing gradient-text">Gravação + Edição à partir de R$485</p>

            <div className="hero-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
                  </div>
                  <span>Estúdio Completo</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" /><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" /></svg>
                  </div>
                  <span>3 Câmeras Simultâneas</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" /><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
                  </div>
                  <span>Iluminação LED Profissional</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>
                  </div>
                  <span>Áudio Alta Qualidade</span>
                </div>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contato" className="btn btn-primary btn-lg">
                <span>Ver Planos Promocionais</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#sobre" className="btn btn-secondary">Saiba Mais</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-badge-mobile">
              <div className="hero-badge">
                <span className="badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" /></svg>
                </span>
                <span className="hero-badge-text">Promoção de Inauguração<span className="hero-badge-extra"> - Vagas Limitadas!</span></span>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-carousel-track">
                {heroSlides.map((slide, i) =>
                <div
                  key={i}
                  className={`hero-carousel-slide ${i === current ? 'active' : ''}`}>
                  
                    <img src={slide.img} alt={slide.alt} className="hero-image" loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
                    {slide.overlay &&
                  <div className="hero-carousel-overlay">{slide.overlay}</div>
                  }
                  </div>
                )}
              </div>
              <div className="hero-carousel-dots">
                {heroSlides.map((_, i) =>
                <button
                  key={i}
                  className={`hero-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)} />

                )}
              </div>
              <div className="image-overlay">
                <div className="overlay-info">
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
    </section>);

};

export default Hero;