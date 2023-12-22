import React, { FC } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

type AppPropsType = {};

const App: FC<AppPropsType> = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
