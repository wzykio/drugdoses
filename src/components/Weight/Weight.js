import React, { useState, useEffect, useContext } from "react";
import style from "./Weight.module.css";
import AlertBox from "./AlertBox/AlertBox";
import { StoreContext } from "../../states/Store";
import { lang } from "../../states/localization/index";

const Weight = () => {
  const [state, dispatch] = useContext(StoreContext);
  const { units, langu } = state;
  const { heading } = lang[langu].weight;
 
  let u = "";
  units === 1 ? (u = "kg") : (u = "lbs");
  let [alertVisible, setAlertVisibility] = useState(false);

  useEffect(() => {
    if (state.weight < 0) {
      dispatch({ type: "ZERO" });
      setAlertVisibility(true);
    }
  }, [dispatch, state.weight]);

  const checkWeight = () => {
    if (state.weight >= 0) {
      setAlertVisibility(false);
    }
  };

  const chandleChangeInput = (e) => {
    e.target.value <= 0
      ? dispatch({ type: "ZERO" })
      : dispatch({ type: "ADD_HANDLE", payload: Number(e.target.value) });
  };

  return (
    <div className={style.wrapper}>
      <h3>{heading}</h3>
      <div className={style.buttons}>
        <button
          className={style.buttonB}
          onClick={() => {
            dispatch({ type: "MINUS_FIVE" });
            checkWeight(state.weight);
          }}
        >
          -5{u}
        </button>
        <button
          className={style.buttonA}
          onClick={() => {
            dispatch({ type: "MINUS_ONE" });
            checkWeight(state.weight);
          }}
        >
          -1{u}
        </button>
        <input
          placeholder="Kg"
          value={state.weight}
          onChange={chandleChangeInput}
          type="number"
        ></input>
        <button
          className={style.buttonA}
          onClick={() => {
            dispatch({ type: "ADD_ONE" });
            checkWeight(state.weight);
          }}
        >
          +1{u}
        </button>
        <button
          className={style.buttonB}
          onClick={() => {
            dispatch({ type: "ADD_FIVE" });
            checkWeight(state.weight);
          }}
        >
          +5{u}
        </button>
      </div>
      {alertVisible ? <AlertBox /> : ""}
    </div>
  );
};

export default Weight;
