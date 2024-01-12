import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;

//@ts-ignore
window.store = store;
