import React, { useContext } from 'react';
import style from './AlertBox.module.css';
import { StoreContext } from '../../../states/Store';
import { lang } from '../../../states/localization/index';

const AlertBox = () => {
  const [{ langu }] = useContext(StoreContext);
  return (
    <div className={style.alertContainer}>
      <div className={style.showAlertBox}>
        <p>{lang[langu].alert.text}</p>
      </div>
    </div>
  );
};
export default AlertBox;
