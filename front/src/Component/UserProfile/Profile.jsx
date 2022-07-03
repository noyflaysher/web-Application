import React from "react";
import Charts from "./Charts";
import UserGroupButton from "./UserGroupButton";
import "./Profile.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const userInfo = {
  name: "John Doe",
  email: "jdoe@gmail.com",
};

const userRecipes = [
  {
    title: "recipe 1",
  },
  {
    title: "recipe 2",
  },
  {
    title: "recipe 3",
  },
];

const userBookmarks = [
  {
    title: "bookmark 1",
  },
  {
    title: "bookmark 2",
  },
  {
    title: "bookmark 3",
  },
];

function Profile(props) {
  return (
    <div className="profile-flex">
      <img
        className="profile-img"
        src="https://previews.123rf.com/images/maxborovkov/maxborovkov1701/maxborovkov170100258/69948331-white-settings-banner-with-silhouettes-of-gears-vector-illustration-.jpg"
      />
      <span className="profile-title">PROFILE</span>
      <div className="profile-button">
        <UserGroupButton />
      </div>
      <span className="profile-subtitle">My Info.</span>
      <div className="profile-info">
        <div className="user-info">
          <span>name: {userInfo.name}</span>
          <span>email: {userInfo.email}</span>
        </div>
        <div className="user-recipes">
          <span>My Recipes: </span>
          <ShowRecipes list={userRecipes} />
        </div>
      </div>
      <span className="profile-subtitle">Bookmarks</span>
      <div className="profile-bookmarks">
        <ShowBookmarks list={userBookmarks} />
      </div>
      <span className="profile-subtitle">My Recipes Info.</span>
      <div className="profile-statistics">
        <Charts />
      </div>
    </div>
  );
}

function ShowRecipes({ list }) {
  return (
    <ul>
      {list.map((e, index) => (
        <li>{e.title}</li>
      ))}
    </ul>
  );
}

function ShowBookmarks({ list }) {
  return (
    <ul>
      {list.map((e, index) => (
        <li className="book-li">
          {e.title}
          <Link to={`/recipe/${index}`}>
            <Button className="btn book-btn">
              <img
                width={30}
                src="https://img.icons8.com/external-those-icons-fill-those-icons/48/000000/external-glasses-retro-those-icons-fill-those-icons.png"
              />
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Profile;
