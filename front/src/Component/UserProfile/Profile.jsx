import React from "react";
import Charts from "./Charts";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-flex">
      <h1> PROFILE</h1>
      <div className="profile-info">aa</div>
      <div className="profile-statistics">
        <Charts />
      </div>
    </div>
  );
}

export default Profile;
