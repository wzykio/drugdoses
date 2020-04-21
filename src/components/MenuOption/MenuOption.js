import React,{useContext} from "react";
import { MdClose } from "react-icons/md";
import style from "./MenuOption.module.css";
import KgLbs from "../KgLbs/KgLbs.js";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {StoreContext} from '../../states/Store'

const elements = {
  settings: "settings",
  legal: "legal",
  about: "about",
  legend: "legend",
};

const Settings = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Settings</h2>
    <div className={style.body}>
      <KgLbs />
      <section className={style.section}>
        <LanguageSwitcher />
      </section>
    </div>
  </div>
);

const Legal = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Legal</h2>
    <div className={style.body}>Legal content </div>
  </div>
);

const About = () => (
  <div className={style.content}>
    <h2 className={style.heading}>About</h2>
    <div className={style.body}>About content</div>
  </div>
);

const Legend = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Legend</h2>
    <div className={style.body}>Legend content</div>
  </div>
);

const ModalContent = () => {
  const [state,dispatch]=useContext(StoreContext)
  const menuOption = state.menuOption
  let content;

  switch (menuOption) {
    case elements.settings:
      content = Settings();
      break;
    case elements.legal:
      content = Legal();
      break;
    case elements.about:
      content = About();
      break;
    case elements.legend:
      content = Legend();
      break;
    default:
      content = null;
  }
  return content;
};

const CloseButton = () => {
  const [state,dispatch]=useContext(StoreContext)
  return (
    <button className={style.closeButton} onClick={()=> dispatch({ type:"CLOSE_MENU_OPTION" })}>
      <MdClose className={style.icon} />
    </button>
  );
};

const MenuOption = () => {
  const [state,dispatch]=useContext(StoreContext)
  const showMenuOption=state.showMenuOption
  return (
    <div className={showMenuOption ? style.modalWrapper : style.unvisibleWrapper}>
      <CloseButton />
      <ModalContent  />
    </div>
  );
};

export default MenuOption;
