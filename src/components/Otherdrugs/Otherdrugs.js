import React, { useContext } from 'react';
import style from './Otherdrugs.module.css';
import { StoreContext } from '../../states/Store';
import { lang } from '../../states/localization/index';

const Otherdrugs = () => {
  const [state, ] = useContext(StoreContext);
  const { units, showEny: viewEny, langu } = state;
  const { drugsOther } = lang[langu];
  let weight = state.weight * units;

  // const round = (number) => Math.round(number * 100) / 100;

  return (
    <div className={viewEny ? style.otherdrugsWrapper : style.unvisible}>
      <div className={style.otherdrugsItemAdrenalina}>
        <span className={style.adrenalina}>
          <h2>Adrenalina</h2>
        </span>
        <span className={style.wstrzas}>
          Wstrząs anafilaktyczny:
          <br />
          <br />
          500 µg im
        </span>
        <span className={style.napadastmy}>
          Napad astmy:
          <br />
          <br />
          {round(weight / 100)} mg - 1 amp. do 10 ml 0.9% NaCl.
          <br />
          Podać {round(weight / 10)} ml s.c.{" "}
        </span>
        <h2>{drugsOther.adrenaline.drugName}</h2>
        <p>{drugsOther.adrenaline.anaphylaxis}</p>
        <p>
          {drugsOther.adrenaline.asthma}: {(weight / 100).toFixed(2)} mg -{' '}
          {drugsOther.adrenaline.asthmaPreparation}.{' '}
          {drugsOther.administer} {(weight / 10).toFixed(2)} ml s.c.{' '}
        </p>
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
      </div>

      <div className={style.otherdrugsItemDeksametazon}>
        <span className={style.deksametazon}>
          <h2>Deksametazon</h2>
        </span>
        <span className={style.anafilaksja}>
          Anafilaksja:
          <br /> <br />4 mg - 8mg iv
        </span>
        <span className={style.astma}>
          Astma:
          <br /> <br />4 mg - 8mg iv
        </span>
        <span className={style.zapaleniekrtani}>
          Zapalenie krtani:
          <br /> <br />
          {(0.15 * weight).toFixed(2)} mg iv
        </span>
      </div>
      
      <div className={style.otherdrugsItemDexaven}>
        <h2>{drugsOther.dexamethasone.drugName}</h2>
        <p>{drugsOther.dexamethasone.anaphylaxis}</p>
        <p>{drugsOther.dexamethasone.asthma}</p>
        <p>
          {drugsOther.dexamethasone.laryngitis}{' '}
          {(0.15 * weight).toFixed(1)} mg i.v.
        </p>
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
      </div>

      <div className={style.otherdrugsItemFlumazenil}>
        <h2>{drugsOther.flumazenil.drugName}</h2>
        <p>
          {drugsOther.dose} {(10 * weight).toFixed(2)} i.v./i.o µg.{' '}
          {drugsOther.flumazenil.doseDetails}
        </p>
        <p>{drugsOther.flumazenil.administration}</p>
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
      </div>

      <div className={style.otherdrugsItemParacetamol}>
        <h2>{drugsOther.paracetamol.drugName}</h2>
        <p>
          {drugsOther.dose} {(weight * 10).toFixed(2)} mg p.r.
        </p>
      </div>
    </div>
  );
};
export default Otherdrugs;
