import React from "react";
import {
  DialogsReducer,
  addMessageAC,
  onChangeNewMessageTextValueAC,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppRootState } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  dialogPage: DialogsReducer;
};

type MapDispatchToPropsType = {
  onChangeNewMessageValue: (value: string) => void;
  addMessage: () => void;
};

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChangeNewMessageValue: (value: string) => {
      dispatch(onChangeNewMessageTextValueAC(value));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
