const HttpError = require("../models/httpError");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt-nodejs");

const User = require("../models/user");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Maya Koma",
    email: "mayakoma@gmail.com",
    password: "test",
  },
];

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later",
      500
    );
    return next(error);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Log in failed, please try again", 500);
    return next(error);
  }

  //not in db// wrong password
  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("Invalid data, could not log in", 401);
    return next(error);
  }
  res.status(200).json({ message: "login" });
};

const signup = async (req, res, next) => {
  const { name, email, password, recipes } = req.body;

  let existingUser;

  //check id the email existing in the db = user existing
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signing up failed", 500);
    return next(error);
  }

  //email is existing

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    recipes,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
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
