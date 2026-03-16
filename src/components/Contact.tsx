import { useState, type FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', project: '', message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Tel: ${formData.phone}. Projeto: ${formData.project}. ${formData.message}`;
    window.open(`https://wa.me/5531983363297?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-header">
              <h2 className="section-title">
                Vamos tirar seu projeto<br />
                <span className="gradient-text">do papel?</span>
              </h2>
              <p className="section-subtitle">
                Entre em contato com nossa equipe e reserve seu plano promocional.
                Estamos prontos para transformar suas ideias em conteúdo profissional.
              </p>
            </div>

            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Atendimento Personalizado</h3>
                  <p>Nossa equipe está pronta para entender suas necessidades e criar a solução ideal para seu projeto.</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Resposta Rápida</h3>
                  <p>Retornamos seu contato em até 24 horas com todas as informações e próximos passos.</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="feature-content">
                  <h3>Consultoria Gratuita</h3>
                  <p>Oferecemos uma consulta inicial gratuita para alinhar expectativas e definir estratégias.</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <div className="detail-content">
                  <h4>Localização</h4>
                  <p>P7 Criativo - 24º andar<br />Centro de Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h3>Fale Conosco</h3>
                <p>Preencha o formulário e nossa equipe entrará em contato</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefone/WhatsApp</label>
                    <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project">Tipo de Projeto</label>
                    <select id="project" required value={formData.project} onChange={(e) => setFormData({...formData, project: e.target.value})}>
                      <option value="">Selecione uma opção</option>
                      <option value="podcast">Podcast</option>
                      <option value="videocast">Videocast</option>
                      <option value="curso">Curso Online</option>
                      <option value="entrevista">Entrevistas</option>
                      <option value="corporativo">Conteúdo Corporativo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Conte-nos sobre seu projeto</label>
                  <textarea id="message" rows={4} placeholder="Descreva brevemente sua ideia, objetivos e expectativas..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-button">
                  <span>Quero Gravar Meu Conteúdo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            </div>

            <div className="cta-card">
              <div className="cta-header">
                <div className="cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/></svg>
                </div>
                <h4>Oferta Limitada</h4>
              </div>
              <div className="cta-content">
                <p><strong>Plano Trimestral por apenas R$ 4.500,00</strong></p>
                <ul className="cta-benefits">
                  <li>12 horas de estúdio</li>
                  <li>12 episódios editados</li>
                  <li>48 cortes para redes sociais</li>
                  <li>Vinheta personalizada</li>
                  <li>Suporte técnico completo</li>
                </ul>
                <div className="urgency-badge">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Vagas limitadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
