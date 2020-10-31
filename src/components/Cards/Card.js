import React, { useContext } from "react";
import style from "./Card.module.css";
import { StoreContext } from "../../states/Store";
import { lang } from '../../states/localization/index';

const Card = () => {
  const [state, ] = useContext(StoreContext);
  const { units, showCard: viewCard, langu } = state;
  const { drugsCardiac } = lang[langu];
  const weight = state.weight * units;
  const round = (number) => Math.round(number * 100) / 100;


  return (
    <div className={viewCard ? style.cardWrapper : style.unvisible}>
      <div className={style.alert}> Uwaga! Poniższe dawki TYLKO w przypadkach nagłego zatrzymania krążenia!</div>
      <div className={style.sec}>
        <div className={style.cardA}>
          <h3>{drugsCardiac.adrenaline.dose} {(weight * 10).toFixed(1)} µg</h3>
          <p>{drugsCardiac.adrenaline.preparation}</p>
          <h3>{drugsCardiac.administer} {(weight / 10).toFixed(1)} ml</h3>
        </div>
        <div className={style.cardB}>
          <h3>{drugsCardiac.amiodarone.dose} {(weight * 5).toFixed(1)} mg</h3>
          <p>{drugsCardiac.amiodarone.preparation}</p>
          <h3>{drugsCardiac.administer} {(weight * 1).toFixed(1)} ml</h3>
        </div>
      </div>
      <div className={style.sec}>
        <div className={style.cardC}>
          <h3>{drugsCardiac.atropine.dose} {weight >= 5 ? ((weight * 2) / 100).toFixed(1) : 0.1} mg</h3>
          <p>{drugsCardiac.atropine.preparation}</p>
          <h3>{drugsCardiac.administer} {weight >= 5 ? (weight / 10).toFixed(1) : 0.5} ml</h3>
        </div>
        <div className={style.cardD}>
          <h3>{drugsCardiac.defibrillation} - {(weight * 4).toFixed(1)} J</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;
