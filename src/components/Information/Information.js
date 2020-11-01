import React, { useState, useContext } from "react";
import style from "./Information.module.css";
import { StoreContext } from "../../states/Store";
import { lang } from "../../states/localization/index";

const Information = () => {

  const [warningVisability, setWarningVisability] = useState(true)
  const [{ langu }] = useContext(StoreContext);
  const { information } = lang[langu];

  let inter;

  let myMouseEnter = () => {
    inter = setInterval( () => {
      window.scrollTo(0,1000)
    }, 5)
  }

  let myMouseLeave = () => {
    clearInterval(inter)
  }

  return (
    <div className={warningVisability ? style.information : style.hidden}>
      <h1 className={style.header}>{information.heading}</h1>
      <h2 className={style.header2}>{information.subheading}</h2>
      <p className={style.disclaimer}>
        {information.disclaimer}
      </p>
      <h2 className={style.header2}>{information.subheading2}</h2>
      <p className={style.disclaimer2}>
        {information.disclaimer2}
      </p>
      <button className={style.accept}
        onClick={ () => {
          setWarningVisability(false)
          window.scrollTo({ top: 0 })
          clearInterval(inter)
        }}
        onMouseEnter={ myMouseEnter }
        onMouseLeave={ myMouseLeave }
      >{information.consent1}<br></br>{information.consent2}</button>
    </div>
  );
};

export default Information;
