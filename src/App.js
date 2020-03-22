import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";
import Card from "./components/Cards/Card";
import KgLbs from "./components/KgLbs/KgLbs";
import Menu from "./components/Menu/Menu";
import Otherdrugs from './components/Otherdrugs/Otherdrugs'
import Information from './components/Information/Information'

function App() {
  const [finalweight, setFinalweight] = useState(null);
  const addWeight = finalweight => {
    setFinalweight(finalweight);
  };
  const [showCategory , setShowCategory] = useState(true)
  const getCategory = showCategory => {
    setShowCategory(showCategory);
  };
  return (
    <div className="App">
     <Information />
      <Header />
      <Button getCat={getCategory} />
      <Weight get={addWeight} />
      <KgLbs />
      <Card weight={finalweight} view={showCategory}/>
      <Otherdrugs weight={finalweight} view={showCategory}/>
    </div>
  );
}
export default App;
