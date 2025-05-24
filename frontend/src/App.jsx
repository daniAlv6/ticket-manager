// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Páginas públicas
import Login       from './pages/Login';
import Register    from './pages/Register';

// Páginas protegidas
import TicketsPage from './pages/TicketsPage';
import TicketPage  from './pages/TicketPage';

// Componente que envuelve rutas protegidas y comprueba autenticación
import PrivateRoute from './components/PrivateRoute';

/**
 * Componente principal de la aplicación.
 * Define las rutas públicas y protegidas,
 * y gestiona redirecciones a /tickets una vez logueado.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** RUTAS PÚBLICAS **/}
        {/* Ruta para iniciar sesión */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para registrarse */}
        <Route path="/register" element={<Register />} />

        {/** RUTAS PROTEGIDAS **/}
        {/* Listado de tickets (solo accesible tras login) */}
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketsPage />
            </PrivateRoute>
          }
        />
        {/* Detalle de un ticket específico */}
        <Route
          path="/tickets/:id"
          element={
            <PrivateRoute>
              <TicketPage />
            </PrivateRoute>
          }
        />

        {/** REDIRECCIONES **/}
        {/* Al acceder a la raíz, redirigir a /tickets */}
        <Route path="/" element={<Navigate to="/tickets" replace />} />
        {/* Cualquier otra ruta inválida redirige a /tickets */}
        <Route path="*" element={<Navigate to="/tickets" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
