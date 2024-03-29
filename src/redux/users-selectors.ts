import { createSelector } from "reselect";
import { AppRootState } from "./redux-store";

export const getUsers = (state: AppRootState) => {
  return state.usersPage.users;
};

export const getPageSize = (state: AppRootState) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state: AppRootState) => {
  return state.usersPage.currentPage;
};
export const getTotalPageCount = (state: AppRootState) => {
  return state.usersPage.totalPageCount;
};
export const getIsFetching = (state: AppRootState) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppRootState) => {
  return state.usersPage.followingInProgress;
};
