const express = require("express");
const recipeController = require("../controllers/recipe-controller");
const router = express.Router();

router.get("/", recipeController.getRecipe);

router.get("/identifiers", recipeController.getIdentifiers);

router.get("/countIdentifier", recipeController.getCountIdentifier);

router.post("/search", recipeController.getRecipeByFilters);

router.post("/myRecipe", recipeController.getRecipeByUserId);

router.patch("/update/:id", recipeController.updateRecipe);

router.post("/add", recipeController.addRecipe);

router.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
