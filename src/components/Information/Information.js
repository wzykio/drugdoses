import React, { useState } from "react";
import style from "./Information.module.css";

const Information = () => {

  const [warningVisability, setWarningVisability] = useState(true)

  return (
    <div className={warningVisability ? style.information : style.hidden}>
      <h1 className={style.header}>UWAGA!</h1>
      <h2 className={style.header2}> Używaj tylko jako POMOC !!!</h2>
      <p className={style.body}>
        Każdy pacjent to indywidualna sytuacja. Farmakoterapia i jej dawki
        powinny być weryfikowane indywidualnie pod względem każdego pacjenta.
      </p>
      <button onClick={()=>setWarningVisability(false)}>Rozumiem <br></br> Biorę odpowiedzialność za dobór dawek</button>
    </div>
  );
};

export default Information;
