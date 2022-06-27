import React, {useContext,useState} from "react";

const LoginContext = React.createContext();
const UpdateLoginContext = React.createContext();

export function UseLoginState() {
    return useContext(LoginContext);
} 
export function UseUpdateLoginState() {
    return useContext(UpdateLoginContext);
} 
export function Session({children}) {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    function toggleLoginState() {
        setIsLoggedIn(prevLoginState => !prevLoginState);
    }

  return (
    <LoginContext.Provider value={isLoggedIn}>
        <UpdateLoginContext.Provider value={toggleLoginState}>
        {children}
        </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  )
}