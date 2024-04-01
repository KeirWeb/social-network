import {
  AuthAction,
  AuthActionTypes,
  IAuth,
  IEntityAuth,
} from "../../types/IAuth.interface";

const initialState: IEntityAuth = {
  data: {} as IAuth,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): IEntityAuth => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_DATA:
      return { ...state, data: action.data, isAuth: true };
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuth: true,
        data: { ...state.data, id: action.userID },
      };
    case AuthActionTypes.LOGOUT:
      return { ...state, isAuth: false };
    case AuthActionTypes.GET_CUPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};
