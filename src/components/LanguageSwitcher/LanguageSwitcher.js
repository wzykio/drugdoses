import React, { useState, useContext } from 'react';
import style from './LanguageSwitcher.module.css';
import { StoreContext, supportedSettings } from '../../states/Store';
import { lang } from "../../states/localization/index";
import { setItemStorage } from '../../helpers/handleStorage';

const LanguageSwitcher = () => {
  const [{ langu }, dispatch] = useContext(StoreContext);
  const [activeLanguage, setActiveLanguage] = useState(langu);
  const { settings } = lang[langu].menuOptions;

  function changeLang(e) {

    setItemStorage(supportedSettings.language.storageKey, e.target.value);
    dispatch({ type: 'CHANGE_LANGUAGE', payload: e.target.value });
    setActiveLanguage(e.target.value);
  }

  let availableLanguages = [
    {
      name: settings.langPolish,
      shortcut: 'pl',
    },
    {
      name: settings.langEnglish,
      shortcut: 'en',
    },
  ];

  return (
    <>
      <fieldset className={style.wrapper}>
        <h3 className={style.heading}>{settings.languageChose}</h3>
        {availableLanguages.map((lang) => {
          const { name } = lang;
          const { shortcut } = lang;

          return (
            <div className={style.radio} key={shortcut}>
              <label className={style.label}>
                <input
                  className={style.radio__input}
                  type='radio'
                  name='language'
                  value={shortcut}
                  onChange={changeLang}
                  checked={activeLanguage === shortcut}
                />
                <span className={style.radio__button}></span>
                <span className={style.radio__label}>{name}</span>
              </label>
            </div>
          );
        })}
      </fieldset>
    </>
  );
};

export default LanguageSwitcher;
