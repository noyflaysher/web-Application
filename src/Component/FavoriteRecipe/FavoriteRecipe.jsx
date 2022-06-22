import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Recipe from "../Recipe/Recipe";
import "./FavoriteRecipe.css";
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
const FavoriteRecipe = () => {
  const favRecipesArr = RECIPE_ARR; // get from db size=4 top recipe
  console.log(favRecipesArr);
  return (
    <div className="fav-recipes__contenier">
      <header className="fav-recipes__header">
        <h2>The Favorite Recipes Of The Week</h2>
      </header>
      <Carousel>
        <div className="fav-recipes__recipe">
          <Recipe
            image={favRecipesArr[0].imageSrc}
            title={favRecipesArr[0].title}
            time={favRecipesArr[0].time}
            servings={favRecipesArr[0].servings}
            ingredients={ingredient}
            description={favRecipesArr[0].description}
            publisher={favRecipesArr[0].publisher}
            link={favRecipesArr[0].link}
          />
        </div>
        <div className="fav-recipes__recipe">
          <Recipe
            image={favRecipesArr[1].imageSrc}
            title={favRecipesArr[1].title}
            time={favRecipesArr[1].time}
            servings={favRecipesArr[1].servings}
            ingredients={ingredient}
            description={favRecipesArr[1].description}
            publisher={favRecipesArr[1].publisher}
            link={favRecipesArr[1].link}
          />
        </div>
        <div className="fav-recipes__recipe">
          <Recipe
            image={favRecipesArr[2].imageSrc}
            title={favRecipesArr[2].title}
            time={favRecipesArr[2].time}
            servings={favRecipesArr[2].servings}
            ingredients={ingredient}
            description={favRecipesArr[2].description}
            publisher={favRecipesArr[2].publisher}
            link={favRecipesArr[2].link}
          />
        </div>
        <div className="fav-recipes__recipe">
          <Recipe
            image={favRecipesArr[3].imageSrc}
            title={favRecipesArr[3].title}
            time={favRecipesArr[3].time}
            servings={favRecipesArr[3].servings}
            ingredients={ingredient}
            description={favRecipesArr[3].description}
            publisher={favRecipesArr[3].publisher}
            link={favRecipesArr[3].link}
          />
        </div>
      </Carousel>
    </div>
  );
};
export default FavoriteRecipe;
