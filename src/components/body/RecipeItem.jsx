import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import Avatar from "./ElementUI/Avatar";

import "./RecipeItem.css";
const RecipeItem = (props) => {
  return (
    <li>
      <Card>
        <Link to="#">
          <div class="pecipe-item__publisher-image">
            <Avatar image={props.imageSrc} alt={props.title} />
          </div>
          <div className="pecipe-item__recipe-info">
            <h2>{props.title}</h2>
            <h3>{props.publisher}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
