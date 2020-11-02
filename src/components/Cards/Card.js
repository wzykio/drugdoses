import React, { useContext } from "react";
import style from "./Card.module.css";
import { StoreContext } from "../../states/Store";
import { lang } from '../../states/localization/index';
import { ChildOfWeight } from '../ChildOfWeight/ChildOfWeight'

const Card = () => {
  const [state, ] = useContext(StoreContext);
  const { units, showCard: viewCard, langu } = state;
  const { drugsCardiac } = lang[langu];
  const weight = state.weight * units;

  return (
    <div className={viewCard ? style.cardWrapper : style.invisible}>
      <h3 className={style.alert}> {drugsCardiac.warningCardiac}</h3>
      <div className={style.sec}>
        <div className={style.cardA}>
          <h4>{drugsCardiac.adrenaline.name}</h4>
          <p>{drugsCardiac.dose} {(weight * 10).toFixed(2)} µg</p>
          <p>{drugsCardiac.adrenaline.preparation}</p>
          <p>{drugsCardiac.administer} {(weight / 10).toFixed(1)} ml</p>
          <ChildOfWeight />
        </div>
        <div className={style.cardB}>
          <h4>{drugsCardiac.amiodarone.name}</h4>
          <p>{drugsCardiac.dose} {(weight * 5).toFixed(2)} mg</p>
          <p>{drugsCardiac.amiodarone.preparation}</p>
          <p>{drugsCardiac.administer} {(weight * 1).toFixed(1)} ml</p>
          <ChildOfWeight />
        </div>
      </div>
      <div className={style.sec}>
        <div className={style.cardC}>
          <h4>{drugsCardiac.atropine.name}</h4>
          <p>{drugsCardiac.dose} {weight >= 5 ? ((weight * 2) / 100).toFixed(2) : 0.1} mg</p>
          <p>{drugsCardiac.atropine.preparation}</p>
          <p>{drugsCardiac.administer} {weight >= 5 ? (weight / 10).toFixed(2) : 0.5} ml</p>
          <ChildOfWeight />
        </div>
        <div className={style.cardD}>
          <h4>{drugsCardiac.defibrillation.name}</h4>
          <p>{drugsCardiac.dose} - {(weight * 4).toFixed(2)} J</p>
          <ChildOfWeight />
        </div>
      </div>
    </div>
  );
};
export default Card;
