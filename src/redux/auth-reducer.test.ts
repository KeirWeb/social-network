import {
  AuthReducerType,
  authReducer,
  changeIsAuthAC,
  setAuthUserDataAC,
} from "./auth-reducer";

let startState: AuthReducerType;
beforeEach(() => {
  startState = {
    id: 1,
    email: "2",
    login: "2",
    isAuth: false,
  };
});

test("reducer should set auth user data", () => {
  const userDate = { id: 1, email: "test email", login: "test login" };
  const { id, email, login } = userDate;
  const endState = authReducer(startState, setAuthUserDataAC(id, email, login));

  expect(endState.id).toBe(id);
  expect(endState.email).toBe(email);
  expect(endState.login).toBe(login);
  expect(endState.isAuth).toBe(startState.isAuth);
});

test("reducer should change isAuth", () => {
  const endState = authReducer(startState, changeIsAuthAC());

  expect(endState.isAuth).toBe(!startState.isAuth);
});
