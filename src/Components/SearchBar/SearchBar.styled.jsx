import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  color: inherit;
  width: 20rem;
  height: 2.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 6.5rem;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #fbdb89, #f48982);
  border-radius: 1.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s;
  right: 3rem;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchToggle = styled.button`
  height: 2.5rem;
  width: 2.65rem;
  border-radius: 50% 0 0 50%;
  border: none;
  background-image: linear-gradient(to bottom right, #fbdb89, #f48982);
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FiltersContainer = styled.div`
  background: #f9f5f3;
  width: 26rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  span {
    padding: 0.25rem;
    margin-left: 0.5rem;
  }
`;
