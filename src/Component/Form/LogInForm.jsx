import React, { useState, useEffect, useReducer } from "react";
import classes from "./LogInForm.module.css";
import Button from "../body/Button/Button";

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailValidation] = useState(false);
  const [passwordIsValid, setPasswordValidation] = useState(true);
  const [formIsValid, setFormValidation] = useState(true);

  const checkPasswordValidation = (password_) => {
    if (password_.length > 6) setPasswordValidation(true);
    else setPasswordValidation(false);
  };

  const checkEmailValidation = (email_, len) => {
    if (email_.includes("@")) setEmailValidation(true);
    else setEmailValidation(false);
  };

  const passwordChangeHandler = (event) => {
    const password_ = event.target.value;
    checkPasswordValidation(password_);
    setPassword(password_);
  };

  const emailChangeHandler = (event) => {
    const email_ = event.target.value;
    const len = event.target.value.length;
    setEmail(email_, len);
    checkEmailValidation(email_);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(password);
    console.log("submit");
    if (emailIsValid && passwordIsValid) setFormValidation(true);
    else setFormValidation(false);
    setPassword("");
    setEmail("");
    // props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div
        className={`
          ${classes.formRow} ${!emailIsValid ? classes.invalid : ""}`}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>

      <div
        className={`
          ${classes.formRow} ${!passwordIsValid ? classes.invalid : ""}`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>

      <div className={classes.actions}>
        <Button className="btn--blue" type="submit">
          Log in
        </Button>
      </div>
      {!formIsValid && <p>Please try again</p>}
    </form>
  );
}

export default LogInForm;
