import React, { useState, useEffect } from "react";
import style from "./Weight.module.css";
import classNames from 'classnames';

const Weight = ({ get }) => {
  let [weight, setWeight] = useState(1)
  useEffect(get.bind(null, weight));
  
  useEffect(() => {
    if(weight < 1){
      setWeight(1)
      alert("Waga nie może być ujemna!");
    };
  },[weight]);
  
  const chandleChangeInput = e => {
    setWeight(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <h3>Waga dziecka : </h3>
      <div className={style.buttons}>
        <button className={style.buttonB} onClick={()=>setWeight(Number(weight) - 5)}>
          -5kg
        </button>
        <button className={style.buttonA} onClick={()=>setWeight(Number(weight) - 1)}>
          -1kg
        </button>
        <input
          placeholder="Kg"
          value={weight}
          onChange={chandleChangeInput}
        ></input>
        <button className={style.buttonA} onClick={()=>setWeight(Number(weight) + 1)}>
          +1kg
        </button>
        <button className={style.buttonB} onClick={()=>setWeight(Number(weight) + 5)}>
          +5kg
        </button>
        
      </div>
    </div>
  );
};

export default Weight;
