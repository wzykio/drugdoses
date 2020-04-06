import React from "react";
import style from "./Menu.module.css";
import { FaCog } from "react-icons/fa"; //ustawienia
import { MdAnnouncement } from "react-icons/md"; //nota prawna
import { GoInfo } from "react-icons/go"; //o nas

const Menu = ({option, menuVisibility}) => {

  const handleClick = (menuElement) => {
    console.log('Handle Click');
    option(menuElement);
    menuVisibility(false);
  };

  return (
    <div className={style.menuBlock}>
      <ul>
        <li className={style.listItem} onClick={() => handleClick('settings')}>
          <FaCog className={style.icon} />
          Ustawienia
        </li>
        <li className={style.listItem} onClick={() => handleClick('legal')}>
          <MdAnnouncement className={style.icon} />
          Nota prawna
        </li>
        <li className={style.listItem} onClick={() => handleClick('about')}>
          <GoInfo className={style.icon} />O nas
        </li>
      </ul>
    </div>
  );
};

export default Menu;
