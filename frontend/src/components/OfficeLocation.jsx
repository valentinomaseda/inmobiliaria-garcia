import React, { useState } from 'react';
import { useAlert } from '../contexts/AlertContext';

export default function OfficeLocation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { success: alertSuccess, error: alertError } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alertError('Por favor completa los campos requeridos.');
      return;
    }

    setLoading(true);

    try {
      // Intentar enviar al endpoint de contacto. Si no existe, el backend puede ser agregado posteriormente.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (res.ok) {
        alertSuccess('Mensaje enviado. Te contactaremos pronto.');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => ({}));
        alertError(data.message || 'Error al enviar el mensaje. Intenta más tarde.');
      }
    } catch (err) {
      alertError('Error de red. Verifica tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-jo-dark mb-2">Contacto</h2>
          <p className="text-lg text-jo-textMuted max-w-2xl mx-auto">Si no contamos con una sede física, podés contactarnos por este formulario.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-jo-darkText mb-2">Nombre*</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-jo-surface border border-jo-border rounded-lg outline-none focus:ring-2 focus:ring-jo-pink"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-jo-darkText mb-2">Email*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-jo-surface border border-jo-border rounded-lg outline-none focus:ring-2 focus:ring-jo-pink"
                placeholder="tu@ejemplo.com"
                required
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-jo-darkText mb-2">Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-jo-surface border border-jo-border rounded-lg outline-none focus:ring-2 focus:ring-jo-pink"
                placeholder="Opcional"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-jo-darkText mb-2">Mensaje*</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-jo-surface border border-jo-border rounded-lg outline-none focus:ring-2 focus:ring-jo-pink"
                placeholder="Contanos en qué te podemos ayudar..."
                required
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-jo-pink hover:bg-jo-pinkHover text-jo-dark font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
