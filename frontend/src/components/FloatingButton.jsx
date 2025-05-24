// src/components/FloatingButton.jsx

// Importamos los estilos específicos para este componente
import './FloatingButton.css';

import React from 'react';

/**
 * Botón flotante de acción rápida, ideal para "Nuevo Ticket" u otra acción principal.
 * @param {Object} props
 * @param {Function} props.onClick - Función que se ejecuta al pulsar el botón.
 */
export default function FloatingButton({ onClick }) {
  return (
    <button
      className="floating-btn"
      onClick={onClick}
      aria-label="Crear nuevo ticket"
    >
      {/* Símbolo "+" para indicar acción de agregar */}
      +
    </button>
  );
}
