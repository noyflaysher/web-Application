//FiCheck
import { FiCheck } from "react-icons/fi";
import "./IngredientsItem.css";

function IngredientItem(props) {
  return (
    <li className="recipe__ingredient">
      <FiCheck />
      <div className="ingredient__quantity">{props.quantity}</div>
      <span className="ingredient__quantity">{props.unit}</span>
      <div className="ingredient__description">{props.description}</div>
    </li>
  );
}

export default IngredientItem;
