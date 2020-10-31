import React, { createContext, useReducer } from 'react';
import { getItemStorage, setItemStorage } from '../helpers/handleStorage';

export const StoreContext = createContext({});

export const supportedSettings = {
  unit: {
    storageKey: 'drugdose-unit',
    values: ['1', '0.45'],
    defaultValue: 1,
  },
  language: {
    storageKey: 'drugdose-language',
    values: ['pl', 'en'],
    get defaultValue() {
      const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
      const language = this.values.includes(browserLanguage)
        ? browserLanguage
        : 'en';
      return language;
    },
  },
};

const setInitialSettingValues = (setting) => {
  const { storageKey, values, defaultValue } = supportedSettings[setting];
  const storageData = getItemStorage(storageKey);
  if (storageData === null) {
    return defaultValue;
  }
  if (values.includes(storageData)) {
    return storageData;
  } else {
    const correctValue = defaultValue;
    setItemStorage(storageKey, correctValue);
    return correctValue;
  }
};

const initialState = {
  weight: 1,
  inputweight: null,
  showEny: false,
  showCard: true,
  showMenuOption: false,
  openMenu: false,
  menuOption: '',
  units: parseFloat(setInitialSettingValues('unit')),
  langu: setInitialSettingValues('language'),
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ONE':
      return { ...state, weight: state.weight + 1 };
    case 'MINUS_ONE':
      return { ...state, weight: state.weight - 1 };
    case 'ADD_FIVE':
      return { ...state, weight: state.weight + 5 };
    case 'MINUS_FIVE':
      return { ...state, weight: state.weight - 5 };
    case 'ZERO':
      return { ...state, weight: 0 };
    case 'ADD_HANDLE':
      return { ...state, weight: action.payload };
    case 'CHANGE_ACTIVE_ENY':
      return { ...state, showEny: true, showCard: false };
    case 'CHANGE_ACTIVE_RES':
      return { ...state, showCard: true, showEny: false };
    case 'TOGGLE_MENU':
      return { ...state, openMenu: !state.openMenu };
    case 'OPEN_MENU_OPTION':
      return { ...state, showMenuOption: true };
    case 'CLOSE_MENU_OPTION':
      return { ...state, showMenuOption: false };
    case 'OPEN_SETTINGS':
      return { ...state, menuOption: 'settings' };
    case 'OPEN_LEGAL':
      return { ...state, menuOption: 'legal' };
    case 'OPEN_ABOUT':
      return { ...state, menuOption: 'about' };
    case 'OPEN_LEGEND':
      return { ...state, menuOption: 'legend' };
    case 'CHANGE_UNITS_KG':
      return { ...state, units: 1 };
    case 'CHANGE_UNITS_LBS':
      return { ...state, units: 0.45 };
    case 'CHANGE_LANGUAGE':
      return { ...state, langu: action.payload };

    default:
      throw new Error('error');
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
