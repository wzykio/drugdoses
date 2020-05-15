import React, { useContext } from "react";
import style from "./Legendcontent.module.css";
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Legendcontent = () => {
  const [{ langu }] = useContext(StoreContext);

  const { legend } = lang[langu].menuOptions;

  const list = [
    { name: legend.drugs.adrenaline },
    { name: legend.drugs.amiodarone },
    { name: legend.drugs.atropine },
    { name: legend.drugs.adenosine },
    { name: legend.drugs.diazepam },
    { name: legend.drugs.flumazenil },
    { name: legend.drugs.hydrocortisone },
    { name: legend.drugs.magnesium },
    { name: legend.drugs.morphine },
    { name: legend.drugs.paracetamol },
  ];
  const access = [
    { name: legend.access.iv },
    { name: legend.access.im },
    { name: legend.access.sc },
    { name: legend.access.io },
    { name: legend.access.pr },
  ];
  const units = [
    { name: legend.units.ml },
    { name: legend.units.ug },
    { name: legend.units.mg },
    { name: legend.units.g },
    { name: legend.units.kg },
    { name: legend.units.j },
  ];

  return (
    <div className={style.LegendWrapper}>
      <div className={style.section}>
        <h3 className={style.sectiontitle}>{legend.access.heading}</h3>
        {access.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>{legend.units.heading}</h3>
        {units.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>{legend.drugs.heading}</h3>
        {list.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
export default Legendcontent;
