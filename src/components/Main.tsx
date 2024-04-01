import { Redirect, Route } from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import LoginContainer from "./Login/LoginContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Sidebar from "./Sidebar/Sidebar";
import UsersContainer from "./Users/UsersContainer";

const Main = () => {
  return (
    <main className="main">
      <Sidebar />
      <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/" render={() => <Redirect to={"/profile"} />} />
    </main>
  );
};

export default Main;
