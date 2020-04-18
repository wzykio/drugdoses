/* import React, { useState, useContext } from "react";
import style from "./KgLbs.module.css";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import UnitsContext from "../../states/UnitsContext";

const KgLbs = () => {
  const { units, setUnits } = useContext(UnitsContext);

  const [activelbs, setActivelbs] = useState(false);
  const [activeKg, setKg] = useState(true);


  const selectlbs = () => {
    setActivelbs(true);
    setKg(false);
    setUnits("0.45");
  };
  const selectKg = () => {
    setKg(true);
    setActivelbs(false);
    setUnits("1");
  };

  return (
    <div className={style.wrapper}>
      <label
        style={{ borderRadius: "4px 0 0 4px" }}
        className={classNames({
          [style.button]: true,
          [style.inactive]: !activeKg,
        })}
      >
        <FaCheck />
        <p>kg</p>
        <input id="kgRadio"
          type="radio"
          checked={activeKg} onChange={() => setUnits("1")}
        />
      </label>

      <label
        style={{ borderRadius: "0 4px 4px 0" }}
        className={classNames({
          [style.button]: true,
          [style.inactive]: !activelbs,
        })}
      >
        <FaCheck />
        <p>lbs</p>
        <input id="lbsRadio"
          type="radio"
          checked={activelbs} onChange={() => setUnits("0.45")}
        />
      </label>
    </div>
  );
};
export default KgLbs;*/

import React, { useState, useContext } from "react";
import style from "./KgLbs.module.css";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import UnitsContext from "../../states/UnitsContext";

const KgLbs = () => {
  const { units, setUnits } = useContext(UnitsContext);

 return (
    <div className={style.wrapper}>
      {units}
 
      <label for kgRadio>kg</label>
        <input id="kgRadio"
          type="radio"
          name="radioButton"
          value="kg"
         onChange={() => setUnits("1")}
        />

<label for lbsRadio>lbs</label>
        <input id="lbsRadio"
          type="radio"
          name="radioButton"  
          value="lbs"
          onChange={() => setUnits("0.45")}
        />
        
    </div>
     
  );
  
};
export default KgLbs;