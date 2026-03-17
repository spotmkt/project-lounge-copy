import { useState, useEffect, useCallback } from 'react';

const slides = [
  { img: '/images/IMG_6401.jpg', alt: 'Studio P7 Criativo - Vista Geral', category: 'Estúdio Completo', title: 'Ambiente Profissional' },
  { img: '/images/IMG_6408.jpg', alt: 'Equipamentos Profissionais', category: 'Tecnologia', title: 'Equipamentos de Ponta' },
  { img: '/images/IMG_6412.jpg', alt: 'Setup de Gravação', category: 'Produção', title: 'Setup Profissional' },
  { img: '/images/IMG_6405.jpg', alt: 'Qualidade Premium', category: 'Qualidade', title: 'Resultado Premium' },
  { img: '/images/IMG_6404.jpg', alt: 'Conteúdo Profissional', category: 'Conteúdo', title: 'Produção Audiovisual' },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className={`carousel-slide ${i === current ? 'active' : ''}`}>
              <img src={slide.img} alt={slide.alt} loading="lazy" />
              <div className="slide-overlay">
                <div className="slide-content">
                  <span className="slide-category">{slide.category}</span>
                  <h3 className="slide-title">{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn prev-btn" onClick={prev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="carousel-btn next-btn" onClick={next}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button key={i} className={`indicator ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
