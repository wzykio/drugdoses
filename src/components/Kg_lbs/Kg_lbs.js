import React, { useState } from "react";
import style from "./Kg_lbs.module.css";
import classNames from 'classnames';
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
    <div className={style.wrapper}>
      <label 
       style={{borderRadius: '4px 0 0 4px'}}
       className={classNames({
          [style.button] : true,
          [style.inactive] : !activeKg
        })}
      >
        <FaCheck />
        <p>kg</p>
        <input type="radio" checked={activeKg} onChange={selectKg} />
      </label>

      <label
       style={{borderRadius: '0 4px 4px 0'}}
       className={classNames({
          [style.button] : true,
          [style.inactive] : !activelbs
        })}
      >
        <FaCheck />
        <p>lbs</p>
        <input type="radio" checked={activelbs} onChange={selectlbs} />
      </label>
    </div>
  );
};
export default Kg_lbs;
