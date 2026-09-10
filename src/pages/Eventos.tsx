import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { P7Topbar, P7Benefits, P7Testimonials, P7Footer } from '../components/p7/P7Shared';
import '../styles/p7-pages.css';

const espacos = ['Auditório', '3° Andar', '23° Andar', 'Não tenho certeza'];
const periodos = [
  'Meia diária - 08:00 às 12:00',
  'Meia diária - 14:00 às 18:00',
  'Diária - 08:00 às 18:00',
  'Diária estendida - 08:00 às 20:00',
  'Período personalizado',
];
const formatos = ['Palestra', 'Workshop', 'Grupos com 2 mesas', 'Treinamento', 'Curso', 'Happyhour', 'Outros'];
const segmentos = [
  'Agro', 'IA', 'Construliving', 'Consumidor', 'Educação', 'Energia', 'ESG', 'Saúde', 'Marítimo & Portos',
  'Mobilidade e Logística', 'Inovação Aberta', 'Indústria', 'Fintechs', 'RetailTech', 'LegalTech', 'PropTech',
  'Supply Chain & Logística', 'FoodTech', 'InsurTech', 'Blockchain & Cripto', 'Marketing & Vendas', 'CleanTech',
  'Cibersegurança', 'Convenção', 'Investidores', 'Outros',
];

const initialForm = {
  nome: '', telefone: '', email: '', empresa: '', evento: '', data: '',
  espaco: '', periodo: '', dias: '', formato: '', objetivo: '', publico: '', segmento: '',
};

const Eventos = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Eventos no P7 Criativo | Espaços no Centro de BH';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        'content',
        'Realize seu evento no P7 Criativo, prédio icônico na Praça Sete em BH: auditório, salas modulares e suporte completo para palestras, workshops e treinamentos.'
      );
    }
  }, []);

  const set = (k: keyof typeof initialForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof typeof initialForm)[] = [
      'nome', 'telefone', 'email', 'empresa', 'evento', 'data', 'espaco', 'periodo', 'dias', 'formato', 'publico',
    ];
    if (required.some((k) => !form[k].trim())) {
      setError('Por favor, preencha todos os campos obrigatórios antes de enviar.');
      return;
    }
    setError('');

    const observacao = [
      `E-mail: ${form.email}`,
      `Empresa: ${form.empresa}`,
      `Evento: ${form.evento}`,
      `Data prevista: ${form.data}`,
      `Espaço: ${form.espaco}`,
      `Período: ${form.periodo}`,
      `Dias: ${form.dias}`,
      `Formato: ${form.formato}`,
      `Público: ${form.publico}`,
      `Segmento: ${form.segmento || '-'}`,
      `Objetivo: ${form.objetivo || '-'}`,
    ].join(' | ');

    void supabase.from('leads').insert({
      nome: form.nome,
      telefone: form.telefone,
      interesse: `Evento - ${form.formato}`,
      observacao,
    });

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'LEAD' });

    setSent(true);
    setForm(initialForm);
  };

  return (
    <div className="p7">
      <P7Topbar />

      <section className="p7-hero">
        <div className="p7-hero-bg" />
        <div className="p7-hero-stripes" />
        <div className="p7-container p7-hero-inner">
          <h1>
            Seu Evento no <em>Coração de BH</em>,<br />em um Prédio Icônico
          </h1>
          <p className="p7-hero-lead">
            <strong>Ofereça seu evento em um dos endereços mais simbólicos de Belo Horizonte</strong>
            O P7 Criativo, localização central, acessível, com estrutura moderna e suporte completo para eventos de
            todos os tipos.
          </p>
          <a href="#contato" className="p7-btn">Entrar em contato</a>
        </div>
      </section>

      <div className="p7-container">
        <div className="p7-media">
          <img src="/images/edificio_externo.jpg" alt="Edifício P7 Criativo na Praça Sete" loading="lazy" />
        </div>
      </div>

      <P7Benefits />

      <P7Testimonials ctaHref="#contato" />

      <section className="p7-section">
        <div className="p7-container">
          <h2 className="p7-title">Conheça nosso espaço</h2>
          <div className="p7-title-rule" />
          <p className="p7-subtitle">
            No P7, contamos com o espaço ideal para qualquer tipo de evento — palestras, seminários, workshops e muito
            mais. Oferecemos toda a estrutura necessária para que o seu evento seja um sucesso.
          </p>
          <div className="p7-spaces">
            <div className="p7-space">
              <img src="/images/transmissao_ao_vivo.jpg" alt="3º andar para eventos e exposições" loading="lazy" />
              <div className="p7-space-body">
                <h3>3º Andar - Eventos e Exposições</h3>
                <p>Amplo espaço para feiras, exposições e ativações de marca.</p>
              </div>
            </div>
            <div className="p7-space">
              <img src="/images/IMG_6412.jpg" alt="23º andar com salas modulares" loading="lazy" />
              <div className="p7-space-body">
                <h3>23º - Salas modulares</h3>
                <p>Configurações flexíveis para treinamentos, cursos e reuniões.</p>
              </div>
            </div>
            <div className="p7-space">
              <img src="/images/IMG_6405.jpg" alt="24º andar com auditório e foyer" loading="lazy" />
              <div className="p7-space-body">
                <h3>24° Andar - Auditório e Foyer</h3>
                <p>Auditório com vista panorâmica de BH e foyer para recepção.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p7-section p7-form-section" id="contato">
        <div className="p7-container">
          <div className="p7-form-card">
            <h2 className="p7-title">Preencha os dados abaixo sobre seu evento que entraremos em contato</h2>
            <div className="p7-title-rule" />

            {sent ? (
              <p style={{ textAlign: 'center', fontSize: '1.05rem' }}>
                Recebemos seus dados! Nossa equipe entrará em contato em breve.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="p7-form-grid">
                  <div className="p7-field">
                    <label htmlFor="nome"><i>*</i> Seu Nome</label>
                    <input id="nome" value={form.nome} onChange={set('nome')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="telefone"><i>*</i> Coloque um número de Whatsapp</label>
                    <input id="telefone" value={form.telefone} onChange={set('telefone')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="email"><i>*</i> Seu E-mail</label>
                    <input id="email" type="email" value={form.email} onChange={set('email')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="empresa"><i>*</i> Nome da empresa organizadora do evento</label>
                    <input id="empresa" value={form.empresa} onChange={set('empresa')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="evento"><i>*</i> Nome do evento</label>
                    <input id="evento" value={form.evento} onChange={set('evento')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="data"><i>*</i> Data Prevista</label>
                    <input id="data" type="date" value={form.data} onChange={set('data')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="espaco"><i>*</i> Qual espaço do P7 você gostaria?</label>
                    <select id="espaco" value={form.espaco} onChange={set('espaco')}>
                      <option value="">Selecione</option>
                      {espacos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="p7-field">
                    <label htmlFor="periodo"><i>*</i> Período da reserva</label>
                    <select id="periodo" value={form.periodo} onChange={set('periodo')}>
                      <option value="">Selecione</option>
                      {periodos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="p7-field">
                    <label htmlFor="dias"><i>*</i> Quantos dias terá o evento?</label>
                    <input id="dias" inputMode="numeric" value={form.dias} onChange={set('dias')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="formato"><i>*</i> Qual será o formato do seu evento?</label>
                    <select id="formato" value={form.formato} onChange={set('formato')}>
                      <option value="">Selecione</option>
                      {formatos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="p7-field">
                    <label htmlFor="publico"><i>*</i> Expectativa de público</label>
                    <input id="publico" inputMode="numeric" placeholder="Apenas números" value={form.publico} onChange={set('publico')} />
                  </div>
                  <div className="p7-field">
                    <label htmlFor="segmento">Segmento do evento</label>
                    <select id="segmento" value={form.segmento} onChange={set('segmento')}>
                      <option value="">Selecione</option>
                      {segmentos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="p7-field p7-field-full">
                    <label htmlFor="objetivo">Objetivo do evento</label>
                    <textarea
                      id="objetivo"
                      placeholder="Nos conte de forma resumida mais sobre o tema do seu evento e por qual motivo ele deve ser realizado no P7"
                      value={form.objetivo}
                      onChange={set('objetivo')}
                    />
                  </div>
                </div>

                {error && <p className="p7-form-error">{error}</p>}

                <div className="p7-form-actions">
                  <button type="submit" className="p7-btn p7-btn-solid">Solicitar contato</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <P7Footer />
    </div>
  );
};

export default Eventos;
