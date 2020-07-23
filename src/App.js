import React from 'react';
import './App.css';
import Index from "./components/Index";
import Functional from "./components/Functional"
import Arrow from "./components/Arrow";
function App() {
  return (
    <div className="App">


        <Index name="sontus" age="22"></Index>
      <Index name="bimal" age="22"></Index>

      <hr/>

   <Functional  name="sontus" age="22" ></Functional>
      <Functional  name="bimal" age="20" ></Functional>
      <hr/>
        <Arrow/>






    </div>
  );
}

export default App;
