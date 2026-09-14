export function getDeviceType(): string {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = window.navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ['utm_medium', 'utm_source', 'utm_id', 'utm_content', 'utm_term', 'utm_campaign'].forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });
  return utm;
}

export function formatConversionDate(date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function formatDateBR(isoDate: string): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

export function buildEventosWebhookPayload(form: {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  evento: string;
  data: string;
  espaco: string;
  periodo: string;
  dias: string;
  formato: string;
  objetivo: string;
  publico: string;
  segmento: string;
}): Record<string, string> {
  const utm = getUtmParams();
  const payload: Record<string, string> = {
    Seu_Nome: form.nome,
    Seu_Telefone: form.telefone,
    Seu_E_mail: form.email,
    Nome_da_empresa_organizadora_do_evento: form.empresa,
    Nome_do_evento: form.evento,
    Data_Prevista: formatDateBR(form.data),
    Qual_espaco_do_P7_voce_gostaria: form.espaco,
    Periodo_da_reserva: form.periodo,
    Quantos_dias_tera_o_evento: form.dias,
    Qual_sera_o_formato_do_seu_evento: form.formato,
    Objetivo_do_evento: form.objetivo,
    Expectativa_de_publico: form.publico,
    Segmento_do_evento: form.segmento || 'Outros',
    Referral_Source: typeof document !== 'undefined' ? document.referrer || '' : '',
    Dispositivo: getDeviceType(),
    URL: typeof window !== 'undefined' ? window.location.href : '',
    Data_da_conversao: formatConversionDate(),
    ...utm,
  };
  return payload;
}

export function sendEventosWebhook(payload: Record<string, string>): void {
  const url = new URL('https://n8n-n8n.ascl7r.easypanel.host/webhook/lp-eventos');
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });

  void fetch(url.toString(), { method: 'GET', mode: 'no-cors' })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Erro ao enviar webhook de eventos:', err);
    });
}
