import React, { useState, useEffect } from "react";
import style from "./Weight.module.css";

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
    <div className={style.weightWrapper}>
      <h1>Waga dziecka : </h1>
      <div className={style.buttons}>
        <button className={style.weightButton} onClick={()=>setWeight(Number(weight) - 1)}>
          -1kg
        </button>
        <button className={style.weightButton} onClick={()=>setWeight(Number(weight) - 5)}>
          -5kg
        </button>
        <input
          className={style.weightInput}
          placeholder="Kg"
          value={weight}
          onChange={chandleChangeInput}
        ></input>
        <button className={style.weightButton} onClick={()=>setWeight(Number(weight) + 1)}>
          +1kg
        </button>
        <button className={style.weightButton} onClick={()=>setWeight(Number(weight) + 5)}>
          +5kg
        </button>
        
      </div>
    </div>
  );
};

export default Weight;
