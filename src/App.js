import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-context";

function App() {

  const ctx = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoginInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoginInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn")
  //   setIsLoggedIn(false);
  // };

  return (
    // <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler}}>

    // </AuthContext.Provider>
    <>
      <MainHeader />
      <main>
      {/* onLogin={loginHandler} */}
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
        {/* onLogout={logoutHandler} */}
      </main>
    </>
  );
}

export default App;
