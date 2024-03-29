import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { loginTC } from "../../../redux/auth-reducer";
import { AppRootState } from "../../../redux/redux-store";

type LoginContainerProps = MapDispatchToPropsType & MapStateToPropsType;
class LoginContainer extends React.Component<LoginContainerProps> {
  render(): React.ReactNode {
    return <Login login={this.props.loginTC} isAuth={this.props.isAuth} />;
  }
}
type MapDispatchToPropsType = {
  loginTC: (
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: boolean
  ) => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
};
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginTC })(LoginContainer);
