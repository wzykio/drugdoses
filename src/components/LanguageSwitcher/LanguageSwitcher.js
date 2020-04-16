import React, { useState } from 'react';
import style from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const [activeLanguage, setActiveLanguage] = useState('pl');

  const setLanguage = (language) => {
    setActiveLanguage(language);
  };

  let availableLanguages = [
    {
      name: 'Polski',
      shortcut: 'pl',
    },
    {
      name: 'Angielski',
      shortcut: 'en',
    },
  ];

  return (
    <>
      <fieldset className={style.wrapper}>
        <h3 className={style.heading}>Wybór języka</h3>
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
                  onChange={() => setLanguage(shortcut)}
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
