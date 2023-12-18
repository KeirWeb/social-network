import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog_item.module.css";
import { UserType } from "../../../../redux/dialogs-reducer";

type Dialog_itemPropsType = {
  user: UserType;
};

const Dialog_item: FC<Dialog_itemPropsType> = ({ user }) => {
  return (
    <div className={s.dialogs_item}>
      <NavLink to={`/dialogs/${user.id}`}>{user.name}</NavLink>
    </div>
  );
};

export default Dialog_item;
