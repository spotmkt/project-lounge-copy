import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { P7Topbar, P7Benefits, P7Testimonials, P7Footer, useP7Seo } from '../components/p7/P7Shared';
import { P7Video } from '../components/p7/P7Video';
import { formatPhone, onlyDigits, isValidPhone, isValidEmail, isValidNumber, isValidFutureDate, todayISO } from '@/lib/validation';
import { buildEventosWebhookPayload, sendEventosWebhook } from '@/lib/webhook';
import terceiroPrincipal from '@/assets/eventos/SJJ_6932.avif.asset.json';
import terceiroDetalheUm from '@/assets/eventos/41616-6365dab3908b7284c160d80b4cc0d89b.avif.asset.json';
import terceiroDetalheDois from '@/assets/eventos/IMG_5167.avif.asset.json';
import terceiroDetalheTres from '@/assets/eventos/IMG_4670__1_.avif.asset.json';
import modularUm from '@/assets/eventos/WhatsApp_Image_2025-06-30_at_15_49_32.avif.asset.json';
import modularDois from '@/assets/eventos/Untitled_design__1_.avif.asset.json';
import auditorioUm from '@/assets/eventos/SJJ_6989.avif.asset.json';
import auditorioDois from '@/assets/eventos/SJJ_7003.avif.asset.json';
import auditorioTres from '@/assets/eventos/SJJ_6985.avif.asset.json';
import auditorioQuatro from '@/assets/eventos/41616-cc112f5104874a9e8e34ae2c3ce63e50__1_.avif.asset.json';
import auditorioCinco from '@/assets/eventos/SJJ_7016__1_.avif.asset.json';
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

type FormKey = keyof typeof initialForm;

type GalleryImage = {
  src: string;
  alt: string;
};

const EventGalleryCarousel = ({ images, label }: { images: GalleryImage[]; label: string }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="p7-event-carousel" aria-label={label}>
      <div className="p7-event-carousel-stage">
        {images.map((image, index) => (
          <img
            key={image.src}
            className={index === active ? 'is-active' : ''}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            aria-hidden={index !== active}
          />
        ))}
      </div>
      <div className={`p7-event-carousel-thumbs p7-event-carousel-thumbs-${images.length}`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === active ? 'is-active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Exibir imagem ${index + 1} de ${images.length}`}
            aria-current={index === active ? 'true' : undefined}
          >
            <img src={image.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};

const terceiroAndarImages: GalleryImage[] = [
  { src: terceiroPrincipal.url, alt: 'Salão amplo do 3º andar para eventos e exposições' },
  { src: terceiroDetalheUm.url, alt: 'Vista lateral do salão do 3º andar' },
  { src: terceiroDetalheDois.url, alt: 'Espaço aberto do 3º andar' },
  { src: terceiroDetalheTres.url, alt: 'Outra vista do 3º andar' },
];

const auditorioImages: GalleryImage[] = [
  { src: auditorioUm.url, alt: 'Auditório do 24º andar' },
  { src: auditorioDois.url, alt: 'Foyer panorâmico do 24º andar' },
  { src: auditorioTres.url, alt: 'Vista interna do auditório' },
  { src: auditorioQuatro.url, alt: 'Área de convivência do 24º andar' },
  { src: auditorioCinco.url, alt: 'Vista panorâmica do foyer' },
];

const Eventos = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FormKey, string>>>({});
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  useP7Seo(
    '/',
    'Eventos no P7 Criativo | Espaços no Centro de BH',
    'Realize seu evento no P7 Criativo, prédio icônico na Praça Sete em BH: auditório, salas modulares e suporte completo para palestras, workshops e treinamentos.'
  );

  const set = (k: FormKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (k === 'telefone') value = formatPhone(value);
    if (k === 'dias' || k === 'publico') value = onlyDigits(value).slice(0, 6);
    setForm((f) => ({ ...f, [k]: value }));
    setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));
  };

  const validate = () => {
    const next: Partial<Record<FormKey, string>> = {};
    if (form.nome.trim().length < 3) next.nome = 'Informe seu nome completo.';
    if (!isValidPhone(form.telefone)) next.telefone = 'Informe um WhatsApp válido com DDD. Ex.: (31) 99999-9999';
    if (!isValidEmail(form.email)) next.email = 'Informe um e-mail válido. Ex.: nome@empresa.com.br';
    if (form.empresa.trim().length < 2) next.empresa = 'Informe o nome da empresa.';
    if (form.evento.trim().length < 2) next.evento = 'Informe o nome do evento.';
    if (!isValidFutureDate(form.data)) next.data = 'Escolha uma data válida, a partir de hoje.';
    if (!form.espaco) next.espaco = 'Selecione um espaço.';
    if (!form.periodo) next.periodo = 'Selecione um período.';
    if (!isValidNumber(form.dias, 1, 365)) next.dias = 'Informe o número de dias (1 a 365).';
    if (!form.formato) next.formato = 'Selecione o formato do evento.';
    if (!isValidNumber(form.publico, 1, 100000)) next.publico = 'Informe a expectativa de público, apenas números.';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setError('Revise os campos destacados antes de enviar.');
      const first = document.querySelector('.p7-field-invalid input, .p7-field-invalid select') as HTMLElement | null;
      first?.focus();
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

    const webhookPayload = buildEventosWebhookPayload(form);
    sendEventosWebhook(webhookPayload);

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
    setErrors({});
    requestAnimationFrame(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const fieldClass = (k: FormKey, extra = '') => `p7-field${extra ? ' ' + extra : ''}${errors[k] ? ' p7-field-invalid' : ''}`;
  const FieldError = ({ k }: { k: FormKey }) => (errors[k] ? <span className="p7-field-msg">{errors[k]}</span> : null);

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
          <P7Video videoId="9a70c87c-3e64-4af6-a7de-def4092fe495" title="Apresentação do P7 Criativo" />
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
          <div className="p7-event-galleries">
            <section className="p7-event-floor">
              <h3 className="p7-event-floor-title p7-event-floor-title-cyan">3º Andar - Eventos e Exposições</h3>
              <EventGalleryCarousel images={terceiroAndarImages} label="Galeria do 3º andar" />
            </section>

            <section className="p7-event-floor">
              <h3 className="p7-event-floor-title p7-event-floor-title-pink">23º - Salas modulares</h3>
              <div className="p7-event-modular-grid">
                <P7Video videoId="9a4d5233-b7fd-464b-ba61-56cc53162505" title="Salas modulares do 23º andar" vertical />
                <img className="p7-event-modular-story" src={modularDois.url} alt="Sala modular preparada para treinamento" loading="lazy" />
              </div>
              <img className="p7-event-modular-wide" src={modularUm.url} alt="Evento nas salas modulares do 23º andar" loading="lazy" />
            </section>

            <section className="p7-event-floor">
              <h3 className="p7-event-floor-title p7-event-floor-title-orange">24° Andar - Auditório e Foyer</h3>
              <EventGalleryCarousel images={auditorioImages} label="Galeria do auditório e foyer do 24º andar" />
            </section>
          </div>
        </div>
      </section>

      <section className="p7-section p7-form-section" id="contato">
        <div className="p7-container">
          <div className="p7-form-card">
            <h2 className="p7-title">Preencha os dados abaixo sobre seu evento que entraremos em contato</h2>
            <div className="p7-title-rule" />

            {sent ? (
              <div className="p7-form-success" role="status">
                <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#25d366" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12.5l2.6 2.6L16 9.5" />
                </svg>
                <h3>Enviado com sucesso!</h3>
                <p>Recebemos seus dados! Nossa equipe entrará em contato em breve.</p>
                <button type="button" className="p7-btn p7-btn-solid" onClick={() => setSent(false)}>
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="p7-form-grid">
                  <div className={fieldClass('nome')}>
                    <label htmlFor="nome"><i>*</i> Seu Nome</label>
                    <input id="nome" autoComplete="name" value={form.nome} onChange={set('nome')} aria-invalid={!!errors.nome} />
                    <FieldError k="nome" />
                  </div>
                  <div className={fieldClass('telefone')}>
                    <label htmlFor="telefone"><i>*</i> Coloque um número de Whatsapp</label>
                    <input id="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-9999" maxLength={15} value={form.telefone} onChange={set('telefone')} aria-invalid={!!errors.telefone} />
                    <FieldError k="telefone" />
                  </div>
                  <div className={fieldClass('email')}>
                    <label htmlFor="email"><i>*</i> Seu E-mail</label>
                    <input id="email" type="email" inputMode="email" autoComplete="email" placeholder="nome@empresa.com.br" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} />
                    <FieldError k="email" />
                  </div>
                  <div className={fieldClass('empresa')}>
                    <label htmlFor="empresa"><i>*</i> Nome da empresa organizadora do evento</label>
                    <input id="empresa" value={form.empresa} onChange={set('empresa')} aria-invalid={!!errors.empresa} />
                    <FieldError k="empresa" />
                  </div>
                  <div className={fieldClass('evento')}>
                    <label htmlFor="evento"><i>*</i> Nome do evento</label>
                    <input id="evento" value={form.evento} onChange={set('evento')} aria-invalid={!!errors.evento} />
                    <FieldError k="evento" />
                  </div>
                  <div className={fieldClass('data')}>
                    <label htmlFor="data"><i>*</i> Data Prevista</label>
                    <input id="data" type="date" min={todayISO()} value={form.data} onChange={set('data')} aria-invalid={!!errors.data} />
                    <FieldError k="data" />
                  </div>
                  <div className={fieldClass('espaco')}>
                    <label htmlFor="espaco"><i>*</i> Qual espaço do P7 você gostaria?</label>
                    <select id="espaco" value={form.espaco} onChange={set('espaco')} aria-invalid={!!errors.espaco}>
                      <option value="">Selecione</option>
                      {espacos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <FieldError k="espaco" />
                  </div>
                  <div className={fieldClass('periodo')}>
                    <label htmlFor="periodo"><i>*</i> Período da reserva</label>
                    <select id="periodo" value={form.periodo} onChange={set('periodo')} aria-invalid={!!errors.periodo}>
                      <option value="">Selecione</option>
                      {periodos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <FieldError k="periodo" />
                  </div>
                  <div className={fieldClass('dias')}>
                    <label htmlFor="dias"><i>*</i> Quantos dias terá o evento?</label>
                    <input id="dias" inputMode="numeric" placeholder="Apenas números" value={form.dias} onChange={set('dias')} aria-invalid={!!errors.dias} />
                    <FieldError k="dias" />
                  </div>
                  <div className={fieldClass('formato')}>
                    <label htmlFor="formato"><i>*</i> Qual será o formato do seu evento?</label>
                    <select id="formato" value={form.formato} onChange={set('formato')} aria-invalid={!!errors.formato}>
                      <option value="">Selecione</option>
                      {formatos.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <FieldError k="formato" />
                  </div>
                  <div className={fieldClass('publico')}>
                    <label htmlFor="publico"><i>*</i> Expectativa de público</label>
                    <input id="publico" inputMode="numeric" placeholder="Apenas números" value={form.publico} onChange={set('publico')} aria-invalid={!!errors.publico} />
                    <FieldError k="publico" />
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
