import React,{useContext} from "react";
import { MdClose } from "react-icons/md";
import style from "./MenuOption.module.css";
import KgLbs from "../KgLbs/KgLbs.js";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {StoreContext} from '../../states/Store'
import creators from '../../data/creatorsData';
import Creator from '../Creator/Creator';
import LegendContent from '../Legend/Legendcontent'

const elements = {
  settings: 'settings',
  legal: 'legal',
  about: 'about',
  legend: 'legend',
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
    <div className={style.body}>
      <article className={style.about__section}>
        <h3 className={style.about__subheading}>About company</h3>
        <p className={style.about__content}>
          Be superior. Kitten is playing with dead mouse. Fall asleep
          upside-down mark territory, yet instead of drinking water from the cat
          bowl, make sure to steal water from the toilet. Cry louder at
          reflection. Enslave the hooman. Hide head under blanket so no one can
          see give me some of your food give me some of your food give me some
          of your food meh, i don't want it pretend you want to go out but then
          don't chase red laser dot, for bury the poop bury it deep. Soft kitty
          warm kitty little ball of furr. Meow in empty rooms experiences short
          bursts of poo-phoria after going to the loo.
        </p>
      </article>
      <article className={style.about__section}>
        <h3 className={style.about__subheading}>Our team</h3>
        <div className={style.about__creators}>
        {creators.map((creator) => (
          <Creator
            creator={creator}/>
        )) }
        </div>
      </article>
    </div>
  </div>
);

const Legend = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Legenda</h2>
    <div className={style.body}>
      <LegendContent/>
    </div>
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
