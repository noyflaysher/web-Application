import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChosenRecipe = (props) => {
  const index = useParams().index;
  const loadedRecipe = props.items[index];
  return (
    <>
      {loadedRecipe && (
        <Recipe
          id={loadedRecipe._id}
          image={loadedRecipe.imageSrc}
          title={loadedRecipe.title}
          time={loadedRecipe.time}
          servings={loadedRecipe.servings}
          ingrediants={loadedRecipe.ingrediants}
          description={loadedRecipe.description}
          publisher={loadedRecipe.publisher}
          link={loadedRecipe.link}
        />
      )}
    </>
  );
};
export default ChosenRecipe;
