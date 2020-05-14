import React, { useState, useContext } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Button = () => {
  const [{ langu }, dispatch] = useContext(StoreContext);

  const [activeEnyDoses, setActiveEnyDoses] = useState(false);
  const [activeResuscytationDoses, setresuscytationDoses] = useState(true);

  const selectEnyDoses = () => {
    setActiveEnyDoses(true);
    setresuscytationDoses(false);
    dispatch({ type: 'CHANGE_ACTIVE_ENY' });
  };
  const selectResuscytationDoses = () => {
    setresuscytationDoses(true);
    setActiveEnyDoses(false);
    dispatch({ type: 'CHANGE_ACTIVE_RES' });
  };

  return (
    <div className={style.wrapper}>
      <label
        // style={{borderRadius: '4px 0 0 4px'}}
        className={classNames({
          [style.button]: true,
          [style.inactive]: !activeResuscytationDoses,
        })}
      >
        <FaCheck />
        <p>{lang[langu].medicalCaseChooseButton.cardiac}</p>
        <input
          type='radio'
          checked={activeResuscytationDoses}
          onChange={selectResuscytationDoses}
        />
      </label>

      <label
        // style={{borderRadius: '0 4px 4px 0'}}
        className={classNames({
          [style.button]: true,
          [style.inactive]: activeResuscytationDoses,
        })}
      >
        <FaCheck />
        <p>{lang[langu].medicalCaseChooseButton.other}</p>
        <input
          type='radio'
          checked={activeEnyDoses}
          onChange={selectEnyDoses}
        />
      </label>
    </div>
  );
};
export default Button;
