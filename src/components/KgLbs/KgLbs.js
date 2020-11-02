import React, { useState, useContext } from "react";
import style from "./KgLbs.module.css";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { StoreContext, supportedSettings } from "../../states/Store";
import { setItemStorage } from '../../helpers/handleStorage';

const KgLbs = () => {
  const [store, dispath] = useContext(StoreContext);

  const [activelbs, setActivelbs] = useState(store.units !== 1);
  const [activeKg, setKg] = useState(store.units === 1);

  const selectlbs = () => {
    setActivelbs(true);
    setKg(false);
    setItemStorage(supportedSettings.unit.storageKey, 0.45);
    dispath({ type: "CHANGE_UNITS_LBS" });
  };
  const selectKg = () => {
    setKg(true);
    setActivelbs(false);
    setItemStorage(supportedSettings.unit.storageKey, 1);
    dispath({ type: "CHANGE_UNITS_KG" });
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
        <input type="radio" checked={activeKg} onChange={selectKg} />
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
        <input type="radio" checked={activelbs} onChange={selectlbs} />
      </label>
    </div>
  );
};
export default KgLbs;
