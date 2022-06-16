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
        {/* {props.map((ing) => ( */}
        {/* <IngredientItem quantity="3/4" unit="cup" description="bread flour" />
        <IngredientItem quantity="3/4" unit="cup" description="bread flour" />
        <IngredientItem
          quantity="67/100"
          unit="cup"
          description="cherry or grape tomatoes halved"
        />
        <IngredientItem
          quantity="1"
          unit="lb."
          description="hummus any variety"
        />
        <IngredientItem
          quantity="1 1/2"
          unit="tsp. "
          description=" dry active yeast"
        />
        <IngredientItem
          quantity="2"
          unit="tb."
          description="olive oil + extra for bowl"
        /> */}

        {/* ))} */}
      </ul>
    </div>
  );
}

export default Ingredients;
