import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, Users, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/acerca-de" />
      {/* Header */}
      <div className="bg-navy pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">Acerca de</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">¿Quiénes somos?</h1>
          <p className="text-white/70 text-lg">Conoce el blog educativo de banca empresarial venezolana</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main intro */}
        <div className="bg-navy/5 border border-navy/10 rounded-2xl p-7 mb-10">
          <p className="text-navy text-lg leading-relaxed">
            <strong>Banca Empresarial VE</strong> es un blog educativo operado por{' '}
            <strong>EMPRENDIMIENTO YERIKA FRANCO</strong>{' '}
            (RIF Empresarial: J-508231880), registrado en Venezuela bajo el{' '}
            <strong>CRNE2026/54042</strong>.
          </p>
        </div>

        {/* Key data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { label: 'Nombre legal', value: 'EMPRENDIMIENTO YERIKA FRANCO' },
            { label: 'RIF Empresarial', value: 'J-508231880' },
            { label: 'Registro', value: 'CRNE2026/54042' },
            { label: 'Dirección', value: 'Calle Pichincha Casa Nro 21, Centro de Cagua, Parroquia Cagua, Municipio Sucre, Estado Aragua' },
            { label: 'Teléfono', value: '+58 424 359-2764' },
            { label: 'Correo', value: 'exitosplus0001@gmail.com' },
          ].map((item, i) => (
            <div key={i} className="bg-ghost-slate rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-navy font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-amber" />
            </div>
            <h2 className="text-2xl font-bold text-navy">Nuestra Misión</h2>
          </div>
          <div className="golden-thread-line pl-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Ayudar a emprendedores venezolanos a entender y aprovechar al máximo Mercantil Empresas, 
              la plataforma bancaria digital de Mercantil Banco para empresas y emprendedores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creemos que la educación financiera es un derecho y una necesidad para el desarrollo 
              económico de Venezuela. Cada artículo que publicamos está diseñado para ser claro, 
              práctico y accesible para cualquier emprendedor, sin importar su nivel de conocimiento 
              sobre el sistema bancario.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-navy" />
            </div>
            <h2 className="text-2xl font-bold text-navy">¿Para quién es este blog?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '🚀', title: 'Emprendedores', desc: 'Personas con CRNE que están dando sus primeros pasos en la formalización de su negocio.' },
              { emoji: '🏢', title: 'PYMES', desc: 'Pequeñas y medianas empresas que quieren optimizar sus operaciones bancarias.' },
              { emoji: '💼', title: 'Dueños de negocio', desc: 'Empresarios establecidos que buscan aprovechar mejor los servicios digitales de su banco.' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:border-amber/30 transition-all">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="bg-amber/5 border border-amber/20 rounded-2xl p-7 mb-10">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-amber shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-navy text-lg mb-3">Declaración importante</h3>
              <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <p>Este blog es de carácter <strong>estrictamente educativo e informativo</strong>. No somos una entidad bancaria ni financiera regulada por la SUDEBAN.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <p>El contenido publicado <strong>no constituye asesoría financiera, legal ni bancaria profesional</strong>. Para decisiones financieras importantes, consulta con un asesor certificado.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <p><strong>Mercantil Banco es una marca registrada</strong> de Mercantil C.A. Banco Universal. Este blog no tiene ninguna afiliación, patrocinio ni relación oficial con dicha institución.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder team image */}
        <div className="bg-ghost-slate rounded-2xl overflow-hidden mb-10">
          <div className="h-48 flex items-center justify-center bg-gradient-to-br from-navy/5 to-amber/5">
            <div className="text-center">
              <div className="text-4xl mb-2">👩‍💼</div>
              <p className="text-navy font-semibold">Emprendimiento Yerika Franco</p>
              <p className="text-gray-500 text-sm">Blog Educativo de Banca Empresarial</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-navy rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-3">¿Tienes alguna pregunta?</h3>
          <p className="text-white/70 mb-6">Estamos disponibles para responder tus dudas sobre banca empresarial venezolana.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/584243592764"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escríbenos por WhatsApp
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all"
            >
              Formulario de contacto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}