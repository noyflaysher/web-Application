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

  const [buttonList, setButtonList] = React.useState(false);
  const buttonListToggle = () => setButtonList(!buttonList);

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
                Log In
              </NavBarButton>
              <NavBarButton onClick={() => props.signup(true)}>
                Sign up
              </NavBarButton>
            </>
          )}
          {loginState && (
            <>
              <NavBarButton onClick={() => props.newRecipe(true)}>
                New Recipe
              </NavBarButton>
              {/* <NavBarButton onClick={toggleLogIn}>log out</NavBarButton> */}

              <NavBarButton className="profile-btn" onClick={buttonListToggle}>
                <img
                  width={30}
                  src="https://img.icons8.com/ios-filled/50/000000/user.png"
                />
              </NavBarButton>
              <div className="buttons-popup">
                {buttonList && <ProfileSlider logout={toggleLogIn} />}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

function ProfileSlider({ logout }) {
  return (
    <>
      <div className="button-group">
        <Link to="/profile">
          <Button className="btn user-button">My Profile</Button>
        </Link>
        <Link to="/">
          <Button className="btn user-button" onClick={logout}>
            Log Out
          </Button>
        </Link>
      </div>
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
