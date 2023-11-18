import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./Home";
import AddBook from "./AddBook";
import ShowBook from "./ShowBook";
import { UserAuthContextProvider } from "./UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";
//As routes become more and more, most of the pages we need to verify the user, that means we have to pass the user object to everypage
// even every component, it is too boring, right? How to solve it? Context Hook is an ideal way for it

//use Context hook
//https://react.dev/reference/react/useContext

//step1 create a context
//const userAuthContext = createContext(null);

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  // }, []);
  return (
    <UserAuthContextProvider>
      {/*step2: use provider to store data */}
      {/* <userAuthContext.Provider value={user}> */}
      {/*step3: now we can use useContext(userAuthContext) to access user in every component*/}

      {/* we need to access userAuthContext in all the components. why not put all the context related code in one file?
        we can use a component UserAuthContextProvider to substitute userAuthContext.Provider
        and useUserAuth() to access data
      */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/addbook"
            element={
              <ProtectedRoute>
                {/*we use protectedroute here so that we don't have to verify whether user loged in or not */}
                <AddBook></AddBook>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/book/:id"
            element={
              <ProtectedRoute>
                <ShowBook></ShowBook>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </userAuthContext.Provider> */}
    </UserAuthContextProvider>
  );
}

export default App;
