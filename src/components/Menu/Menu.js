import React from "react";
import style from "./Menu.module.css";
import { FaCog } from "react-icons/fa"; //ustawienia
import { MdAnnouncement } from "react-icons/md"; //nota prawna
import {} from "react-icons/"; //o nas

const Menu = () => {
  return (
    <div className={style.menuBlock}>
      <ul>
        <li className={style.listItem}>Ustawienia</li>
        <li className={style.listItem}>Nota prawna</li>
        <li className={style.listItem}>O nas</li>
      </ul>
    </div>
  );
};

export default Menu;
