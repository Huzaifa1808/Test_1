// PricingPage.js

import React from "react";
import Header from "./Header";
const PricingPage = () => {
  return (
    <section id="print">
      <Header />
      <div className="print-container">
        <div className="pricing-page">
          <h2 className="page-title">Pricing Plans</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="plan-title">Basic Plan</h3>
              <p className="price">$4/month/user</p>
              <p>Up to 10 graphs</p>
              <p>Up to 500 chatbot queries</p>
            </div>

            <div className="pricing-card">
              <h3 className="plan-title">Pro Plan</h3>
              <p className="price">$8/month/user</p>
              <p>Up to 50 graphs</p>
              <p>Up to 1000 chatbot queries</p>
              <p>Email + live chat support</p>
            </div>

            <div className="pricing-card">
              <h3 className="plan-title">Enterprise Plan</h3>
              <p className="price">Contact for price</p>
              <p>Unlimited graphs</p>
              <p>Ability to upload custom PDFs</p>
              <p>24/7 phone + email support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
