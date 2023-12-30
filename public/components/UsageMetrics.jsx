// UsageMetrics.js

import React from "react";

const UsageMetrics = () => {
  return (
    <div className="profile-container">
      <div className="usage-metrics">
        <h2>Usage Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-container">
            <p className="metric-title">Graphs Created</p>
            <p className="metric-value">25</p>
          </div>
          <div className="metric-container">
            <p className="metric-title">Graphs Shared</p>
            <p className="metric-value">15</p>
          </div>
          <div className="metric-container">
            <p className="metric-title">Papers Collected</p>
            <p className="metric-value">50</p>
          </div>
          <div className="metric-container">
            <p className="metric-title">Queries Made</p>
            <p className="metric-value">500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageMetrics;
