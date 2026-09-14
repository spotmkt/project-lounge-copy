import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_GTM_ID = 'GTM-K3PV4VWL';
const MKT_GTM_ID = 'GTM-WHPF999X';

const MKT_ROUTES = ['/coworking', '/eventos', '/saladereuniao', '/locacao-filmagem'];

function getGtmId(pathname: string): string {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const isMkt = MKT_ROUTES.some((route) => normalized === route || normalized.startsWith(`${route}/`));
  return isMkt ? MKT_GTM_ID : DEFAULT_GTM_ID;
}

export const GtmLoader = () => {
  const { pathname } = useLocation();
  const loadedIdRef = useRef<string | null>(null);

  useEffect(() => {
    const gtmId = getGtmId(pathname);

    if (loadedIdRef.current === gtmId) return;

    // Remove script antigo, se houver
    const existingScript = document.querySelector(`script[data-gtm-id="${loadedIdRef.current}"]`);
    if (existingScript?.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }

    // Atualiza ou cria o noscript iframe para o GTM atual
    const noscriptId = 'gtm-noscript-iframe';
    let noscript = document.getElementById(noscriptId);
    if (!noscript) {
      noscript = document.createElement('noscript');
      noscript.id = noscriptId;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    // Carrega o script do GTM após o load da página para não bloquear render
    const loadGtm = () => {
      const w = window as unknown as Record<string, any>;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      script.setAttribute('data-gtm-id', gtmId);
      document.head.appendChild(script);

      loadedIdRef.current = gtmId;
    };

    if (document.readyState === 'complete') {
      loadGtm();
    } else {
      window.addEventListener('load', loadGtm, { once: true });
    }

    return () => {
      window.removeEventListener('load', loadGtm);
    };
  }, [pathname]);

  return null;
};
