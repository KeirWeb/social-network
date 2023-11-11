import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <img
        className={s.header_logo}
        src="https://img.freepik.com/free-vector/blue-wavy-forms-on-a-transparent-background_1035-6744.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais"
        alt=""
      />
    </div>
  );
};

export default Header;
