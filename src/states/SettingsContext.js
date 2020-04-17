import React from "react";

let settings = {
  language: "pl", // pl | en
  units: "kg", // kg | lbs
  card: "inne_leki", // zatrzymanie_krazenia | inne_leki
  waga: 1, // waga dziecka
};

const SetingsContext = React.createContext();
export default SetingsContext;
