import React, { useContext } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu/Menu";
import { StoreContext } from "../../states/Store";
import {lang} from '../../states/localization/index'

const Header = () => {
  const [{ openMenu,langu}, dispatch] = useContext(StoreContext);


  return (
    <div>
      <div className={style.header}>
        <div className={style.navicon}>
          <GiHamburgerMenu
            onClick={() => {
              dispatch({ type: "OPEN_MENU" });
            }}
          />
        </div>
        <div className={style.title}>
          <p>{lang[langu].header.top}</p>
        </div>
      </div>
      {openMenu ? <Menu /> : ""}
    </div>
  );
};
export default Header;
