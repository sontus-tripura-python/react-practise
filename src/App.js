import React from 'react';
import './App.css';
import Index from "./components/Index";
import Functional from "./components/Functional"
function App() {
  return (
    <div className="App">


        <Index name="sontus" age="22"></Index>
      <Index name="bimal" age="22"></Index>
      <Index name="narindra" age="22"></Index>
      <Index name="birondra" age="22"></Index>
      <Index name="Ranjit" age="22"></Index>


   <Functional  name="sontus" age="22" ></Functional>
      <Functional  name="bimal" age="20" ></Functional>
      <Functional  name="narindra" age="24" ></Functional>
      <Functional  name="Ranjit" age="22" ></Functional>






    </div>
  );
}

export default App;
