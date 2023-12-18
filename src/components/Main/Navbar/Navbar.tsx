import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.items}>
        <li className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
