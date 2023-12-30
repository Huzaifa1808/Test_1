// GraphDetailsPage.js

import React from "react";

const GraphDetailsPage = () => {
  return (
    <div className="graph-details-page">
      <h2 className="page-title">Graph Details</h2>
      <div className="graph-details">
        <h3 className="graph-title">Graph Title</h3>
        <p className="graph-description">
          Graph Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <p className="graph-date">Date Created: January 10, 2023</p>
        <button className="view-graph-button">View Graph</button>
      </div>
      <div className="papers-list">
        <h3>Papers Shown in the Graph</h3>
        <ul>
          <li>Paper 1</li>
          <li>Paper 2</li>
          {/* Add more papers as needed */}
        </ul>
      </div>
      <div className="graph-actions">
        <button className="edit-button">Edit</button>
        <button className="share-button">Share</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default GraphDetailsPage;
