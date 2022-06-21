import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../map/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./SignUp.module.css";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {/* {"Copyright © "} */}
//       <Link color="inherit" href="https://mui.com/">
//         {/* Your Website */}
//       </Link>{" "}
//       {/* {new Date().getFullYear()} */}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {
  const [showSign, setShowSign] = useState(true);

  // const openMapHandler = () => setShowMap(true);

  const closeSignHandler = () => setShowSign(false);

  const [emailError, setEmailError] = useState(true);
  const [firstEmail, setFirstEmail] = useState(false);

  const [passwordError, setPasswordError] = useState(true);
  const [firstPassword, setFirstPassword] = useState(false);

  const [firstNameError, setFirstNameError] = useState(true);
  const [firstFirstName, setfirstFirstName] = useState(false);

  const [lastNameError, setLastNameError] = useState(true);
  const [firstLastName, setFirstLastName] = useState(false);

  const changeFirstNameHandler = (event) => {
    const first = event.target.value;
    if (first === "") {
      console.log("first:error");
      setFirstNameError(true);
    } else setFirstNameError(false);
    setfirstFirstName(true);
  };

  const changeLastNameHandler = (event) => {
    const last = event.target.value;
    if (last === "") {
      console.log("last:error");
      setLastNameError(true);
    } else setLastNameError(false);
    setFirstLastName(true);
  };

  const changeEmailHandler = (event) => {
    const email = event.target.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      console.log("email:error");
      setEmailError(true);
    } else setEmailError(false);
    setFirstEmail(true);
  };

  const changePasswordHandler = (event) => {
    const password = event.target.value;
    if (password.length < 6) {
      console.log("password:error");
      setPasswordError(true);
    } else setPasswordError(false);
    setFirstPassword(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const email = data.get("email");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const name = `${data.get("firstName")} ${data.get("lastName")}`;

    console.log("................");

    console.log({
      email: email,
      password: password,
      name: name,
    });

    setShowSign(false);
  };

  return (
    <Modal
      show={showSign}
      onCancel={closeSignHandler}
      header={
        <Button onClick={closeSignHandler}>
          <AiFillCloseCircle className={classes.icon} />
        </Button>
      }
      footer={<></>}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "35rem",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#f4aa8a" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={firstFirstName && firstNameError}
                    onChange={changeFirstNameHandler}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    // value={firstName}
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={firstLastName && lastNameError}
                    onChange={changeLastNameHandler}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    // value={lasttName}
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={firstEmail && emailError}
                    onChange={changeEmailHandler}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    // value={email}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={firstPassword && passwordError}
                    onChange={changePasswordHandler}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // value={password}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                disabled={
                  emailError || passwordError || firstNameError || lastNameError
                }
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid
                container
                justifyContent="flex-end"
                sx={{ marginBottom: "1rem" }}
              >
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Modal>
  );
}
