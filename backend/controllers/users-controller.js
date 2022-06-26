const HttpError = require("../models/httpError");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt-nodejs");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Maya Koma",
    email: "mayakoma@gmail.com",
    password: "test",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

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

const updateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const userId = req.params.uid;

  const updateUser = { ...DUMMY_USERS.find((r) => r.id === userId) };
  const userIndex = DUMMY_USERS.findIndex((r) => r.id === userId);
  updateUser.name = name;
  updateUser.email = title;
  updateUser.password = password;

  DUMMY_USERS[userIndex] = updateUser;
  res.status(200).json({ user: updateUser });
};

exports.login = login;
exports.signup = signup;
exports.getUsers = getUsers;
exports.updateUser = updateUser;
