import React from "react";
import Recipe from "./Recipe";
import Result from "./Result";
import "./Body.css";

const RECIPE_ARR = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    title: "pizza",
    time: 3,
    servings: "3",
    ingrediants: ["1", "2", "3"],
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
    title: "Paste with cream sauce ",
    time: 3,
    servings: "3",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
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
    title: " Kosher Burger",
    time: 3,
    servings: "3",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
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
    title: "Vegetarian  sushi",
    time: 3,
    servings: "3",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
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
    <div className="body__continer">
      <div className="body__result-continer">
        <Result items={RECIPE_ARR} />
      </div>
      <div className="body__recipe-continer">
        <Recipe />
      </div>
    </div>
  );
}

export default Body;
