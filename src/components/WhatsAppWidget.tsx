import { useState } from 'react';

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [interesse, setInteresse] = useState('');

  const handleSubmit = () => {
    const text = `Olá, gostaria de mais informações sobre o projeto P7 Criativo.%0ANome: ${encodeURIComponent(nome)}%0ATelefone: ${encodeURIComponent(telefone)}%0AInteresse: ${encodeURIComponent(interesse)}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5531996569799&text=${text}`,
      '_blank'
    );
    setOpen(false);
    setNome('');
    setTelefone('');
    setInteresse('');
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bt-whatsApp" aria-label="Fale conosco via WhatsApp">
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
            <p className="whatsapp-popup-desc">Preencha seus dados para iniciar a conversa</p>
            <div className="whatsapp-popup-form">
              <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" maxLength={100} />
              </label>
              <label>
                Telefone:
                <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(31) 99999-9999" maxLength={20} />
              </label>
              <label>
                Interesse:
                <select value={interesse} onChange={(e) => setInteresse(e.target.value)}>
                  <option value="">Selecione...</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Vídeo aula">Vídeo aula</option>
                  <option value="Treinamentos">Treinamentos</option>
                  <option value="Outras gravações">Outras gravações</option>
                </select>
              </label>
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
