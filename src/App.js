import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuOption from './components/MenuOption/MenuOption';
import Button from './components/Button/Button';
import Weight from './components/Weight/Weight';
import Card from './components/Cards/Card';
import Otherdrugs from './components/Otherdrugs/Otherdrugs';
import Information from './components/Information/Information';
import Store from './states/Store'


function App() {
  
  return (
    <Store>
    <div className='App'>
    <Information />
    <Header />
    <MenuOption/>
    <Weight/>
    <Button  />
    <Card/>
    <Otherdrugs/>
    </div>
    </Store>
  );
}
export default App;
