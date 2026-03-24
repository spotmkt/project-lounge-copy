import { useState } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-title">Studio P7 Criativo</span>
            <span className="logo-subtitle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Rua Rio de Janeiro 471, Centro
            </span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#contato" className="nav-cta">Contato</a></li>
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
