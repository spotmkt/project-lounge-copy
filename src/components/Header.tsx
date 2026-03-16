import { useState } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-title">Studio P7 Criativo</span>
            <span className="logo-subtitle">Hub de Conteúdo Digital e Inovação</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#contato" className="nav-cta">Falar Conosco</a></li>
            </ul>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={() => setMobileOpen(false)}>Sobre</a>
        <a href="#servicos" onClick={() => setMobileOpen(false)}>Serviços</a>
        <a href="#planos" onClick={() => setMobileOpen(false)}>Planos</a>
        <a href="#contato" onClick={() => setMobileOpen(false)}>Falar Conosco</a>
      </div>
    </>
  );
};

export default Header;
