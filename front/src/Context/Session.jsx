import React, { useContext, useState } from "react";

const SessionContext = React.createContext();
const SearchContext = React.createContext();

export function UseSession() {
  return useContext(SessionContext);
}
export function UseSearch() {
  return useContext(SearchContext);
}

export function Session({ children }) {
  const [userSession, setUserSession] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const setResultState = (arrResult) => setSearchResults(arrResult);

  return (
    <SessionContext.Provider
      value={{ session: userSession, setSession: setUserSession }}
    >
      <SearchContext.Provider
        value={{ result: searchResults, setResult: setResultState }}
      >
        {children}
      </SearchContext.Provider>
    </SessionContext.Provider>
  );
}
