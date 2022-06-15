import { Disclosure } from "@headlessui/react";
import {
  Search,
  SearchToggle,
  SearchButton,
  FiltersContainer,
} from "./SearchBar.styled";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function SearchBar() {
  return (
    <Disclosure>
      <Disclosure.Button as={SearchToggle}>&#8595;</Disclosure.Button>
      <Search></Search>
      <SearchButton>&#10003;</SearchButton>
      <Disclosure.Panel as={FiltersContainer}>
        <FormGroup>
          <FormControlLabel control={<Checkbox size="small" />} label="spicy" />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="vegetarian"
          />
          <FormControlLabel control={<Checkbox size="small" />} label="vegan" />
        </FormGroup>
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default SearchBar;
