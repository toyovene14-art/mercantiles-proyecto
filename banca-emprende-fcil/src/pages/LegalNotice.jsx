import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/aviso-legal" />
      <div className="bg-navy pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">Aviso Legal</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-7 h-7 text-amber" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Aviso Legal y Términos de Uso</h1>
          </div>
          <p className="text-white/60 text-sm">Última actualización: Mayo 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-navy rounded-xl p-6 mb-8">
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Titular</p>
              <p className="text-white font-bold">EMPRENDIMIENTO YERIKA FRANCO</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">RIF Empresarial</p>
              <p className="text-white font-bold">J-508231880</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Registro</p>
              <p className="text-white font-bold">CRNE2026/54042</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Domicilio</p>
              <p className="text-white/80 text-xs">Cagua, Municipio Sucre, Estado Aragua, Venezuela</p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none article-prose">
          <h2>1. Objeto y titularidad</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del blog educativo "Banca Empresarial VE", 
            cuyo titular es <strong>EMPRENDIMIENTO YERIKA FRANCO</strong>, con RIF Empresarial 
            J-508231880, registrado en Venezuela bajo el CRNE2026/54042, con domicilio en Calle 
            Pichincha Casa Nro 21, Centro de Cagua, Parroquia Cagua, Municipio Sucre, Estado Aragua, 
            República Bolivariana de Venezuela.
          </p>

          <h2>2. Naturaleza del contenido — Declaración educativa</h2>
          <div style={{background:'#FEF9EC',border:'1px solid #BA7517',borderLeft:'4px solid #BA7517',borderRadius:'8px',padding:'16px',margin:'16px 0'}}>
            <p style={{margin:0}}>
              <strong>Este blog es de carácter educativo e informativo.</strong> El contenido publicado 
              en "Banca Empresarial VE" no constituye asesoría financiera, legal ni bancaria 
              profesional. La información presentada tiene un propósito exclusivamente educativo y 
              orientativo para emprendedores venezolanos.
            </p>
          </div>
          <p>
            El acceso y uso de la información contenida en este blog no crea ninguna relación 
            profesional, contractual ni de asesoría entre el titular del blog y el usuario. Para 
            decisiones financieras, legales o bancarias importantes, el usuario debe consultar con 
            profesionales certificados.
          </p>

          <h2>3. Declaración sobre Mercantil Banco</h2>
          <div style={{background:'#EFF6FF',border:'1px solid #BFDBFE',borderLeft:'4px solid #3B82F6',borderRadius:'8px',padding:'16px',margin:'16px 0'}}>
            <p style={{margin:0}}>
              <strong>Mercantil Banco</strong> es una marca registrada de{' '}
              <strong>Mercantil C.A. Banco Universal</strong>. El blog "Banca Empresarial VE", 
              operado por EMPRENDIMIENTO YERIKA FRANCO, <strong>no tiene afiliación, patrocinio 
              ni relación oficial</strong> con Mercantil C.A. Banco Universal ni con ninguna de 
              sus subsidiarias o entidades relacionadas. Las referencias a Mercantil Banco en este 
              blog se realizan únicamente con fines educativos e informativos, sin ningún propósito 
              comercial ni intención de confundir al usuario.
            </p>
          </div>
          <p>
            Este blog no está autorizado, respaldado, patrocinado ni afiliado a Mercantil Banco. 
            Para información oficial sobre los servicios de Mercantil Banco, el usuario debe dirigirse 
            directamente a los canales oficiales de dicha institución.
          </p>

          <h2>4. Limitación de responsabilidad</h2>
          <p>
            <strong>EMPRENDIMIENTO YERIKA FRANCO</strong> no se responsabiliza por:
          </p>
          <ul>
            <li>Las decisiones que el usuario tome basándose en la información publicada en este blog.</li>
            <li>La exactitud, completitud o actualidad de la información publicada, dado que el sistema bancario venezolano y sus regulaciones pueden cambiar.</li>
            <li>Errores u omisiones en el contenido del blog.</li>
            <li>Daños directos o indirectos derivados del uso o imposibilidad de uso de este blog.</li>
            <li>La información contenida en sitios web enlazados desde este blog.</li>
            <li>Interrupciones en el acceso al blog por razones técnicas o de mantenimiento.</li>
          </ul>
          <p>
            El usuario acepta que el uso de la información de este blog es bajo su propio riesgo y 
            responsabilidad.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            Todo el contenido original publicado en "Banca Empresarial VE", incluyendo pero no 
            limitado a textos, artículos, estructuras, diseño y organización del blog, es propiedad 
            intelectual de <strong>EMPRENDIMIENTO YERIKA FRANCO</strong>, salvo que se indique 
            expresamente lo contrario.
          </p>
          <p>
            Se permite la cita parcial de contenidos del blog para fines educativos o informativos, 
            siempre que se mencione la fuente y se incluya el enlace correspondiente al artículo 
            original. La reproducción total o comercial del contenido sin autorización previa y 
            escrita del titular está prohibida.
          </p>

          <h2>6. Condiciones de uso</h2>
          <p>El acceso y uso de este blog implica la aceptación de las siguientes condiciones:</p>
          <ul>
            <li>El usuario accede al blog con fines educativos, no comerciales.</li>
            <li>El usuario no utilizará el blog para actividades ilícitas o contrarias a la buena fe.</li>
            <li>El usuario acepta que la información del blog puede estar sujeta a cambios sin previo aviso.</li>
            <li>El usuario reconoce que este blog no presta servicios bancarios, financieros ni de asesoría profesional.</li>
          </ul>

          <h2>7. Legislación aplicable</h2>
          <p>
            El presente Aviso Legal se rige por la legislación vigente de la República Bolivariana 
            de Venezuela. Para cualquier controversia derivada del uso de este blog, las partes se 
            someten a la jurisdicción de los tribunales competentes de Venezuela.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con este Aviso Legal o los Términos de Uso, puede 
            contactar a <strong>EMPRENDIMIENTO YERIKA FRANCO</strong> en:
          </p>
          <ul>
            <li>Correo: exitosplus0001@gmail.com</li>
            <li>Teléfono: +58 424 359-2764</li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link to="/privacidad" className="text-amber-dark hover:underline text-sm font-medium">
            Ver Política de Privacidad →
          </Link>
          <Link to="/contacto" className="text-amber-dark hover:underline text-sm font-medium">
            Contactar →
          </Link>
        </div>
      </div>
    </div>
  );
}