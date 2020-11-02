import React, { useContext } from "react";
import { StoreContext } from "../../states/Store";
import { lang } from '../../states/localization/index';

export const ChildOfWeight = () => {
  const [state, ] = useContext(StoreContext);
  const { units, langu } = state;
  const { drugsCardiac } = lang[langu];
  let u = units === 1 ? "kg" : "lbs";
  let otheru = units !== 1 ? "kg" : "lbs";
  let otherweight = state.weight * (units === 1 ? 2.2: 0.45);

  return (<p>{drugsCardiac.childOfWeight}:<br /><strong>{state.weight} {u} ({otherweight} {otheru})</strong></p>)
};