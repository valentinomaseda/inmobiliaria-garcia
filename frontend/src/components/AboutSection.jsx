import React from 'react';

export default function AboutSection() {
  const features = [
    { icon: '✓', text: 'Asesoramiento legal y técnico' },
    { icon: '✓', text: 'Tasaciones reales de mercado' },
    { icon: '✓', text: 'Acompañamiento en todo el proceso' }
  ];

  return (
    <section className="bg-jo-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-jo-pink uppercase tracking-wider bg-jo-pink/10 px-4 py-2 rounded-full">Trayectoria y Confianza</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-jo-dark leading-tight mb-4">Conocemos Arrecifes porque somos de acá.</h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
              <p>
                Si estás buscando comprar, vender o alquilar, sabés que no es solo una transacción: <strong className="text-jo-dark">es tu proyecto de vida.</strong>
              </p>
              <p>
                En <strong className="text-jo-dark font-display">Inmobiliaria García</strong> ofrecemos un servicio profesional, transparente y comprometido con cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-jo-pink/10 rounded-full flex items-center justify-center text-jo-pink">{f.icon}</div>
                  <p className="font-medium text-jo-dark">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl"></div>
            <img src="/foto-about.jpg" alt="Inmobiliaria García - Equipo" className="relative w-full h-[420px] object-cover rounded-2xl shadow-premium" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium p-6">
              <div className="text-center">
                <p className="text-4xl font-display font-bold text-primary">+10</p>
                <p className="text-sm font-medium text-jo-textMuted mt-1">Años de<br/>experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
