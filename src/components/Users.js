// src/components/User.js
import React from 'react';

const users = [
  { id: 'User 1', name: 'Alice' },
  { id: 'User 2', name: 'Bob' },
  { id: 'User 3', name: 'Charlie' },
  { id: 'User 4', name: 'Diana' },
];

const User = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
