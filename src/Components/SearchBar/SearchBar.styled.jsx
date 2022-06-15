import styled from "styled-components";

export const Search = styled.input`
  width: 10rem;
  height: 2.5rem;
  border: none;
  background: red;
  padding: 0;
  margin: 0;
`;

export const SearchButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0 50% 50% 0;
  border: none;
  background: blue;
  padding: 0;
  margin-top: -1px;
`;

export const SearchToggle = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50% 0 0 50%;
  border: none;
  background: cyan;
  padding: 0;
  margin: 0;
`;

export const FiltersContainer = styled.div`
  background: yellow;
  width: 15rem;
  padding: 0.5rem;
  margin: 0;
  box-sizing: border-box;
`;
