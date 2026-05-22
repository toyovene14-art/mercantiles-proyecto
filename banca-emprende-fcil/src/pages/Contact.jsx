import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-white">
      <SEOHead canonical="/contacto" />
      {/* Header */}
      <div className="bg-navy pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">Contacto</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Contáctanos</h1>
          <p className="text-white/70 text-lg">Respondemos en un plazo de 24 a 48 horas hábiles</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-navy mb-5">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-ghost-slate rounded-xl">
                  <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Correo electrónico</p>
                    <a href="mailto:exitosplus0001@gmail.com" className="text-sm text-gray-600 hover:text-amber transition-colors break-all">
                      exitosplus0001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ghost-slate rounded-xl">
                  <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Teléfono / WhatsApp</p>
                    <a href="https://wa.me/584243592764" className="text-sm text-gray-600 hover:text-amber transition-colors">
                      +58 424 359-2764
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ghost-slate rounded-xl">
                  <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Ubicación</p>
                    <p className="text-sm text-gray-600">Cagua, Estado Aragua, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ghost-slate rounded-xl">
                  <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">Tiempo de respuesta</p>
                    <p className="text-sm text-gray-600">24 a 48 horas hábiles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber/5 border border-amber/20 rounded-xl p-5">
              <p className="text-xs text-navy/70 leading-relaxed">
                <strong className="text-navy">EMPRENDIMIENTO YERIKA FRANCO</strong><br/>
                RIF Empresarial: J-508231880<br/>
                Calle Pichincha Casa Nro 21, Centro de Cagua,<br/>
                Parroquia Cagua, Municipio Sucre,<br/>
                Estado Aragua, Venezuela
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 mb-6">Gracias por contactarnos. Responderemos a tu correo en un plazo de 24 a 48 horas hábiles.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-dark font-medium hover:underline text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Correo electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Asunto *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿Sobre qué quieres consultarnos?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Escribe tu consulta aquí. Somos un blog educativo; para consultas directas con el banco, comunícate con Mercantil Banco."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all resize-none"
                  />
                </div>

                <div className="bg-amber/5 border border-amber/15 rounded-lg p-3">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Al enviar este formulario, aceptas nuestra{' '}
                    <Link to="/privacidad" className="text-amber-dark hover:underline">Política de Privacidad</Link>.
                    Este es un blog educativo; no podemos brindarte asesoría bancaria profesional.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold py-4 px-6 rounded-xl transition-all hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}