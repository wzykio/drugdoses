import React, { useState } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "C:/code/drugDoses/drugprices/src/components/Menu/Menu";

const Header = () => {
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={style.header}>
      <div className={style.navicon}>
        <GiHamburgerMenu onClick={setOpenMenu} />
      </div>

      <div className={style.title}>
        <p>Dawki leków u dzieci</p>
      </div>

      {openMenu ? <Menu /> : ""}
    </div>
  );
};
export default Header;
