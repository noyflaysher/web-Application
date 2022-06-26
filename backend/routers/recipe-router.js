const express = require("express");
const recipeController = require("../controllers/recipe-controller");
const router = express.Router();

router.get("/", recipeController.getRecipe);

router.post("/search/:key", recipeController.search);

router.patch("/update/:id", recipeController.updateRecipe);

router.post("/add", recipeController.addRecipe);

module.exports = router;
