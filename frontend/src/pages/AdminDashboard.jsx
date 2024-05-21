import React from "react";
import "./Styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        <div className="sidebar">
          <ul>
            <li>
              <a href="/admin">User Management</a>
            </li>
            <li>
              <a href="/admin">Analytics</a>
            </li>
            <li>
              <a href="/admin">Settings</a>
            </li>
            <li>
                <a href="/">Logout</a>
            </li>
          </ul>
        </div>
        <div className="dashboard-content">
          <h2>Welcome to the Admin Dashboard</h2>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
