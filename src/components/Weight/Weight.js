import React, { useState, useEffect, useContext } from "react";
import style from "./Weight.module.css";
import AlertBox from "./AlertBox/AlertBox";
import { StoreContext } from "../../states/Store";

const Weight = () => {
  const [state, dispatch] = useContext(StoreContext);
  let [alertVisible, setAlertVisibility] = useState(false);

  useEffect(() => {
    if (state.weight < 0) {
      dispatch({ type: "ZERO" });
      setAlertVisibility(true);
    }
  }, [dispatch,state.weight]);

  const checkWeight = () => {
    if (state.weight >= 0) {
      setAlertVisibility(false);
    }
  };

  const chandleChangeInput = (e) => {
    e.target.value <= 0
      ? dispatch({ type: "ZERO" })
      : dispatch({ type: "ADD_HANDLE", 
      payload:Number(e.target.value)});
  };

  return (
    <div className={style.wrapper}>
      <h3>Waga dziecka : </h3>
      <div className={style.buttons}>
        <button
          className={style.buttonB}
          onClick={() => {
            dispatch({ type: "MINUS_FIVE" });
            checkWeight(state.weight);
          }}
        >
          -5kg
        </button>
        <button
          className={style.buttonA}
          onClick={() => {
            dispatch({ type: "MINUS_ONE" });
            checkWeight(state.weight);
          }}
        >
          -1kg
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
          +1kg
        </button>
        <button
          className={style.buttonB}
          onClick={() => {
            dispatch({ type: "ADD_FIVE" });
            checkWeight(state.weight);
          }}
        >
          +5kg
        </button>
      </div>
      {alertVisible ? <AlertBox /> : ""}
    </div>
  );
};

export default Weight;
