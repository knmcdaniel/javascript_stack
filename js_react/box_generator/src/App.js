import './App.css';
import React, { useState } from 'react';
import BoxGenerator from './components/BoxGenerator';
import BoxForm from './components/BoxForm';

function App() {

  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="content">
      <BoxForm boxColorArray= { boxColorArray } setBoxColorArray= { setBoxColorArray }/>
      <BoxGenerator boxColorArray = {boxColorArray} />
    </div>
  );
}

export default App;
