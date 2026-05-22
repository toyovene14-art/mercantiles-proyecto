import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/privacidad" />
      <div className="bg-navy pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">Política de Privacidad</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-7 h-7 text-amber" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Privacidad</h1>
          </div>
          <p className="text-white/60 text-sm">Última actualización: Mayo 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-5 mb-8">
          <p className="text-sm text-navy/80 leading-relaxed">
            <strong className="text-navy">Responsable:</strong> EMPRENDIMIENTO YERIKA FRANCO —
            RIF Empresarial: J-508231880 — CRNE2026/54042 —
            Calle Pichincha Casa Nro 21, Centro de Cagua, Parroquia Cagua, Municipio Sucre, Estado Aragua, Venezuela.
            Correo: exitosplus0001@gmail.com
          </p>
        </div>

        <div className="prose max-w-none article-prose">
          <h2>1. Información general</h2>
          <p>
            La presente Política de Privacidad regula el tratamiento de los datos personales que 
            <strong> EMPRENDIMIENTO YERIKA FRANCO</strong> (en adelante, "el Blog") recopila a través 
            del sitio web "Banca Empresarial VE — Blog Educativo". Al utilizar este sitio, el usuario 
            acepta las condiciones establecidas en esta política.
          </p>

          <h2>2. Datos que se recopilan</h2>
          <h3>a) Formulario de contacto</h3>
          <p>
            Cuando el usuario completa el formulario de contacto disponible en este blog, se recopilan 
            los siguientes datos:
          </p>
          <ul>
            <li><strong>Nombre:</strong> Para personalizar la comunicación.</li>
            <li><strong>Correo electrónico:</strong> Para dar respuesta a la consulta enviada.</li>
            <li><strong>Asunto y mensaje:</strong> Para atender la consulta específica del usuario.</li>
          </ul>

          <h3>b) Formulario de suscripción al newsletter</h3>
          <p>
            Al suscribirse al boletín informativo del blog, se recopilan:
          </p>
          <ul>
            <li><strong>Nombre</strong></li>
            <li><strong>Correo electrónico</strong></li>
          </ul>
          <p>Estos datos se utilizan exclusivamente para el envío de contenido educativo del blog.</p>

          <h3>c) Datos de navegación</h3>
          <p>
            Al igual que la mayoría de los sitios web, este blog puede recopilar automáticamente 
            información técnica como dirección IP, tipo de navegador, páginas visitadas y tiempo 
            de permanencia, con fines estadísticos y de mejora del servicio.
          </p>

          <h2>3. Uso de cookies</h2>
          <p>
            Este blog puede utilizar cookies para mejorar la experiencia de navegación del usuario. 
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario. 
            Este blog puede utilizar los siguientes tipos de cookies:
          </p>
          <ul>
            <li><strong>Cookies técnicas:</strong> Necesarias para el correcto funcionamiento del sitio.</li>
            <li><strong>Cookies analíticas:</strong> Para recopilar información estadística sobre el uso del sitio (mediante herramientas como Google Analytics).</li>
          </ul>
          <p>
            El usuario puede configurar su navegador para rechazar cookies. Sin embargo, esto puede 
            afectar el funcionamiento de algunas características del sitio.
          </p>

          <h2>4. Google Analytics</h2>
          <p>
            Este blog puede utilizar Google Analytics, un servicio de análisis web proporcionado por 
            Google LLC. Google Analytics utiliza cookies para ayudar al blog a analizar cómo los 
            usuarios utilizan el sitio. La información generada por la cookie sobre el uso del sitio 
            (incluyendo la dirección IP del usuario) puede ser transmitida y almacenada por Google en 
            servidores en Estados Unidos. Google puede utilizar esta información para evaluar el uso del 
            sitio, recopilar informes sobre la actividad del sitio y proporcionar otros servicios 
            relacionados con la actividad del sitio y el uso de Internet.
          </p>
          <p>
            Para más información sobre las prácticas de privacidad de Google, visita: 
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
               className="text-amber-dark hover:underline"> policies.google.com/privacy</a>
          </p>

          <h2>5. Finalidad del tratamiento de datos</h2>
          <p>Los datos personales recopilados se utilizan para:</p>
          <ul>
            <li>Atender consultas enviadas a través del formulario de contacto.</li>
            <li>Enviar el boletín informativo a usuarios suscritos (solo si dieron su consentimiento).</li>
            <li>Mejorar el contenido y la experiencia del blog mediante análisis estadístico.</li>
          </ul>
          <p>
            Los datos <strong>no serán vendidos, cedidos ni compartidos con terceros</strong> con 
            fines comerciales, excepto cuando sea requerido por ley.
          </p>

          <h2>6. Derechos del usuario sobre sus datos</h2>
          <p>El usuario tiene derecho a:</p>
          <ul>
            <li><strong>Acceder</strong> a sus datos personales en poder del blog.</li>
            <li><strong>Rectificar</strong> datos incorrectos o desactualizados.</li>
            <li><strong>Cancelar</strong> su suscripción al boletín informativo en cualquier momento.</li>
            <li><strong>Oponerse</strong> al tratamiento de sus datos para determinados fines.</li>
            <li><strong>Eliminar</strong> sus datos del sistema, cuando sea técnicamente posible.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, el usuario puede enviar un correo a: 
            <strong> exitosplus0001@gmail.com</strong> indicando el derecho que desea ejercer y los 
            datos identificativos necesarios.
          </p>

          <h2>7. Seguridad de los datos</h2>
          <p>
            Este blog adopta las medidas técnicas y organizativas razonables para proteger los datos 
            personales contra el acceso no autorizado, la pérdida o el uso indebido. Sin embargo, 
            ningún sistema de transmisión de datos por Internet puede garantizar una seguridad absoluta.
          </p>

          <h2>8. Conservación de los datos</h2>
          <p>
            Los datos personales serán conservados únicamente durante el tiempo necesario para 
            cumplir con la finalidad para la cual fueron recopilados, o hasta que el usuario 
            solicite su eliminación.
          </p>

          <h2>9. Cambios en esta política</h2>
          <p>
            Esta Política de Privacidad puede ser actualizada periódicamente para reflejar cambios 
            en las prácticas del blog o en la legislación aplicable. La fecha de última actualización 
            se indica al inicio de este documento. Se recomienda revisar esta política regularmente.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con esta Política de Privacidad, puede contactar a 
            <strong> EMPRENDIMIENTO YERIKA FRANCO</strong> en:
          </p>
          <ul>
            <li>Correo: exitosplus0001@gmail.com</li>
            <li>Teléfono: +58 424 359-2764</li>
            <li>Dirección: Calle Pichincha Casa Nro 21, Centro de Cagua, Parroquia Cagua, Municipio Sucre, Estado Aragua, Venezuela</li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link to="/aviso-legal" className="text-amber-dark hover:underline text-sm font-medium">
            Ver Aviso Legal →
          </Link>
          <Link to="/contacto" className="text-amber-dark hover:underline text-sm font-medium">
            Contactar →
          </Link>
        </div>
      </div>
    </div>
  );
}