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
        <h4 className={style.sectiontitle}>{legend.access.heading}</h4>
        {access.map((item) => (
          <p key={item.name} className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h4>{legend.units.heading}</h4>
        {units.map((item) => (
          <p key={item.name} className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h4>{legend.drugs.heading}</h4>
        {list.map((item) => (
          <p key={item.name} className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
export default Legendcontent;
