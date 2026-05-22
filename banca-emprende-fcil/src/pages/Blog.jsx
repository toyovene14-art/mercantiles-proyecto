import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import ArticleCard from '../components/blog/ArticleCard';
import SEOHead from '../components/SEOHead';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const setCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  const activeCatLabel = CATEGORIES.find(c => c.id === activeCategory)?.label;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/blog" />
      {/* Header */}
      <div className="bg-navy pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Artículos Educativos
          </h1>
          <p className="text-white/70 text-lg">
            {filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'} 
            {activeCatLabel && activeCategory !== 'all' ? ` en "${activeCatLabel}"` : ' sobre Mercantil Empresas'}
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div className="border-b border-gray-100 bg-white sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            <Filter className="w-4 h-4 text-gray-400 shrink-0" />
            <button
              onClick={() => setCategory('all')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${
                activeCategory === 'all'
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              Todos los artículos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-navy text-white border-navy'
                    : `bg-white border-gray-200 ${cat.color} hover:border-navy`
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No hay artículos en esta categoría aún.</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-amber-dark font-medium hover:underline"
            >
              Ver todos los artículos
            </button>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="bg-amber/5 border-t border-amber/10 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Contenido educativo sobre Mercantil Empresas. Operado por EMPRENDIMIENTO YERIKA FRANCO 
            (RIF Empresarial: J-508231880). Este blog no tiene afiliación oficial con Mercantil Banco 
            ni con ninguna institución financiera regulada por la SUDEBAN.
          </p>
        </div>
      </div>
    </div>
  );
}