import React from "react";
import Button from "../body/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
function NavBar() {
  const [isConnected, setIsConnected] = React.useState(false);
  return (
    <>
      <nav className="nav-bar flex-container">
        {/* LOGO */}
        <SearchBar />
        {isConnected && (
          <>
            <Button className="btn--blue">log in</Button>
            <Button>sign up</Button>
          </>
        )}
        {!isConnected && (
          <>
            <Button>create a recipe</Button>
            <Button>log out</Button>
          </>
        )}
      </nav>
    </>
  );
}

export default NavBar;
