import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { ARTICLES } from '../../data/articles';

export default function Footer() {
  const recentArticles = ARTICLES.slice(0, 4);

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1 - Sobre el blog */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-amber" />
              </div>
              <span className="font-bold text-white">Banca Empresarial VE</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Blog educativo operado por <strong className="text-white">EMPRENDIMIENTO YERIKA FRANCO</strong>. 
              Ayudamos a emprendedores venezolanos a entender y aprovechar Mercantil Empresas.
            </p>
          </div>

          {/* Col 2 - Artículos recientes */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Artículos Recientes</h3>
            <ul className="space-y-3">
              {recentArticles.map(article => (
                <li key={article.id}>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-white/70 hover:text-amber text-sm transition-colors leading-snug line-clamp-2"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="mailto:exitosplus0001@gmail.com" className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  exitosplus0001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <a href="tel:+584243592764" className="text-white/70 hover:text-white text-sm transition-colors">
                  +58 424 359-2764
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Cagua, Estado Aragua, Venezuela</span>
              </li>
            </ul>
          </div>

          {/* Col 4 - Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {[
                { to: '/privacidad', label: 'Política de Privacidad' },
                { to: '/aviso-legal', label: 'Aviso Legal' },
                { to: '/acerca-de', label: 'Acerca de' },
                { to: '/contacto', label: 'Contacto' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-amber text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
              © 2026 EMPRENDIMIENTO YERIKA FRANCO
            </p>
            <p className="text-white/50 text-xs">
              RIF EMPRESARIAL: J-508231880 | CRNE2026/54042
            </p>
            <p className="text-white/50 text-xs">
              Calle Pichincha Casa Nro 21, Centro de Cagua, Parroquia Cagua, Municipio Sucre, Estado Aragua, Venezuela
            </p>
            <p className="text-white/40 text-xs mt-3 max-w-2xl mx-auto leading-relaxed">
              Contenido de carácter exclusivamente educativo. Este blog no tiene afiliación oficial con Mercantil Banco 
              ni con ninguna institución financiera regulada por la SUDEBAN. Mercantil Banco es marca registrada de 
              Mercantil C.A. Banco Universal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}