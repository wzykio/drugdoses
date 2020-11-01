import React, { useState, useContext } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Button = () => {
  const [{ langu }, dispatch] = useContext(StoreContext);
  const { medicalCaseChooseButton : button } = lang[langu];

  const [, setActiveOtherDoses] = useState(false);
  const [activeResuscytationDoses, setresuscytationDoses] = useState(true);

  const selectOtherDoses = () => {
    setActiveOtherDoses(true);
    setresuscytationDoses(false);
    dispatch({ type: 'CHANGE_ACTIVE_ENY' });
  };
  const selectResuscytationDoses = () => {
    setresuscytationDoses(true);
    setActiveOtherDoses(false);
    dispatch({ type: 'CHANGE_ACTIVE_RES' });
  };

  return (
    <div className={style.wrapper}>
      <button
        // style={{borderRadius: '4px 0 0 4px'}}
        className={classNames({
          [style.button]: true,
          [style.inactive]: !activeResuscytationDoses,
        })}
        onClick={selectResuscytationDoses}
      >
        <FaCheck />
        <p>{button.cardiac}</p>
      </button>

      <button
        // style={{borderRadius: '0 4px 4px 0'}}
        className={classNames({
          [style.button]: true,
          [style.inactive]: activeResuscytationDoses,
        })}
        onClick={selectOtherDoses}
      >
        <FaCheck />
        <p>{button.other}</p>
      </button>
    </div>
  );
};
export default Button;
