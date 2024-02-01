import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import s from "./Main.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import { Route } from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";

type MainPropsType = {};

const Main: FC<MainPropsType> = () => {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.container}>
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/messages" render={() => <Messages />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default Main;
