import { useEffect } from 'react';

const BASE_URL = 'https://bancaempresarialve.com';
const SITE_NAME = 'Banca Empresarial VE';

const PAGE_META = {
  '/': {
    title: 'Inicio | Blog Educativo sobre Mercantil Empresas Venezuela',
    description: 'Blog educativo sobre banca empresarial en Venezuela. Guías sobre Mercantil Empresas, cuentas corrientes y créditos para emprendedores venezolanos.',
  },
  '/blog': {
    title: 'Blog Educativo | Artículos sobre Mercantil Empresas Venezuela',
    description: 'Artículos educativos sobre Mercantil Empresas, nómina, transferencias en dólares y créditos empresariales. EMPRENDIMIENTO YERIKA FRANCO.',
  },
  '/acerca-de': {
    title: 'Acerca de | EMPRENDIMIENTO YERIKA FRANCO — Blog Educativo Venezuela',
    description: 'Conoce a EMPRENDIMIENTO YERIKA FRANCO, RIF J-508231880, operadores del blog educativo de banca empresarial más completo de Venezuela.',
  },
  '/contacto': {
    title: 'Contacto | Banca Empresarial VE — Venezuela',
    description: 'Contáctanos en exitosplus0001@gmail.com o al +584243592764. EMPRENDIMIENTO YERIKA FRANCO, Cagua, Estado Aragua, Venezuela.',
  },
  '/privacidad': {
    title: 'Política de Privacidad | Banca Empresarial VE',
    description: 'Política de privacidad de Banca Empresarial VE, operado por EMPRENDIMIENTO YERIKA FRANCO RIF J-508231880. Cagua, Estado Aragua, Venezuela.',
  },
  '/aviso-legal': {
    title: 'Aviso Legal | Banca Empresarial VE',
    description: 'Aviso legal de Banca Empresarial VE. Contenido educativo sin afiliación con Mercantil Banco. Operado por EMPRENDIMIENTO YERIKA FRANCO RIF J-508231880.',
  },
};

export default function SEOHead({ canonical, article = null }) {
  const path = canonical || '/';
  const meta = PAGE_META[path] || {};
  const title = article ? `${article.title} | ${SITE_NAME}` : (meta.title || `${SITE_NAME} — Blog Educativo`);
  const description = article ? article.excerpt?.substring(0, 160) : meta.description;
  const fullUrl = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name, attr, value) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    if (description) {
      setMeta('description', 'name', description);
      setMeta('og:description', 'property', description);
      setMeta('twitter:description', 'name', description);
    }
    setMeta('og:title', 'property', title);
    setMeta('twitter:title', 'name', title);
    setMeta('og:url', 'property', fullUrl);
    setMeta('robots', 'name', 'index, follow');

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', fullUrl);

    // Article schema
    if (article) {
      let scriptEl = document.getElementById('article-schema');
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'article-schema';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        inLanguage: 'es-VE',
        url: `${BASE_URL}/blog/${article.slug}`,
        datePublished: article.date,
        dateModified: article.date,
        author: { '@type': 'Organization', name: 'EMPRENDIMIENTO YERIKA FRANCO' },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
      });
    } else {
      const old = document.getElementById('article-schema');
      if (old) old.remove();
    }
  }, [title, description, fullUrl, article]);

  return null;
}