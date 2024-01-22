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
  toggleFollowed: (id: number) => void;
  onChangePage: (page: number) => void;
  changeCurrentUserId: (id: number) => void;
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
                  {/* <button onClick={() => toggleFollowed(u.id)}>
                    {u.followed ? "UnFollow" : "Follow"}
                  </button> */}
                  {u.followed ? (
                    <button
                      onClick={() => {
                        axios
                          .delete<ResponseType<any>>(
                            `https://social-network.samuraijs.com/api/1.0/follow/` +
                              u.id,

                            {
                              withCredentials: true,
                            }
                          )
                          .then((res) => {
                            if (res.data.resultCode === 0) toggleFollowed(u.id);
                          });
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        axios
                          .post<ResponseType<any>>(
                            `https://social-network.samuraijs.com/api/1.0/follow/` +
                              u.id,
                            {},
                            {
                              withCredentials: true,
                            }
                          )
                          .then((res) => {
                            if (res.data.resultCode === 0) toggleFollowed(u.id);
                          });
                      }}
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
