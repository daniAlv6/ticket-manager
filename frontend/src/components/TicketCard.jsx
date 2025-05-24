// src/components/TicketCard.jsx

// Importamos los estilos específicos para TicketCard
import './TicketCard.css';

import React from 'react';

/**
 * Componente que renderiza una tarjeta de ticket.
 * Recibe ticket y función onClick como props.
 */
export default function TicketCard({ ticket, onClick }) {
  // Mapeo de estados a clases de estilo
  const statusClasses = {
    Abierto: 'ticket-card--open',
    'En progreso': 'ticket-card--progress',
    Resuelto: 'ticket-card--resolved'
  };

  return (
    <div
      className={`ticket-card ${statusClasses[ticket.status?.name] || ''}`}
      onClick={onClick}
    >
      {/* Título del ticket */}
      <h3>{ticket.title}</h3>

      {/* Mostrar estado */}
      <span className="ticket-card__status">
        {ticket.status?.name}
      </span>

      {/* Fecha de creación formateada */}
      <small>
        {new Date(ticket.created_at).toLocaleDateString()}
      </small>
    </div>
  );
}
