import React, { useState, useContext } from "react";
import style from "./Information.module.css";
import { StoreContext } from "../../states/Store";
import { lang } from "../../states/localization/index";

const Information = () => {

  const [warningVisability, setWarningVisability] = useState(true)
  const [{ langu }] = useContext(StoreContext);
  const { information } = lang[langu];

  return (
    <div className={warningVisability ? style.information : style.hidden}>
      <h1 className={style.header}>{information.heading}</h1>
      <h2 className={style.header2}>{information.subheading}</h2>
      <p className={style.body}>
        {information.body}
      </p>
      <button className={style.accept} onClick={()=>setWarningVisability(false)}>{information.consent1}<br></br>{information.consent2}</button>
    </div>
  );
};

export default Information;
