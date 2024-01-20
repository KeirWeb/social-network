import React from "react";
import { Dispatch } from "redux";
import { AppRootState } from "../../../redux/redux-store";
import { connect } from "react-redux";
import {
  UserType,
  changeCurrentPageAC,
  changeIsFetchingAC,
  changeTotalPagesCountAC,
  setUsersAC,
  toggleFollowedAC,
} from "../../../redux/users-reducer";
import UsersApiContainer from "./UsersApiContainer";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalPageCount: state.usersPage.totalPageCount,
    isFetching: state.usersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  toggleFollowed: toggleFollowedAC,
  setUsers: setUsersAC,
  changeCurrentPage: changeCurrentPageAC,
  changeTotalPageCount: changeTotalPagesCountAC,
  changeIsFetching: changeIsFetchingAC,
})(UsersApiContainer);

export default UsersContainer;
