import React, { FC } from "react";
import { UserType } from "../../../redux/users-reducer";
import s from "./Users.module.css";
import noAvatar from "../../../assets/images/no-avatar.png";
import loader from "../../../assets/images/Spinner.gif";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  isFetching: boolean;
  followingInProgress: number[];
  toggleFollowed: (id: number, isFollow: boolean) => void;
  onChangePage: (page: number) => void;
  changeCurrentUserId: (id: number) => void;
  toggleFollowingInProgress: (id: number, inProgress: boolean) => void;
};

type ResponseType<D> = {
  resultCode: number;
  messages: string[];
  data: D;
};

const Users: FC<UsersPropsType> = ({
  totalPageCount,
  pageSize,
  currentPage,
  users,
  toggleFollowed,
  onChangePage,
  isFetching,
  changeCurrentUserId,
  followingInProgress,
  toggleFollowingInProgress,
}) => {
  let pagesCount = Math.ceil(totalPageCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((u) => (
        <span
          className={u === currentPage ? s.currentPage : ""}
          key={u}
          onClick={() => onChangePage(u)}
        >
          {u}
        </span>
      ))}
      {isFetching ? (
        <img src={loader} alt="Loading..." />
      ) : (
        <div>
          {users.map((u) => (
            <div key={u.id}>
              <span>{u.name}</span>
              <span>
                <NavLink to={`/profile/${u.id}`}>
                  <div onClick={() => changeCurrentUserId(u.id)}>
                    <img
                      src={u.photos.small ? u.photos.small : noAvatar}
                      alt="avatar"
                      className={s.avatarImg}
                    />
                  </div>
                </NavLink>
                <div>
                  {u.followed ? (
                    <button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        toggleFollowed(u.id, false);
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={() => toggleFollowed(u.id, true)}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
