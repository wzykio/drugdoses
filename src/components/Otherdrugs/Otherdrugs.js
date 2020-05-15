import React, { useContext } from 'react';
import style from './Otherdrugs.module.css';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Otherdrugs = () => {
  const [state, dispatch] = useContext(StoreContext);
  const { units, showEny: viewEny, langu } = state;
  const { drugsOther } = lang[langu];
  let weight = state.weight * units;

  const round = (number) => Math.round(number * 100) / 100;

  return (
    <div className={viewEny ? style.otherdrugsWrapper : style.unvisible}>
      <div className={style.otherdrugsItemAdrenalina}>
        <h2>{drugsOther.adrenaline.drugName}</h2>
        <p>{drugsOther.adrenaline.anaphylaxis}</p>
        <p>
          {drugsOther.adrenaline.asthma}: {round(weight / 100)} mg -{' '}
          {drugsOther.adrenaline.asthmaPreparation}.{' '}
          {drugsOther.administer} {round(weight / 10)} ml s.c.{' '}
        </p>
      </div>

      <div className={style.otherdrugsItemAdenozyna}>
        <h2>{drugsOther.adenosine.drugName}</h2>
        <p>{drugsOther.adenosine.preparation}</p>
        <p>
          {drugsOther.adenosine.dose1} {round(weight / 10)} mg i.v.
          - {round(weight / 10)} ml{' '}
        </p>
        <p>
          {drugsOther.adenosine.dose2} {(weight / 10) * 2} mg i.v. -{' '}
          {(weight / 10) * 2} ml
        </p>
      </div>

      <div className={style.otherdrugsItemDexaven}>
        <h2>{drugsOther.dexamethasone.drugName}</h2>
        <p>{drugsOther.dexamethasone.anaphylaxis}</p>
        <p>{drugsOther.dexamethasone.asthma}</p>
        <p>
          {drugsOther.dexamethasone.laryngitis}{' '}
          {(0.15 * weight).toFixed(2)} mg i.v.
        </p>
      </div>

      <div className={style.otherdrugsItemDiazepam}>
        <h2>{drugsOther.diazepam.drugName}</h2>
        <p>
          {drugsOther.dose} {(0.25 * weight).toFixed(2)} mg
          i.v./i.o.{' '}
        </p>
        <p>
          {drugsOther.diazepam.administration}{' '}
          {(0.05 * weight).toFixed(2)} ml
        </p>
        <div className={style.alert}>
          {drugsOther.diazepam.alert}
        </div>
      </div>

      <div className={style.otherdrugsItemFlumazenil}>
        <h2>{drugsOther.flumazenil.drugName}</h2>
        <p>
          {drugsOther.dose} {10 * weight} i.v./i.o µg.{' '}
          {drugsOther.flumazenil.doseDetails}
        </p>
        <p>{drugsOther.flumazenil.administration}</p>
      </div>

      <div className={style.otherdrugsItemHydrocortison}>
        <h2>{drugsOther.hydrocortisone.drugName}</h2>
        <p>
          {drugsOther.dose} {weight * 5} mg
        </p>
        <p>{drugsOther.hydrocortisone.preparation}</p>
        <p>
          {drugsOther.administer} {weight} ml i.v./i.o.
        </p>
      </div>

      <div className={style.otherdrugsItemMagnez}>
        <h2>{drugsOther.magnesium.drugName}</h2>
        <p>
          {drugsOther.dose} {weight * 40} mg
        </p>
        <p>
          {drugsOther.magnesium.administration} {(weight * 2) / 10}{' '}
          ml i.v/i.o.
        </p>
      </div>

      <div className={style.otherdrugsItemMorfina}>
        <h2>{drugsOther.morphine.drugName}</h2>
        <p>
          {drugsOther.dose} {round(weight / 10)} mg
        </p>
        <p>{drugsOther.morphine.preparation}</p>
        <p>
          {drugsOther.administer} {round(weight / 10)} ml i.v/i.o.
        </p>
      </div>

      <div className={style.otherdrugsItemParacetamol}>
        <h2>{drugsOther.paracetamol.drugName}</h2>
        <p>
          {drugsOther.dose} {weight * 10} mg p.r.
        </p>
      </div>
    </div>
  );
};
export default Otherdrugs;
