import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
};
const Header: FC<HeaderPropsType> = ({ isAuth }) => {
  return (
    <div className={s.header}>
      <img
        className={s.header_logo}
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c11de5a-352f-4299-b84c-d9cc473c1600/d2t8lhk-fa9412a0-c8fa-4a5a-baaa-17278c38a102.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjMTFkZTVhLTM1MmYtNDI5OS1iODRjLWQ5Y2M0NzNjMTYwMFwvZDJ0OGxoay1mYTk0MTJhMC1jOGZhLTRhNWEtYmFhYS0xNzI3OGMzOGExMDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1fhRrw6IaDxLpCO6XAvScqHFbgIqiZfQsyASxU8nLSI"
        alt="img"
      />
      {isAuth ? (
        <div>Hello auth user</div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default Header;
