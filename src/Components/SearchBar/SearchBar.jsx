import "./SearchBar.css";
import { Disclosure } from "@headlessui/react";
import {
  Search,
  SearchToggle,
  SearchButton,
  FiltersContainer,
  SearchContainer,
} from "./SearchBar.styled";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "../../Images/search.png";
import FilterIcon from "../../Images/filter.png";

function SearchBar() {
  return (
    <Disclosure>
      <SearchContainer>
        <Disclosure.Button as={SearchToggle}>
          <img src={FilterIcon} width={30} alt="filter" />
        </Disclosure.Button>
        <Search placeholder=" search over 10,000+ recipes..." />
        <SearchButton>
          <>
            <img src={SearchIcon} width={35} alt="search" />
            SEARCH
          </>
        </SearchButton>
      </SearchContainer>
      <Disclosure.Panel as={FiltersContainer}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "#F59583",
                  "&.Mui-checked": {
                    color: "#F8BB86",
                  },
                }}
              />
            }
            label="spicy"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "#F59583",
                  "&.Mui-checked": {
                    color: "#F8BB86",
                  },
                }}
              />
            }
            label="vegetarian"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "#F59583",
                  "&.Mui-checked": {
                    color: "#F8BB86",
                  },
                }}
              />
            }
            label="vegan"
          />
        </FormGroup>
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default SearchBar;
