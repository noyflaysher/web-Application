import React from "react";
import "./Recipe.css";
import Ingredients from "../Ingredients";
import { BiTimeFive, BiMinusCircle } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlineLike } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

function Recipe() {
  return (
    <div className="recipe">
      <div className="recipe__header">
        <img className="recipe__image" src="./images/pizza.jpg" />
        <h1>
          <span className="recipe__title">recipe title</span>
        </h1>
      </div>

      <div class="recipe__details">
        <div class="recipe__info">
          <span class="recipe__info-data recipe__info-data--minutes">10</span>
          <span class="recipe__info-text">minutes</span>
          <BiTimeFive />
        </div>
        <div class="recipe__info">
          <span class="recipe__info-data recipe__info-data--people">5</span>
          <span class="recipe__info-text">servings </span>
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings btn--update-servings-plus">
              <BsPlusCircle />
            </button>
            <button class="btn--tiny btn--update-servings">
              <BiMinusCircle />
            </button>
          </div>
        </div>
        <button class="btn--tiny btn--like ">
          <AiOutlineLike />
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          <Ingredients />
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher"></span>. Please check out directions
          at their website.
        </p>
        <a class="btn--small recipe__btn" href="#" target="_blank">
          <span>Directions</span>
          <HiArrowNarrowRight />
        </a>
      </div>
    </div>
  );
}

export default Recipe;
