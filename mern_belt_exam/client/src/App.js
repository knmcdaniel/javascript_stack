import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import View from './views/View';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <Create path="/pet/create"/>
        <Update path="/pet/:id/edit"/>
        <View path="/pet/:id" />
      </Router>
    </div>
  );
}

export default App;
