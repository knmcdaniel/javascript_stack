import React from 'react';
import { Router } from '@reach/router';
import Main from './views/main';
import Detail from './views/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product/" />
        <Detail path="/product/:id"/>
      </Router>
    </div>
  );
}

export default App;
