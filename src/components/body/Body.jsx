import React from "react";
import Recipe from "./Recipe";
import Result from "./Result";
import "./Body.css";

function Body() {
  return (
    <div className="body__continer">
      <div className="body__result-continer">
        <Result />
      </div>
      <div className="body__recipe-continer">
        <Recipe />
      </div>
    </div>
  );
}

export default Body;
