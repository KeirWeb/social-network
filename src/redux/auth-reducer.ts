import { Dispatch } from "redux";
import { usersApi } from "../api/api";

export type AuthReducerType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: "SET-AUTH-USER-DATA";
  date: {
    id: number;
    email: string;
    login: string;
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
    case "CHANGE-IS-AUTH":
      return { ...state, isAuth: !state.isAuth };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (
  id: number,
  email: string,
  login: string
): SetAuthUserDataActionType => {
  return { type: "SET-AUTH-USER-DATA", date: { id, email, login } };
};

export const changeIsAuthAC = (): ChangeIsAuthActionType => {
  return { type: "CHANGE-IS-AUTH" };
};

export const changeIsAuthTC = () => (dispatch: Dispatch) => {
  usersApi.authorizationСheck().then((res) => console.log(res.data));
};
