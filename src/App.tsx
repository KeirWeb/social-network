import React, { FC } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {};

const App: FC<AppPropsType> = () => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
