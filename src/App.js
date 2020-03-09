import React  from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Warning from "./components/Warning/Warning";
import Button from "./components/Button/Button";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Warning />
      <Button/>
    </div>
  );
}
export default App;
