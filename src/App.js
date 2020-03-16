import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";
import Card from "./components/Cards/Card";
import Kglbs from "./components/Kg_lbs/Kg_lbs";
import Menu from "./components/Menu/Menu";

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
      <Kglbs />
      <Card weight={finalweight} />
      
    </div>
  );
}
export default App;
