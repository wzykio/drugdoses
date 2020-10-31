const testLocalStorage = () => {
  try {
    const temporaryKey = 'drugdose-testing';
    localStorage.setItem(temporaryKey, 'drugdose');
    localStorage.removeItem(temporaryKey);
    return true;
  } catch(e) {
    return false;
  }
}

export const getItemStorage = (key) => {
  if ( testLocalStorage() ) return localStorage.getItem(key);
  return null
}

export const setItemStorage = (key, value) => {
  testLocalStorage() && localStorage.setItem(key, value);
}