import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Canvas from "../Canvas.jsx";
import { UseLoginState, UseUpdateLoginState } from "../../Context/Session.jsx";
import "./NavBar.css";
function NavBar(props) {
  const toggleLogIn = UseUpdateLoginState();
  const loginState = UseLoginState();

  return (
    <>
      <nav className="nav-bar flex-container">
        <Link to="/">
          <Canvas className="logo" />
        </Link>

        <SearchBar />
        <div className="logButtons">
          {!loginState && (
            <>
              <NavBarButton onClick={() => props.login(true)}>
                log in
              </NavBarButton>
              <NavBarButton onClick={() => props.signup(true)}>
                sign up
              </NavBarButton>
            </>
          )}
          {loginState && (
            <>
              <NavBarButton onClick={() => props.newRecipe(true)}>
                New Recipe
              </NavBarButton>
              {/* <NavBarButton onClick={toggleLogIn}>log out</NavBarButton> */}
              <Link to="/profile">
                <NavBarButton>Profile</NavBarButton>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

function NavBarButton(props) {
  return (
    <Button onClick={props.onClick} className="btn btn--margin nav-btn">
      {props.children}
    </Button>
  );
}
export default NavBar;
