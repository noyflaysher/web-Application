// import fractionUnicode from "fraction-unicode";
import IngredientItem from "./IngredientItem";
import "./IngredientsList.css";

function Ingredients(props) {
  return (
    <div className="ingredients">
      <ul className="Ingredients-List">
        {props.data.map((ing) => (
          <IngredientItem
            quantity={ing.quantity}
            unit={ing.unit}
            description={ing.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
