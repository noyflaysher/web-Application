import React from "react";
import Recipe from "./Recipe";
import Result from "./Result";
import "./Body.css";

function Body() {
  const RECIPE_ARR = [
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
      title: "pizza",
      time: 3,
      servings: "maya",
      ingrediants: ["1", "2", "3"],
      description: "homemade pizza",
      publisher: "maya noy oz saar",
      link: "#",
    },
  ];
  return (
    <div className="body__continer">
      <div className="body__result-continer">
        <Result items={RECIPE_ARR} />
      </div>
      <div className="body__recipe-continer">
        <Recipe />
      </div>
    </div>
  );
}

export default Body;
