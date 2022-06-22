import React, { useState } from "react";
import { BiTimeFive, BiMinusCircle } from "react-icons/bi";
import {
  AiOutlineLike,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Ingredients from "../Ingredient/IngredientsList";
import Button from "../Button/Button";

import "./Recipe.css";

const ingredient = [
  {
    quantity: "0.5",
    unit: "cup",
    description: "bread flour",
  },
  {
    quantity: "0.5",
    unit: "cup",
    description: "bread flour",
  },
  {
    quantity: "0.5",
    unit: "cup",
    description: "bread flour",
  },
  {
    quantity: "2",
    unit: "lb",
    description: "oil",
  },
  {
    quantity: "3.5",
    unit: "tps",
    description: "dry active yeast",
  },
];

//Json Recipe{
// imageSrc:
// title:
// time:
// servings:
//ingrediants[]:
//description:
//publisher:
// link
//}

function Recipe(props) {
  return (
    <div className="recipe">
      <div className="recipe__header">
        <img className="recipe__image" src={props.image} />
        <h1>
          <span className="recipe__title">{props.title}</span>
        </h1>
      </div>
      <div className="recipe__details">
        <div className="recipe__info">
          <span className="recipe__info-text">Preparation Time: </span>
          <span className="recipe__info-data">
            {" "}
            <BiTimeFive />
            {`${props.time} minutes`}
          </span>
        </div>
        <div className="recipe__info">
          <span className="recipe__info-text">The recipe is for: </span>
          <span className="recipe__info-data">{`${props.servings} servings`}</span>
        </div>
        <div className="recipe__info">
          <span className="recipe__info-text">publisher:</span>
          <span className="recipe__info-data">{props.publisher}</span>
        </div>
      </div>
      <div className="recipe__flex">
        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <Ingredients data={ingredient} />
        </div>

        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <div className="recipe__description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div>
        <Button className="btn--blue btn--blue-direction">
          <a href={props.link} target="_blank">
            <span>Directions</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Recipe;

// const [numServings, setNumServings] = useState(props.servings);
// const [ingredients, setIngredients] = useState(props.ingredients);

// const addServingsHandler = function () {
//   setNumServings(+numServings + 1);
//   updateIngredientsPlus();
// };

// const lessServingsHandler = function () {
//   if (numServings === 1) {
//     return;
//   }
//   setNumServings(+numServings - 1);
//   updateIngredientsMinus();
// };

// const updateIngredientsPlus = function (prevIng) {
//   setIngredients(
//     ingredients.map((ing) => {
//       let num = (
//         (parseFloat(ing.quantity) * numServings) /
//         (numServings - 1)
//       ).toFixed(2);
//       return {
//         quantity: num,
//         unit: ing.unit,
//         description: ing.description,
//       };
//     })
//   );
// };

// const updateIngredientsMinus = function (prevIng) {
//   console.log(ingredients);
//   if (numServings === 0) {
//     console.log("empty");
//     setIngredients(
//       ingredients.map((ing) => {
//         return {
//           quantity: "0",
//           unit: ing.unit,
//           description: ing.description,
//         };
//       })
//     );
//     return;
//   }
//   setIngredients(
//     ingredients.map((ing) => {
//       let num = (
//         (parseFloat(ing.quantity) * numServings) /
//         (numServings + 1)
//       ).toFixed(2);
//       return {
//         quantity: num,
//         unit: ing.unit,
//         description: ing.description,
//       };
//     })
//   );
// };
