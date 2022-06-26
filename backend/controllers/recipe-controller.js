const HttpError = require("../models/httpError");
const { v4: uuid } = require("uuid");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Maya Koma",
    email: "mayakoma@gmail.com",
    password: "test",
  },
];

const login = (req, res, next) => {
  const { email, password } = req.body;

  const user = DUMMY_USERS.find((u) => u.email === email);
  if (!user || user.password !== password) {
    throw new HttpError("Could not identify user...", 401);
  }
  res.status(200).json({ message: "login" });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError("could not create user, email already  exist", 422);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(200).json({ user: createdUser });
};

exports.login = login;
exports.signup = signup;
