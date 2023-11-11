import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.main}>
      <Sidebar />
      <div className={s.content}>
        <img
          className={s.content_img}
          src="https://marketplace.canva.com/EAEZyzLloUM/1/0/1600w/canva-%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%82%D1%8B%D0%B9-%D0%B3%D0%BE%D1%80%D0%B0-%D0%BF%D0%BE%D1%85%D0%B4-%D1%81-%D0%B1%D0%B5%D0%BB%D1%8B%D0%BC-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BE%D0%B1%D0%BE%D0%B8-HcW7FcShZ6c.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Main;
