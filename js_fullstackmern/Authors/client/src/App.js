import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/author/create"/>
        <Update path="/author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
