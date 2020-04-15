import React from "react";

const lang = {
  pl: {
    header: {
      top: "Dawki leków u dzieci",
    },
  },
  en: {
    header: {
      top: "Drug doses...",
    },
  },
};
const LangContext = React.createContext(lang.pl);
export default LangContext;
