// RecentActivityFeed.js

import React from "react";

const RecentActivityFeed = () => {
  return (
    <div className="profile-container">
      <div className="recent-activity-feed">
        <h2 className="feed-title">Recent Activity Feed</h2>
        <ul className="feed-list">
          <li className="feed-item">
            <span className="activity-type created">Created a new graph:</span>{" "}
            Graph Title 1
          </li>
          <li className="feed-item">
            <span className="activity-type shared">Shared a graph:</span> Graph
            Title 2
          </li>
          <li className="feed-item">
            <span className="activity-type uploaded">Uploaded a paper:</span>{" "}
            Paper Title 1
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentActivityFeed;
