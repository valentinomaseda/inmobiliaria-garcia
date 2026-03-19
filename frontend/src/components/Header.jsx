import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInicioClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en home, navegar primero
      navigate('/');
      // Esperar un momento para que cargue y luego hacer scroll al tope
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Si estamos en home, solo hacer scroll al tope
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handlePropiedadesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en home, navegar primero
      navigate('/');
      // Esperar un momento para que cargue y luego hacer scroll
      setTimeout(() => {
        document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si estamos en home, solo hacer scroll
      document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={(e) => { setOpen(false); handleInicioClick(e); }} className="flex items-center transform transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.png"
                alt="Inmobiliaria García"
                className="h-13 sm:h-[70px] w-auto object-contain "
              />
            
            <div className="hidden md:flex flex-col">
              <span className="text-xs text-slate-500">Inmobiliaria</span>
              <span className="text-sm font-semibold text-slateDark">García</span>
            </div>
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slateDark">
            <Link to="/" onClick={handleInicioClick} className="hover:text-primary transition-colors">Inicio</Link>
            <a href="#propiedades" onClick={handlePropiedadesClick} className="hover:text-primary transition-colors">Propiedades</a>
            <a href="#contacto" onClick={handleContactoClick} className="hover:text-primary transition-colors">Tasaciones</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              onClick={(e) => { setOpen(false); handleContactoClick(e); }}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full shadow-primary/40 hover:brightness-95 transition-all"
            >
              Contactar
            </a>

            {/* Mobile menu button */}
            <button
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg hover:bg-white/40 transition"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slateDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slateDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${open ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-[max-height] duration-300`}>
        <div className="px-4 pb-6 pt-4 bg-white/70 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col gap-3">
            <a href="#propiedades" onClick={(e) => { setOpen(false); handlePropiedadesClick(e); }} className="py-2 px-3 rounded-md text-slateDark hover:bg-slate-50">Propiedades</a>
            <a href="#contacto" onClick={(e) => { setOpen(false); handleContactoClick(e); }} className="py-2 px-3 rounded-md text-slateDark hover:bg-slate-50">Tasaciones</a>
            <Link to="/" onClick={(e) => { setOpen(false); handleInicioClick(e); }} className="py-2 px-3 rounded-md text-slateDark hover:bg-slate-50">Inicio</Link>
          </nav>
          <div className="mt-4">
            <a href="#contacto" onClick={(e) => { setOpen(false); handleContactoClick(e); }} className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-full shadow-primary/40">Contactar</a>
          </div>
        </div>
      </div>
    </header>
  );
}
