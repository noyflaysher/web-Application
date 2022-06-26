import React, { useContext } from "react";
import Button from "./Button";
import { LogContext } from "../../Context/LogContext";
import { NavBarButton } from "../NavBar/NavBar";
import "./Button.css";

function UserGroupButton(props) {
  const [buttonList, setButtonList] = React.useState(false);
  const buttonListToggle = () => setButtonList(!buttonList);
  return (
    <div className="right">
      <Button className="btn button-dots" onClick={buttonListToggle}>
        <img src="https://img.icons8.com/ios/50/000000/menu-2.png" width={30} />
      </Button>
      <div className="buttons-popup">{buttonList && <ButtonGroup />}</div>
    </div>
  );
}

function ButtonGroup(props) {
  const isConnected = useContext(LogContext);
  return (
    <div className="button-group">
      <NavBarButton className="user-button" onClick={isConnected.logout}>
        log out
      </NavBarButton>
      <NavBarButton className="btn user-button">change password</NavBarButton>
      <NavBarButton className="btn user-button">delete account</NavBarButton>
    </div>
  );
}
export default UserGroupButton;
