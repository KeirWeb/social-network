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
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalPageCount,
  getUsers,
} from "../../../redux/users-selectors";

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
    users: getUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    totalPageCount: getTotalPageCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
