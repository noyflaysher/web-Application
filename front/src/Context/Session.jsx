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
  const [userSession, setUserSession] = useState(
    localStorage.getItem("userSession") === null
      ? {
          userId: null,
          name: null,
          email: null,
          bookmarks: null,
        }
      : JSON.parse(localStorage.getItem("userSession"))
  );
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const setResultState = (arrResult) => setSearchResults(arrResult);
  React.useEffect(() => {
    userSession.userId === null
      ? localStorage.removeItem("userSession")
      : localStorage.setItem("userSession", JSON.stringify(userSession));
  }, [userSession]);
  return (
    <SessionContext.Provider
      value={{
        session: userSession,
        setSession: setUserSession,
        favoriteRecipe: favoriteRecipe,
        setFavoriteRecipe: setFavoriteRecipe,
      }}
    >
      <SearchContext.Provider
        value={{ result: searchResults, setResult: setResultState }}
      >
        {children}
      </SearchContext.Provider>
    </SessionContext.Provider>
  );
}
