import React, { useState } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from '../Menu/Menu'

const Header = ({openOption}) => {
  let [openMenu, setOpenMenu] = useState(false);

  const menuVisibility = (visibility) => {
    setOpenMenu(visibility);
  }

  return (
    <div>
      <div className={style.header}>
        <div className={style.navicon}>
          <GiHamburgerMenu
            onClick={() => {
              openOption(false);
              setOpenMenu(!openMenu);
            }}
          />
        </div>

        <div className={style.title}>
          <p>Dawki leków u dzieci</p>
        </div>
      </div>
      {openMenu ? <Menu menuVisibility={menuVisibility} option={openOption}/> : ""}
    </div>
  );
};
export default Header;
