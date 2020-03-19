import React from "react";
import style from "./Otherdrugs.module.css";

const Otherdrugs = () => {
  return (
    <div className={style.otherdrugsWrapper}>
      <div className={style.otherdrugsItemAdrenalina}>
        <h2>Adrenalina</h2>
        <p>Wstrząs anafilaktyczny: 500 µg im</p>
        <p>Napad astmy: 10 µg/kg iv</p>
        <p>Droga podania : iv io</p>
      </div>

      <div className={style.otherdrugsItemAdenozyna}>
        <h2>Adenozyna</h2>
        <p>I dawka 100 µg/kg</p>
        <p> II dawka i kolejne 200 µg/kg </p>
        <p>Droga podania : iv</p>
      </div>

      <div className={style.otherdrugsItemDexaven}>
        <h2>Dexaven</h2>
        <p>Dawka: Wstrząs nafilaktyczny: 2mg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemDiazepam}>
        <h2>Diazepamum</h2>
        <p>Dawka: 150-300 µg/kg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemFentanyl}>
        <h2>Fentanyl</h2>
        <p>Dawka: 1-3 µg/kg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemFlumazenil}>
        <h2>Flumazenil</h2>
        <p>Dawka: 10 µg/kg Można powtarzać co 60s max 200 µg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemHydrocortison}>
        <h2>Hydrocortison</h2>
        <p>Dawka: 4-8 mg/kg</p>
        <p>Droga podania : iv io</p>
      </div>

      <div className={style.otherdrugsItemMetoclopramid}>
        <h2>Metoclopramid</h2>
        <p>Dawka: 0,15 mg/kg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemMorfina}>
        <h2>Morfina</h2>
        <p>Dawka:100 µg/kg</p>
        <p>Droga podania : iv io</p>
      </div>
      <div className={style.otherdrugsItemParacetamol}>
        <h2>Paracetamol</h2>
        <p>Dawka:100 µg/kg</p>
        <p>Droga podania : iv io</p>
      </div>
    </div>
  );
};
export default Otherdrugs;
