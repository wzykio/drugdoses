import React, { useContext } from 'react';
import style from './Otherdrugs.module.css';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';
import {ChildOfWeight} from '../ChildOfWeight/ChildOfWeight'

const Otherdrugs = () => {
  const [state, ] = useContext(StoreContext);
  const { units, showEny: viewEny, langu } = state;
  const { drugsOther } = lang[langu];
  let weight = state.weight * units;

  return (
    <div className={viewEny ? style.otherdrugsWrapper : style.invisible}>
      <div className={style.otherdrugsItemAdrenalina}>
        <span className={style.adrenalina}>
          <h2>{drugsOther.adrenaline.drugName}</h2>
        </span>
        <span className={style.wstrzas}>
          {drugsOther.adrenaline.anaphylaxis}:
          <br />
          <br />
          500 µg im
        </span>
        <span className={style.napadastmy}>
          {drugsOther.adrenaline.asthma}:
          <br />
          <br />
          {(weight / 100).toFixed(2)} mg -{' '}
          {drugsOther.adrenaline.asthmaPreparation}.{' '}
          <br />
          {drugsOther.administer} {(weight / 10).toFixed(2)} ml s.c.{' '}
        </span>
        <span style={{gridArea: "bottom"}}>
          <ChildOfWeight />
        </span>
      </div>

      <div className={style.otherdrugsItemAdenozyna}>
        <h2>{drugsOther.adenosine.drugName}</h2>
        <p>{drugsOther.adenosine.preparation}</p>
        <p>
          {drugsOther.adenosine.dose1} {(weight / 10).toFixed(2)} mg i.v.
          - {(weight / 10).toFixed(2)} ml{' '}
        </p>
        <p>
          {drugsOther.adenosine.dose2} {((weight / 10) * 2).toFixed(2)} mg i.v. -{' '}
          {((weight / 10) * 2).toFixed(2)} ml
        </p>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemDeksametazon}>
        <span className={style.deksametazon}>
        <h2>{drugsOther.dexamethasone.drugName}</h2>
        </span>
        <span className={style.anafilaksja}>
          {drugsOther.dexamethasone.anaphylaxis}:
          <br /> <br />4 mg - 8mg i.v.
        </span>
        <span className={style.astma}>
          {drugsOther.dexamethasone.asthma}:
          <br /> <br />4 mg - 8mg i.v.
        </span>
        <span className={style.zapaleniekrtani}>
          {drugsOther.dexamethasone.laryngitis}:
          <br /> <br />
          {(0.15 * weight).toFixed(2)} mg i.v.
        </span>
        <span className={style.gridBottom}>
          <ChildOfWeight />
        </span>
      </div>

      <div className={style.otherdrugsItemDiazepam}>
        <h2>{drugsOther.diazepam.drugName}</h2>
        <p>
          {drugsOther.dose} {(0.25 * weight).toFixed(1)} mg
          i.v./i.o.{' '}
        </p>
        <p>
          {drugsOther.diazepam.administration}{' '}
          {(0.05 * weight).toFixed(1)} ml
        </p>
        <div className={style.alert}>
          {drugsOther.diazepam.alert}
        </div>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemFlumazenil}>
        <h2>{drugsOther.flumazenil.drugName}</h2>
        <p>
          {drugsOther.dose} {(10 * weight).toFixed(2)} i.v./i.o µg.{' '}
          {drugsOther.flumazenil.doseDetails}
        </p>
        <p>{drugsOther.flumazenil.administration}</p>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemHydrocortison}>
        <h2>{drugsOther.hydrocortisone.drugName}</h2>
        <p>
          {drugsOther.dose} {(weight * 5).toFixed(2)} mg
        </p>
        <p>{drugsOther.hydrocortisone.preparation}</p>
        <p>
          {drugsOther.administer} {weight.toFixed(2)} ml i.v./i.o.
        </p>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemMagnez}>
        <h2>{drugsOther.magnesium.drugName}</h2>
        <p>
          {drugsOther.dose} {(weight * 40).toFixed(2)} mg
        </p>
        <p>
          {drugsOther.magnesium.administration} {((weight * 2) / 10).toFixed(2)}{' '}
          ml i.v/i.o.
        </p>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemMorfina}>
        <h2>{drugsOther.morphine.drugName}</h2>
        <p>
          {drugsOther.dose} {(weight / 10).toFixed(2)} mg
        </p>
        <p>{drugsOther.morphine.preparation}</p>
        <p>
          {drugsOther.administer} {(weight / 10).toFixed(2)} ml i.v/i.o.
        </p>
        <ChildOfWeight />
      </div>

      <div className={style.otherdrugsItemParacetamol}>
        <h2>{drugsOther.paracetamol.drugName}</h2>
        <p>
          {drugsOther.dose} {(weight * 10).toFixed(2)} mg p.r.
        </p>
        <ChildOfWeight />
      </div>
    </div>
  );
};
export default Otherdrugs;
