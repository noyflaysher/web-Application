//FiCheck
import { FiCheck } from "react-icons/fi";
import "./IngredientsItem.css";
import fractionUnicode from "fraction-unicode";

function IngredientItem(props) {
  return (
    <li className="recipe__ingredient">
      <FiCheck />
      <div class="ingredient__quantity">
        {props.quantity}
        {/* ${ing.quantity ? fractionUnicode(ing.quantity).toString() : ""} */}
      </div>
      <span class="ingredient__quantity">{props.unit}</span>
      <div class="ingredient__description">{props.description}</div>
    </li>
  );
}

export default IngredientItem;
