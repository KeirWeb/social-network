import { Dispatch } from "redux";
import { AuthService, IAuthPayload } from "../../services/AuthService";
import { AuthActionTypes, IAuth } from "../../types/IAuth.interface";
import { errorHandler } from "../../utils/errorHandler";
import { CombinedActions } from "../store";
import { setAppErrorAction, setAppStatusAction } from "./appAction";

export const setAuthDataAction = (data: IAuth) =>
  ({
    type: AuthActionTypes.SET_AUTH_DATA,
    data,
  } as const);
export const loginAction = (userID: number) =>
  ({
    type: AuthActionTypes.LOGIN,
    userID,
  } as const);
export const logoutAction = () => ({ type: AuthActionTypes.LOGOUT } as const);

export const getCaptchaUrlAction = (captchaUrl: string) =>
  ({ type: AuthActionTypes.GET_CUPTCHA_URL, captchaUrl } as const);

export const authMeThunk =
  () => async (dispatch: Dispatch<CombinedActions>) => {
    try {
      const res = await AuthService.me();
      if (!res.data.resultCode) {
        dispatch(setAuthDataAction(res.data.data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
export const loginThunk = (payload: IAuthPayload) => async (dispatch: any) => {
  try {
    const res = await AuthService.login(payload);
    if (res.data.resultCode === 0) {
      dispatch(loginAction(res.data.data.userID));
    } else {
      if (res.data.resultCode === 10) {
        debugger;
        dispatch(getCaptchaUrlThunk());
      }
      dispatch(setAppErrorAction(res.data.messages[0]));
      dispatch(setAppStatusAction("failed"));
    }
  } catch (error) {
    errorHandler(error, dispatch);
  }
};

export const logoutThunk =
  () => async (dispatch: Dispatch<CombinedActions>) => {
    try {
      const res = await AuthService.logout();
      if (!res.data.resultCode) {
        dispatch(logoutAction());
      } else {
        dispatch(setAppErrorAction(res.data.messages[0]));
        dispatch(setAppStatusAction("failed"));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };

const getCaptchaUrlThunk =
  () => async (dispatch: Dispatch<CombinedActions>) => {
    try {
      const res = await AuthService.getCaptcha();
      dispatch(getCaptchaUrlAction(res.data.url));
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
