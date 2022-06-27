import styled from "styled-components";

export const DisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  width: 30rem;
  height: 5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  height: 5rem;
  width: 13rem;
  cursor: pointer;

  background-image: linear-gradient(to right, #ffe259, #ffa751);
  border-radius: 4rem;
  border: none;
  transition: all 0.2s;
  right: 2rem;
  padding-right: 0.5rem;
  position: relative;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
    font-size: 1.6rem;
  }
`;

export const SearchToggle = styled.button`
  height: 5rem;
  width: 6rem;
  border-radius: 50% 0 0 50%;
  border: none;
  background-image: linear-gradient(to right, #ffe259, #ffa751);
  cursor: pointer;
  padding: 0.3rem 0 0 0.5rem;
  transition: all 0.2s;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
    font-size: 1.6rem;
  }
`;

export const FiltersContainer = styled.div`
  position: absolute;
  top: 5.5rem;
  background: #f9f5f3;
  width: 45rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  z-index: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  span {
    padding: 0.25rem;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-family: inherit;
  }
`;