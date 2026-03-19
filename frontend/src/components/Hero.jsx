import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Contenido centrado dentro de un cristal esmerilado */}
      <div className="relative z-10 max-w-4xl mx-auto py-12 sm:py-16 md:py-20 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 text-center text-white space-y-6 max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Encontrá tu hogar en <span className="text-primary">Arrecifes</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Propiedades seleccionadas por agentes locales, con asesoramiento profesional y acompañamiento personalizado en cada paso.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#propiedades"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Ver propiedades
            </a>

            <a
              href="https://wa.me/549XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Flecha indicadora para scroll */}
      <a
        href="#propiedades"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/90 hover:text-white transition-colors z-10"
        aria-label="Scroll a propiedades"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
