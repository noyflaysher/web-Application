import React, { useState } from "react";
import { BiTimeFive, BiMinusCircle } from "react-icons/bi";
import recipeImage from "../images/pizza-img.jpg";
import {
  AiOutlineLike,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Ingredients from "../Ingredient/IngredientsList";
import Button from "../Button/Button";

import "./Recipe.css";

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
  const [numServings, setNumServings] = useState(props.servings);
  const [ingredients, setIngredients] = useState(props.ingredients);

  const addServingsHandler = function () {
    setNumServings(+numServings + 1);
    updateIngredientsPlus();
  };

  const lessServingsHandler = function () {
    if (numServings === 1) {
      return;
    }
    setNumServings(+numServings - 1);
    updateIngredientsMinus();
  };

  const updateIngredientsPlus = function (prevIng) {
    setIngredients(
      ingredients.map((ing) => {
        let num = (
          (parseFloat(ing.quantity) * numServings) /
          (numServings - 1)
        ).toFixed(2);
        return {
          quantity: num,
          unit: ing.unit,
          description: ing.description,
        };
      })
    );
  };

  const updateIngredientsMinus = function (prevIng) {
    console.log(ingredients);
    if (numServings === 0) {
      console.log("empty");
      setIngredients(
        ingredients.map((ing) => {
          return {
            quantity: "0",
            unit: ing.unit,
            description: ing.description,
          };
        })
      );
      return;
    }
    setIngredients(
      ingredients.map((ing) => {
        let num = (
          (parseFloat(ing.quantity) * numServings) /
          (numServings + 1)
        ).toFixed(2);
        return {
          quantity: num,
          unit: ing.unit,
          description: ing.description,
        };
      })
    );
  };

  return (
    <div className="recipe">
      <div className="recipe__header">
        <img className="recipe__image" src={recipeImage} />
        <h1>
          <span className="recipe__title">{props.title}</span>
        </h1>
      </div>

      <div className="recipe__details">
        <div className="recipe__info">
          <span className="recipe__info-data recipe__info-data--minutes">
            {props.time}
          </span>
          <span className="recipe__info-text">minutes</span>
          <BiTimeFive />
        </div>
        <div className="recipe__info">
          <span className="recipe__info-data recipe__info-data--people">
            {numServings}
          </span>
          <span className="recipe__info-text">servings </span>
          <div className="recipe__info-buttons">
            <Button
              className="btn--tiny btn--update-servings btn--update-servings-plus"
              onClick={addServingsHandler}
            >
              <AiFillPlusCircle />
            </Button>
            <Button
              className="btn--tiny btn--update-servings"
              onClick={lessServingsHandler}
            >
              <AiFillMinusCircle />
            </Button>
          </div>
        </div>
        <Button className="btn--tiny btn--like ">
          <AiOutlineLike />
        </Button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <Ingredients data={ingredients} />
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <div className="recipe__description">
          <p>{props.description}</p>
          <span className="recipe__publisher">
            publisher: {props.publisher}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
