import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const API_URL = 'https://api.quickshell.co/v1/internal/frontend-assignment';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('kanban-grouping') || 'user'); // Default to 'user'
  const [sortOrder, setSortOrder] = useState('priority');
  const [display, setDisplay] = useState('ALL'); // Default display to "ALL"

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data); // Log the entire response for debugging
      setTickets(response.data.tickets);
      setUsers(response.data.users); // Assuming the API returns user data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('kanban-grouping', newGrouping);
  };

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Kanban Board</h1>
        <div className="controls">
          <label>Group by:</label>
          <select onChange={(e) => handleGroupingChange(e.target.value)} value={grouping}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          <label>Sort by:</label>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
          <label>Display:</label>
          <select onChange={(e) => handleDisplayChange(e.target.value)} value={display}>
            <option value="ALL">ALL</option>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
      </header>
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} display={display} />
    </div>
  );
}

export default App;
