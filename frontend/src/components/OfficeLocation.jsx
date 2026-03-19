import React from 'react';

export default function OfficeLocation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-jo-dark mb-2">Visítanos en nuestra oficina</h2>
            <p className="text-lg text-jo-textMuted mb-6">Encontranos en Arrecifes, Provincia de Buenos Aires. Te esperamos en nuestro horario de atención.</p>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg text-jo-dark mb-2">Dirección</h3>
              <p className="text-jo-textMuted">Av. Roque Sáenz Peña 717, B2740 Arrecifes, Provincia de Buenos Aires</p>

              <div className="mt-4">
                <h4 className="font-semibold text-sm text-jo-dark">Teléfono</h4>
                <p className="text-jo-textMuted">+54 249 123-4567</p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-sm text-jo-dark">Horario de atención</h4>
                <p className="text-jo-textMuted">Lun a Vie: 9:00 - 18:00 · Sáb: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden shadow">
              <iframe
                title="Mapa - Arrecifes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13221.42793757138!2d-60.10691014999999!3d-34.060362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b99d616de03d87%3A0x89b139cc1e4fa91d!2sINMOBILIARIA%20GARCIA!5e0!3m2!1ses-419!2sar!4v1773880755004!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
