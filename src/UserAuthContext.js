import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//We want to integrate UserAuth and UserAuthContext
const userAuthContext = createContext(null);
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  function logIn(account, password) {
    return signInWithEmailAndPassword(auth, account, password);
  }
  function logOut() {
    return signOut(auth);
  }

  return (
    <userAuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userAuthContext.Provider>
    //the value here can save an object, we can also save login function and logout function here
  );
}

export function useUserAuth() {
  return useContext(userAuthContext); //now, the function will return an object with user,logIn function and logOut function
  //we need to destruct the returning object
}
