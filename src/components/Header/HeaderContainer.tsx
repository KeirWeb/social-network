import { Component, ReactNode } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppRootState } from "../../redux/redux-store";
import { Dispatch } from "redux";
import {
  AuthReducerType,
  changeIsAuthAC,
  setAuthUserDataAC,
} from "../../redux/auth-reducer";
import axios from "axios";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ResponseType = {
  data: AuthReducerType;
  resultCode: number;
  messages: string[];
};
class HeaderContainer extends Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    axios
      .get<ResponseType>(
        "https://social-network.samuraijs.com/api/1.0/auth/me",
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          const { id, email, login } = res.data.data;
          this.props.setAuthUserData(id, email, login);
          this.props.changeIsAuth();
        }
      });
  }
  render(): ReactNode {
    return <Header isAuth={this.props.isAuth} />;
  }
}
type MapStateToPropsType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void;
  changeIsAuth: () => void;
};
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    setAuthUserData(id: number, email: string, login: string) {
      dispatch(setAuthUserDataAC(id, email, login));
    },
    changeIsAuth() {
      dispatch(changeIsAuthAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
