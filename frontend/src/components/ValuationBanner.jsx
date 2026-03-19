import React, { useState } from "react";

export default function ValuationBanner() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleQuickRequest = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Solicitud de valoración - Inmobiliaria García",
    );
    const body = encodeURIComponent(
      `Nombre: ${nombre}%0D%0ATeléfono: ${telefono}%0D%0ADirección: ${direccion}%0D%0A%0D%0APor favor, contáctenme para una valoración.`,
    );
    window.location.href = `mailto:tasaciones@inmobiliariagarcia.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/8 via-white/80 to-slateLight/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Subtle patterned overlay to avoid solid white */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="textura"
              className="w-full h-full object-cover"
            />
            {/* Orange overlay for warmth */}
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </div>
          {/* Left: Benefits */}
          <div data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 mb-5">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 10h4l3 8 4-16 3 8h4"
                />
              </svg>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slateDark mb-3">
              Valorá tu propiedad en minutos
            </h3>

            <p className="text-slate-600 mb-6">
              Completá unos datos y recibí una estimación orientativa o
              coordinamos una visita sin compromiso.
            </p>

            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">✓</span>
                <span>Estimaciones realistas basadas en el mercado local.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">✓</span>
                <span>Atención rápida y personalizada.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">✓</span>
                <span>Sin costos ocultos ni presiones.</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="tel:+542491234567"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full shadow-primary/40 hover:brightness-95 transition"
              >
                Llamanos
              </a>
          <a
            href="https://wa.me/549XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/40 text-white/9 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            data-aos="fade-left"
            className="bg-white/80 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg"
          >
            <form
              onSubmit={handleQuickRequest}
              className="grid grid-cols-1 gap-4"
            >
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono"
                className="w-full px-4 py-3 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Dirección de la propiedad"
                className="w-full px-4 py-3 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="w-full px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 shadow-primary/40 transition">
                Solicitar valoración
              </button>
              <p className="text-xs text-slate-500 text-center mt-1">
                O también podés escribirnos por WhatsApp y coordinar una visita.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
