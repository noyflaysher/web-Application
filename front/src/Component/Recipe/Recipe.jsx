import React, { useContext, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import Modal from "../Modal-Backdrop/Modal";
import Ingredients from "../Ingredient/IngredientsList";
import Button from "../Button/Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { LogContext } from "../../Context/LogContext";
import "./Recipe.css";
import EditRecipe from "./EditRecipe";

function Recipe(props) {
  const isConnected = useContext(LogContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const showDeteleWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  const editHandler = () => setEditMode(!editMode);

  return (
    <>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="recipe__modal-actions"
        footer={
          <React.Fragment>
            <Button onClick={cancelDeleteHandler} className="btn btn--cancel">
              CANCEL
            </Button>
            <Button onClick={confirmDeleteHandler} className="btn">
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
          <img className="recipe__image" alt=" " src={props.image} />
          <h1>
            <span className="recipe__title">{props.title}</span>
          </h1>
        </div>
        <div className="bottons">
          {isConnected.isLoggedIn && (
            <>
              <Button onClick={editHandler} className="btn btn--edit">
                EDIT
              </Button>
              <Button
                onClick={showDeteleWarningHandler}
                className="btn btn--del"
              >
                DELETE
              </Button>
            </>
          )}
        </div>
        {editMode ? (
          <EditRecipe {...props} exitEditMode={editHandler} />
        ) : (
          <ShowRecipe {...props} />
        )}
      </div>
    </>
  );
}

function ShowRecipe(props) {
  return (
    <>
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
          <Ingredients data={props.ingrediants} />
        </div>
        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <div className="recipe__description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
