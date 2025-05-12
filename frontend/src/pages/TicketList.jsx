import { useEffect, useState } from 'react';
import { getTickets } from '../api/api';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTickets()
      .then(data => setTickets(data))
      .catch(err => setError(err.response?.data?.message || 'Error al cargar tickets'));
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Mis Tickets</h2>
      {tickets.length === 0 ? (
        <p>No hay tickets.</p>
      ) : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              {ticket.title} - Estado: {ticket.status?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
