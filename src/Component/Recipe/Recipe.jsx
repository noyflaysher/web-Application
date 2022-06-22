import React, { useContext, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import {
  AiOutlineLike,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Modal from "../Map/Modal";
import Ingredients from "../Ingredient/IngredientsList";
import Button from "../Button/Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { LogContext } from "../../Context/LogContext";

import "./Recipe.css";

const ingredient = [
  {
    quantity: "0.5",
    unit: "cup",
    description: "bread flour",
  },
  {
    quantity: "0.5",
    unit: "cup",
    description: "bread flour",
  },
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

//Json Recipe{
// imageSrc:
// title:
// time:
// servings:
//ingrediants[]:
//description:
//publisher:
// link
//}

function Recipe(props) {
  const isConnected = useContext(LogContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const editHandler = {};

  const showDeteleWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  return (
    <>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="recipe__modal-actions"
        footer={
          <React.Fragment>
            <Button
              onClick={cancelDeleteHandler}
              className="btn--blue btn--cancel"
            >
              CANCEL
            </Button>
            <Button onClick={confirmDeleteHandler} className="btn--blue">
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this recipe? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <div className="recipe">
        <div className="recipe__header">
          <img className="recipe__image" src={props.image} />
          <h1>
            <span className="recipe__title">{props.title}</span>
          </h1>
        </div>
        <div className="bottons">
          {isConnected.isLoggedIn && (
            <>
              <Button onClick={editHandler} className="btn--blue btn--edit">
                EDIT
              </Button>
              <Button
                onClick={showDeteleWarningHandler}
                className="btn--blue btn--del"
              >
                DELETE
              </Button>
            </>
          )}
        </div>
        <div className="recipe__details">
          <div className="recipe__info">
            <span className="recipe__info-text">Preparation Time: </span>
            <span className="recipe__info-data">
              {`${props.time} minutes`}
              <div>
                {"\u00A0"} {"\u00A0"}
              </div>
              <BiTimeFive />
            </span>
          </div>
          <div className="recipe__info">
            <span className="recipe__info-text">The recipe is for: </span>
            <span className="recipe__info-data">
              {`${props.servings} servings `}
              <div>
                {" "}
                {"\u00A0"} {"\u00A0"}
              </div>
              <PeopleAltIcon />
            </span>
          </div>
          <div className="recipe__info">
            <span className="recipe__info-text">publisher:</span>
            <span className="recipe__info-data">
              {props.publisher}
              <div>
                {" "}
                {"\u00A0"} {"\u00A0"}
              </div>
              <BorderColorIcon />
            </span>
          </div>
        </div>
        <div className="recipe__flex">
          <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <Ingredients data={ingredient} />
          </div>

          <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <div className="recipe__description">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        {/* <div>
        <Button className="btn--blue btn--blue-direction">
          <a href={props.link} target="_blank">
            <span>Directions</span>
          </a>
        </Button>
      </div> */}
      </div>
    </>
  );
}

export default Recipe;

// const [numServings, setNumServings] = useState(props.servings);
// const [ingredients, setIngredients] = useState(props.ingredients);

// const addServingsHandler = function () {
//   setNumServings(+numServings + 1);
//   updateIngredientsPlus();
// };

// const lessServingsHandler = function () {
//   if (numServings === 1) {
//     return;
//   }
//   setNumServings(+numServings - 1);
//   updateIngredientsMinus();
// };

// const updateIngredientsPlus = function (prevIng) {
//   setIngredients(
//     ingredients.map((ing) => {
//       let num = (
//         (parseFloat(ing.quantity) * numServings) /
//         (numServings - 1)
//       ).toFixed(2);
//       return {
//         quantity: num,
//         unit: ing.unit,
//         description: ing.description,
//       };
//     })
//   );
// };

// const updateIngredientsMinus = function (prevIng) {
//   console.log(ingredients);
//   if (numServings === 0) {
//     console.log("empty");
//     setIngredients(
//       ingredients.map((ing) => {
//         return {
//           quantity: "0",
//           unit: ing.unit,
//           description: ing.description,
//         };
//       })
//     );
//     return;
//   }
//   setIngredients(
//     ingredients.map((ing) => {
//       let num = (
//         (parseFloat(ing.quantity) * numServings) /
//         (numServings + 1)
//       ).toFixed(2);
//       return {
//         quantity: num,
//         unit: ing.unit,
//         description: ing.description,
//       };
//     })
//   );
// };
