import { useEffect } from 'react';

export const P7Topbar = () => (
  <div className="p7-topbar">
    <a href="/" className="p7-logo" aria-label="P7 Criativo">
      <img src="/p7-logo.png" alt="P7 Criativo" width={64} height={50} />
    </a>
  </div>
);

/** Define título, descrição e canonical apontando para o domínio lp.p7criativo.com.br */
export const useP7Seo = (path: string, title: string, description: string) => {
  useEffect(() => {
    const url = `https://lp.p7criativo.com.br${path}`;
    document.title = title;

    const setMeta = (selector: string, attr: string, key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [path, title, description]);
};

const benefits = [
  {
    title: 'Suporte TI',
    text: 'Todo suporte de TI incluso',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
  {
    title: 'Localização',
    text: 'Praça Sete, Centro de BH',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
  {
    title: 'Estrutura',
    text: 'Prédio projetado por Oscar Niemeyer',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>
    ),
  },
  {
    title: 'Apoio Garantido',
    text: 'Hub de Inovação e Economia Criativa',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    title: 'Ambiente Inspirador',
    text: 'Acesso a conexões empresariais e parcerias',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>
    ),
  },
];

export const P7Benefits = () => (
  <section className="p7-section">
    <div className="p7-container">
      <h2 className="p7-title">Benefícios</h2>
      <div className="p7-title-rule" />
      <div className="p7-benefits">
        {benefits.map((b) => (
          <div className="p7-benefit" key={b.title}>
            <div className="p7-benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export const P7Testimonials = ({ ctaHref = '#contato', ctaOnClick }: { ctaHref?: string; ctaOnClick?: () => void }) => (
  <section className="p7-section p7-section-alt">
    <div className="p7-container">
      <h2 className="p7-title">Depoimentos</h2>
      <div className="p7-title-rule" />
      <p className="p7-subtitle">Veja os depoimentos de empresas que fizeram seus eventos no P7</p>
      <div className="p7-testimonials">
        <div className="p7-testimonial">
          <p>
            "Quero expressar minha profunda gratidão pela parceria e profissionalismo demonstrados no evento CONEX 2025.
            Desde o primeiro contato, Graziela e Bruno Gouvea foram extremamente atenciosos, eficientes e gentis,
            oferecendo assessoria técnica essencial para o sucesso do evento. A equipe do P7 Criativo superou minhas
            expectativas, tornando essa experiência excepcional. Espero poder contar novamente com essa colaboração e
            agradeço pela dedicação e competência."
          </p>
          <div className="p7-testimonial-name">Renildo Dias</div>
          <div className="p7-testimonial-company">Empresa: CONTMEDI</div>
        </div>
        <div className="p7-testimonial">
          <p>
            "Já utilizei diversos espaços do P7 Criativo para eventos e sempre tive uma experiência excelente. O
            atendimento da equipe é impecável: todos são atenciosos e prestativos. O mobiliário e a estrutura facilitam
            muito a organização, transmitindo segurança e qualidade em cada evento."
          </p>
          <div className="p7-testimonial-name">Thamis Mattos</div>
          <div className="p7-testimonial-company">Empresa: NEO VENTURES</div>
        </div>
      </div>
      <div className="p7-center">
        <a href={ctaHref} className="p7-btn" onClick={ctaOnClick}>Entrar em contato</a>
      </div>
    </div>
  </section>
);

export const P7Footer = () => (
  <footer className="p7-footer">
    <div className="p7-container p7-footer-main">
      <a
        className="p7-footer-map"
        href="https://www.google.com/maps/search/?api=1&query=P7%20Criativo%2C%20Rua%20Rio%20de%20Janeiro%20471%2C%20Belo%20Horizonte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir localização do P7 Criativo no Google Maps"
      >
        <img src="/images/optimized/p7-map.webp" alt="Mapa da localização do P7 Criativo no Centro de Belo Horizonte" loading="lazy" width={691} height={361} />
        <span>Ver no Google Maps</span>
      </a>
      <div className="p7-footer-contact">
        <img src="/p7-logo.png" alt="P7 Criativo" width={90} height={71} className="p7-footer-logo" />
        <address>
          R. Rio de Janeiro, 471 -<br />
          Centro, Belo Horizonte - MG,<br />
          30160-040
        </address>
        <p>
          Telefone: <a href="tel:+553196905648">(31) 9 9690-5648</a><br />
          E-mail: <a href="mailto:contato@p7criativo.com.br">contato@p7criativo.com.br</a>
        </p>
        <div className="p7-footer-rule" />
        <div className="p7-socials" aria-label="Redes sociais do P7 Criativo">
          <a href="https://www.instagram.com/p7criativo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do P7 Criativo">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="p7-social-fill" /></svg>
          </a>
          <a href="https://wa.me/553196905648" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do P7 Criativo">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" /><path d="M8.2 7.7c.2-.5.4-.5.8-.5h.3c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.2 1.8 2.1 2.4.8.5 1.5.8 1.8.9.2.1.4 0 .6-.2l.8-1c.2-.3.4-.3.7-.2l1.8.9c.3.2.5.3.5.5 0 .2-.1 1.2-.6 1.7-.5.6-1.2.9-2 .9-.5 0-1.2-.1-2.6-.7-1.6-.7-2.8-1.7-3.8-2.8-1-1.1-1.8-2.4-2.2-3.5-.4-1.1 0-2 .4-2.5Z" /></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="p7-footer-bottom">
      <div className="p7-container"><strong>Copyright © P7 Criativo</strong> | Todos os direitos reservados</div>
    </div>
  </footer>
);
