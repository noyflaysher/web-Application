import React, { useEffect } from "react";
import Charts from "./Charts";
import UserGroupButton from "./UserGroupButton";
import "./Profile.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import UserUpdate from "./UserUpdate";
import { UseSession, UseSearch } from "../../Context/Session";
import LogInForm from "../Form/LogIn";
import { BookmarkButton } from "../Recipe/BookmarkButton";
import SearchIcon from "../../Images/search.png";
import Modal from "../Modal-Backdrop/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "../Form/SignUp.module.css";
import RecipeItem from "../RecipeItem/RecipeItem";

function Profile(props) {
  const [updateInfo, setUpdateInfo] = React.useState(false);
  const [userRecipes, setUserRecipes] = React.useState([]);
  const [userBookmarks, setUserBookmarks] = React.useState([]);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const session = UseSession();
  const setResult = UseSearch().setResult;
  useEffect(() => {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.session.userId,
        bookmarks: session.session.bookmarks,
      }),
    };
    fetch("http://localhost:3000/recipe/myRecipe", requestOption)
      .then((response) => (response.ok ? response.json() : { recipe: [] }))
      .then((data) => {
        setUserRecipes(data.recipe.map((r) => r.title));
      });
    fetch("http://localhost:3000/recipe/arrays", requestOption)
      .then((response) => (response.ok ? response.json() : { recipe: [] }))
      .then((data) => {
        setUserBookmarks(data.recipe);
        setResult(data.recipe);
      });
  }, []);

  useEffect(() => {
    const newBookmarks = userBookmarks.filter(
      (e) => session.session.bookmarks.indexOf(`${e._id}`) > -1
    );
    setUserBookmarks(newBookmarks);
    setResult(newBookmarks);
  }, [session.session.bookmarks]);

  const toggleUpdate = () => {
    setUpdateInfo((prev) => !prev);
  };

  return (
    <>
      {session.session.userId === null && (
        <div>
          <p>You need to login</p>
          <Button onClick={() => setShowLoginForm(true)}> Login</Button>
          {showLoginForm && (
            <LogInForm closeForm={() => setShowLoginForm(false)} />
          )}
        </div>
      )}
      {session.session.userId !== null && (
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
            <SearchBookmarks />
            <ShowBookmarks list={userBookmarks} />
          </div>
          <span className="profile-subtitle">My Recipes Info.</span>
          <div className="profile-statistics">
            <Charts />
          </div>
        </div>
      )}
    </>
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
  const session = UseSession();
  return (
    <ul>
      {list.map((e, index) => (
        <li className="book-li" key={index}>
          <Link to={`/recipe/${index}`}>{e.title}</Link>
          <BookmarkButton
            selected={session.session.bookmarks.indexOf(`${e._id}`) > -1}
            id={e._id}
          />
        </li>
      ))}
    </ul>
  );
}
function SearchBookmarks() {
  const [showSearchResults, setSearchResults] = React.useState(false);
  const [Results, setResults] = React.useState([]);
  const session = UseSession();
  const setResult = UseSearch().setResult;

  const handleSearch = () => {
    let RECIPE_ARR = [];
    setSearchResults((prev) => !prev);
    const requestOption = {
      //request to the json db server (this is a format)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "none",
        servings: 0,
        title: document.getElementById("searchBookmarkText").value,
      }),
    };
    fetch("http://localhost:3000/recipe/search", requestOption) //the db adress and the ver that has the task for the server
      .then((response) => (response.ok ? response.json() : { recipe: [] })) //give back the data that just enterd
      .then((data) => {
        RECIPE_ARR = data.recipe.filter(
          (recipe) => session.session.bookmarks.indexOf(`${recipe._id}`) > -1
        );
        setResults(RECIPE_ARR);
        setResult(RECIPE_ARR);
      });
  };

  return (
    <>
      <div className="searchBookmark-container">
        <input id="searchBookmarkText" className="searchBookmark"></input>
        <button className="searchBookmark-button grow" onClick={handleSearch}>
          <img src={SearchIcon} width={35} alt="searchBookmark" />
          SEARCH
        </button>
        {showSearchResults && (
          <Modal
            show={showSearchResults}
            onCancel={() => setSearchResults((prev) => !prev)}
            header={
              <AiFillCloseCircle
                onClick={() => setSearchResults((prev) => !prev)}
                className={classes.icon}
              />
            }
            footer={<></>}
          >
            <div>
              <ul>
                {Results.length > 0 ? (
                  Results.map((recipe, index) => {
                    return (
                      <RecipeItem
                        key={index}
                        index={index}
                        id={recipe.id}
                        imageSrc={recipe.imageSrc}
                        title={recipe.title}
                        time={recipe.time}
                        servings={recipe.servings}
                        ingrediants={recipe.ingrediants}
                        description={recipe.description}
                        publisher={recipe.publisher}
                        link={recipe.link}
                        address={recipe.address}
                        coordinates={recipe.location}
                      />
                    );
                  })
                ) : (
                  <h3> No Bookmarks found. Maybe create one?</h3>
                )}
              </ul>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
export default Profile;
