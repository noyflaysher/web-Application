import "./SearchBar.css";
import React from "react";
import { Disclosure } from "@headlessui/react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import SearchIcon from "../../Images/search.png";
import FilterIcon from "../../Images/filter.png";
import { UseSearch, UseSession } from "../../Context/Session.jsx";
import { orange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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

const identifiers = [
  "spicy",
  "vegan",
  "vegeterian",
  "dairy",
  "gluten free",
  "none",
];
function FiltersContainer() {
  const [value, setValue] = React.useState("none");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="filter-container">
      <FormControl className="radio-container">
        <FormLabel id="demo-controlled-radio-buttons-group">Filters:</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className="radio-group"
        >
          {identifiers.map((t, index) => {
            return (
              <FormControlLabel
                value={t}
                label={t}
                key={index}
                control={
                  <Radio
                    sx={{
                      color: orange[500],
                      "&.Mui-checked": {
                        color: orange[400],
                      },
                    }}
                  />
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Box className="servings">
        <TextField
          id="servings"
          type="number"
          label="No. of servings"
          variant="standard"
        />
      </Box>
    </div>
  );
}
export default SearchBar;
