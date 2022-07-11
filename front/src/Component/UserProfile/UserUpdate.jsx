import React from "react";
import Modal from "../Modal-Backdrop/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "../Form/SignUp.module.css";
import { Button } from "@material-ui/core";

function UserUpdate({ toggle }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPass = data.get("update-password").trim();
    const verPass = data.get("update-verify").trim();
    if (!(newPass !== "" && verPass !== "" && newPass == verPass)) return;
    console.log({ password: newPass });
    toggle();
  };
  return (
    <>
      <Modal
        show={true}
        onCancel={toggle}
        header={
          <>
            <AiFillCloseCircle onClick={toggle} className={classes.icon} />
            <p>Set A New Password</p>
          </>
        }
        footer={<></>}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          className="edit-from-container"
        >
          <TextField
            type="password"
            name="update-password"
            required
            fullWidth
            id="update-password"
            label="New Password"
          />
          <div className="text-space"></div>
          <TextField
            type="password"
            name="update-verify"
            required
            fullWidth
            id="update-verify"
            label="Verify New Password"
          />
          <div className="text-space"></div>
          <Button type="submit" variant="contained">
            change password
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default UserUpdate;
