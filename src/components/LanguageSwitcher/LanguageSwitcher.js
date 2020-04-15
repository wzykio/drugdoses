import React from 'react';
import style from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => (
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
          />
          <span className={style.radio__button}></span>
          <span className={style.radio__label}>Angielski</span>
        </label>
      </div>
    </fieldset>
  </>
);

export default LanguageSwitcher;
