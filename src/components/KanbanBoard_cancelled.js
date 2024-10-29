import React, { useState } from 'react';
import './KanbanBoard.css';

// KanbanColumn component defined within the same file
const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id} className="kanban-ticket">
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority || 'No priority'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const initialTasks = [
  { id: 'CAM-1', title: 'Add Multi-Language Support', description: 'Enable multi-language support within the application', user: 'Alice', priority: 'High' },
  { id: 'CAM-2', title: 'Create Onboarding Tutorial for New Users', description: 'Guide users through the application', user: 'Bob', priority: 'Medium' },
  { id: 'CAM-3', title: 'Optimize Database Queries for Performance', description: 'Improve query performance', user: 'David', priority: 'High' },
  { id: 'CAM-4', title: 'Conduct Security Vulnerability Assessment', description: 'Evaluate security measures', user: 'Charlie', priority: 'Low' },
  { id: 'CAM-5', title: 'Upgrade Server Infrastructure', description: 'Enhance server capabilities', user: 'Alice', priority: 'Medium' },
  { id: 'CAM-6', title: 'Integrate Third-Party Payment Gateway', description: 'Add payment options', user: 'Bob', priority: 'High' },
  { id: 'CAM-7', title: 'Implement Role-Based Access Control (RBAC)', description: 'Set user permissions', user: 'David', priority: 'High' },
  { id: 'CAM-8', title: 'Enhance Search Functionality', description: 'Improve search algorithms', user: 'Charlie', priority: 'Medium' },
];

const KanbanBoardCancelled = ({ tickets = [], grouping }) => {
  // Grouping logic
  const groupTicketsByUser = () => {
    const userTasks = {};

    // Collect tasks per user
    tickets.forEach(ticket => {
      const user = ticket.user || 'Unassigned';
      if (!userTasks[user]) {
        userTasks[user] = [];
      }
      userTasks[user].push(ticket);
    });

    return userTasks;
  };

  const groupedTickets = grouping === 'user' ? groupTicketsByUser() : {};

  return (
    <div className="kanban-board">
      {grouping === 'user' ? (
        Object.keys(groupedTickets).map((user) => {
          const tasks = groupedTickets[user];
          return (
            <KanbanColumn 
              key={user} 
              title={`${user} ${tasks.length} -> Tasks assigned to ${user}`} 
              tickets={tasks} 
            />
          );
        })
      ) : (
        <div>No tasks available for the selected grouping.</div>
      )}
    </div>
  );
};

export default KanbanBoardCancelled;
