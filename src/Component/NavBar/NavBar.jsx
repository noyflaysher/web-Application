import React from "react";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
function NavBar(props) {
  const [isConnected, setIsConnected] = React.useState(false);
  return (
    <>
      <nav className="nav-bar flex-container">
        {/* LOGO */}
        <SearchBar />
        <div>
          {!isConnected && (
            <>
              <NavBarButton onClick={() => props.login(true)}>
                log in
              </NavBarButton>
              <NavBarButton onClick={() => props.signup(true)}>
                sign up
              </NavBarButton>
              <NavBarButton onClick={() => props.newRecipe(true)}>
                New Recipe
              </NavBarButton>
              <NavBarButton>log out</NavBarButton>
            </>
          )}
          {isConnected && (
            <>
              <NavBarButton>create a recipe</NavBarButton>
              <NavBarButton>log out</NavBarButton>
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
