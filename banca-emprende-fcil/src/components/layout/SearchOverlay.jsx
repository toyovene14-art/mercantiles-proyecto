import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Clock } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../../data/articles';
// Categories auto-updated via data file

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const results = query.length > 1
    ? ARTICLES.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const getCategoryLabel = (catId) => CATEGORIES.find(c => c.id === catId)?.label || catId;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      style={{ backgroundColor: 'rgba(13, 59, 102, 0.92)' }}
    >
      <div className="w-full max-w-2xl animate-fade-in-up">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar artículos educativos..."
            className="w-full pl-12 pr-12 py-4 bg-white rounded-xl text-navy text-lg placeholder-gray-400 outline-none shadow-2xl"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {query.length > 1 && (
          <div className="mt-3 bg-white rounded-xl shadow-2xl overflow-hidden">
            {results.length > 0 ? (
              results.map(article => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                >
                  <span className="text-2xl mt-0.5">{article.icon}</span>
                  <div>
                    <p className="font-semibold text-navy text-sm leading-snug">{article.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-amber-dark font-medium">{getCategoryLabel(article.category)}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{article.readingTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No se encontraron artículos para "<strong>{query}</strong>"</p>
                <p className="text-sm mt-1">Intenta con otros términos como "nómina", "crédito" o "RIF"</p>
              </div>
            )}
          </div>
        )}

        {query.length <= 1 && (
          <p className="text-center text-white/60 text-sm mt-4">
            Presiona <kbd className="bg-white/20 px-2 py-0.5 rounded text-white text-xs">Esc</kbd> para cerrar
          </p>
        )}
      </div>
    </div>
  );
}