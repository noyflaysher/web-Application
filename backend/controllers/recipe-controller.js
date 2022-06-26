const HttpError = require("../models/httpError");
const { v4: uuid } = require("uuid");
const getCoordsForAddress = require("../util/location");
const Recipe = require("../models/recipe");

// const ingredient = [
//   {
//     quantity: "0.5",
//     unit: "cup",
//     description: "bread flour",
//   },
//   {
//     quantity: "2",
//     unit: "lb",
//     description: "oil",
//   },
//   {
//     quantity: "3.5",
//     unit: "tps",
//     description: "dry active yeast",
//   },
//   {
//     quantity: "0.5",
//     unit: "cup",
//     description: "bread flour",
//   },
//   {
//     quantity: "0.5",
//     unit: "cup",
//     description: "bread flour",
//   },
//   {
//     quantity: "0.5",
//     unit: "cup",
//     description: "bread flour",
//   },
//   {
//     quantity: "0.5",
//     unit: "cup",
//     description: "bread flour",
//   },
// ];

const RECIPE_ARR = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    id: "pizza",
    title: "pizza",
    time: 3,
    servings: 3,
    ingrediants: ["1", "2", "3"],
    description: "Homemade Pizza",
    publisher: "Noy",
    identifiers: ["spicy, sweet"],
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];

const search = (req, res, next) => {
  const searchKey = req.params.key;
  console.log(searchKey);
};

const addRecipe = async (req, res, next) => {
  const {
    imageSrc,
    title,
    time,
    servings,
    ingrediants,
    description,
    publisher,
    identifiers,
    address,
  } = req.body;
  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdRecipe = new Recipe({
    title,
    time,
    imageSrc:
      "https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?s=2048x2048",
    servings,
    ingrediants,
    description,
    publisher,
    identifiers,
    address,
    location: coordinates,
  });
  try {
    await createdRecipe.save();
  } catch (err) {
    const error = new HttpError("Creating place failed, please try again", 500);
    return next(error);
  }

  res.status(200).json({ recipe: createdRecipe });
};

const updateRecipe = (req, res, next) => {
  const {
    imageSrc,
    title,
    time,
    servings,
    ingrediants,
    identifiers,
    description,
  } = req.body;
  const recipeId = req.params.id;

  const updateRecipe = { ...RECIPE_ARR.find((r) => r.id === recipeId) };
  const recipeIndex = RECIPE_ARR.findIndex((r) => r.id === recipeId);
  updateRecipe.imageSrc = imageSrc;
  updateRecipe.title = title;
  updateRecipe.time = time;
  updateRecipe.servings = servings;
  updateRecipe.ingrediants = ingrediants;
  updateRecipe.identifiers = identifiers;
  updateRecipe.description = description;

  RECIPE_ARR[recipeIndex] = updateRecipe;
  res.status(200).json({ recipe: updateRecipe });
};

const getRecipe = (req, res, next) => {
  res.json({ recipes: RECIPE_ARR });
};

exports.addRecipe = addRecipe;
exports.updateRecipe = updateRecipe;
exports.search = search;
exports.getRecipe = getRecipe;
