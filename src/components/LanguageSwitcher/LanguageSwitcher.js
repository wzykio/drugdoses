import React, { useState } from 'react';
import style from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const [activeLanguage, setActiveLanguage] = useState('polish');

  const setLanguage = (language) => {
    setActiveLanguage(language);
  }

  return (
    <>
      <fieldset className={style.wrapper}>
        <h3 className={style.heading}>Wybór języka</h3>
        <div className={style.radio}>
          <label className={style.label}>
            <input
              className={style.radio__input}
              type='radio'
              name='language'
              value='polish'
              onChange={() => setLanguage('polish')}
              checked={activeLanguage ==='polish'}
            />
            <span className={style.radio__button}></span>
            <span className={style.radio__label}>Polski</span>
          </label>
        </div>
        <div className={style.radio}>
          <label className={style.label}>
            <input
              className={style.radio__input}
              type='radio'
              name='language'
              value='english'
              onChange={() => setLanguage('english')}
              checked={activeLanguage ==='english'}
            />
            <span className={style.radio__button}></span>
            <span className={style.radio__label}>Angielski</span>
          </label>
        </div>
      </fieldset>
    </>
  );
};

export default LanguageSwitcher;
