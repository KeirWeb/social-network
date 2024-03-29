import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
  dialogPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

//@ts-ignore
window.store = store;
