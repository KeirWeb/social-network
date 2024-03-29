import React from "react";
import {
  DialogsReducer,
  addMessageAC,
  onChangeNewMessageTextValueAC,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppRootState } from "../../../redux/redux-store";
import { Dispatch, compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

type MapStateToPropsType = {
  dialogPage: DialogsReducer;
  auth: boolean;
};

type MapDispatchToPropsType = {
  onChangeNewMessageValue: (value: string) => void;
  addMessage: (message: string) => void;
};

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogPage: state.dialogPage,
    auth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChangeNewMessageValue: (value: string) => {
      dispatch(onChangeNewMessageTextValueAC(value));
    },
    addMessage: (message: string) => {
      dispatch(addMessageAC(message));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
