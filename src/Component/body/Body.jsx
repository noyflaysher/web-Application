import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipe from "./Recipe/Recipe";
import Result from "./Result";
import ChosenRecipe from "./ChosenRecipe";
import FavoriteRecipe from "./FavoriteRecipe";

import "./Body.css";

const ingredient = [
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

const RECIPE_ARR = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    id: "pizza",
    title: "pizza",
    time: 3,
    servings: 3,
    ingrediants: { ingredient },
    description: "homemade pizza",
    publisher: "Noy",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://www.thechunkychef.com/wp-content/uploads/2016/02/Roasted-Garlic-Cream-Sauce-7-feat-500x375.jpg",
    id: "Paste_with_cream_sauce",
    title: "Paste with cream sauce",
    time: 3,
    servings: 3,
    ingrediants: { ingredient },
    description: "Paste with cream sauce",
    publisher: "Maya",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/e2/7f/9b/hamburger-with-foie-gras.jpg",
    id: "Kosher_Burger",
    title: "Kosher Burger",
    time: 3,
    servings: 3,
    ingrediants: { ingredient },
    description: "Kosher Burger",
    publisher: "SAAR",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://do94x2ubilg42sdsl48mfdqk-wpengine.netdna-ssl.com/wp-content/uploads/44890096345_3612433c15_b.jpg",
    id: "Vegetarian_sushi",
    title: "Vegetarian sushi",
    time: 3,
    servings: 3,
    ingrediants: { ingredient },
    description: "Vegetarian sushi",
    publisher: "Oz",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];
function Body() {
  return (
    <>
      <div className="body__continer">
        <Router>
          <div className="body__result-continer">
            <Result items={RECIPE_ARR} />
          </div>
          <Switch>
            <div className="body__recipe-continer">
              <Route path="/" exact>
                <FavoriteRecipe />
              </Route>
              <Route path="/:id" exact>
                <ChosenRecipe />
              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Body;
