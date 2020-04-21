import React,{useContext} from "react";
import style from "./Menu.module.css";
import { FaCog,FaDiaspora } from "react-icons/fa"; //ustawienia
import { MdAnnouncement } from "react-icons/md"; //nota prawna
import { GoInfo } from "react-icons/go"; //o nas
import {StoreContext} from '../../states/Store'

const Menu = ({ openMenuOption}) => {
  const [state,dispatch]=useContext(StoreContext)

const handleClick = () =>{
  alert("ok")
}
  return (
    <div className={style.menuBlock}>
      <ul>
        <li className={style.listItem} onClick={() => {
          dispatch({type:"OPEN_SETTINGS"}) 
          dispatch({type:"OPEN_MENU"})
          dispatch({ type: "OPEN_MENU_OPTION" })}}>
          <FaCog className={style.icon} />
          Ustawienia
        </li>
        <li className={style.listItem} onClick={() =>  
          {dispatch({type:"OPEN_LEGAL"}) 
          dispatch({type:"OPEN_MENU"})
          dispatch({ type: "OPEN_MENU_OPTION" })}}>
          <MdAnnouncement className={style.icon} />
          Nota prawna
        </li>
        <li className={style.listItem} onClick={() => {
          dispatch({type:"OPEN_ABOUT"}) 
          dispatch({type:"OPEN_MENU"})
          dispatch({ type: "OPEN_MENU_OPTION" })}}>
          <GoInfo className={style.icon} />O nas
        </li>
        <li className={style.listItem} onClick={() => {
          dispatch({type:"OPEN_LEGEND"}) 
          dispatch({type:"OPEN_MENU"})
          dispatch({ type: "OPEN_MENU_OPTION" })}}>
          <FaDiaspora className={style.icon} />
          Legenda
        </li>
      </ul>
    </div>
  );
};

export default Menu;
