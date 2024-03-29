import React from "react";
import {
  ProfileReducer,
  addPostAC,
  onChangeNewPostTextValueAC,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { AppRootState } from "../../../../redux/redux-store";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, {
    addPost: addPostAC,
    onChangeNewPostTextValue: onChangeNewPostTextValueAC,
  })
)(MyPosts);
