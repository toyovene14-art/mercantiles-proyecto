import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6">
          <Mail className="w-7 h-7 text-amber" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Aprende sobre Mercantil Empresas
        </h2>
        <p className="text-white/70 mb-8 text-base">
          Recibe nuevos artículos educativos sobre Mercantil Empresas directamente en tu correo. 
          Sin spam. Solo contenido útil para tu negocio.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <p className="text-white font-medium">¡Gracias! Te avisaremos cuando publiquemos nuevos artículos.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-amber focus:bg-white/15 transition-all"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Tu correo"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-amber focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber hover:bg-amber/90 text-white font-semibold rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}