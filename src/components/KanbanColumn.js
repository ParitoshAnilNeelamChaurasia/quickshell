import React from 'react';
import TicketCard from './TicketCard';

function KanbanColumn({ title, tickets }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="tickets">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;