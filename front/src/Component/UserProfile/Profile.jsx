import React from "react";
import Charts from "./Charts";
import UserGroupButton from "./UserGroupButton";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-flex">
      <img
        className="profile-img"
        src="https://previews.123rf.com/images/maxborovkov/maxborovkov1701/maxborovkov170100258/69948331-white-settings-banner-with-silhouettes-of-gears-vector-illustration-.jpg"
      />
      <span className="profile-title"> PROFILE</span>
      <div className="profile-info">
        <UserGroupButton />
      </div>
      <div className="profile-bookmarks">BOOKMARKS</div>
      <div className="profile-statistics">
        <Charts />
      </div>
    </div>
  );
}

export default Profile;
