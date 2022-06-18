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
    servings: "maya",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
    publisher: "maya noy oz saar",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    title: "pizza",
    time: 3,
    servings: "maya",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
    publisher: "maya noy oz saar",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    title: "pizza",
    time: 3,
    servings: "maya",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
    publisher: "maya noy oz saar",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    title: "pizza",
    time: 3,
    servings: "maya",
    ingrediants: ["1", "2", "3"],
    description: "homemade pizza",
    publisher: "maya noy oz saar",
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
