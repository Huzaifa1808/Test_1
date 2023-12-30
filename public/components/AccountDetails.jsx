// AccountDetails.js

import React from "react";

const AccountDetails = () => {
  return (
    <div className="Acontainer">
      <div className="account-details">
        <h2>Account Details</h2>
        <div className="details-row">
          <div className="details-column subscription-plan">
            <p>Subscription Plan:</p>
            <p className="text-lg font-bold">Pro Plan</p>
          </div>
          <div className="details-column subscription-status">
            <p>Subscription Status:</p>
            <p className="text-lg font-bold text-green-500">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
