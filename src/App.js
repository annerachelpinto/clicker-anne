import React, { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const AddCount =()=>{
    setCounter(counter+1)
  }
  const SubCount =()=>{
    setCounter(counter-1)
  }
  const ResetCount =()=>{
    setCounter(0)
  }
  return (
    <div className="App">
      <div className="count">{counter}</div>
      <div>
        <button className="btn green" onClick = {()=>AddCount()}>+</button>
        <button className="btn yellow"  onClick = {()=>ResetCount()}>Reset</button>
        <button className="btn red" onClick = {()=>SubCount()}>-</button>
      </div>
    </div>
  );
}

export default App;
