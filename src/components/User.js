// User.js
import React from 'react';
import './User.css';

const users = [
  { name: 'Paritosh', assignedTasks: 4, tasks: [
    { id: 'CAM-5', title: 'Add Multi-Language Support' },
    { id: 'CAM-4', title: 'Add Multi-Language Support' },
    { id: 'CAM-12', title: 'Conduct User Interviews' },
    { id: 'CAM-3', title: 'Develop API for User Management' }
  ] },
  { name: 'Rishu', assignedTasks: 3, tasks: [
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users' },
    { id: 'CAM-14', title: 'Review API Endpoints' },
    { id: 'CAM-16', title: 'Update Documentation' }
  ] },
  { name: 'Rishab', assignedTasks: 2, tasks: [
    { id: 'CAM-13', title: 'Design Database Schema' },
    { id: 'CAM-7', title: 'Launch Beta Version' }
  ] },
  { name: 'Neelam', assignedTasks: 2, tasks: [
    { id: 'CAM-1', title: 'Update User Profile Page UI' },
    { id: 'CAM-15', title: 'Optimize Images for Web' }
  ] },
];

const User = () => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.name} className="user-box">
          <h3>{user.name} ({user.assignedTasks} tasks)</h3>
          <div className="grey-box">
            <ul>
              {user.tasks.map(task => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
