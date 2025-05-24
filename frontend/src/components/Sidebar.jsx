// src/components/Sidebar.jsx

// Importamos los estilos específicos para el Sidebar
import './Sidebar.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, apiClient } from '../api/api'; // apiClient incluye el Bearer

/**
 * Sidebar que muestra:
 * - Marca de la app
 * - Nombre real del usuario
 * - Botón de Cerrar sesión
 */
export default function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Estado para guardar los datos del usuario

  useEffect(() => {
    // Al montar, hacemos fetch de /user
    const client = apiClient()
    console.log('apiClient headers:', client.defaults.headers);
      client
      .get('/user')
      .then(res => setUser(res.data))
      .catch(() => {
        // Si da error (token inválido), enviamos al login
        logout();
        navigate('/login', { replace: true });
      });
  }, [navigate]);

  // Mientras cargamos, podemos devolver null o un spinner sencillo
  if (!user) {
    return (
      <aside className="sidebar">
        <p className="sidebar__loading">Cargando…</p>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      {/* Marca / logo de la aplicación */}
      <div className="sidebar__brand">
        <h2>Gestor de Tickets</h2>
      </div>

      {/* Saludo dinámico con nombre real */}
      <div className="sidebar__user">
        Hola, <strong>{user.name}</strong>
      </div>

      {/* Botón de cerrar sesión */}
      <button
        className="sidebar__logout"
        onClick={() => {
          logout();                       // Eliminar token
          navigate('/login', { replace: true }); // Redirigir al login
        }}
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
