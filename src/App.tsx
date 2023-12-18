import React, { FC } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { StoreType } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

type AppPropsType = {
  store: StoreType;
};

const App: FC<AppPropsType> = ({ store }) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Main store={store} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
