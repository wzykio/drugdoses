import React from "react";
import { MdClose } from "react-icons/md";
import { Provider, KeepAlive } from "react-keep-alive";
import style from "./MenuOption.module.css";
import KgLbs from "../KgLbs/KgLbs.js";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

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
      <Provider>
        <KeepAlive name="KgLbs">
          <KgLbs />
        </KeepAlive>
      </Provider>
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

const ModalContent = ({ openedOption }) => {
  let content;

  switch (openedOption) {
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

const CloseButton = ({ handleClose }) => {
  const handleClick = () => {
    handleClose(false);
  };
  return (
    <button className={style.closeButton} onClick={handleClick}>
      <MdClose className={style.icon} />
    </button>
  );
};

const MenuOption = ({ openedOption, handleClose }) => {
  return (
    <div className={style.modalWrapper}>
      <CloseButton handleClose={handleClose} />
      <ModalContent openedOption={openedOption} />
    </div>
  );
};

export default MenuOption;
