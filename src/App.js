import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuOption from './components/MenuOption/MenuOption';
import Button from './components/Button/Button';
import Weight from './components/Weight/Weight';
import Card from './components/Cards/Card';
import Otherdrugs from './components/Otherdrugs/Otherdrugs';
import Information from './components/Information/Information';


function App() {
  const [finalweight, setFinalweight] = useState(null);
  const addWeight = (finalweight) => {
    setFinalweight(finalweight);
  };
  const [showCategory, setShowCategory] = useState(true);
  const getCategory = (showCategory) => {
    setShowCategory(showCategory);
  };

  const [showMenuOption, setShowMenuOption] = useState(false);
  const handleMenuOption = (showMenuOption) => {
    setShowMenuOption(showMenuOption);
  };

  return (
    <div className='App'>
      <Information />
    <Header openMenuOption={handleMenuOption} />
      {showMenuOption ? (
        <MenuOption handleClose={handleMenuOption} openedOption={showMenuOption} />
      ) : null}
      <Button getCat={getCategory} />
      <Weight get={addWeight} />
      <Card weight={finalweight} view={showCategory} />
      <Otherdrugs weight={finalweight} view={showCategory} />
    </div>
  );
}
export default App;
