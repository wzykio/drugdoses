import React, { useContext } from "react";
import { StoreContext } from "../../states/Store";
import { lang } from '../../states/localization/index';

export const ChildOfWeight = () => {
  const [state, ] = useContext(StoreContext);
  const { units, langu, weight } = state;
  const { drugsCardiac } = lang[langu];
  let usedUnits = units === 1 ? "kg" : "lbs";
  let otherUnits = units !== 1 ? "kg" : "lbs";
  let otherWeight = (weight * (units === 1 ? 2.2 : 0.45));
  let roundedOtherWeight = (otherWeight.toFixed(1))/1;

  return (<p>{drugsCardiac.childOfWeight}:<br /><strong>{weight} {usedUnits} ({roundedOtherWeight} {otherUnits})</strong></p>)
};