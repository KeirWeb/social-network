import React from "react";
import { UserType } from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersApiContainerPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
  toggleFollowed: (id: number) => void;
  setUsers: (users: UserType[]) => void;
  changeCurrentPage: (page: number) => void;
  changeTotalPageCount: (pages: number) => void;
  changeIsFetching: (isFetching: boolean) => void;
};

type ResponseType<U> = {
  items: U[];
  totalCount: number;
  error: string;
};

class UsersApiContainer extends React.Component<UsersApiContainerPropsType> {
  componentDidMount(): void {
    this.props.changeIsFetching(true);
    axios
      .get<ResponseType<UserType>>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.changeTotalPageCount(res.data.totalCount);
        this.props.changeIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        this.props.changeIsFetching(false);
      });
  }
  onChangePage = (page: number) => {
    this.props.changeIsFetching(true);

    axios
      .get<ResponseType<UserType>>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.changeCurrentPage(page);
        this.props.changeIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        this.props.changeIsFetching(false);
      });
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
      />
    );
  }
}

export default UsersApiContainer;
