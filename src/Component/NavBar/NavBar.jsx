import React, { useContext } from "react";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar";
import { LogContext } from "../../Context/LogContext.jsx";
import "./NavBar.css";
function NavBar(props) {
  const isConnected = useContext(LogContext);
  return (
    <>
      <nav className="nav-bar flex-container">
        {/* LOGO */}
        <SearchBar />
        <div>
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
    <Button onClick={props.onClick} className="btn btn--margin">
      {props.children}
    </Button>
  );
}
export default NavBar;
