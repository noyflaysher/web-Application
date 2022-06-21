import React from "react";
import Button from "../body/Button/Button.jsx";
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
              <NavBarButton>log in</NavBarButton>
              <NavBarButton>sign up</NavBarButton>
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
    <Button onClick={props.onClick} className="btn--blue btn--margin">
      {props.children}
    </Button>
  );
}
export default NavBar;
