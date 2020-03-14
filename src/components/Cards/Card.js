import React from "react";
import style from "./Card.module.css";

const Card = ({ weight }) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.sec}>
        <div className={style.cardA}>
          <h3>Adrenalina - dawka {weight * 10} mikrogram</h3>
          <p>1 amp adrenaliny rozcieńczyć do 10 ml 0.9% NaCl</p>
          <h3>Podaj {weight / 10} ml</h3>
        </div>
        <div className={style.cardB}>
          <h3>Amiodaron - dawka {weight * 5} mg</h3>
          <p>100 mg - 2 ml amiodaronu rozcieńczyć do 20 ml 5% glukozy</p>
          <h3>Podaj {weight} ml</h3>
        </div>
      </div>
      <div className={style.sec}>
        <div className={style.cardC}>
          <h3>
            Atropina - dawka {weight >= 5 ? (weight * 2) / 100 : 0.1} miligram
          </h3>
          <p>2 amp atropiny rozcieńczyć do 10 ml 0.9% NaCl</p>
          <h3>Podaj {weight >= 5 ? weight / 10 : 0.5} ml</h3>
        </div>
        <div className={style.cardD}>
          <h3>Defibrylacja - {weight * 4} J</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;