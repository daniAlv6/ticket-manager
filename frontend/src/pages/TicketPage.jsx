import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketDetail from '../components/TicketDetail';
import { apiClient } from '../api/api';

export default function TicketPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient()
      .get(`/tickets/${id}`)
      .then(res => setTicket(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!ticket) {
    return (
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Header title="Cargando ticket..." />
        </main>
      </div>
    );
  }

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Header title={`Ticket #${ticket.id}`} />
        <TicketDetail ticket={ticket} />
      </main>
    </div>
  );
}