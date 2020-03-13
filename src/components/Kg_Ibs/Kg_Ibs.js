import React, { useState } from "react";
import style from "./Kg_Ibs.module.css";
import { FaCheck } from "react-icons/fa";
const Kg_Ibs = () => {
  const [activeIbs, setActiveIbs] = useState(false);
  const [activeKg, setKg] = useState(true);
  const selectIbs = () => {
    setActiveIbs(true);
    setKg(false);
  };
  const selectKg = () => {
    setKg(true);
    setActiveIbs(false);
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

      <label className={activeIbs ? style.button : style.buttonUnactive}>
        <FaCheck
          className={activeIbs ? style.checkedIcon : style.checkedIconUnactive}
        />
        <p>Ibs</p>
        <input type="radio" checked={activeIbs} onChange={selectIbs} />
      </label>
    </div>
  );
};
export default Kg_Ibs;
