import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, TrendingUp, CheckCircle, BadgeCheck } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import ArticleCard from '../components/blog/ArticleCard';
import NewsletterSection from '../components/layout/NewsletterSection';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const recentArticles = ARTICLES.slice(0, 6);

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Contenido educativo claro',
      desc: 'Explicamos conceptos bancarios complejos en un lenguaje sencillo que cualquier emprendedor venezolano puede entender.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Información confiable y responsable',
      desc: 'Cada artículo incluye descargos de responsabilidad claros. Somos transparentes sobre lo que somos: un blog educativo, no una entidad bancaria.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Guías prácticas paso a paso',
      desc: 'No solo explicamos qué son los servicios bancarios: te enseñamos cómo usarlos, qué documentos necesitas y cómo evitar errores comunes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/" />
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden pt-24 pb-16 lg:pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-fade-in-up">
              {/* Verified badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <BadgeCheck className="w-4 h-4 text-amber" />
                <span className="text-white/80 text-xs font-medium">RIF J-508231880 | CRNE2026/54042</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Domine <span className="text-amber">Mercantil</span> Empresas
              </h1>
              <p className="text-xl text-white/70 mb-4 font-light leading-relaxed">
                Todo lo que tu emprendimiento necesita saber sobre Mercantil Empresas en Venezuela
              </p>
              <p className="text-white/50 text-sm mb-8">
                Blog educativo operado por <strong className="text-white/70">EMPRENDIMIENTO YERIKA FRANCO</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-amber/20"
                >
                  Explorar artículos <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/acerca-de"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all"
                >
                  ¿Quiénes somos?
                </Link>
              </div>
            </div>

            {/* Right - Featured article */}
            <div className="hidden lg:block">
              <Link to={`/blog/${ARTICLES[0].slug}`} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <div className="text-5xl mb-4">{ARTICLES[0].icon}</div>
                  <span className="text-amber text-xs font-semibold uppercase tracking-wider">Artículo destacado</span>
                  <h3 className="text-white font-bold text-xl mt-2 mb-3 leading-snug group-hover:text-amber/90 transition-colors">
                    {ARTICLES[0].title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{ARTICLES[0].excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-amber text-sm font-medium">
                    Leer artículo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories quick access */}
      <section className="bg-ghost-slate border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 categories-scroll">
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Categorías:</span>
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                to={`/blog?cat=${cat.id}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-all hover:shadow-sm category-snap ${cat.color}`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Últimos artículos educativos</h2>
              <p className="text-gray-500 mt-1">Guías completas para dominar Mercantil Empresas</p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-2 text-amber-dark font-semibold text-sm hover:gap-3 transition-all"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article, idx) => (
              <ArticleCard key={article.id} article={article} featured={idx === 0} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors"
            >
              Ver todos los artículos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why this blog */}
      <section className="bg-ghost-slate py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">¿Por qué este blog?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Creamos contenido educativo porque entendemos que navegar la banca empresarial venezolana 
              puede ser complejo. Aquí encontrarás claridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber/30 transition-all group">
                <div className="w-12 h-12 bg-navy/5 group-hover:bg-amber/10 rounded-xl flex items-center justify-center text-navy group-hover:text-amber mb-4 transition-all">
                  {b.icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer strip */}
      <div className="bg-amber/5 border-y border-amber/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong className="text-navy">Aviso:</strong> Este blog es de carácter estrictamente educativo sobre Mercantil Empresas. 
            Operado por EMPRENDIMIENTO YERIKA FRANCO (RIF Empresarial: J-508231880). No somos una entidad bancaria 
            ni financiera regulada por la SUDEBAN. Mercantil Banco es marca registrada de Mercantil C.A. Banco Universal. 
            Este blog no tiene afiliación oficial con dicha institución.
          </p>
        </div>
      </div>

      <NewsletterSection />
    </div>
  );
}