import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/articles';

export default function ArticleCard({ article, featured = false }) {
  const category = CATEGORIES.find(c => c.id === article.category);

  if (featured) {
    return (
      <Link to={`/blog/${article.slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 article-card h-full">
          <div className="bg-ghost-slate h-52 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-amber/5"></div>
            <span className="text-6xl relative z-10">{article.icon}</span>
          </div>
          <div className="p-6">
            {category && (
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${category.color} mb-3`}>
                {category.icon} {category.label}
              </span>
            )}
            <h3 className="font-bold text-navy text-lg leading-snug mb-3 group-hover:text-amber transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Clock className="w-3.5 h-3.5" />{article.readingTime} min de lectura
              </span>
              <span className="text-amber-dark text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Leer <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${article.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-100 article-card p-5 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-ghost-slate rounded-xl flex items-center justify-center text-2xl shrink-0">
            {article.icon}
          </div>
          <div className="flex-1 min-w-0">
            {category && (
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${category.color} mb-1`}>
                {category.label}
              </span>
            )}
          </div>
        </div>
        <h3 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-amber transition-colors flex-1">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Clock className="w-3.5 h-3.5" />{article.readingTime} min
          </span>
          <span className="text-amber-dark text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Leer artículo <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}