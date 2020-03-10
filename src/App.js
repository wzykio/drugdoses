import React  from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Warning from './components/Warning/Warning';
import Button from "./components/Button/Button";
import Weight from "./components/Weight/Weight";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Warning/>
      <Button />
      <Weight />
    </div>
  );
}
export default App;
