import React, { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../map/Map";
import Card from "../Card";
import Modal from "../map/Modal";
import Image from "./ElementUI/Image";

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
        footer={<button onClick={closeMapHandler}>CLOSE</button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="recipe-item">
        <Card className="recipe-item__content">
          <a href="#">
            <div class="recipe-item__publisher-image">
              <Image image={props.imageSrc} alt={props.title} />
            </div>
            <div className="recipe-item__recipe-info">
              <h2>{props.title}</h2>
              <h3 className="recipe-item__publisher">by: {props.publisher}</h3>
              <button inverse onClick={openMapHandler}>
                map
              </button>
            </div>
          </a>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default RecipeItem;
