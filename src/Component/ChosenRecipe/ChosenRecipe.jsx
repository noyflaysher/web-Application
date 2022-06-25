import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
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
  {
    quantity: "0.5",
    unit: "cup",
    description: " flour",
  },
  {
    quantity: "0.8",
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
];

const RECIPE_ARR = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkm8s8JbMGJejw7OZMFu_Qmf4oPKTtNQ9sA&usqp=CAU",
    title: "pizza",
    id: "pizza",
    time: 3,
    servings: "3",
    ingrediants: { ingredient },
    description:
      "made the bazek!! put all the bazex  in mixer. play the mixer 10 min.",
    publisher: "Noy Flysher",
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
    title: "Paste with cream sauce",
    id: "Paste_with_cream_sauce",
    time: 3,
    servings: "3",
    ingrediants: { ingredient },
    description: "Paste with cream sauce",
    publisher: "Maya Koma",
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
    title: "Kosher Burger",
    id: "Kosher_Burger",
    time: 3,
    servings: "3",
    ingrediants: { ingredient },
    description: "Kosher Burger",
    publisher: "SAAR Moseri",
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
    title: "Vegetarian sushi",
    id: "Vegetarian_sushi",
    time: 3,
    servings: "3",
    ingrediants: { ingredient },
    description: "Vegetarian sushi",
    publisher: "Oz Gemer",
    link: "#",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];

const ingrediants = [
  "0.5 cup bread flour",
  "2 lb oil",
  "3.5 tps dry active yeast",
];

const ChosenRecipe = () => {
  const id = useParams().id;
  const loadedRecipe = RECIPE_ARR.filter((recipe) => recipe.id === id);
  return (
    <Recipe
      image={loadedRecipe[0].imageSrc}
      title={loadedRecipe[0].title}
      time={loadedRecipe[0].time}
      servings={loadedRecipe[0].servings}
      ingrediants={ingrediants}
      description={loadedRecipe[0].description}
      publisher={loadedRecipe[0].publisher}
      link={loadedRecipe[0].link}
    />
  );
};
export default ChosenRecipe;
