import React, { FC } from "react";
import { UserType } from "../../../redux/users-reducer";
import s from "./Users.module.css";
import noAvatar from "../../../assets/images/no-avatar.png";

type UsersPropsType = {
  users: UserType[];
  pageSize: number;
  currentPage: number;
  totalPageCount: number;
  toggleFollowed: (id: number) => void;
  onChangePage: (page: number) => void;
};

const Users: FC<UsersPropsType> = ({
  totalPageCount,
  pageSize,
  currentPage,
  users,
  toggleFollowed,
  onChangePage,
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
      {users.map((u) => (
        <div key={u.id}>
          <span>{u.name}</span>
          <span>
            <div>
              <img src={noAvatar} alt="avatar" className={s.avatarImg} />
            </div>
            <div>
              <button onClick={() => toggleFollowed(u.id)}>
                {u.followed ? "UnFollow" : "Follow"}
              </button>
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
  );
};

export default Users;
