import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'all');
    setVisible(false);
  };

  const necessary = () => {
    localStorage.setItem('cookie_consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-navy border-t-2 border-amber shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + Text */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-amber shrink-0 mt-0.5" />
            <p className="text-white/90 text-sm leading-relaxed">
              🍪 Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. 
              Al continuar navegando aceptas nuestra{' '}
              <Link to="/privacidad" className="text-amber hover:text-amber/80 underline underline-offset-2 font-medium">
                Política de Privacidad
              </Link>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={necessary}
              className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white border border-white/30 hover:border-white/60 rounded-lg transition-all whitespace-nowrap"
            >
              Solo necesarias
            </button>
            <Link
              to="/privacidad"
              className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white border border-white/30 hover:border-white/60 rounded-lg transition-all whitespace-nowrap"
            >
              Ver política
            </Link>
            <button
              onClick={accept}
              className="px-5 py-2 text-xs font-semibold bg-amber hover:bg-amber/90 text-white rounded-lg transition-all whitespace-nowrap"
            >
              Aceptar todas
            </button>
            <button
              onClick={accept}
              className="p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}