import React, { FC, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import { usersApi } from "./api/api";

type AppPropsType = {};

const App: FC<AppPropsType> = () => {
  useEffect(() => {
    usersApi.getUsers().then((res) => console.log(res));
  }, []);
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
