import React, { useState } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from '../Menu/Menu'

const Header = ({openMenuOption}) => {
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
              openMenuOption(false);
              setOpenMenu(!openMenu);
            }}
          />
        </div>

        <div className={style.title}>
          <p>test</p>
        </div>
      </div>
      {openMenu ? <Menu menuVisibility={menuVisibility} openMenuOption={openMenuOption}/> : ""}
    </div>
  );
};
export default Header;
