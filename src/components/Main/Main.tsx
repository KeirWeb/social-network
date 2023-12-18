import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import s from "./Main.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { StoreType } from "../../redux/state";

type MainPropsType = {
  store: StoreType;
};

const Main: FC<MainPropsType> = ({ store }) => {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.container}>
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={store.getState().profilePage}
              dispatch={store.dispatch.bind(store)}
            />
          )}
        />
        <Route path="/messages" render={() => <Messages />} />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={store.getState().dialogPage}
              dispatch={store.dispatch.bind(store)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Main;
