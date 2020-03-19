import React, { useState,useEffect } from "react";
import style from "./Button.module.css";
import classNames from 'classnames';
import { FaCheck } from "react-icons/fa";
const Button = ({getCat}) => {
  const [activeEnyDoses, setActiveEnyDoses] = useState(false);
  const [activeResuscytationDoses, setresuscytationDoses] = useState(true);
  const [active,setActive]=useState(true)
  useEffect(getCat.bind(true, active));
  const selectEnyDoses = () => {
    setActiveEnyDoses(true);
    setresuscytationDoses(false);
    setActive(false);
  };
  const selectResuscytationDoses = () => {
    setresuscytationDoses(true);
    setActiveEnyDoses(false);
    setActive(true);
  };

  return (
    <div className={style.wrapper}>
      <label
        // style={{borderRadius: '4px 0 0 4px'}}
        className={classNames({
          [style.button] : true,
          [style.inactive] : !activeResuscytationDoses
        })}
      >
        <FaCheck />
        <p>Zatrzymanie krążenia</p>
        <input
          type="radio"
          checked={activeResuscytationDoses}
          onChange={selectResuscytationDoses}
        />
      </label>

      <label
        // style={{borderRadius: '0 4px 4px 0'}}
        className={classNames({
          [style.button] : true,
          [style.inactive] : activeResuscytationDoses
        })}
      >
        <FaCheck />
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
