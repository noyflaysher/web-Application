import React, { useContext } from "react";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar";
import { LogContext } from "../../Context/LogContext.jsx";
import Canvas from "../Canvas";
import "./NavBar.css";
function NavBar(props) {
  const isConnected = useContext(LogContext);
  return (
    <>
      <nav className="nav-bar flex-container">
        {/* LOGO */}
        <a href="/">
          <Canvas className="logo" />
        </a>

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
              <NavBarButton onClick={isConnected.logout}>log out</NavBarButton>
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
