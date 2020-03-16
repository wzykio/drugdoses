import React, { useState, useEffect } from "react";
import style from "./Weight.module.css";
import AlertBox from "../AlertBox/AlertBox";

const Weight = ({ get }) => {
  let [weight, setWeight] = useState(1);
  useEffect(get.bind(null, weight));
  let showAlert = false;

  const minusOne = () => {
    if (weight >= 1) {
      const numMinusOne = Number(weight);
      setWeight(numMinusOne - 1);
    } else {
      showAlert = true;
    }
  };
  const minusFive = () => {
    if (weight >= 5) {
      const numMinusFive = Number(weight);
      setWeight(numMinusFive - 5);
    } else {
      showAlert = true;
    }
  };

  const plusOne = () => {
    if (weight >= -1) {
      const numPlusOne = Number(weight);
      setWeight(numPlusOne + 1);
      showAlert = false;
    }
  };
  const plusFive = () => {
    if (weight >= -5) {
    const numPlusFive = Number(weight);
    setWeight(numPlusFive + 5);
    showAlert=false;
  }
};
const chandleChangeInput = e => {
  setWeight(e.target.value);
};

return (
  <div className={style.wrapper}>
    <h3>Waga dziecka : </h3>
    <div className={style.buttons}>
      <button
        className={style.buttonB}
        onClick={() => setWeight(Number(weight) - 5)}
      >
        -5kg
        </button>
      <button
        className={style.buttonA}
        onClick={() => setWeight(Number(weight) - 1)}
      >
        -1kg
        </button>
      <input
        placeholder="Kg"
        value={weight}
        onChange={chandleChangeInput}
        type="number"
      ></input>
      <button
        className={style.buttonA}
        onClick={() => setWeight(Number(weight) + 1)}
      >
        +1kg
        </button>
      <button
        className={style.buttonB}
        onClick={() => setWeight(Number(weight) + 5)}
      >
        +5kg
        </button>
    </div>
    {showAlert ===true &&
    <AlertBox/>
    }
  </div>
);
};

export default Weight;
