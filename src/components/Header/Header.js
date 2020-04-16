import React, { useState, useContext } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu/Menu";
import LangContext from '../../states/LangContext'

const Header = ({ openMenuOption }) => {
  let [openMenu, setOpenMenu] = useState(false);

  const menuVisibility = (visibility) => {
    setOpenMenu(visibility);
  };

  const lang = useContext(LangContext);

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
          <p>{lang.header.top}</p>
        </div>
      </div>
      {openMenu ? (
        <Menu menuVisibility={menuVisibility} openMenuOption={openMenuOption} />
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
