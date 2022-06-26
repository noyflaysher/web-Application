import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar";
import { LogContext } from "../../Context/LogContext.jsx";
import Canvas from "../Canvas.jsx";
import UserGroupButton from "../Button/UserGroupButton.jsx";
import "./NavBar.css";
import miniLogo from "../../Images/mini-logo.png";
function NavBar(props) {
  const isConnected = useContext(LogContext);
  return (
    <>
      <nav className="nav-bar flex-container">
        <Link to="/">
          <Canvas className="logo" />
          <img src={miniLogo} width={50} className="alt-logo" />
        </Link>

        <SearchBar />
        <div className="logButtons">
          {!isConnected.isLoggedIn && (
            <>
              <NavBarButton onClick={() => props.login(true)}>
                log in
              </NavBarButton>
              <NavBarButton onClick={() => props.signup(true)}>
                sign up
              </NavBarButton>
            </>
          )}
          {isConnected.isLoggedIn && (
            <>
              <NavBarButton onClick={() => props.newRecipe(true)}>
                New Recipe
              </NavBarButton>
              <UserGroupButton />
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export function NavBarButton(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`btn btn--margin nav-btn ${props.className}`}
    >
      {props.children}
    </Button>
  );
}
export default NavBar;
