import React, { useContext, useState } from "react";

const LoginContext = React.createContext();
const UpdateLoginContext = React.createContext();
const SessionContext = React.createContext();
const SearchContext = React.createContext();

export function UseLoginState() {
  return useContext(LoginContext);
}
export function UseUpdateLoginState() {
  return useContext(UpdateLoginContext);
}
export function UseSession() {
  return useContext(SessionContext);
}
export function UseSearch() {
  return useContext(SearchContext);
}

export function Session({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function toggleLoginState() {
    setIsLoggedIn((prevLoginState) => !prevLoginState);
  }
  const [userSession, setUserSession] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const activateUserSession = (user) => setUserSession(user);
  const setResultState = (arrResult) => setSearchResults(arrResult);

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <UpdateLoginContext.Provider value={toggleLoginState}>
        <SessionContext.Provider
          value={{ session: userSession, setSession: setUserSession }}
        >
          <SearchContext.Provider
            value={{ result: searchResults, setResult: setResultState }}
          >
            {children}
          </SearchContext.Provider>
        </SessionContext.Provider>
        //{" "}
      </UpdateLoginContext.Provider>
      //{" "}
    </LoginContext.Provider>
  );
}
