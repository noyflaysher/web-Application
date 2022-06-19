import React, { useState } from "react";
import Map from "../map/Map";
import Card from "../UI/Card";
import Modal from "../map/Modal";
import Image from "./ElementUI/Image";
import Button from "./Button/Button";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./RecipeItem.css";
const RecipeItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="recipe-item__modal-content"
        footerClass="recipe-item__modal-actions"
        footer={
          <Button
            className="btn--blue btn--blue-close"
            onClick={closeMapHandler}
          >
            CLOSE
          </Button>
        }
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="recipe-item">
        <Card className="recipe-item__content">
          <a href="#">
            <div className="recipe-item__publisher-image">
              <Image image={props.imageSrc} alt={props.title} />
            </div>
            <div className="recipe-item__recipe-info">
              <h2>{props.title}</h2>
              <div className="recipe-item-row">
                <h4 className="recipe-item__publisher">
                  Preparation time: {props.time} Hours
                </h4>
                <Button className="btn-map" onClick={openMapHandler}>
                  <FaMapMarkerAlt />
                </Button>
              </div>
            </div>
          </a>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default RecipeItem;
