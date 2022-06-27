const express = require("express");
const recipeController = require("../controllers/recipe-controller");
const router = express.Router();

router.get("/", recipeController.getRecipe);

router.post("/search/:filter", recipeController.search);

router.post("/search/:title", recipeController.search);

router.post("/search/:userId", recipeController.search);

router.patch("/update/:id", recipeController.updateRecipe);

router.post("/add", recipeController.addRecipe);

module.exports = router;
