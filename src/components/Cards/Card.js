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
          <h3>{drugsCardiac.adrenaline.dose} {round(weight * 10)} µg</h3>
          <p>{drugsCardiac.adrenaline.preparation}</p>
          <h3>{drugsCardiac.administer} {round(weight / 10)} ml</h3>
        </div>
        <div className={style.cardB}>
          <h3>{drugsCardiac.amiodarone.dose} {round(weight * 5)} mg</h3>
          <p>{drugsCardiac.amiodarone.preparation}</p>
          <h3>{drugsCardiac.administer} {round(weight * 1)} ml</h3>
        </div>
      </div>
      <div className={style.sec}>
        <div className={style.cardC}>
          <h3>{drugsCardiac.atropine.dose} {weight >= 5 ? round((weight * 2) / 100) : 0.1} mg</h3>
          <p>{drugsCardiac.atropine.preparation}</p>
          <h3>{drugsCardiac.administer} {weight >= 5 ? round(weight / 10) : 0.5} ml</h3>
        </div>
        <div className={style.cardD}>
          <h3>{drugsCardiac.defibrillation} - {round(weight * 4)} J</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;
