// SavedGraphList.js

import React from "react";

const SavedGraphList = () => {
  return (
    <div className="profile-container">
      <div className="saved-graph-list">
        <h2 className="list-title">Saved Graphs</h2>
        <ul className="graph-list">
          <li className="graph-item">
            <div className="graph-thumbnail"></div>
            <div className="graph-details">
              <h3 className="graph-title">Graph Title 1</h3>
              <p className="graph-date">Date Created: January 1, 2023</p>
            </div>
          </li>
          <li className="graph-item">
            <div className="graph-thumbnail"></div>
            <div className="graph-details">
              <h3 className="graph-title">Graph Title 2</h3>
              <p className="graph-date">Date Created: January 2, 2023</p>
            </div>
          </li>
          {/* Add more graph items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default SavedGraphList;
