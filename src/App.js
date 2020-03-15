import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Warning from "./components/Information/Information";
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";
import Card from "./components/Cards/Card";
import Kg_lbs from "./components/Kg_lbs/Kg_lbs";
import Menu from "./components/Menu/Menu";

function App() {
  const [finalweight, setFinalweight] = useState(null);
  const addWeight = finalweight => {
    setFinalweight(finalweight);
  };

  return (
    <div className="App">
      <Header />
      <Warning />
      <Button />
      <Weight get={addWeight} />
      <Kg_lbs />
      <Card weight={finalweight} />
      <Menu />
    </div>
  );
}
export default App;
