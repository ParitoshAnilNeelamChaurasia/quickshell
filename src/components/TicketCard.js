import React from 'react';
import './TicketCard.css';

const PRIORITY_LABELS = ["No priority", "Low", "Medium", "High", "Urgent"];

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p className="ticket-id">{ticket.id}</p>
      <p>{ticket.description}</p>
      <div className="ticket-info">
        <span className="tag">{ticket.tag}</span>
        <span className="priority">{PRIORITY_LABELS[ticket.priority]}</span>
        <span className="status">{ticket.status}</span>
      </div>
    </div>
  );
}

export default TicketCard;
