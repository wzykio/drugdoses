import React from "react";

let myUnit='lbs';
const units = {
  kg: 1,
  lbs: 0.45,
};

const UnitsContext = React.createContext(
  myUnit === "kg" ? units.kg : units.lbs
);
export default UnitsContext;
