// src/components/Header.jsx

// Importamos los estilos específicos para el Header
import './Header.css';

import React from 'react';

/**
 * Componente Header que recibe un título y lo muestra
 * junto con estilos definidos en Header.css.
 */
export default function Header({ title }) {
  return (
    <header className="header-page">
      {/* Mostramos el título pasado por props */}
      <h1>{title}</h1>
    </header>
  );
}
