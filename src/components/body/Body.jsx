import React from "react";
import Recipe from "./Recipe";
import Result from "./Result";
import "./Body.css";

function Body() {
  const RECIPE_ARR = [];
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
