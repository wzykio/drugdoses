import React from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
      <div className={style.header}>
        <div className={style.navicon}>
          <GiHamburgerMenu />
        </div>

        <div className={style.title}>
          <p>Dawki leków u dzieci</p>
        </div>
      </div>
  );
};
export default Header;
