import React, { useEffect } from "react";
import Charts from "./Charts";
import UserGroupButton from "./UserGroupButton";
import "./Profile.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import UserUpdate from "./UserUpdate";
import { UseSession } from "../../Context/Session";
import { useHttpClient } from "../hooks/http-hook";

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
  const [updateInfo, setUpdateInfo] = React.useState(false);
  const [userRecipes, setUserRecipes] = React.useState([]);
  const session = UseSession();
  React.useEffect(() => {
    const requestOption = {
      //request to the json db server (this is a format)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.session.userId,
      }),
    };

    fetch(`http://localhost:3000/recipe/myRecipe`, requestOption) //the db adress and the ver that has the task for the server
      .then((response) => (response.ok ? response.json() : { recipe: [] })) //give back the data that just enterd
      .then((data) => {
        setUserRecipes(data.recipe.map((r) => r.title));
      });
  }, []);

  const toggleUpdate = () => {
    setUpdateInfo((prev) => !prev);
    console.log("toggle: " + updateInfo);
  };

  return (
    <div className="profile-flex">
      {updateInfo ? <UserUpdate toggle={toggleUpdate} /> : <></>}
      <img
        className="profile-img"
        src="https://previews.123rf.com/images/maxborovkov/maxborovkov1701/maxborovkov170100258/69948331-white-settings-banner-with-silhouettes-of-gears-vector-illustration-.jpg"
      />
      <span className="profile-title">PROFILE</span>
      <div className="profile-button">
        <UserGroupButton changePass={toggleUpdate} />
      </div>
      <span className="profile-subtitle">My Info.</span>
      <div className="profile-info">
        <div className="user-info">
          <span>name: {session.session.name}</span>
          <span>email: {session.session.email}</span>
        </div>
        <span className="profile-subtitle">My Recipes: </span>
        <div className="user-recipes">
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
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}

function ShowBookmarks({ list }) {
  return (
    <ul>
      {list.map((e, index) => (
        <li className="book-li" key={index}>
          {e.title}
          <Link to={`/recipe/${index}`}>
            <Button className="btn book-btn" key={index}>
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
