import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";
import Card from "./components/Cards/Card";
import KgLbs from "./components/KgLbs/KgLbs";
import Menu from "./components/Menu/Menu";
import Otherdrugs from './components/Otherdrugs/Otherdrugs'

function App() {
  const [finalweight, setFinalweight] = useState(null);
  const addWeight = finalweight => {
    setFinalweight(finalweight);
  };

  return (
    <div className="App">
      <Header />
      <Menu />
      <Button />
      <Weight get={addWeight} />
      <KgLbs />
      <Card weight={finalweight} />
      <Otherdrugs />
    </div>
  );
}
export default App;
