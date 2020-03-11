import React, { useState } from "react";
import style from "./Weight.module.css";

const Weight = () => {
  let [weight, setWeight] = useState(1);
  const minusOne = () => {
    if (weight >= 1) {
      const numMinusOne = Number(weight);
      setWeight(numMinusOne - 1);
    } else {
      alert("Waga nie może być ujemna!");
    }
  };
  const minusFive = () => {
    if (weight >= 5) {
      const numMinusFive = Number(weight);
      setWeight(numMinusFive - 5);
    } else {
      alert("Waga nie może być ujemna!");
    }
  };

  const plusOne = () => {
    const numPlusOne = Number(weight);
    setWeight(numPlusOne + 1);
  };
  const plusFive = () => {
    const numPlusFive = Number(weight);
    setWeight(numPlusFive + 5);
  };
  const chandleChangeInput = e => {
    setWeight(e.target.value);
  };
  return (
    <div className={style.weightWrapper}>
      <h1>Waga dziecka : </h1>
      <div className={style.buttons}>
        <button className={style.weightButton} onClick={minusOne}>
          -1kg
        </button>
        <button className={style.weightButton} onClick={minusFive}>
          -5kg
        </button>
        <input
          className={style.weightInput}
          placeholder="Kg"
          value={weight}
          onChange={chandleChangeInput}
        ></input>
        <button className={style.weightButton} onClick={plusOne}>
          +1kg
        </button>
        <button className={style.weightButton} onClick={plusFive}>
          +5kg
        </button>
      </div>
    </div>
  );
};

export default Weight;
