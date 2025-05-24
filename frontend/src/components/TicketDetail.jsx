// Importamos los estilos para TicketDetail
import './TicketDetail.css';

import React from 'react';

/**
 * TicketDetail muestra la información completa de un ticket:
 *  - Título
 *  - Estado con estilo
 *  - Descripción
 *  - Fecha de creación
 */
export default function TicketDetail({ ticket }) {
  return (
    <div className="ticket-detail">
      {/* Título grande */}
      <h2 className="ticket-detail__title">{ticket.title}</h2>

      {/* Estado con clase según su valor */}
      <span className={`ticket-detail__status status--${ticket.status?.name.toLowerCase().replace(' ', '-')}`}>
        {ticket.status?.name}
      </span>

      {/* Descripción del ticket */}
      <p className="ticket-detail__description">{ticket.description}</p>

      {/* Fecha de creación formateada */}
      <small className="ticket-detail__date">
        Creado el {new Date(ticket.created_at).toLocaleString()}
      </small>
    </div>
  );
}
