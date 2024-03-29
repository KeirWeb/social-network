import { Component, ReactNode } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppRootState } from "../../redux/redux-store";
import { logoutTC } from "../../redux/auth-reducer";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderContainer extends Component<HeaderContainerPropsType> {
  render(): ReactNode {
    return <Header isAuth={this.props.isAuth} logout={this.props.logoutTC} />;
  }
}
type MapStateToPropsType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  logoutTC: () => void;
};
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logoutTC })(HeaderContainer);
