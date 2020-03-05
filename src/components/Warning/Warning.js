import React from "react";
import style from "./Warning.module.css";

const Warning = () => {
  return (
    <div className={style.warningBlock}>
      <h1 className={style.warnHeader}>UWAGA! Używaj tylko jako POMOC !!!</h1>
      <p>
        Każdy pacjent to indywidualna sytuacja. Farmakoterapie i jej dawki
        powinny być weryfikowane pod względem każdego pacjenta.
      </p>
    </div>
  );
};

export default Warning;
