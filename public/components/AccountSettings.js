// AccountSettings.js

import React from "react";

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <h2 className="page-title">Account Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="update-profile">Update User Profile Details</label>
          <input
            type="text"
            id="update-profile"
            name="update-profile"
            placeholder="Name"
          />
          <input
            type="email"
            id="update-email"
            name="update-email"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="change-password">Change Password</label>
          <input
            type="password"
            id="change-password"
            name="change-password"
            placeholder="New Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="manage-subscription">Manage Subscription Plan</label>
          {/* Add subscription plan options or relevant UI elements */}
        </div>

        <div className="form-group">
          <label htmlFor="link-third-party">Link Third-Party Accounts</label>
          {/* Add options to link accounts, e.g., Google */}
          <button className="link-button">Link Google Account</button>
        </div>

        <div className="form-group">
          <label htmlFor="view-usage-stats">View Usage Statistics</label>
          {/* Display usage statistics or relevant information */}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;
