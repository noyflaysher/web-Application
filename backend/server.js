const express = require("express");
const bodyParser = require("body-parser");
const recipeRouter = require("./routers/recipe-router");
const usersRouter = require("./routers/users-router");
const HttpError = require("./models/httpError");

const app = express();
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/recipe", recipeRouter);

app.use((req, res, next) => {
  const error = new HttpError("Cold  not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(3000, () => console.log("listen to port 3000"));
