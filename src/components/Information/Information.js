import React, { useState, useContext } from "react";
import style from "./Information.module.css";
import { StoreContext } from "../../states/Store";
import { lang } from "../../states/localization/index";

const Information = () => {

  const [warningVisability, setWarningVisability] = useState(true)
  const [{ langu }] = useContext(StoreContext);

  return (
    <div className={warningVisability ? style.information : style.hidden}>
      <h1 className={style.header}>{lang[langu].information.heading}</h1>
      <h2 className={style.header2}>{lang[langu].information.subheading}</h2>
      <p className={style.body}>
        {lang[langu].information.body}
      </p>
      <button onClick={()=>setWarningVisability(false)}>{lang[langu].information.consent1}<br></br>{lang[langu].information.consent2}</button>
    </div>
  );
};

export default Information;
