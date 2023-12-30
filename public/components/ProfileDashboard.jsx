import React from "react";

import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import CreateNewGraphPage from "./CreateNewGraphPage";
import AccountSettings from "./AccountSettings";
import GraphDetailsPage from "./GraphDetails";
import PricingPage from "./ PricingPage";
import Card from "./card";
import Footer from "./Footer";
// import Sidebar from "./Sidebar";

const ProfileDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default ProfileDashboard;
