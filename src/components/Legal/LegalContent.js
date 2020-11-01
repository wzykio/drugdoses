import React, { useContext } from "react";
import style from "./LegalContent.module.css";
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const LegalContent = () => {

  const [{ langu }] = useContext(StoreContext);
  const { information } = lang[langu];

  return (
    <div className={style.LegalWrapper}>
      <div className={style.section}>
        

      <h1 className={style.header}>{information.heading}</h1>
      <h2 className={style.header2}>{information.subheading}</h2>
      <p className={style.disclaimer}>
        {information.disclaimer}
      </p>
      <h2 className={style.header2}>{information.subheading2}</h2>
      <p className={style.disclaimer2}>
        {information.disclaimer2}
      </p>


      </div>
    </div>
  );
};
export default LegalContent;
