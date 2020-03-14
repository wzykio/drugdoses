import React, { useState } from "react";
import style from "./Kg_lbs.module.css";
import { FaCheck } from "react-icons/fa";
const Kg_lbs = () => {
  const [activelbs, setActivelbs] = useState(false);
  const [activeKg, setKg] = useState(true);
  const selectlbs = () => {
    setActivelbs(true);
    setKg(false);
  };
  const selectKg = () => {
    setKg(true);
    setActivelbs(false);
  };
  return (
    <div className={style.buttonWrapper}>
      <label className={activeKg ? style.button : style.buttonUnactive}>
        <FaCheck
          className={activeKg ? style.checkedIcon : style.checkedIconUnactive}
        />
        <p>kg</p>
        <input type="radio" checked={activeKg} onChange={selectKg} />
      </label>

      <label className={activelbs ? style.button : style.buttonUnactive}>
        <FaCheck
          className={activelbs ? style.checkedIcon : style.checkedIconUnactive}
        />
        <p>lbs</p>
        <input type="radio" checked={activelbs} onChange={selectlbs} />
      </label>
    </div>
  );
};
export default Kg_lbs;
