import {
  getCaptchaUrlAction,
  loginAction,
  logoutAction,
  setAuthDataAction,
} from "../store/actions/authAction";

export enum AuthActionTypes {
  SET_AUTH_DATA = "SET_AUTH_DATA",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  GET_CUPTCHA_URL = "GET_CUPTCHA_URL",
}
export interface IAuth {
  id: number;
  email: string;
  login: string;
}

export interface IEntityAuth {
  data: IAuth;
  isAuth: boolean;
  captchaUrl: string | null;
}

export type AuthAction =
  | ReturnType<typeof setAuthDataAction>
  | ReturnType<typeof loginAction>
  | ReturnType<typeof logoutAction>
  | ReturnType<typeof getCaptchaUrlAction>;
