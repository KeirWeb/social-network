import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { AppRootState } from "./redux/redux-store";
import spiner from "../src/assets/images/Spinner.gif";

type AppProps = MapStateToProps & {
  initializeApp: () => void;
};
class App extends React.Component<AppProps> {
  componentDidMount(): void {
    this.props.initializeApp();
  }
  render(): React.ReactNode {
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        {this.props.isInitialized ? <Main /> : <img src={spiner} />}
        <Footer />
      </div>
    );
  }
}

type MapStateToProps = {
  isInitialized: boolean;
};
const mapStateToProps = (state: AppRootState): MapStateToProps => ({
  isInitialized: state.app.isInitialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
