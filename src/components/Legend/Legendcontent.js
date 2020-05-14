import React, { useContext } from "react";
import style from "./Legendcontent.module.css";
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Legendcontent = () => {
  const [{ langu }] = useContext(StoreContext);

  const list = [
    { name: lang[langu].menuOptions.legend.drugs.adrenaline },
    { name: lang[langu].menuOptions.legend.drugs.amiodarone },
    { name: lang[langu].menuOptions.legend.drugs.atropine },
    { name: lang[langu].menuOptions.legend.drugs.adenosine },
    { name: lang[langu].menuOptions.legend.drugs.diazepam },
    { name: lang[langu].menuOptions.legend.drugs.flumazenil },
    { name: lang[langu].menuOptions.legend.drugs.hydrocortisone },
    { name: lang[langu].menuOptions.legend.drugs.magnesium },
    { name: lang[langu].menuOptions.legend.drugs.morphine },
    { name: lang[langu].menuOptions.legend.drugs.paracetamol },
  ];
  const access = [
    { name: lang[langu].menuOptions.legend.access.iv },
    { name: lang[langu].menuOptions.legend.access.im },
    { name: lang[langu].menuOptions.legend.access.sc },
    { name: lang[langu].menuOptions.legend.access.io },
    { name: lang[langu].menuOptions.legend.access.pr },
  ];
  const units = [
    { name: lang[langu].menuOptions.legend.units.ml },
    { name: lang[langu].menuOptions.legend.units.ug },
    { name: lang[langu].menuOptions.legend.units.mg },
    { name: lang[langu].menuOptions.legend.units.g },
    { name: lang[langu].menuOptions.legend.units.kg },
    { name: lang[langu].menuOptions.legend.units.j },
  ];

  return (
    <div className={style.LegendWrapper}>
      <div className={style.section}>
        <h3 className={style.sectiontitle}>{lang[langu].menuOptions.legend.access.heading}</h3>
        {access.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>{lang[langu].menuOptions.legend.units.heading}</h3>
        {units.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>{lang[langu].menuOptions.legend.drugs.heading}</h3>
        {list.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
export default Legendcontent;
