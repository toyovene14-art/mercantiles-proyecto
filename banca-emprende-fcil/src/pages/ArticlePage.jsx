import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, CATEGORIES } from '../data/articles';
import LegalSidebarWidget from '../components/blog/LegalSidebarWidget';
import TableOfContents from '../components/blog/TableOfContents';
import ShareButtons from '../components/blog/ShareButtons';
import ReadingProgressBar from '../components/blog/ReadingProgressBar';
import ArticleCard from '../components/blog/ArticleCard';
import SEOHead from '../components/SEOHead';

function addHeadingIds(html) {
  return html.replace(/<h([23])>(.*?)<\/h\1>/gi, (match, level, text) => {
    const cleanText = text.replace(/<[^>]*>/g, '');
    const id = cleanText.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 50);
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

function processDisclaimerBox(html) {
  return html.replace(/<div class="disclaimer-box">([\s\S]*?)<\/div>/g,
    `<div style="background:#FEF9EC;border:1px solid #BA7517;border-left:4px solid #BA7517;border-radius:8px;padding:16px;margin:24px 0;">$1</div>`
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const faqEl = document.getElementById('preguntas-frecuentes');
      if (faqEl && !faqVisible) {
        const rect = faqEl.getBoundingClientRect();
        if (rect.top < window.innerHeight) setFaqVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [faqVisible]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Artículo no encontrado</p>
          <Link to="/blog" className="text-amber-dark font-medium hover:underline">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article.id, article.category, 3);
  const category = CATEGORIES.find(c => c.id === article.category);
  const processedContent = processDisclaimerBox(addHeadingIds(article.content));

  return (
    <>
      <SEOHead canonical={`/blog/${article.slug}`} article={article} />
      <ReadingProgressBar />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-navy pt-20 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-6 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ArrowRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ArrowRight className="w-3 h-3" />
              {category && (
                <>
                  <Link to={`/blog?cat=${article.category}`} className="hover:text-white transition-colors">
                    {category.label}
                  </Link>
                  <ArrowRight className="w-3 h-3" />
                </>
              )}
              <span className="text-white/70 line-clamp-1 max-w-xs">{article.title}</span>
            </nav>

            {category && (
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${category.color} mb-4`}>
                {category.icon} {category.label}
              </span>
            )}

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 max-w-3xl">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />{article.readingTime} min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left sidebar - TOC (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents content={article.content} />
            </aside>

            {/* Main content */}
            <main className="lg:col-span-6">
              {/* Excerpt */}
              <div className="bg-navy/5 border-l-4 border-navy rounded-r-xl p-5 mb-8">
                <p className="text-navy/80 font-medium leading-relaxed">{article.excerpt}</p>
              </div>

              {/* Article body */}
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Share buttons */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <ShareButtons title={article.title} />
              </div>

              {/* Back to blog */}
              <div className="mt-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-navy font-medium hover:text-amber transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Leer más artículos
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-navy mb-6">Artículos relacionados</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {related.slice(0, 2).map(rel => (
                      <ArticleCard key={rel.id} article={rel} />
                    ))}
                  </div>
                </div>
              )}
            </main>

            {/* Right sidebar - Legal widget */}
            <aside className="hidden lg:block lg:col-span-3">
              <LegalSidebarWidget />
              {faqVisible && (
                <div className="mt-4 bg-amber/5 border border-amber/20 rounded-xl p-4 animate-slide-in-right">
                  <p className="text-xs font-bold text-navy mb-1">⚠️ Recordatorio legal</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Las preguntas frecuentes a continuación son orientativas. 
                    Siempre verifica con Mercantil Banco directamente.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* Mobile legal widget */}
        <div className="lg:hidden mx-4 mb-8">
          <LegalSidebarWidget />
        </div>
      </div>
    </>
  );
}