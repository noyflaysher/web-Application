//FiCheck
import { FiCheck } from "react-icons/fi";
import "./IngredientsItem.css";
import fractionUnicode from "fraction-unicode";

function IngredientItem(props) {
  return (
    <li className="recipe__ingredient">
      <FiCheck />
      <div className="ingredient__quantity">
        {props.quantity}
        {/* ${ing.quantity ? fractionUnicode(ing.quantity).toString() : ""} */}
      </div>
      <span className="ingredient__quantity">{props.unit}</span>
      <div className="ingredient__description">{props.description}</div>
    </li>
  );
}

export default IngredientItem;
