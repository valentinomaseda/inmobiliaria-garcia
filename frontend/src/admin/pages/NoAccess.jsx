import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';

export default function NoAccess() {
  return (
    <div className="min-h-[calc(100vh-5rem)] pt-20 flex items-center justify-center bg-jo-surface">
      <div className="max-w-xl text-center p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">No tienes acceso</h1>
        <p className="mb-6">No tienes permisos para entrar a esta página.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="px-4 py-2 border rounded">Volver al inicio</Link>
          {!authService.isAuthenticated() && (
            <Link to="/admin/login" className="px-4 py-2 bg-jo-pink text-white rounded">Iniciar sesión</Link>
          )}
        </div>
      </div>
    </div>
  );
}
