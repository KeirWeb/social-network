import React from "react";
import { UserType } from "../../../redux/users-reducer";
import Users from "./Users";
import { usersApi } from "../../../api/api";

type UsersApiContainerPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
  followingInProgress: number[];
  toggleFollowed: any;
  changeCurrentUserId: (id: number) => void;
  toggleFollowingInProgress: (id: number, inProgress: boolean) => void;
  getUsers: (currentPage: number) => void;
};

class UsersApiContainer extends React.Component<UsersApiContainerPropsType> {
  componentDidMount(): void {
    this.props.getUsers(1);
    // this.props.changeIsFetching(true);
    // usersApi
    //   .getUsers(1, this.props.pageSize)
    //   .then((res) => {
    //     this.props.setUsers(res.items);
    //     this.props.changeTotalPageCount(res.totalCount);
    //     this.props.changeIsFetching(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.props.changeIsFetching(false);
    //   });
  }
  onChangePage = (page: number) => {
    this.props.getUsers(page);

    // this.props.changeIsFetching(true);
    // usersApi
    //   .getUsers(page, this.props.pageSize)
    //   .then((res) => {
    //     this.props.setUsers(res.items);
    //     this.props.changeCurrentPage(page);
    //     this.props.changeIsFetching(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.props.changeIsFetching(false);
    //   });
  };
  render(): React.ReactNode {
    return (
      <Users
        totalPageCount={this.props.totalPageCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        toggleFollowed={this.props.toggleFollowed}
        onChangePage={this.onChangePage}
        isFetching={this.props.isFetching}
        changeCurrentUserId={this.props.changeCurrentUserId}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      />
    );
  }
}

export default UsersApiContainer;
