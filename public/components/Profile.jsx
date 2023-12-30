import React from "react";
import UserProfile from "./UserProfile";
import AccountDetails from "./AccountDetails";
import UsageMetrics from "./UsageMetrics";
import RecentActivityFeed from "./RecentActivityFeed";
import CreateNewGraphButton from "./CreateNewGraphButton";
import FavoritesCollectionsLinks from "./FavoritesCollectionsLinks";
import SavedGraphList from "./SavedGraphLIist";
import Header from "./Header";
const Profile = () => {
  return (
    <>
      <div className="description">
        <section id="phot">
          <Header />
          <UserProfile />
          <AccountDetails />
          <UsageMetrics />
          <RecentActivityFeed />
          <CreateNewGraphButton />
          <FavoritesCollectionsLinks />
          <SavedGraphList />
        </section>
      </div>
    </>
  );
};
export default Profile;
