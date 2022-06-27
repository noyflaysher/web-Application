import React, { useContext, useState } from "react";

const LoginContext = React.createContext();
const UpdateLoginContext = React.createContext();

const SearchContext = React.createContext();

export function UseLoginState() {
  return useContext(LoginContext);
}
export function UseUpdateLoginState() {
  return useContext(UpdateLoginContext);
}
export function UseSearch() {
  return useContext(SearchContext);
}

export function Session({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function toggleLoginState() {
    setIsLoggedIn((prevLoginState) => !prevLoginState);
  }
  const setResultState = (arrResult) => setSearchResults(arrResult);

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <UpdateLoginContext.Provider value={toggleLoginState}>
        <SearchContext.Provider
          value={{ result: searchResults, setResult: setResultState }}
        >
          {children}
        </SearchContext.Provider>
      </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  );
}
