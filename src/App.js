// App.js

import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="wrapper">
      {/* Only show the welcome section if the route is NOT the dashboard */}
      {!isDashboard && (
        <div className="info-section">
          <h1>Youth Connect Platform</h1>
          <p>Welcome to the Youth Connect Platform, where young people can connect, collaborate, and create positive change in their communities.</p>
        </div>
      )}
      <div className={`content ${isDashboard ? 'dashboard-content' : 'auth-content'}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
