const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-title">Studio P7 Criativo</span>
              <span className="logo-subtitle">Hub de Conteúdo Digital e Inovação</span>
            </div>
            <p className="footer-description">
              Um conceito inovador e único no Brasil, integrando tecnologia de ponta, interatividade e conteúdo de mídia em um ambiente exclusivo no coração de Belo Horizonte.
            </p>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>P7 Criativo - 24º andar</p>
            <p>Centro de Belo Horizonte, MG</p>
            <p>WhatsApp: (31) 98336-3297</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Studio P7 Criativo - 4Nexus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
