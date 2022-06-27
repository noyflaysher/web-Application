const HttpError = require("../models/httpError");
const { v4: uuid } = require("uuid");
const getCoordsForAddress = require("../util/location");
const Recipe = require("../models/recipe");

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
    publisherId: 1,
    identifiers,
    address,
    location: coordinates,
  });
  try {
    await createdRecipe.save();
  } catch (err) {
    const error = new HttpError(
      "Creating recipe failed, please try again",
      500
    );
    return next(error);
  }

  res.status(200).json({ recipe: createdRecipe });
};

const updateRecipe = async (req, res, next) => {
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

  let recipe;
  try {
    recipe = await Recipe.findById(recipeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot update update recipe",
      500
    );
    return next(error);
  }
  recipe.imageSrc = imageSrc;
  recipe.title = title;
  recipe.time = time;
  recipe.servings = servings;
  recipe.ingrediants = ingrediants;
  recipe.identifiers = identifiers;
  recipe.description = description;

  try {
    await recipe.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot update recipe (saving recipe)",
      500
    );
  }

  res.status(200).json({ recipe: recipe.toObject({ getters: true }) });
};

const getRecipe = async (req, res, next) => {
  const recipe = await Recipe.find({});
  res.json({ recipe: recipe });
};

const getRecipeByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  console.log(userId);
  let recipe;
  try {
    recipe = await Recipe.find({ publisherId: userId });
    console.log(recipe);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a recipe!!!.",
      500
    );
    return next(error);
  }

  if (!recipe || recipe.length === 0) {
    const error = new HttpError(
      "Could not find recipe for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ recipe });
};

const getRecipeByFilters = async (req, res, next) => {
  const { identifiers, userId, servings } = req.body;
  let recipe;
  try {
    recipe = await Recipe.find({
      publisherId: userId,
      servings: servings,
      identifiers: identifiers,
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a recipe.",
      500
    );
    return next(error);
  }
  if (!recipe || recipe.length === 0) {
    const error = new HttpError(
      "Could not find recipe for the provided data.",
      404
    );
    return next(error);
  }
  res.json({ recipe });
};

const deleteRecipe = async (req, res, next) => {
  const recipeId = req.params.id;

  let recipe;

  try {
    //find the relevant recipe from db
    recipe = await Recipe.findById(recipeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot delete recipe",
      500
    );
    return next(error);
  }

  try {
    await recipe.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot delete recipe",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted recipe" });
};

exports.addRecipe = addRecipe;
exports.updateRecipe = updateRecipe;
exports.getRecipeByUserId = getRecipeByUserId;
exports.getRecipe = getRecipe;
exports.getRecipeByFilters = getRecipeByFilters;
exports.deleteRecipe = deleteRecipe;
