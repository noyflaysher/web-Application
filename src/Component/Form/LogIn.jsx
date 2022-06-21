import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./SignUp.module.css";
import Modal from "../map/Modal";

const theme = createTheme();

export default function SignIn() {
  const [showSign, setShowSign] = useState(true);

  // const openMapHandler = () => setShowMap(true);

  const closeSignHandler = () => setShowSign(false);

  const [emailError, setEmailError] = useState(true);
  const [firstEmail, setFirstEmail] = useState(false);

  const [passwordError, setPasswordError] = useState(true);
  const [firstPassword, setFirstPassword] = useState(false);

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
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
              maxHeight: "",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#f4aa8a" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                error={firstEmail && emailError}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={changeEmailHandler}
              />
              <TextField
                error={firstPassword && passwordError}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changePasswordHandler}
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                disabled={emailError || passwordError}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs sx={{ marginRight: "3rem" }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{ marginRight: "5rem" }}>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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