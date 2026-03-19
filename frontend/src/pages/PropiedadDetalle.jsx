import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { propiedadService } from '../services/propiedadService';
import { imagenService } from '../services/imagenService';

export default function PropiedadDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenActual, setImagenActual] = useState(0);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const [propiedadesRelacionadas, setPropiedadesRelacionadas] = useState([]);

  useEffect(() => {
    const loadPropiedad = async () => {
      try {
        const response = await propiedadService.getById(id);
        const prop = response.data;
        
        const simboloMoneda = prop.moneda === 'USD' ? 'USD ' : prop.moneda === 'ARS' ? 'ARS ' : prop.moneda === 'EUR' ? 'EUR ' : '';
        const precioFormateado = `${simboloMoneda}$${Number(prop.valor).toLocaleString('es-AR')}`;
        
        const propTransformada = {
          id: prop.idPropiedad,
          titulo: prop.nombre,
          ubicacion: `${prop.ciudad || ''}, ${prop.provincia || ''}`.trim().replace(/^,\s*/, ''),
          direccion: prop.direccion,
          precio: precioFormateado,
          tipo: prop.operacion === 'venta' ? 'Venta' : prop.operacion === 'alquiler' ? 'Alquiler' : 'Alquiler temporal',
          operacion: prop.operacion,
          ambientes: prop.cantAmbientes || 0,
          banos: prop.banos || 0,
          metros: `${prop.metCuad || 0} m²`,
          descripcion: prop.descripcion,
          imagenes: (prop.imagenes || []).map(img => imagenService.getImageUrl(img.url)),
          caracteristicas: (prop.caracteristicas || []).map(c => c.nombre)
        };
        
        setPropiedad(propTransformada);

        const relacionadasResponse = await propiedadService.getAll({ 
          operacion: prop.operacion,
          estado: 'disponible'
        });
        
        const relacionadas = (relacionadasResponse.data || [])
          .filter(p => p.idPropiedad !== prop.idPropiedad)
          .slice(0, 3)
          .map(p => {
            const imagenPrincipal = p.imagenes?.find(img => img.es_principal) || p.imagenes?.[0];
            const simMoneda = p.moneda === 'USD' ? 'USD ' : p.moneda === 'ARS' ? 'ARS ' : p.moneda === 'EUR' ? 'EUR ' : '';
            return {
              id: p.idPropiedad,
              titulo: p.nombre,
              ubicacion: `${p.ciudad || ''}, ${p.provincia || ''}`.trim().replace(/^,\s*/, ''),
              precio: `${simMoneda}$${Number(p.valor).toLocaleString('es-AR')}`,
              tipo: p.operacion === 'venta' ? 'Venta' : p.operacion === 'alquiler' ? 'Alquiler' : 'Alquiler temporal',
              imagen: imagenPrincipal ? imagenService.getImageUrl(imagenPrincipal.url) : '/placeholder.jpg'
            };
          });
        
        setPropiedadesRelacionadas(relacionadas);
      } catch (error) {
        console.error('Error al cargar propiedad:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPropiedad();
  }, [id]);

  const imagenes = propiedad?.imagenes || [];

  const abrirLightbox = (index) => {
    setImagenActual(index);
    setLightboxAbierto(true);
  };

  if (loading) {
    return (
      <div className="min-h-full bg-slateLight/30 pt-8 pb-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-300"></div>
      </div>
    );
  }

  if (!propiedad) return null;

  return (
    <div className="min-h-full bg-slateLight/10 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMNA IZQUIERDA: Galería Cinemática Congelada (60%) */}
          <div className="lg:col-span-7 relative" data-aos="fade-right">
            <div className="lg:sticky lg:top-24">
              
              {/* Visor Principal */}
              <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden mb-4 group shadow-xl">
                {/* Fondo desenfocado dinámico */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-50 scale-110 transition-all duration-500" 
                  style={{ backgroundImage: `url(${imagenes[imagenActual] || '/placeholder.jpg'})` }}
                ></div>
                
                <img 
                  src={imagenes[imagenActual] || '/placeholder.jpg'} 
                  alt={propiedad.titulo} 
                  className="absolute inset-0 w-full h-full object-contain z-10 cursor-pointer drop-shadow-2xl"
                  onClick={() => abrirLightbox(imagenActual)}
                />

                {/* Controles Internos */}
                {imagenes.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImagenActual((prev) => (prev + 1) % imagenes.length); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </>
                )}
                
                <button 
                  onClick={(e) => { e.stopPropagation(); abrirLightbox(imagenActual); }}
                  className="absolute bottom-4 right-4 z-20 bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border border-white/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  Ampliar
                </button>
              </div>

              {/* Tira de Miniaturas */}
              {imagenes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  {imagenes.map((img, index) => (
                    <button 
                      key={index}
                      onClick={() => setImagenActual(index)}
                      className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        imagenActual === index 
                          ? 'ring-2 ring-slate-200 opacity-100 shadow-md scale-95' 
                          : 'opacity-60 hover:opacity-100 hover:scale-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* COLUMNA DERECHA: Textos y CTA (40%) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 lg:py-4" data-aos="fade-left">
            
            {/* Breadcrumb & Categoría */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <button onClick={() => navigate(-1)} className="hover:text-slate-900 transition-colors font-medium">Volver</button>
              <span>/</span>
              <span className="font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded-md uppercase tracking-wider text-xs">{propiedad.tipo}</span>
            </div>

            {/* Encabezado y Precio */}
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {propiedad.titulo}
              </h1>
              <div className="flex items-center gap-2 text-slate-600 font-medium mb-6">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {propiedad.ubicacion}
              </div>
              <p className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                {propiedad.precio}
              </p>
            </div>

            {/* Panel de Contacto de Alto Contraste */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl shadow-slate-200/50 space-y-3">
              <a 
                href={`https://wa.me/549XXXXXXXXX?text=Hola, me interesa la propiedad ${propiedad.titulo} (${propiedad.id})`}
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Consultar por WhatsApp
              </a>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Enviar Mensaje
              </button>
            </div>

            {/* Atributos Físicos */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-slate-200">
              {propiedad.ambientes > 0 && (
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span className="font-bold text-slate-900">{propiedad.ambientes} <span className="text-slate-500 font-medium">Amb.</span></span>
                </div>
              )}
              {propiedad.banos > 0 && (
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  <span className="font-bold text-slate-900">{propiedad.banos} <span className="text-slate-500 font-medium">Baños</span></span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  <span className="font-bold text-slate-900">{propiedad.metros}</span>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Descripción</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line text-[15px]">
                {propiedad.descripcion}
              </p>
            </div>

            {/* Comodidades */}
            {propiedad.caracteristicas?.length > 0 && (
              <div className="pb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Comodidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {propiedad.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm font-medium">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Lightbox Minimalista */}
      {lightboxAbierto && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightboxAbierto(false)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onClick={() => setLightboxAbierto(false)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <img src={imagenes[imagenActual]} alt="Zoom" className="max-w-[95vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
          
          {imagenes.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 px-6 py-3 rounded-full backdrop-blur-md" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)} className="text-white hover:text-slate-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="text-white font-medium">{imagenActual + 1} / {imagenes.length}</span>
              <button onClick={() => setImagenActual((prev) => (prev + 1) % imagenes.length)} className="text-white hover:text-slate-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}