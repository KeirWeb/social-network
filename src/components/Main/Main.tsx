import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import s from "./Main.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import { Route } from "react-router-dom";
import { StoreType } from "../../redux/state";
import DialogsContainer from "./Dialogs/DialogsContainer";

type MainPropsType = {};

const Main: FC<MainPropsType> = () => {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.container}>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messages" render={() => <Messages />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
};

export default Main;
