import React, { useState } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from '../Menu/Menu'

const Header = () => {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className={style.header}>
        <div className={style.navicon}>
          <GiHamburgerMenu
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>

        <div className={style.title}>
          <p>Dawki leków u dzieci</p>
        </div>
      </div>
      {openMenu ? <Menu /> : ""}
    </div>
  );
};
export default Header;
