import { Dispatch } from "redux";
import { changeIsAuthTC } from "./auth-reducer";

const initialState = {
  isInitialized: false,
};
type AuthReducerType = typeof initialState;
export const appReducer = (
  state: AuthReducerType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "SET-IS-INITIALIZED":
      return { ...state, isInitialized: action.isInitialized };

    default:
      return state;
  }
};

const setInitialized = (isInitialized: boolean) => {
  return { type: "SET-IS-INITIALIZED", isInitialized } as const;
};

export const initializeApp = () => (dispatch: Dispatch) => {
  //@ts-ignore
  dispatch(changeIsAuthTC()).then((res) => {
    dispatch(setInitialized(true));
  });
};

type ActionsType = ReturnType<typeof setInitialized>;
