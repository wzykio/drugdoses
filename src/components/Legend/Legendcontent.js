import React, { useState } from "react";
import style from "./Legendcontent.module.css";

const Legendcontent = () => {
  const list = [
    { name: "Adrenalina: ampułka 1 mg/1 ml" },
    { name: "Amiodaron: ampułka 150 mg/3 ml" },
    { name: "Atropina: ampułka 6 mg/2 ml" },
    { name: "Adenozyna: ampułka 1 mg/1 ml" },
    { name: "Diazepam: ampułka 10 mg/2 ml" },
    { name: "Flumazenil: ampułka 0.5 mg/5 ml" },
    { name: "Hydrokortyzon: fiolka 100 mg" },
    { name: "Magnez: ampułka 2 g/10 ml" },
    { name: "Morfina: ampułka 10 mg/1 ml" },
    { name: " Paracetamol czopki: 50 mg, 80 mg, 125 mg, 250 mg" },
  ];
  const access = [
    { name: "iv - Droga dożylna" },
    { name: "im - Droga domięśniowa" },
    { name: "sc - Podskórnie" },
    { name: "io - droga doszpikowa" },
    { name: "io - droga doodbytnicza" },
  ];
  const units = [
    { name: "ml - Mililitr" },
    { name: "µg - Mikrogram" },
    { name: "mg - Miligram" },
    { name: "g - Gram" },
    { name: "kg - Kilogram" },
    { name: "J - Dżul" },
  ];

  return (
    <div className={style.LegendWrapper}>
      <div className={style.section}>
        <h3 className={style.sectiontitle}>Droga podania leków</h3>
        {access.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>Jednostki miary</h3>
        {units.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
      <div className={style.section}>
        <h3>Konfekcjonowanie leków</h3>
        {list.map((item) => (
          <p className={style.sectionelement}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
export default Legendcontent;
