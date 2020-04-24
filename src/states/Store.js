import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  weight: 1,
  inputweight: null,
  showEny: false,
  showCard: true,
  showMenuOption: false,
  openMenu: false,
  menuOption: "",
  units: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ONE":
      return { ...state, weight: state.weight + 1 };
    case "MINUS_ONE":
      return { ...state, weight: state.weight - 1 };
    case "ADD_FIVE":
      return { ...state, weight: state.weight + 5 };
    case "MINUS_FIVE":
      return { ...state, weight: state.weight - 5 };
    case "ZERO":
      return { ...state, weight: 0 };
    case "ADD_HANDLE":
      return { ...state, weight: action.payload };
    case "CHANGE_ACTIVE_ENY":
      return { ...state, showEny: true, showCard: false };
    case "CHANGE_ACTIVE_RES":
      return { ...state, showCard: true, showEny: false };
    case "OPEN_MENU":
      return { ...state, openMenu: !state.openMenu };
    case "OPEN_MENU_OPTION":
      return { ...state, showMenuOption: true };
    case "CLOSE_MENU_OPTION":
      return { ...state, showMenuOption: false };
    case "OPEN_SETTINGS":
      return { ...state, menuOption: "settings" };
    case "OPEN_LEGAL":
      return { ...state, menuOption: "legal" };
    case "OPEN_ABOUT":
      return { ...state, menuOption: "about" };
    case "OPEN_LEGEND":
      return { ...state, menuOption: "legend" };
    case "CHANGE_UNITS_KG":
      return { ...state, units: 1 };
    case "CHANGE_UNITS_LBS":
      return { ...state, units: 0.45 };

    default:
      throw new Error("error");
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
