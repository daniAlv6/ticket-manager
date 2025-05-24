import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketCard from '../components/TicketCard';
import FloatingButton from '../components/FloatingButton';
import { apiClient } from '../api/api';

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient()
      .get('/tickets')
      .then(res => setTickets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Header title="Mis Tickets" />
        <div className="tickets-grid">
          {tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() => navigate(`/tickets/${ticket.id}`)}
            />
          ))}
        </div>
        <FloatingButton onClick={() => navigate('/tickets/new')} />
      </main>
    </div>
  );
}