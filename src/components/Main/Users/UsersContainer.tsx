import React from "react";
import { AppRootState } from "../../../redux/redux-store";
import { connect } from "react-redux";
import {
  UserType,
  changeCurrentPageAC,
  changeIsFetchingAC,
  changeTotalPagesCountAC,
  getUsersTC,
  setUsersAC,
  toggleFollowedTC,
  toggleFollowingInProgressAC,
} from "../../../redux/users-reducer";
import UsersApiContainer from "./UsersApiContainer";
import { changeCurrentUserIdAC } from "../../../redux/profile-reducer";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
  followingInProgress: number[];
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPageCount: state.usersPage.totalPageCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  setUsers: setUsersAC,
  changeCurrentPage: changeCurrentPageAC,
  changeTotalPageCount: changeTotalPagesCountAC,
  changeIsFetching: changeIsFetchingAC,
  changeCurrentUserId: changeCurrentUserIdAC,
  toggleFollowingInProgress: toggleFollowingInProgressAC,
  getUsers: getUsersTC,
  toggleFollowed: toggleFollowedTC,
})(UsersApiContainer);

export default UsersContainer;
