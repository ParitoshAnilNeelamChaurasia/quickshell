// Priority.js
import React from 'react';
import './Priority.css';

const Priority = ({ tickets }) => {
  // Define priorities
  const priorities = {
    'No priority': [],
    'Urgent': [],
    'High': [],
    'Medium': [],
    'Low': [],
  };

  // Categorize tickets into their respective priority groups
  tickets.forEach(ticket => {
    if (priorities[ticket.priority]) {
      priorities[ticket.priority].push(ticket);
    }
  });

  return (
    <div className="priority-board">
      {Object.keys(priorities).map(priority => (
        <div key={priority} className="priority-column">
          <h3>{`${priority}: ${priorities[priority].length}`}</h3>
          <div className="priority-tasks">
            {priorities[priority].map(ticket => (
              <div key={ticket.id} className="priority-task">
                <p>{ticket.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Priority;
