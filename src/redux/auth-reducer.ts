import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

export type AuthReducerType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: "SET-AUTH-USER-DATA";
  date: {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};
type ChangeIsAuthActionType = {
  type: "CHANGE-IS-AUTH";
};
type ActionsType = SetAuthUserDataActionType | ChangeIsAuthActionType;
const initialState = {
  isAuth: false,
} as AuthReducerType;
export const authReducer = (
  state: AuthReducerType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "SET-AUTH-USER-DATA":
      return { ...state, ...action.date };

    default:
      return state;
  }
};

export const setAuthUserDataAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => {
  return { type: "SET-AUTH-USER-DATA", date: { id, email, login, isAuth } };
};

export const changeIsAuthTC = () => (dispatch: Dispatch) => {
  return authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      const { id, email, login } = res.data.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  });
};

export const loginTC =
  (email: string, password: string, rememberMe?: boolean, captcha?: boolean) =>
  (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((res) => {
      if (res.data.resultCode === 0) {
        //@ts-ignore
        dispatch(changeIsAuthTC());
      } else {
        const message =
          res.data.messages.length > 0 ? res.data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };

export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false));
    }
  });
};
