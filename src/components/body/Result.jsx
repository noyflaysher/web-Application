import React from "react";
import 
import Card from "../Card";
import "./Result.css";
const Result = (props) => {
  if (props.items.lenght === 0) {
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
          key={Math.random()}
          image={recipe.imageSrc}
          title={recipe.title}
          time={recipe.time}
          servings={recipe.servings}
          ingrediants={recipe.ingrediants}
          description={recipe.description}
          publisher={recipe.publisher}
          link={recipe.link}
        />
      ))}
    </ul>
  );
};

export default Result;
