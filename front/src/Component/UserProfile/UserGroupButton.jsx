import React from "react";
import Button from "../Button/Button";

import { Link } from "react-router-dom";
import "./UserGroupButton.css";

function UserGroupButton({ changePass }) {
  const [buttonList, setButtonList] = React.useState(false);
  const buttonListToggle = () => setButtonList(!buttonList);
  return (
    <div className="right">
      <Button className="btn button-dots" onClick={buttonListToggle}>
        <img
          src="https://img.icons8.com/fluency-systems-filled/48/000000/drag-list-down.png"
          width={35}
        />
      </Button>
      <div className="buttons-popup">
        {buttonList && <ButtonGroup changePass={changePass} />}
      </div>
    </div>
  );
}

function ButtonGroup({ changePass }) {
  return (
    <div className="button-group">
      <Button className="btn user-button" onClick={changePass}>
        change password
      </Button>
      <Button className="btn user-button">delete account</Button>
    </div>
  );
}

export default UserGroupButton;
