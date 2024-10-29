import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

// Initial tasks setup
const initialTasks = {
  todo: [
    { id: 'CAM-5', title: 'Add Multi-Language Support', description: 'Enable multi-language support within the application', priority: 'No priority', user: 'User 1' },
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', priority: 'Urgent', user: 'User 2' },
    { id: 'CAM-4', title: 'Add Multi-Language Support', priority: 'High', user: 'User 1' },
    { id: 'CAM-2', title: 'Implement Email Notification System', priority: 'Medium', user: 'User 3' },
    { id: 'CAM-1', title: 'Update User Profile Page UI', priority: 'Low', user: 'User 4' },
    { id: 'CAM-12', title: 'Conduct User Interviews', priority: 'High', user: 'User 1' },
    { id: 'CAM-13', title: 'Design Database Schema', priority: 'Urgent', user: 'User 3' },
    { id: 'CAM-14', title: 'Review API Endpoints', priority: 'Medium', user: 'User 2' },
    { id: 'CAM-15', title: 'Optimize Images for Web', priority: 'Low', user: 'User 4' },
    { id: 'CAM-16', title: 'Update Documentation', priority: 'No priority', user: 'User 2' },
  ],
  inProgress: [
    { id: 'CAM-3', title: 'Develop API for User Management', priority: 'High', user: 'User 1' },
  ],
  done: [
    { id: 'CAM-6', title: 'Set Up Database', priority: 'Medium', user: 'User 2' },
    { id: 'CAM-7', title: 'Launch Beta Version', priority: 'Urgent', user: 'User 3' },
  ],
  canceled: [
    { id: 'CAM-9', title: 'Remove Deprecated Features', priority: 'Low', user: 'User 4' },
  ],
};

const userMapping = {
  'User 1': 'Paritosh',
  'User 2': 'Rishu',
  'User 3': 'Rishab',
  'User 4': 'Neelam',
};

const KanbanBoard = ({ tickets = [], grouping, display }) => {
  // Combine all tasks from different statuses
  const combinedTickets = [
    ...initialTasks.todo,
    ...initialTasks.inProgress,
    ...initialTasks.done,
    ...initialTasks.canceled,
  ];

  // Filter tickets based on display status
  const filteredTickets = display === 'ALL' 
    ? combinedTickets 
    : initialTasks[display.toLowerCase()] || []; 

  // Group tickets by user if grouping is set to 'user'
  const groupedTickets = grouping === 'user' 
    ? filteredTickets.reduce((acc, ticket) => {
        const user = ticket.user || 'Unassigned';
        if (!acc[user]) acc[user] = [];
        acc[user].push(ticket);
        return acc;
      }, {})
    : {};

  // Group tickets by priority if grouping is set to 'priority'
  const priorityGroupedTickets = grouping === 'priority' 
    ? filteredTickets.reduce((acc, ticket) => {
        const priority = ticket.priority || 'No priority';
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {})
    : {};

  return (
    <div className="kanban-board">
      {grouping === 'user' ? (
        <div className="user-columns">
          {Object.keys(groupedTickets).map(user => (
            <div key={user} className="user-column">
              <h3>{userMapping[user]} ({groupedTickets[user].length})</h3>
              <ul>
                {groupedTickets[user].map(ticket => (
                  <li key={ticket.id}>{ticket.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : grouping === 'priority' ? (
        <div className="priority-columns">
          {Object.keys(priorityGroupedTickets).map(priority => (
            <div key={priority} className={priority === 'No priority' ? 'no-priority-column' : 'priority-column'}>
              <h3>{priority} ({priorityGroupedTickets[priority].length})</h3>
              <div className="priority-container">
                {priorityGroupedTickets[priority].map(ticket => (
                  <div key={ticket.id} className="priority-item">
                    <p>{ticket.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        Object.keys(initialTasks).map(status => {
          if (status === display.toLowerCase() || display === 'ALL') {
            return (
              <KanbanColumn 
                key={status}
                title={status.charAt(0).toUpperCase() + status.slice(1)}
                tickets={initialTasks[status]}
              />
            );
          }
          return null;
        })
      )}
    </div>
  );
};

export default KanbanBoard;
