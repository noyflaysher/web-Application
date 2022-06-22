import React from "react";
import Button from "../Button/Button";
import { BiTimeFive } from "react-icons/bi";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";

function FavoriteRecipeItem(props) {
  return (
    <div>
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
              {`${props.time} minutes`}
              <div>
                {" "}
                {"\u00A0"} {"\u00A0"}
              </div>
              <BiTimeFive />
            </span>
          </div>
          <div className="recipe__info">
            <span className="recipe__info-text">The recipe is for: </span>
            <span className="recipe__info-data">
              {`${props.servings} servings `}
              <div>
                {" "}
                {"\u00A0"} {"\u00A0"}
              </div>
              <PeopleAltIcon />
            </span>
          </div>
          <div className="recipe__info">
            <span className="recipe__info-text">publisher:</span>
            <span className="recipe__info-data">
              {props.publisher}
              <div>
                {" "}
                {"\u00A0"} {"\u00A0"}
              </div>
              <BorderColorIcon />
            </span>
          </div>
        </div>
        <div className="recipe__flex">
          {/* <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <div className="recipe__description">
              <p>{props.item.description}</p>
            </div>
          </div> */}
        </div>
        <div>
          <Link to={`/${props.id}`}>
            <Button className="btn--blue btn--blue-direction btn--favoriteRecipe ">
              <a href="#" target="_blank">
                <span>To the full recipe</span>
              </a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavoriteRecipeItem;
