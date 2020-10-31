import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import style from './MenuOption.module.css';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import KgLbs from '../KgLbs/KgLbs.js';
import LegendContent from '../Legend/Legendcontent';
import AboutContent from '../AboutContent/AboutContent';

const elements = {
  settings: 'settings',
  legal: 'legal',
  about: 'about',
  legend: 'legend',
};

const Settings = (langu) => {
  const { settings } = lang[langu].menuOptions;
  return (
    <div className={style.content}>
      <h2 className={style.heading}>{settings.heading}</h2>
      <div className={style.body}>
        <KgLbs />
        <section className={style.section}>
          <LanguageSwitcher />
        </section>
      </div>
    </div>
  );
};

const Legal = (langu) => {
  const { legal } = lang[langu].menuOptions;
  return (
    <div className={style.content}>
      <h2 className={style.heading}>{legal.heading}</h2>
      <div className={style.body}>Legal content </div>
    </div>
  );
};

const About = (langu) => {
  const { about } = lang[langu].menuOptions;
  return (
    <div className={style.content}>
      <h2 className={style.heading}>{about.heading}</h2>
      <div className={style.body}>
        <AboutContent />
      </div>
    </div>
  );
};

const Legend = (langu) => {
  const { legal } = lang[langu].menuOptions;
  return (
    <div className={style.content}>
      <h2 className={style.heading}>{legal.heading}</h2>
      <div className={style.body}>
        <LegendContent />
      </div>
    </div>
  );
};

const ModalContent = () => {
  const [state, ] = useContext(StoreContext);
  const { menuOption, langu } = state;
  let content;

  switch (menuOption) {
    case elements.settings:
      content = Settings(langu);
      break;
    case elements.legal:
      content = Legal(langu);
      break;
    case elements.about:
      content = About(langu);
      break;
    case elements.legend:
      content = Legend(langu);
      break;
    default:
      content = null;
  }
  return content;
};

const CloseButton = () => {
  const [, dispatch] = useContext(StoreContext);
  return (
    <button
      className={style.closeButton}
      onClick={() => dispatch({ type: 'CLOSE_MENU_OPTION' })}
    >
      <MdClose className={style.icon} />
    </button>
  );
};

const MenuOption = () => {
  const [state, ] = useContext(StoreContext);
  const showMenuOption = state.showMenuOption;
  return (
    <div
      className={showMenuOption ? style.visibleWrapper : style.unvisibleWrapper}
    >
      <div className={style.darkbackground} />
      <div className={style.modalWrapper}>
        <CloseButton />
        <ModalContent />
      </div>
    </div>
  );
};

export default MenuOption;
