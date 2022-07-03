import React from "react";
import Button from "../Button/Button";
import { UseUpdateLoginState } from "../../Context/Session.jsx";
import "./UserGroupButton.css";

function UserGroupButton(props) {
  const [buttonList, setButtonList] = React.useState(false);
  const buttonListToggle = () => setButtonList(!buttonList);
  return (
    <div className="right">
      <Button className="btn button-dots" onClick={buttonListToggle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/job.png"
          width={35}
        />
      </Button>
      <div className="buttons-popup">{buttonList && <ButtonGroup />}</div>
    </div>
  );
}

function ButtonGroup(props) {
  const toggleLogIn = UseUpdateLoginState();
  return (
    <div className="button-group">
      <Button className="btn user-button">change password</Button>
      <Button className="btn user-button">delete account</Button>
    </div>
  );
}
export default UserGroupButton;
