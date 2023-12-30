// Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        {/* Your logo or brand image goes here */}
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Create New Graph</a>
          </li>
          <li>
            <a href="#">Graph Details</a>
          </li>
          <li>
            <a href="#">Account Settings</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
