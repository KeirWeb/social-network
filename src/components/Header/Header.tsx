import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { HeaderProps } from "./HeaderContainer";

const Header: FC<HeaderProps> = ({ isAuth, userData, logoutThunk }) => {
  const logoutHandler = () => {
    logoutThunk();
  };
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <Link to="/" className={s.header__logo}>
          <img
            src="https://i.pinimg.com/originals/dc/be/80/dcbe8061a60da1ee10dcba4f0adcef66.jpg"
            alt="logo"
          />
        </Link>
        {isAuth ? (
          <div>
            {userData.login} <button onClick={logoutHandler}>X</button>
          </div>
        ) : (
          <Link to={"/login"}>login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
