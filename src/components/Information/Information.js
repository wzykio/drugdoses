import React from "react";
import style from "./Information.module.css";

const Information = () => {
  return (
    <div className={style.information}>
      <h1 className={style.header}>UWAGA! Używaj tylko jako POMOC !!!</h1>
      <p className={style.body}>
        Każdy pacjent to indywidualna sytuacja. Farmakoterapie i jej dawki
        powinny być weryfikowane indywidualnie pod względem każdego pacjenta.
      </p>
    </div>
  );
};

export default Information;
