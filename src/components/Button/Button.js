import React, { useState } from "react";
import style from "./Button.module.css";
import { FaCheck } from "react-icons/fa";
const Button = () => {
  const [activeEnyDoses, setActiveEnyDoses] = useState(false);
  const [activeResuscytationDoses, setresuscytationDoses] = useState(true);
  const selectEnyDoses = () => {
    setActiveEnyDoses(true);
    setresuscytationDoses(false);
  };
  const selectResuscytationDoses = () => {
    setresuscytationDoses(true);
    setActiveEnyDoses(false);
  };

  return (
    <div className={style.buttonWrapper}>
      <label
        className={
          activeResuscytationDoses ? style.button : style.buttonUnactive
        }
      >
        <FaCheck
          className={
            activeResuscytationDoses
              ? style.checkedIcon
              : style.checkedIconUnactive
          }
        />
        <p>Zatrzymanie krążenia</p>
        <input
          type="radio"
          checked={activeResuscytationDoses}
          onChange={selectResuscytationDoses}
        />
      </label>

      <label className={activeEnyDoses ? style.button : style.buttonUnactive}>
        <FaCheck
          className={
            activeEnyDoses ? style.checkedIcon : style.checkedIconUnactive
          }
        />
        <p>Leki w innych przypadkach</p>
        <input
          type="radio"
          checked={activeEnyDoses}
          onChange={selectEnyDoses}
        />
      </label>
    </div>
  );
};
export default Button;
