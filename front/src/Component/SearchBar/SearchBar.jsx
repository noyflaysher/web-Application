import "./SearchBar.css";
import { Disclosure } from "@headlessui/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "../../Images/search.png";
import FilterIcon from "../../Images/filter.png";
import { UseSearch } from "../../Context/Session.jsx";
import React, { useEffect } from "react";

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

function SearchBar() {
  const setResult = UseSearch().setResult;
  return (
    <div>
      <Disclosure>
        <div className="search-container">
          <Disclosure.Button className="search-toggle grow">
            <img src={FilterIcon} width={30} alt="filter" />
          </Disclosure.Button>
          <input className="search" placeholder=" search for a recipe..." />
          <button
            className="search-button grow"
            onClick={() => setResult(RECIPE_ARR)}
          >
            <img src={SearchIcon} width={35} alt="search" />
            SEARCH
          </button>
        </div>
        <Disclosure.Panel as={FiltersContainer} />
      </Disclosure>
    </div>
  );
}

function FiltersContainer() {
  return (
    <div className="filter-container">
      <FormGroup>
        <FormControlLabel control={<FilterBox />} label="spicy" />
        <FormControlLabel control={<FilterBox />} label="vegetarian" />
        <FormControlLabel control={<FilterBox />} label="vegan" />
      </FormGroup>
    </div>
  );
}

function FilterBox() {
  return (
    <Checkbox
      size="small"
      sx={{
        color: "#F59583",
        "&.Mui-checked": {
          color: "#F8BB86",
        },
      }}
    />
  );
}

export default SearchBar;
