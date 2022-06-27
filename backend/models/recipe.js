const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  time: { type: Number, required: true },
  imageSrc: { type: String, required: true },
  servings: { type: Number, required: true },
  ingrediants: { type: Array, required: true },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  publisherId: { type: Number, required: true },
  identifiers: { type: Array, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
