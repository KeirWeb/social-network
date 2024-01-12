import React from "react";
import { Dispatch } from "redux";
import { AppRootState } from "../../../redux/redux-store";
import Users from "./UsersApiContainer";
import { connect } from "react-redux";
import {
  UserReducerType,
  UserType,
  changeCurrentPageAC,
  changeTotalPagesCountAC,
  setUsersAC,
  toggleFollowedAC,
} from "../../../redux/users-reducer";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
};
type MapDispatchToPropsType = {
  toggleFollowed: (id: number) => void;
  setUsers: (users: UserType[]) => void;
  changeCurrentPage: (page: number) => void;
  changeTotalPageCount: (pages: number) => void;
};
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPageCount: state.usersPage.totalPageCount,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    toggleFollowed: (id: number) => {
      dispatch(toggleFollowedAC(id));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    changeCurrentPage: (page: number) => {
      dispatch(changeCurrentPageAC(page));
    },
    changeTotalPageCount: (pages: number) => {
      dispatch(changeTotalPagesCountAC(pages));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
