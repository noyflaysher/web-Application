import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import Avatar from "./ElementUI/Avatar";

import "./RecipeItem.css";
const RecipeItem = (props) => {
  return (
    <li className="recipe-item">
      <Card className="recipe-item__content">
        <div class="recipe-item__publisher-image">
          <Avatar image={props.imageSrc} alt={props.title} />
        </div>
        <div className="recipe-item__recipe-info">
          <h2>{props.title}</h2>
          <h3 className="recipe-item__publisher">by: {props.publisher}</h3>
        </div>
      </Card>
    </li>
  );
};
export default RecipeItem;
