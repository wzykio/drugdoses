import React, { useContext } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu/Menu";
import LangContext from '../../states/LangContext'
import {StoreContext} from '../../states/Store'

const Header = () => {
  const [state,dispatch]=useContext(StoreContext)
 
  
  const openMenu = state.openMenu
  

  const lang = useContext(LangContext);

  return (
    <div>
      <div className={style.header}>
        <div className={style.navicon}>
          <GiHamburgerMenu
            onClick={() => {
              dispatch({ type: "OPEN_MENU" })
            }}
          />
        </div>

        <div className={style.title}>
          <p>{lang.header.top}</p>
        </div>
      </div>
      {openMenu ? (
        <Menu />
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
