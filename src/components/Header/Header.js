import React, { useContext } from "react";
import style from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Menu from "../Menu/Menu";
import { StoreContext } from "../../states/Store";
import { lang } from "../../states/localization/index";

const Header = () => {
  const [{ showMenuOption, openMenu, langu }, dispatch] = useContext(
    StoreContext
  );
  const { header } = lang[langu];

  return (
    <div>
      <div className={style.header}>
        <div className={style.navicon}>
          {openMenu ? (
            <IoMdClose />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                !showMenuOption && dispatch({ type: "OPEN_MENU" });
              }}
            />
          )}
        </div>
        <div className={style.title}>
          <p>{header.top}</p>
        </div>
      </div>
      {openMenu ? <Menu /> : ""}
    </div>
  );
};
export default Header;
