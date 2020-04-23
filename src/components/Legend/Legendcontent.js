import React from "react";
import style from "./Legendcontent.module.css";

const Legendcontent = () => {
  return (
    <div className={style.LegendWrapper}>
      <div className={style.section}>
        <h3 className={style.sectiontitle}>Droga podania leków</h3>
        <p className={style.sectionelement}>iv - Droga dożylna</p>
        <p className={style.sectionelement}>im - Droga domięśniowa</p>
        <p className={style.sectionelement}>sc - Podskórnie</p>
        <p className={style.sectionelement}>io - droga doszpikowa</p>
        <p className={style.sectionelement}>io - droga doodbytnicza</p>
      </div>
      <div className={style.section}>
        <h3>Jednostki miary</h3>
        <p className={style.sectionelement}>ml - Mililitr</p>
        <p className={style.sectionelement}>µg - Mikrogram</p>
        <p className={style.sectionelement}>mg - Miligram</p>
        <p className={style.sectionelement}>g - Gram</p>
        <p className={style.sectionelement}>kg - Kilogram</p>
        <p className={style.sectionelement}>J - Dżul</p>
      </div>
      <div className={style.section}>
        <h3>Konfekcjonowanie leków</h3>
        <p className={style.sectionelement}>Adrenalina: ampułka 1 mg/1 ml</p>
        <p className={style.sectionelement}>Amiodaron: ampułka 150 mg/3 ml</p>
        <p className={style.sectionelement}>Atropina: ampułka 6 mg/2 ml</p>
        <p className={style.sectionelement}>Adenozyna: ampułka 1 mg/1 ml</p>
        <p className={style.sectionelement}>Diazepam: ampułka 10 mg/2 ml</p>
        <p className={style.sectionelement}>Flumazenil: ampułka 0.5 mg/5 ml</p>
        <p className={style.sectionelement}>Hydrokortyzon: fiolka 100 mg</p>
        <p className={style.sectionelement}>Magnez: ampułka 2 g/10 ml</p>
        <p className={style.sectionelement}>Morfina: ampułka 10 mg/1 ml</p>
        <p className={style.sectionelement}>
          Paracetamol czopki: 50 mg, 80 mg, 125 mg, 250 mg
        </p>
      </div>
    </div>
  );
};
export default Legendcontent;
