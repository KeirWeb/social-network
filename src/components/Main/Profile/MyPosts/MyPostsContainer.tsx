import React from "react";
import {
  ProfileReducer,
  addPostAC,
  onChangeNewPostTextValueAC,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { AppRootState } from "../../../../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type MapStateToProps = {
  profilePage: ProfileReducer;
};

type MapDispatchToProps = {
  addPost: (title: string) => void;
  onChangeNewPostTextValue: (value: string) => void;
};

export type MyPostsPropsType = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: AppRootState): MapStateToProps => {
  return {
    profilePage: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: (title: string) => {
      dispatch(addPostAC(title));
    },
    onChangeNewPostTextValue: (value: string) => {
      dispatch(onChangeNewPostTextValueAC(value));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
