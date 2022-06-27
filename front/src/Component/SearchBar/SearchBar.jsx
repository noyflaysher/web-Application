import "./SearchBar.css";
import { Disclosure } from "@headlessui/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "../../Images/search.png";
import FilterIcon from "../../Images/filter.png";

function SearchBar() {
  return (
    <div>
      <Disclosure>
        <div className="search-container">
          <Disclosure.Button as={SearchToggle} />
          <input className="search" placeholder=" search for a recipe..." />
          <button className="search-button grow">
            <>
              <img src={SearchIcon} width={35} alt="search" />
              SEARCH
            </>
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

function SearchToggle(props) {
  return (
    <button className="search-toggle grow" onClick={props.onClick}>
      <img src={FilterIcon} width={30} alt="filter" />
    </button>
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
