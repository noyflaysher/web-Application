import React from "react";
import Recipe from "./Recipe/Recipe";
import Result from "./Result";
import Map from "../map/Map";

function Body() {
  const ingredient = [
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
  return (
    <>
      <Result></Result>
      <Recipe
        image="src\components\body\images\pizza-img.jpg"
        title="home made pizza"
        time="45"
        servings="4"
        ingredients={ingredient}
        description="description of the recipe"
        publisher="Noy Flaysher"
        link="https://www.mako.co.il/food-recipes/recipes_column-bread/Recipe-df29cf2e4721731006.htm"
      ></Recipe>
    </>
  );
}

export default Body;
