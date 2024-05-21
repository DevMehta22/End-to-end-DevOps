import React from "react";

import "./Styles/CustomerDashboard.css";

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard">
      <div className="customer-container">
        <div className="sidebar">
          <ul>
            <li>
              <a href="/customer">My Orders</a>
            </li>
            <li>
              <a href="/customer">Profile</a>
            </li>
            <li>
              <a href="/customer">Settings</a>
            </li>
            <li>
                <a href="/">Logout</a>
            </li>
          </ul>
        </div>
        <div className="customer-content">
          <h2>Welcome to Your Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
