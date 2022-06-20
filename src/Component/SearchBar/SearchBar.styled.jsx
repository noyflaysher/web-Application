import styled from "styled-components";

export const DisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 36rem;
`;

export const Search = styled.input`
  width: 25rem;
  height: 3.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: left;
  padding: 1rem;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  height: 3.5rem;
  width: 12rem;
  cursor: pointer;
  background-image: linear-gradient(to right bottom, #e0ffff, #87cefa);
  border-radius: 1.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s;
  right: 2rem;
  padding-right: 0.5rem;
  position: relative;
  &:hover {
    transform: scale(1.1);
    font-size: 1.6rem;
    background: #f4aa8a;
  }
`;

export const SearchToggle = styled.button`
  height: 3.5rem;
  width: 5rem;
  border-radius: 50% 0 0 50%;
  border: none;
  background-image: linear-gradient(to right bottom, #e0ffff, #87cefa);
  cursor: pointer;
  padding: 0.3rem 0 0 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    font-size: 1.6rem;
    background: #f4aa8a;
  }
`;

export const FiltersContainer = styled.div`
  position: absolute;
  left: 0;
  top: 4rem;
  background: #f9f5f3;
  width: 34rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  span {
    padding: 0.25rem;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-family: inherit;
  }
`;
