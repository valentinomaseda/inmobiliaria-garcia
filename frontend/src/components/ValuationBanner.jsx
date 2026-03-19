import React, { useState } from 'react';

export default function ValuationBanner() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleQuickRequest = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Solicitud de valoración - Inmobiliaria García');
    const body = encodeURIComponent(
      `Nombre: ${nombre}%0D%0ATeléfono: ${telefono}%0D%0ADirección: ${direccion}%0D%0A%0D%0APor favor, contáctenme para una valoración.`
    );
    window.location.href = `mailto:tasaciones@inmobiliariagarcia.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20 mb-4">
              <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h4l3 8 4-16 3 8h4" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-textDark mb-3">Valorá tu propiedad en minutos</h3>

            <p className="text-gray-600 mb-6">Completá algunos datos y te enviaremos una aproximación de precio o coordinamos una visita sin compromiso.</p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">•</span>
                <span>Estimaciones realistas basadas en el mercado local.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">•</span>
                <span>Atención rápida y personalizada.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">•</span>
                <span>Sin costos ocultos ni presiones.</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a href="tel:+542491234567" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-md shadow hover:bg-primary/90">Llamanos</a>
              <a href="https://wa.me/5492491234567" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md">WhatsApp</a>
            </div>
          </div>

          <div data-aos="fade-left" className="bg-white p-6 rounded-2xl shadow">
            <form onSubmit={handleQuickRequest} className="grid grid-cols-1 gap-4">
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/30" />
              <input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/30" />
              <input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección de la propiedad" className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/30" />
              <button className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90">Solicitar valoración</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
