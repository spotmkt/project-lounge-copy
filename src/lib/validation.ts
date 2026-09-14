// Helpers de validação e formatação de campos de formulário (pt-BR)

export const onlyDigits = (v: string) => v.replace(/\D/g, '');

/** Formata telefone brasileiro: (31) 99999-9999 */
export const formatPhone = (value: string) => {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, '($1');
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export const isValidPhone = (value: string) => {
  const d = onlyDigits(value);
  if (d.length !== 10 && d.length !== 11) return false;
  if (Number(d[0]) < 1 || Number(d[1]) < 1) return false; // DDD válido
  if (d.length === 11 && d[2] !== '9') return false;
  return true;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
export const isValidEmail = (value: string) => EMAIL_RE.test(value.trim());

/** Número inteiro positivo dentro de um intervalo */
export const isValidNumber = (value: string, min = 1, max = 100000) => {
  const d = onlyDigits(value);
  if (!d) return false;
  const n = Number(d);
  return n >= min && n <= max;
};

/** Data em formato YYYY-MM-DD, válida e não anterior a hoje */
export const isValidFutureDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

export const todayISO = () => {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
};
