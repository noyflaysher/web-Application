import React from "react";
import RecipeItem from "./RecipeItem";
import Card from "../UI/Card";
import "./Result.css";
const Result = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="recipe-list center">
        <Card>
          <h2>No recipe found. Maybe create one?</h2>
          <button>ADD RECIPE!</button>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((recipe) => (
        <RecipeItem
          key={recipe.title}
          imageSrc={recipe.imageSrc}
          title={recipe.title}
          time={recipe.time}
          servings={recipe.servings}
          ingrediants={recipe.ingrediants}
          description={recipe.description}
          publisher={recipe.publisher}
          link={recipe.link}
          address={recipe.address}
          coordinates={recipe.location}
        />
      ))}
    </ul>
  );
};

export default Result;
