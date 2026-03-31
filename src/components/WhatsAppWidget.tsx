import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '', phone: '', project: ''
  });

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.project) {
      setError('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    setError('');

    // Save to Supabase (non-blocking)
    supabase.from('leads').insert({
      nome: formData.name,
      telefone: formData.phone,
      interesse: formData.project,
    }).then(({ error: err }) => {
      if (err) console.error('Erro ao salvar lead:', err);
    });

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'LEAD' });

    const text = `Olá! Meu nome é ${formData.name}. Tel: ${formData.phone}. Projeto: ${formData.project}.`;
    window.open(`https://wa.me/5531996569799?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setFormData({ name: '', phone: '', project: '' });
  };

  return (
    <>
      <button onClick={() => { (window as any).dataLayer = (window as any).dataLayer || []; (window as any).dataLayer.push({ event: 'whatsapp_button_click' }); setOpen(true); }} className="bt-whatsApp" aria-label="Fale conosco via WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
      <div className="whatsapp-msg">Fale conosco via Whatsapp</div>

      {open && (
        <div className="whatsapp-popup-overlay" onClick={() => setOpen(false)}>
          <div className="whatsapp-popup" onClick={(e) => e.stopPropagation()}>
            <button className="whatsapp-popup-close" onClick={() => setOpen(false)}>✕</button>
            <h3 className="whatsapp-popup-title">Fale Conosco</h3>
            <p className="whatsapp-popup-desc">Preencha o formulário e nossa equipe entrará em contato</p>
            <div className="whatsapp-popup-form">
              <label>
                Nome Completo:
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Seu nome" required />
              </label>
              <label>
                Telefone/WhatsApp:
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="(31) 99999-9999" required />
              </label>
              <label>
                Tipo de Projeto:
                <select value={formData.project} onChange={(e) => setFormData({...formData, project: e.target.value})} required>
                  <option value="">Selecione uma opção</option>
                  <option value="podcast">Podcast</option>
                  <option value="videocast">Videocast</option>
                  <option value="curso">Curso Online</option>
                  <option value="entrevista">Entrevistas</option>
                  <option value="corporativo">Conteúdo Corporativo</option>
                  <option value="outro">Outro</option>
                </select>
              </label>
              {error && <p style={{ color: '#e53e3e', fontSize: '0.85rem', margin: '0 0 8px' }}>{error}</p>}
              <button className="whatsapp-popup-btn" onClick={handleSubmit}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale conosco
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
