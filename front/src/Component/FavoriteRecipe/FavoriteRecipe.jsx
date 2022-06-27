import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./FavoriteRecipe.css";
import FavoriteRecipeItem from "./FavoriteRecipeItem";
import SocialSharing from "../Social/SocialSharing";

const RECIPE_ARR = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    id: "pizza",
    title: "pizza",
    time: 3,
    servings: 3,
    ingrediants: [
      "0.5 cup bread flour",
      "2 lb oil",
      "3.5 tps dry active yeast",
    ],
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
    ingrediants: [
      "0.5 cup bread flour",
      "2 lb oil",
      "3.5 tps dry active yeast",
    ],
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
    ingrediants: [
      "0.5 cup bread flour",
      "2 lb oil",
      "3.5 tps dry active yeast",
    ],
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
    ingrediants: [
      "0.5 cup bread flour",
      "2 lb oil",
      "3.5 tps dry active yeast",
    ],
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

const FavoriteRecipe = () => {
  const favRecipesArr = RECIPE_ARR; // get from db size=4 top recipe
  return (
    <div className="fav-recipes__container">
      <header className="fav-recipes__header">
        <h2>The Favorite Recipes Of The Week</h2>
      </header>
      <Carousel infiniteLoop className="carousel-root" showThumbs={false}>
        {favRecipesArr.map((recp, index) => {
          return (
            <div key={index} className="fav-recipes__recipe">
              <FavoriteRecipeItem
                key={index}
                id={recp.id}
                image={recp.imageSrc}
                title={recp.title}
                time={recp.time}
                servings={recp.servings}
                publisher={recp.publisher}
              />
            </div>
          );
        })}
      </Carousel>
      <video
        src="https://ak.picdn.net/shutterstock/videos/32420266/preview/stock-footage-eating-and-leisure-concept-group-of-people-having-dinner-at-table-with-food.webm"
        className="video"
        autoPlay
        loop
        controls
      ></video>
      <SocialSharing />
    </div>
  );
};
export default FavoriteRecipe;
